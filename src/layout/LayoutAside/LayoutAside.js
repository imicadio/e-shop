import React from "react";
import classNames from "classnames";

const LayoutAside = (props) => {  
  const { aside, content, refAside, customClassAside, customClassContent } = props;  

  const classNameAside = classNames(
    "column is-3 is-hidden-touch is-hidden-desktop-only position-inherit",
    customClassAside
  );
  const classNameContent = classNames("column is-9", customClassContent);

  return (
    <div className="main-content columns position-inherit">
      <div ref={refAside} className={classNameAside}>
        {aside}
      </div>
      <div className={classNameContent}>{content}</div>
    </div>
  );
};

export default LayoutAside;
