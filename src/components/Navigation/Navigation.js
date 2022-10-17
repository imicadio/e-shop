import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Container from "../../layout/Container/Container";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";

import "react-toastify/dist/ReactToastify.css";
import "./Navigation.scss";
import { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } from "../../redux/slice/authSlice";

const Navigation = () => {
  const [userName, setUserName] = useState("");
  const navigation = useNavigate();

  const dispatch = useDispatch();

  // const location = useLocation();
  // const { pathname } = location;

  // console.log(pathname == '/');

  // const activeLink = (pathname === "/") ? "active navbar-item" : "";

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout suvvessfully.");
        navigation("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        // console.log(user.email)

        if (user.displayName == null) {
          const u1 = user.email.substring(0, user.email.indexOf('@'));
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setUserName(uName);
        } else {
          setUserName(user);
        }

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName,
            userId: user.uid,
          })
        );
      } else {
        setUserName("");
        dispatch(REMOVE_ACTIVE_USER())
      }
    });
  }, [dispatch, userName]);

  return (
    <div
      className="border-top border-bottom navbar-menu header__navigation"
      id="navbarMainMenu"
    >
      <ToastContainer />
      <Container customClass="px-3">
        <div className="navbar-start">
          <NavLink to="/" className="navbar-item" end>
            <i className="fa-solid fa-house-chimney text-color-red"></i>
          </NavLink>
          <NavLink to="/products" className="navbar-item">
            Products
          </NavLink>
          <div className="navbar-item">{userName}</div>
          <div type="button" className="navbar-item" onClick={logout}>
            Sign out
          </div>

          {/* <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link">More</Link>

            <div className="navbar-dropdown">
              <Link className="navbar-item">About</Link>
              <Link className="navbar-item">Jobs</Link>
              <Link className="navbar-item">Contact</Link>
              <hr className="navbar-divider" />
              <Link className="navbar-item">Report an issue</Link>
            </div>
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
