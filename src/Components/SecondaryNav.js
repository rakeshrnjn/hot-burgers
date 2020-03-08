import React from 'react';

import { SearchIcon, UserIcon, BasketIcon } from '../SVG/index';

const SecondaryNav = props => {
	return (
		<nav className="secondary-nav">
			<ul>
				<li>
					<a href="/#">
						<img src={SearchIcon} alt="search Icon" />
					</a>
				</li>
				<li>
					<a href="/#">
						<img src={UserIcon} alt="Profile Icon" />
					</a>
				</li>
				<li>
					<a href="/#">
						<img src={BasketIcon} alt="Shopping basket" />
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default SecondaryNav;
