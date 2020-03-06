import React from 'react';

const Card = props => {
	return (
		<div className="card">
			<img src={props.image} alt={props.Imagealt} className="card_image" />
			<h3 className="o-text-heading-3">{props.heading}</h3>
			<p className="card_description">{props.description}</p>
		</div>
	);
};

export default Card;
