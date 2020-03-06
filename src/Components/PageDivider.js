import React from 'react';

const PageDivider = props => {
    let className = `page-divider  ${props.classType ? props.classType : ''}`;
    return (
        <span className={className} />
    )
}

export default PageDivider;