import React from "react";
import classnames from "classnames";
import "./Search.scss";

const Search = ({
  customClass,
  children,
  wordEntered,
  handleSearch,
  handleClear,
  btnSearch
}) => {
  const cssStyle = classnames("is-relative", customClass);

  const renderClearButton =
    wordEntered.length > 0 ? (
      <button
        type="button"
        className="button search-clear"
        onClick={handleClear}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    ) : null;

  return (
    <div className={cssStyle}>
      <div className="control full-width is-flex is-flex-direction-row">
        <input
          className="input"
          type="text"
          placeholder="Find a repository"
          onChange={handleSearch}
          value={wordEntered}
        />
        {renderClearButton}
      </div>
      {btnSearch ? (
        <div className="control">
          <button type="button" className="button is-primary">
            <i className="fa-solid fa-magnifying-glass"></i>
            <span className="has-text-weight-semibold ml-2 is-hidden-touch">
              Search
            </span>
          </button>
        </div>
      ) : null}

      {children}

      {/* {renderSearchResults} */}
    </div>
  );
};

export default Search;
