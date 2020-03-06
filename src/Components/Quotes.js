import React from 'react';

import { QuoteIcon } from '../SVG/index';

const Quotes = props => {
	return (
		<div className="quotes">
			<img className="quotes_image" src={QuoteIcon} alt="Quote Icon" />
			<p className="quotes_description">{props.description}</p>
			<p className="quotes_author">{props.author}</p>
			<p className="quotes_author_designation">{props.designation}</p>
		</div>
	);
};

export default Quotes;
