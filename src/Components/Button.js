import React from 'react';

const Button = props => {
	return <button className={props.class} onClick={props.handel || null} >{props.text || 'Click'}</button>;
};

export default Button;
