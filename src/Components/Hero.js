import React from 'react';
import Button from './Button';

const Hero = props => {
	return (
		<div className="item_wrapper">
			<div className="image">
				<img src={props.image} alt={props.imagealt} />
			</div>
			<div className="copy">
				<h2 className="o-text-heading">{props.heading}</h2>
				<p className="description">{props.description}</p>
				<Button classN="o-btn-primary" text={props.buttonText} />
			</div>
		</div>
	);
};

export default  Hero;
