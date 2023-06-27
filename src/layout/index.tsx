// @ts-nocheck

import Router from 'preact-router';

import { About, Home } from '../pages';
import { Header } from '../components';

/**
 * Layout
 *
 * @return {React.ReactElement}
 */
function Layout() {
	return (
		<>
			<Header />
			<Router>
				<Home path="/" />
				<About path="/about" />
			</Router>
		</>
	);
}

export default Layout;
