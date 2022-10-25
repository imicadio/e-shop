import React, { useCallback, useState } from "react";

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

const AccordionFilter = ({ items, title, handleSelect, name }) => {
  const [expanded, setExpanded] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);

  const handleChange = (panel) => (event, isExpanded) =>
    setExpanded(isExpanded ? panel : false);

  const handleCheckbox = (e) => {
    const value = e.target.value;
    const valueIndex = checkedItems.indexOf(value);

    if (valueIndex >= 0) {
      setCheckedItems(checkedItems.filter((element) => element !== value));
      return handleSelect(name, checkedItems.filter((element) => element !== value));
    } else {
      setCheckedItems([...checkedItems, value]);
      return handleSelect(name, [...checkedItems, value]);
    }
  };

  const renderBrands =
    items ? (
      <FormGroup>
        {items.map((item, id) => (
          <FormControlLabel
            key={id}
            control={<Checkbox value={item} onClick={handleCheckbox} />}
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
