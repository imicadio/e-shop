import React from "react";
import LinkTo from "../LinkTo/LinkTo";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import classNames from "classnames";

const Breadcrumbs = ({ customClass }) => {
  const breadcrumbs = useBreadcrumbs();
  const cssStyles = classNames(customClass);

  return (
    <div className={cssStyles}>
      {breadcrumbs.map(({ breadcrumb, match }, index) => (
        <p key={match.pathname} className="is-inline-block">
          <LinkTo link={match.pathname}>{breadcrumb}</LinkTo>
          {index !== breadcrumbs.length - 1 && (
            <i className="fa-solid fa-angle-right mx-2"></i>
          )}
        </p>
      ))}
    </div>
  );
};

export default Breadcrumbs;
