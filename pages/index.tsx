import styled from "styled-components";

export default () => (
	<div>
		//@ts-ignore
		<Container>
			<h1>Next.js + TS + Styled Components</h1>
		</Container>
	</div>
);

const Container: Object = styled.section`
	padding: 2rem;
`;
