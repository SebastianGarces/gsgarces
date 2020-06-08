import styled from "styled-components";

const Layout: React.FC = ({ children }) => {
	return (
		<Container>
			{children}
		</Container>
	);
};

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	overflow: hidden;
`

export default Layout;
