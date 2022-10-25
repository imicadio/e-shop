import React, { useEffect, useState } from "react";

import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./AccordionFilter.scss";

const AccordionFilter = ({ items, title, handleSelect, name, checkboxes }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) =>
    setExpanded(isExpanded ? panel : false);

  const handleCheckbox = (e) => {
    const value = e.target.value;
    const valueIndex = checkboxes.indexOf(value);    

    if (valueIndex >= 0) {
      return handleSelect(name, checkboxes.filter((element) => element !== value));
    } else {
      return handleSelect(name, [...checkboxes, value]);
    }
  };

  const renderBrands =
    items ? (
      <FormGroup>
        {items.map((item, id) => (
          <FormControlLabel
            key={id}
            control={<Checkbox value={item} checked={checkboxes.includes(item.toUpperCase())} onClick={handleCheckbox} />}
            label={item}
          />
        ))}
      </FormGroup>
    ) : null;

  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
      className="accordrion-wrapper wrapper-filter"
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <p className="title is-5">{title}</p>
      </AccordionSummary>
      <AccordionDetails className="accordrion__details-wrapper wrapper-filter-details">
        {renderBrands}
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionFilter;
