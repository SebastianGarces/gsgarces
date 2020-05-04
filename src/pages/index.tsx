import styled from "styled-components";

export const Home: React.FC = () => (
	<div>
		<Container>
			<h1>Next.js + TS + Styled Components</h1>
		</Container>
	</div>
);

const Container = styled.section`
	padding: 2rem;
`;

export default Home;
