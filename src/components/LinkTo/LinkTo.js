import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

const LinkTo = ({ customClass, link, text }) => {
  const cssStyle = classnames(customClass);

  return (
    <Link to={link} className={cssStyle}>
      {text}
    </Link>
  );
};

export default LinkTo;
