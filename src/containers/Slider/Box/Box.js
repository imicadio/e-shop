import React from 'react'
import BoxFullWidth from './BoxFullWidth/BoxFullWidth';
import BoxImages from './BoxImages/BoxImages';
import BoxSmall from './BoxSmall/BoxSmall';
import BoxStandard from './BoxStandard/BoxStandard';

const Box = ({ type, slide }) => {
  switch(type) {
    case "box-standard":
        return <BoxStandard slide={slide} />;
    case "box-small":    
        return <BoxSmall slide={slide} />;
    case "box-images":    
        return <BoxImages slide={slide} />;
    case "box-full-width":
        return <BoxFullWidth slide={slide} />;
    default:
        return null;
  }

}

export default Box