import { FunctionComponent } from 'react';

import Nav from './Nav';

const Layout: FunctionComponent = ({ children }) => {
	return (
		<>
			{children}
			<Nav />
		</>
	);
};

export default Layout;
