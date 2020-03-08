import React from 'react';

import { Card, Title } from './index';

import {
	PizzaImage,
	SandWichImage,
	SpaghettiImage,
	CupCakeImage,
	FriesImage,
	BurgerImage
} from '../Images/index';

const FoodMenu = props => {
	return (
		<div className="food-menu">
			<div className="container">
				<div className="wrapper">
					<div className="copy">
						<Title
							heading="Want To Eat?"
							description="Try our Most Delicious food and it usually take minutes to
							deliver!"
						/>
						<div className="card_wrapper">
							<Card
								image={BurgerImage}
								imagealt="Burger"
								description="Burger"
							/>
							<Card image={PizzaImage} imagealt="Pizza" description="Pizza" />
							<Card
								image={FriesImage}
								imagealt="Fast Food"
								description="Fast Food"
							/>
							<Card
								image={CupCakeImage}
								imagealt="Cupcake"
								description="Cupcake"
							/>
							<Card
								image={SandWichImage}
								imagealt="Sandwich"
								description="Sandwich"
							/>
							<Card
								image={SpaghettiImage}
								imagealt="spaghetti"
								description="spaghetti"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoodMenu;
