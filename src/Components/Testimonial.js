import React from 'react';

import Quotes from './Quotes';

const Testimonial = props => {
	return (
		<div className="item">
			<div className="image">
				<img src={props.image} alt={props.imagealt} />
			</div>
			<Quotes
				description={props.description}
				author={props.author}
				designation={props.designation}
			/>
		</div>
	);
};

export default Testimonial;
