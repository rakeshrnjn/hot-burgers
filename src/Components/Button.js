import React from 'react';

const Button = props => {
	return <Button className={props.classN} onClick={props.handel || null} >{props.text || 'Click'}</Button>;
};

export default Button;
