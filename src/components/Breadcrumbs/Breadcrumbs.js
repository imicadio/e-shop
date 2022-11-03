import React from "react";
import LinkTo from "../LinkTo/LinkTo";
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import classNames from "classnames";

const Breadcrumbs = ({ customClass }) => {
  const breadcrumbs = useBreadcrumbs();
  const cssStyles = classNames(customClass)


    console.log(breadcrumbs)

  return (
    <p className={cssStyles}>
      {breadcrumbs.map(({ breadcrumb, match }, index) => (
        <>
          <LinkTo key={match.pathname} link={match.pathname}>
            {breadcrumb}
          </LinkTo>
          {index !== breadcrumbs.length - 1 && <i class="fa-solid fa-angle-right mx-2"></i>}
        </>
      ))}
    </p>
  );
};

export default Breadcrumbs;
