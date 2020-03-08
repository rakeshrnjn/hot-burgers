import React from 'react';
import Slider from 'infinite-react-carousel';

import { Card } from '../Components/index';

import { MealIcon, ShippingIcon, BurgerIcon, ClockIcon } from '../SVG/index';

const Gallery = props => {
	const settings = {
		arrows: false,
		dots: true,
		initialSlide: 3,
		centerMode: true,
		slidesToShow: 4.5,
		className: 'card_wrapper',
		centerPadding: 30,
	};
	return (
		<div className="gallery">
			<div className="container">
				<div className="wrapper">
					<Slider {...settings}>
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
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
