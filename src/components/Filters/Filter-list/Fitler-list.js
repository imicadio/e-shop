import React from "react";

const FitlerList = ({ onClickGrid, hadleSearch }) => {
  return (
    <div className="columns my-1 box product-list__filter-container">
      <div className="column is-1 p-0">
        <button type="button" className="btn" onClick={() => onClickGrid(true)}>
          <i className="fa-solid fa-border-all"></i>
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => onClickGrid(false)}
        >
          <i className="fa-solid fa-list"></i>
        </button>
      </div>
      <div className="column py-0 field is-4">
        <div className="control is-small is-loading">
          <input className="input is-small" type="text" placeholder="Search" onChange={(e) => hadleSearch(e.target.value)} />
        </div>
      </div>

      {/* <div className="column is-6">
              <p>Sorted by:</p>
              <div class="dropdown is-active">
                <div class="dropdown-trigger">
                  <button
                    class="button"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu"
                  >
                    <span>Dropdown button</span>
                    <span class="icon is-small">
                      <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                  <div class="dropdown-content">
                    <a href="#" class="dropdown-item">
                      Dropdown item
                    </a>
                    <a class="dropdown-item">Other dropdown item</a>
                    <a href="#" class="dropdown-item is-active">
                      Active dropdown item
                    </a>
                    <a href="#" class="dropdown-item">
                      Other dropdown item
                    </a>
                    <hr class="dropdown-divider" />
                    <a href="#" class="dropdown-item">
                      With a divider
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
    </div>
  );
};

export default FitlerList;
