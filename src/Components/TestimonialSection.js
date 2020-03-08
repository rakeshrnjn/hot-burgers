import React from 'react';

import { Testimonial, Title } from './index';
import { WomanBurgerImage } from '../Images/index';

import Slider from 'infinite-react-carousel';

const TestimonialSection = props => {
	const settings = {
		arrows: false,
		arrowsBlock: false,
		dots: true,
		slidesToShow: 1,
		className: 'items'
	};

	return (
		<div className="testimonial">
			<div className="container">
				<div className="wrapper">
					<Title
						heading="Client Testimonials"
						description="Try our Most Delicious food and it usually take minutes to
							deliver!"
					/>
					<Slider {...settings}>
						<Testimonial
							image={WomanBurgerImage}
							imgalt="beautiful-young-healthy-woman-holds-tasty-big-burger-with-beef-cutlet-concept-nourishing-food"
							description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremque laudantium, totam rem aperiam, eaque
									ipsa quae ab illo inventore veritatis et quasi architecto
									beatae vitae dicta sunt explicabo."
							author="Nina Margaret"
							designation="CEO, Abc Company"
						/>
						<Testimonial
							image={WomanBurgerImage}
							imgalt="beautiful-young-healthy-woman-holds-tasty-big-burger-with-beef-cutlet-concept-nourishing-food"
							description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremque laudantium, totam rem aperiam, eaque
									ipsa quae ab illo inventore veritatis et quasi architecto
									beatae vitae dicta sunt explicabo."
							author="Nina Margaret"
							designation="CEO, Abc Company"
						/>
						<Testimonial
							image={WomanBurgerImage}
							imgalt="beautiful-young-healthy-woman-holds-tasty-big-burger-with-beef-cutlet-concept-nourishing-food"
							description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremque laudantium, totam rem aperiam, eaque
									ipsa quae ab illo inventore veritatis et quasi architecto
									beatae vitae dicta sunt explicabo."
							author="Nina Margaret"
							designation="CEO, Abc Company"
						/>
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default TestimonialSection;
