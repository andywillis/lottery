import Router from 'preact-router';

import { About, Home, Settings } from '../pages';
import { Header } from '../components';

/**
 * Layout
 *
 * @return {React.ReactElement}
 */
function Layout() {

	useTheme();

	return (
		<>
			<Header />
			<Router>
				<Home path="/" />
				<About path="/about" />
				<Settings path="/settings" />
			</Router>
		</>
	);
}

export default Layout;
