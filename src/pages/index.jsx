import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import colors from '../utils/colors'
import { useRouter } from 'next/router'

export default function HomePage() {
	const router = useRouter()

	return (
		<Container exit="exit" initial="initial" animate="animate">
			<HeroContainer>
				<HeadingWrapper>
					<LineWrapper>
						<Heading outlined>Software</Heading>
					</LineWrapper>
					<LineWrapper>
						<Heading>Engineer</Heading>
					</LineWrapper>
				</HeadingWrapper>
			</HeroContainer>

			<LineWrapper>
				<SubHeading>G. Sebastian Garces</SubHeading>
			</LineWrapper>
		</Container>
	)
}

const LineWrapper = styled.div`
	position: relative;
	width: 100%;
`

const Container = styled(motion.section)`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media (max-width: 1024px) {
		align-content: space-between;
	}
`

const HeroContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: fit-content;
	padding-top: 3.5vh;
	width: 65%;
	height: 60vh;

	@media (max-width: 1024px) {
		height: 55vh;
	}

	@media (max-width: 768px) {
		width: 100%;
		padding-top: 0;
	}
`

const HeadingWrapper = styled(motion.div)`
	position: relative;
	width: 100%;

	@media (max-width: 1024px) {
		position: static;
	}
`

const Heading = styled(motion.h1)`
	color: ${colors('text.white')};
	font-weight: 800;
	font-size: 120px;
	letter-spacing: -0.005em;
	line-height: 1.25;
	margin-left: 50%;

	@media (max-width: 1500px) {
		font-size: 160px;
	}

	@media (max-width: 1215px) {
		font-size: 68px;
	}

	@media (max-width: 1024px) {
		font-size: 120px;
		margin-left: 35%;
	}

	@media (max-width: 768px) {
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
	}

	@supports (font-size: clamp(94px, 10.5vw, 164px)) {
		font-size: clamp(94px, 10.5vw, 164px);

		@media (max-width: 1024px) {
			font-size: clamp(68px, 13.5vw, 164px);
		}

		@media (max-width: 768px) {
			margin-left: 0;
			text-align: end;
		}
	}

	${({ outlined }) =>
		outlined &&
		css`
			margin-left: 0;
			-webkit-text-stroke: 4px ${colors('text.white')};
			-webkit-text-fill-color: ${colors('text.primary')};

			@media (max-width: 768px) {
				text-align: start;
			}
			@media (max-width: 1024px) {
				margin-left: 0;
			}
		`}
`

const SubHeading = styled(motion.h2)`
	position: relative;
	width: fit-content;
	font-weight: 200;
	font-size: 64px;

	color: ${colors('text.white_light')};

	@media (max-width: 1500px) {
		font-size: 64px;
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
		font-size: 30px;
	}

	@supports (font-size: clamp(33px, 2.5vw, 64px)) {
		font-size: clamp(33px, 2.5vw, 64px);

		@media (max-width: 1024px) {
			font-size: clamp(30px, 4.5vw, 38px);
		}
	}
`
