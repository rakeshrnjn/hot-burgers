import React, { Component } from 'react';

import {Carousel, FoodMenu, Gallery, TestimonialSection, PageDivider} from '../Components/index';
import Header from './Header';



import '../SCSS/index.scss';

class Main extends Component {
	render() {
		return (
			<>
				<Header />
				<Carousel />
				<PageDivider classType="pd-one" />
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
