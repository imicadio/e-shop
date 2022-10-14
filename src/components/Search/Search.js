import React from "react";
import classnames from "classnames";

const Search = ({ customClass }) => {
  const cssStyle = classnames(customClass);

  return (
    <div className={cssStyle}>
      <div className="control full-width">
        <input className="input" type="text" placeholder="Find a repository" />
      </div>
      <div className="control">
        <a className="button is-primary">
          <i className="fa-solid fa-magnifying-glass"></i>
          <span className="has-text-weight-semibold ml-2 is-hidden-touch">
            Search
          </span>
        </a>
      </div>
    </div>
  );
};

export default Search;
