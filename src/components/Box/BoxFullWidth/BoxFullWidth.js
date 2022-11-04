import React from "react";

const BoxFullWidth = ({ slide }) => {

  return <img src={slide.thumbnail} alt={slide.id} className="full-width" />;
};

export default BoxFullWidth;
