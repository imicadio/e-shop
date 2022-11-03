import React from "react";
import classnames from "classnames";

import "./Container.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const CONTAINER_CLASS_NAME = "container";

const Container = ({ element, customClass, fluid, children, breadcrumbs }) => {
  const Marker = element || "div";
  const renderBreadcrumbs = breadcrumbs ? <Breadcrumbs customClass="mb-5" /> : null;

  const CSSclassName = classnames(CONTAINER_CLASS_NAME, customClass, {
    [`${CONTAINER_CLASS_NAME}--fluid`]: fluid,
  });

  return (
    <Marker className={CSSclassName}>
      {renderBreadcrumbs}
      {children}
    </Marker>
  );
};

export default Container;
