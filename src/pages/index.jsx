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
`
const HeadingContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: fit-content;
	margin-top: 3rem;
`

const Heading = styled(motion.h1)`
	font-size: clamp(86px, 5vw, 144px);
	color: ${colors('text.primary')};
	font-family: proxima-nova, sans-serif;
	font-weight: 700;
	font-style: normal;
`

const SubHeading = styled(motion.h2)`
	font-family: proxima-nova, sans-serif;
	font-weight: 700;
	font-style: normal;
	font-weight: 600;
	font-size: 2.75vw;
	color: ${colors('text.darker')};

	span {
		color: ${colors('primary')};
	}
`

export default Home
