import React, { Component } from 'react';

import Carousel from '../Components/Carousel';
import FoodMenu from '../Components/FoodMenu';
import Gallery from '../Components/Gallery';
import TestimonialSection from '../Components/TestimonialSection';
import PageDivider from '../Components/PageDivider';



import '../SCSS/index.scss';

class Main extends Component {
	render() {
		return (
			<>
				{/* <Carousel /> */}
				<FoodMenu />
				<PageDivider classType="pd-two" />
				<Gallery className="pd-two"/>
				<PageDivider classType="pd-three" />
				<TestimonialSection />
			</>
		);
	}
}

export default Main;
