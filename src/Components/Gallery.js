import React from 'react';

import Card from '../Components/Card';

import { MealIcon, ShippingIcon, BurgerIcon, ClockIcon } from '../SVG/index';

const Gallery = props => {
	return (
		<div className="gallery">
			<div className="container">
				<div className="wrapper">
					<div className="card_wrapper">
						<Card
							image={MealIcon}
							imagealt="Meal icon"
							heading="Best quality guarantee"
							description="We use only the best ingredients to cook the tasty fresh food
								for you."
						/>
						<Card
							image={ShippingIcon}
							imagealt="Shipping Icon"
							heading="30 minutes delivery"
							description="We use only the best ingredients to cook the tasty fresh food
								for you."
						/>
						<Card
							image={BurgerIcon}
							imagealt="Burger Icon"
							heading="Best quality guarantee"
							description="We use only the best ingredients to cook the tasty fresh food
								for you."
						/>
						<Card
							image={ClockIcon}
							imagealt="clock Icon"
							heading="Best quality guarantee"
							description="We use only the best ingredients to cook the tasty fresh food
								for you."
						/>
						<Card
							image={ClockIcon}
							imagealt="clock Icon"
							heading="Best quality guarantee"
							description="We use only the best ingredients to cook the tasty fresh food
								for you."
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
