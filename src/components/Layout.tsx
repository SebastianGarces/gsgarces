import Nav from './Nav';

const Layout: React.FC = ({ children }) => {
	return (
		<>
			{children}
			<Nav />
		</>
	);
};

export default Layout;
