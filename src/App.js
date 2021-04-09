import './App.css';
import { BrowserRouter, NavLink } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<nav className='navbar'>
					<div className='brand-title'>Brand name</div>
					<div className='navbar-links'>
						<ul>
							<li>
								<a>
									<NavLink activeClassName='is-active' exact={true} to='/'>
										Home
									</NavLink>
								</a>
							</li>
							<li>
								<a>
									<NavLink
										activeClassName='is-active'
										exact={true}
										to='/contact'
									>
										Contact
									</NavLink>
								</a>
							</li>
							<li>
								<a>
									<NavLink activeClassName='is-active' exact={true} to='/about'>
										About
									</NavLink>
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</BrowserRouter>
		</div>
	);
}

export default App;
