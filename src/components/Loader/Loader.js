import React from "react";
import "./Loader.scss";
import ReactDOM from "react-dom";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className="lds-wrapper">
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>,
    document.getElementById("loader")
  );
};

export default Loader;
