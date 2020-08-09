import styled from 'styled-components'
import { motion } from 'framer-motion'
import colors from '../utils/colors'
import { CircleGroup } from '../components/svg'

export const Home = () => (
	<Container>
		<ContentWrapper>
			<Hero>
				<HeadingWrapper>
					<Heading>Front &nbsp; End &nbsp; Developer</Heading>
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

	@media (max-width: 1024px) {
		align-content: space-between;
	}
`

const ContentWrapper = styled.div`
	height: fit-content;
	display: flex;
	width: 100%;

	@media (max-width: 1024px) {
		flex-direction: column;
		height: 100%;
		justify-content: space-between;
	}
`

const Hero = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: fit-content;
	padding-top: 3.5vh;
	width: 45%;
	height: 70vh;

	@media (max-width: 1024px) {
		height: min-content;
	}

	@media (max-width: 768px) {
		width: 100%;
		padding-top: 0;
	}
`

const HeadingWrapper = styled.div`
	position: absolute;
	width: max-content;

	@media (max-width: 1024px) {
		position: static;
		width: fit-content;
	}
`

const Heading = styled(motion.h1)`
	color: ${colors('text.diff')};
	font-weight: 800;
	font-size: 120px;
	letter-spacing: -0.085em;
	text-transform: uppercase;
	mix-blend-mode: difference;
	z-index: 5;

	@media (max-width: 1500px) {
		font-size: 98px;
	}

	@media (max-width: 1215px) {
		font-size: 68px;
	}

	@media (max-width: 1024px) {
		font-size: 120px;
		width: 70%;
	}

	@media (max-width: 768px) {
		width: 60%;
		font-size: 120px;
	}

	@media (max-width: 640px) {
		font-size: 100px;
	}

	@media (max-width: 530px) {
		font-size: 80px;
	}

	@media (max-width: 440px) {
		font-size: 54px;
		width: 60%;
	}

	@supports (font-size: clamp(54px, 6.5vw, 120px)) {
		font-size: clamp(54px, 6.5vw, 120px);

		@media (max-width: 1024px) {
			font-size: clamp(54px, 17vw, 100px);
		}
	}
`

const SubHeading = styled(motion.h2)`
	position: relative;
	width: fit-content;
	font-weight: 200;
	font-size: 48px;

	color: ${colors('text.primary')};

	@media (max-width: 1500px) {
		font-size: 48px;
	}

	@media (max-width: 1350px) {
		font-size: 42px;
	}

	@media (max-width: 1150px) {
		font-size: 38px;
	}

	@media (max-width: 767px) {
		font-size: 38px;
	}

	@media (max-width: 530px) {
		font-size: 28px;
	}

	@supports (font-size: clamp(33px, 2.5vw, 48px)) {
		font-size: clamp(33px, 2.5vw, 48px);

		@media (max-width: 1024px) {
			font-size: clamp(28px, 4.5vw, 38px);
		}
	}
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

	@media (min-width: 3200px) {
		padding: 2vw;
	}

	h2 {
		color: ${colors('text.white_light')};
		font-size: clamp(18px, 2vw, 38px);
		font-weight: 200;
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

	@media (max-width: 1024px) {
		background-color: transparent;
		height: min-content;
		width: 100%;
		padding: 0;

		h2 {
			color: ${colors('text.primary_lightest')};
			font-size: clamp(18px, 3vw, 30px);
			margin-bottom: 2rem;
		}

		button {
			width: 100%;
		}
	}
`

const Circles = styled.div`
	position: absolute;
	right: 0;
	top: 300%;

	@media (max-width: 1024px) {
		display: none;
	}

	svg {
		width: clamp(200px, 25vw, 400px);
		height: auto;
	}
`

export default Home
