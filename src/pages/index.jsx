import styled from "styled-components";

export const Home = () => (
	<div>
		<Container>
			<h1>Next.js + TS + Styled Components</h1>
		</Container>
	</div>
);

const Container = styled.section`
	padding: 2rem;
	border: 2px solid white;
	height: 100%;
`;

export default Home;
