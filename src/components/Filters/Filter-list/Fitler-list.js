import React from "react";

import {
  IconButton,
  MenuItem,
  FormControl,
  Select,
  TextField,
} from "@mui/material";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "./Filter-list.scss";
import { inputBetweenNumber } from "../../../hooks/numbers";

const FitlerList = ({
  onClickGrid,
  hadleSearch,
  itemsPerPage,
  handleItemsPerPage,
  currentPage,
  handleCurrentPage,
  totalPages
}) => {
  return (
    <div className="columns box product-list__filter-container">
      <div className="block mb-0 is-flex p-0 is-align-items-center">
        <button
          type="button"
          className="btn mr-2"
          onClick={() => onClickGrid(true)}
        >
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

      <div className="column is-flex is-justify-content-center is-align-items-center">
        <p>Items </p>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 50 }}>
          <Select
            value={itemsPerPage}
            onChange={(e) => handleItemsPerPage(e.target.value)}
            label="Items per page"
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={20}>25</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </FormControl>
        <p>of {totalPages} pages</p>
      </div>

      <div className="column is-6  py-0 mb-0 field column is-flex is-justify-content-center is-align-items-center">
        <div className="control is-small full-width">
          <input
            className="input is-small"
            type="text"
            placeholder="Search"
            onChange={(e) => hadleSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="block is-flex is-align-items-center is-justify-content-end">
        <IconButton aria-label="delete" size="small" onClick={() => currentPage > 1 && handleCurrentPage(currentPage - 1)}>
          <ArrowBackIosIcon fontSize="inherit" />
        </IconButton>
        <TextField
          id="standard-basic"
          className="is-flex is-align-items-center filter-input__search"
          variant="standard"
          value={currentPage}
          onChange={(e) => handleCurrentPage(inputBetweenNumber(e.target.value, totalPages))}
        />
        <IconButton aria-label="delete" size="small" onClick={() => currentPage < totalPages && handleCurrentPage(currentPage + 1)}>
          <ArrowForwardIosIcon fontSize="inherit" />
        </IconButton>
      </div>
    </div>
  );
};

export default FitlerList;
