import styled from 'styled-components'
import { motion } from 'framer-motion'
import colors from '../utils/colors'
import { CircleGroup } from '../components/svg'

export const Home = () => (
	<Container>
		<ContentWrapper>
			<Hero>
				<HeadingWrapper>
					<Heading>Front End Developer</Heading>
					<SubHeading>
						G. Sebastian Garces
						<Circles>
							<CircleGroup />
						</Circles>
					</SubHeading>
				</HeadingWrapper>
			</Hero>
			<AccentSquare>
				<h2>Bridging the gap between developers and designers</h2>
				<button>Projects</button>
			</AccentSquare>
		</ContentWrapper>
	</Container>
)

const Container = styled.section`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
`

const ContentWrapper = styled.div`
	position: relative;
	height: fit-content;
	display: flex;
	width: 100%;
`

const Hero = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: fit-content;
	padding-top: 3.5vh;
	width: 45%;
	height: 70vh;
`

const HeadingWrapper = styled.div`
	position: absolute;
	width: max-content;
`

const Heading = styled(motion.h1)`
	color: ${colors('text.diff')};
	font-weight: 800;
	font-size: clamp(54px, 5vw, 120px);
	letter-spacing: -0.085em;
	text-transform: uppercase;
	mix-blend-mode: difference;
	z-index: 5;
`

const SubHeading = styled(motion.h2)`
	position: relative;
	width: fit-content;
	font-weight: 200;
	font-size: clamp(33px, 2.5vw, 48px);
	color: ${colors('text.primary')};
`

const AccentSquare = styled.div`
	width: 55%;
	height: 70vh;
	background: ${colors('bg.dark')};
	border-radius: 20px;
	padding: 3vw 4vw;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	h2 {
		color: ${colors('text.white_light')};
		font-size: clamp(18px, 2vw, 48px);
		font-weight: 400;
		margin-bottom: 3rem;
	}

	button {
		background-color: ${colors('main.primary')};
		width: fit-content;
		padding: 1rem 4rem;
		border: none;
		border-radius: 5px;

		transition: background-color 150ms ease-in-out;

		color: ${colors('text.white')};
		font-size: 20px;
		font-weight: 600;
		text-transform: uppercase;
		cursor: pointer;

		&:hover,
		&:focus {
			background-color: ${colors('main.hover')};
			outline: none;
		}
	}
`

const Circles = styled.div`
	position: absolute;
	right: 0;
	top: 300%;

	svg {
		width: clamp(200px, 15vw, 400px);
		height: auto;
	}
`

export default Home
