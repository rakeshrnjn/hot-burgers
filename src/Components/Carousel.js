import React from 'react';
import Slider from 'infinite-react-carousel';

import { Hero } from './index';
import { HeroImage } from '../Images/index';

const Carousel = props => {
	const settings = {
		arrows: true,
		arrowsBlock: false,
		slidesToShow: 1,
		className: 'items'
	};
	return (
		<div className="carousel">
			<div className="container">
				<div className="wrapper">
					<Slider {...settings}>
						<Hero
							image={HeroImage}
							imagealt="Party Time"
							heading="Party Time"
							description="Buy any 2 burgers and get 1.5L Pepsi Free"
							buttonText="Order Now"
						/>
						<Hero
							image={HeroImage}
							imagealt="Hunger"
							heading="Hunger"
							description="Do you wanna remove the hunger?"
							buttonText="Let's Eat"
						/>
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
