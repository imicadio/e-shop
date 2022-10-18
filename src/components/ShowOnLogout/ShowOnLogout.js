import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/slice/authSlice";

const ShowOnLogout = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return children;
  }
  return null;
};

export default ShowOnLogout;
