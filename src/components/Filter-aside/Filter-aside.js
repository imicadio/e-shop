import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchBrands,
  fetchCategories,
  fetchMaxPrice,
  fetchMinPrice,
} from "../../redux/slice/filterSlice";

import { Slider } from "@mui/material";

import AccordionFilter from "../AccordionFilter/AccordionFilter";

import { FILTER_BY_CATEGORIES } from "../../redux/slice/filterSlice";
import { fetchProducts } from "../../redux/slice/listProductSlice";

const FilterAside = () => {
  const dispatch = useDispatch();

  const [price, setPrice] = useState([0, 10]);
  const [selectedFilter, setSelectedFilter] = useState({
    brand: [],
    category: [],
  });

  const products = useSelector(fetchProducts);
  const sliderMin = useSelector(fetchMinPrice);
  const sliderMax = useSelector(fetchMaxPrice);

  const brands = useSelector(fetchBrands);
  const categories = useSelector(fetchCategories);

  const handleSelect = (name, value) => {
    setSelectedFilter({
      ...selectedFilter,
      [name]: value,
    });
  };

  const handleChange = (event, newValue) => {
    setPrice(newValue);
  };

  useEffect(() => {
    if (!isNaN(sliderMin) && sliderMin && !isNaN(sliderMax) && sliderMax)
      setPrice([sliderMin, sliderMax]);
  }, [sliderMax, sliderMin]);

  useEffect(() => {
    dispatch(FILTER_BY_CATEGORIES({ products, filters: selectedFilter, price }))
  }, [selectedFilter, price]);

  return (
    <div>
      <AccordionFilter
        items={brands}
        handleSelect={handleSelect}
        title="Brands"
        name="brand"
      />
      <AccordionFilter
        items={categories}
        handleSelect={handleSelect}
        title="Categories"
        name="category"
      />

      <p className="title is-5 my-5">Price:</p>
      <Slider
        min={isNaN(sliderMin) ? 0 : sliderMin}
        max={isNaN(sliderMax) ? 0 : sliderMax}
        value={price}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
    </div>
  );
};

export default FilterAside;
