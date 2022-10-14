import React from 'react'
import classnames from 'classnames';

import './Container.scss';

const CONTAINER_CLASS_NAME = 'container';

const Container = ({
    element,
    customClass,
    fluid,
    children
}) => {
    const Marker = element || 'div';

    const CSSclassName = classnames(CONTAINER_CLASS_NAME, customClass, {
        [`${CONTAINER_CLASS_NAME}--fluid`]: fluid,
    });

    return (
        <Marker
            className={CSSclassName}
        >
            { children }
        </Marker>
    )
}

export default Container;
