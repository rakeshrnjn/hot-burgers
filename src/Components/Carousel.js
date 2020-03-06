import React from 'react';
import Hero from './Hero';
import { HeroImage } from '../Images/index';

const Carousel = props => {
	return (
		<div className="Carousel">
			<div className="container">
				<div className="wrapper">
					<div className="items">
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
