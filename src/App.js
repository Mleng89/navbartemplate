import './App.css';
import { useRef, useEffect } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import AllRoutes from './AllRoutes';
function App() {
	const navbarLinks = useRef(null);
	const handleNavBar = (e) => {
		// console.log('what is my navbarLinks', navbarLinks.current);
		navbarLinks.current.classList.toggle('menu-collapse');
	};
	const hideNav = () => {
		// console.log('this is inside hideNav function');
		if (!navbarLinks.current.classList.contains('menu-collapse'))
			navbarLinks.current.classList.add('menu-collapse');
	};

	return (
		<div className='App'>
			<BrowserRouter>
				<nav className='navbar'>
					<div className='brand-title'>Brand name</div>
					<button
						className='toggle-button'
						onClick={(e) => {
							handleNavBar(e);
						}}
					>
						<span className='bar'></span>
						<span className='bar'></span>
						<span className='bar'></span>
					</button>
					<div ref={navbarLinks} className='navbar-links menu-collapse'>
						<ul className='links-list'>
							<li className='nav-item'>
								<NavLink
									className='nav-link'
									activeClassName='is-active'
									exact={true}
									to='/'
								>
									Home
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									className='nav-link'
									activeClassName='is-active'
									exact={true}
									to='/contact'
								>
									Contact
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									className='nav-link'
									activeClassName='is-active'
									exact={true}
									to='/about'
								>
									About
								</NavLink>
							</li>
						</ul>
					</div>
				</nav>
				<div>
					<AllRoutes
						hideMenu={() => {
							hideNav();
						}}
					></AllRoutes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
