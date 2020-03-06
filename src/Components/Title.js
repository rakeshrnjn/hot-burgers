import React from 'react';

const Title = props => {
	return (
		<div className="copy">
			<h2 className="o-text-heading-2">{props.heading}</h2>
			<p className="description">
				{props.description}
			</p>
		</div>
	);
};

export default Title;
