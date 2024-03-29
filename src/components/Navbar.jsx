import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<div className='navbar'>
			<h2>Lighthouse-Central</h2>
			<div className='link-container'>
				<div className='link-container-child'>
					<Link to='/'> Home </Link>
				</div>
				<div className='link-container-child'>
					<Link to='/dashboard'> Dashboard </Link>
				</div>
			</div>
		</div>
	);
}