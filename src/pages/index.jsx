import styled from 'styled-components'
import { motion } from 'framer-motion'
import colors from '../utils/colors'

export const Home = () => (
	<div>
		<Container>
			<ContentContainer>
				<HeadingContainer>
					<Heading>Front End Developer</Heading>
					<SubHeading>
						G<span>.</span> Sebastian Garces
					</SubHeading>
				</HeadingContainer>
			</ContentContainer>
		</Container>
	</div>
)

const Container = styled.section`
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 2.5fr 2fr 3fr 1fr 1fr;
	grid-template-areas: '... content content content content ...';

	@media (max-width: 1024px) {
		grid-template-columns: 1rem 2.5fr 2fr 3fr 1fr 1rem;
	}
`

const ContentContainer = styled.div`
	grid-area: content;
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 0 auto;
	border: 1px solid red;
`
const HeadingContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	width: fit-content;
	margin-top: 3rem;

	border: 1px solid white;
`

const Heading = styled(motion.h1)`
	font-family: Roboto;
	font-size: clamp(86px, 5vw, 144px);
	font-weight: 700;
	color: ${colors('text.primary')};
`

const SubHeading = styled(motion.h3)`
	font-family: 'Playfair Display', serif;
	font-weight: 300;
	font-size: 2.75vw;
	color: ${colors('text.darker')};

	span {
		color: ${colors('primary')};
	}
`

export default Home
