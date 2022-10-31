import React from "react";
import classNames from "classnames";

import './LayoutAside.scss';

const LayoutAside = (props) => {  
  const { aside, content, refAside, customClassAside, customClassContent } = props;  

  const customClass = classNames("main-content columns position-inherit", {
    ['aside-mobile-visible']: !refAside
  })

  const classNameAside = classNames(
    "column is-3 position-inherit",
    customClassAside, {
      ['is-hidden-desktop-only']: refAside,
      ['is-hidden-touch']: refAside,
    }
  );
  const classNameContent = classNames("column is-9", customClassContent, {
    ['is-flex-1']: !refAside,
  });

  return (
    <div className={customClass}>
      <div ref={refAside} className={classNameAside}>
        {aside}
      </div>
      <div className={classNameContent}>{content}</div>
    </div>
  );
};

export default LayoutAside;
