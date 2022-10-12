import React from "react";
import classnames from "classnames";

const Button = ({ customClass, link, text }) => {
  const cssStyle = classnames(customClass);
  
  return (
    <div className={cssStyle}>
      <a href={ link } type="button" className="button is-primary">
        { text }
      </a>
    </div>
  );
};

export default Button;
