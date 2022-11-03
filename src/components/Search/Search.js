import React, { useState } from "react";
import classnames from "classnames";
import "./Search.scss";
import { useSelector } from "react-redux";
import { fetchProducts } from "../../redux/slice/listProductSlice";
import LinkTo from "../LinkTo/LinkTo";

const Search = ({ customClass }) => {
  const cssStyle = classnames("is-relative", customClass);
  const [wordEntered, setWordEntered] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const products = useSelector(fetchProducts);

  const handleSearch = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = products.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const handleClear = () => {
    setWordEntered("")
    setFilteredData([])
  }

  const renderSearchResults =
    filteredData.length > 0 ? (
      <div className="search-results border-wrapper" onClick={handleClear}>
        <div className="results">
          {filteredData.map((product) => (
            <LinkTo
              link={"/products/" + product.id}
              customClass="search-product__wrapper my-2"
              key={product.id}
            >
              <img
                className="search-product__img"
                src={product.thumbnail}
                alt={product.title}
              />
              <div className="">
                <h2>{product.title}</h2>
                <h3>{product.price}$</h3>
              </div>
            </LinkTo>
          ))}
        </div>
      </div>
    ) : null;

  const renderClearButton =
    filteredData.length > 0 ? (
      <button type="button" className="button search-clear" onClick={handleClear}>
        <i class="fa-solid fa-xmark"></i>
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
      <div className="control">
        <a className="button is-primary">
          <i className="fa-solid fa-magnifying-glass"></i>
          <span className="has-text-weight-semibold ml-2 is-hidden-touch">
            Search
          </span>
        </a>
      </div>

      {renderSearchResults}
    </div>
  );
};

export default Search;
