import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

const LinkTo = ({ customClass, link, children }) => {
  const cssStyle = classnames(customClass);

  return (
    <Link to={link} className={cssStyle}>
      {children}
    </Link>
  );
};

export default LinkTo;
