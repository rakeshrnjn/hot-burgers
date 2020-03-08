import React from 'react';
import { Nav, SecondaryNav } from '../Components/index';
import { BrandLogo } from '../Images/index';

const Header = props => {
	return (
		<header>
			<img alt="brand logo" src={BrandLogo} className="logo"/>
			<Nav />
			<SecondaryNav />
		</header>
	);
};

export default Header;
