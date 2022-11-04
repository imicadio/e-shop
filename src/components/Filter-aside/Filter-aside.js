import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchBrands,
  fetchCategories,
  fetchMaxPrice,
  fetchMinPrice,
  fetchSearch,
  FILTER_BY_SEARCH,
} from "../../redux/slice/filterSlice";

import { useScreen } from "../../hooks/useScreen";

import { Box, Stack, Slider } from "@mui/material";

import AccordionFilter from "../AccordionFilter/AccordionFilter";

import { FILTER_BY_CATEGORIES } from "../../redux/slice/filterSlice";
import { fetchProducts } from "../../redux/slice/listProductSlice";

import "./Filter-aside.scss";
import Search from "../Search/Search";

export const selectedFilterObject = {
  brand: [],
  category: [],
};

const FilterAside = ({ closeFilter }) => {
  const dispatch = useDispatch();

  const [wordEntered, setWordEntered] = useState("");
  const [showResetBtn, setShowResetBtn] = useState(false);
  const [price, setPrice] = useState([0, 10]);
  const [selectedFilter, setSelectedFilter] = useState(selectedFilterObject);

  const products = useSelector(fetchProducts);
  const sliderMin = useSelector(fetchMinPrice);
  const sliderMax = useSelector(fetchMaxPrice);

  const search = useSelector(fetchSearch);

  const brands = useSelector(fetchBrands);
  const categories = useSelector(fetchCategories);

  const { isTouch } = useScreen();

  const handleSelect = (name, value) => {
    setSelectedFilter({
      ...selectedFilter,
      [name]: value,
    });
  };

  const handleChange = (event, newValue) => {
    setPrice(newValue);
  };

  const handleClear = () => {
    setSelectedFilter({ ...selectedFilterObject });
    setPrice([sliderMin, sliderMax]);
    setShowResetBtn(false);
  };

  const handleSearch = (event) => {
    setWordEntered(event.target.value);
    dispatch(FILTER_BY_SEARCH({ search: event.target.value }))
  };

  const handleClearSearch = () => {
    setWordEntered("");
    dispatch(FILTER_BY_SEARCH({ search: "" }))
  };

  const searchRender = isTouch ? (
    <Search
      customClass="column is-6  py-0 mb-0 field column is-flex is-justify-content-center is-align-items-center"
      wordEntered={wordEntered}
      handleSearch={handleSearch}
      handleClear={handleClearSearch}
    />
  ) : null;

  const renderResetBtn = showResetBtn ? (
    <button
      type="button"
      className="button button-primary is-block ml-auto"
      onClick={handleClear}
    >
      <i className="fa-solid fa-xmark mr-2"></i>Clear all
    </button>
  ) : null;

  const renderCloseMobileBtn = isTouch ? (
    <button
      type="button"
      className="button button-primary is-block ml-auto border-none title is-5"
      onClick={() => closeFilter()}
    >
      <i className="fa-solid fa-xmark"></i>
    </button>
  ) : null;

  useEffect(() => {
    if (!isNaN(sliderMin) && sliderMin && !isNaN(sliderMax) && sliderMax)
      setPrice([sliderMin, sliderMax]);
  }, [sliderMax, sliderMin]);

  useEffect(() => {
    dispatch(
      FILTER_BY_CATEGORIES({ products, filters: selectedFilter, price })
    );
    const hasFilter = Object.values(selectedFilter).some((x) => x.length > 0);

    if (hasFilter) setShowResetBtn(true);
    else if (price[0] !== sliderMin || price[1] !== sliderMax)
      setShowResetBtn(true);
    else setShowResetBtn(false);
  }, [selectedFilter, price, search]);

  return (
    <div className="filter-aside__wrapper">
      {renderCloseMobileBtn}
      <p className="title is-4">
        <i className="fa-solid fa-bars-staggered mr-2"></i>Filter
      </p>
      {renderResetBtn}
      {searchRender}
      <AccordionFilter
        items={brands}
        handleSelect={handleSelect}
        title="Brands"
        name="brand"
        reset={showResetBtn}
        checkboxes={selectedFilter.brand}
      />
      <AccordionFilter
        items={categories}
        handleSelect={handleSelect}
        title="Categories"
        name="category"
        checkboxes={selectedFilter.category}
      />
      <Box>
        <p className="title is-5 my-5">Price</p>
        <Stack spacing={2} direction="row" alignItems="center" className="px-2">
          <Slider
            min={isNaN(sliderMin) ? 0 : sliderMin}
            max={isNaN(sliderMax) ? 0 : sliderMax}
            value={price}
            onChange={handleChange}
            valueLabelDisplay="auto"
          />
        </Stack>
      </Box>
    </div>
  );
};

export default FilterAside;
