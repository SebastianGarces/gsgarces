import styled from 'styled-components'
import colors from '../utils/colors'
import { motion } from 'framer-motion'

export default () => {
	const image = {
		initial: {
			scale: 1.5,
		},
		animate: {
			scale: 1,
			transition: {
				duration: 0.5,
			},
		},
	}

	return (
		<BackgroundGrid>
			<PrimaryImageContainer>
				<PrimaryImage variants={image} initial="initial" animate="animate" />
			</PrimaryImageContainer>
			<DarkGrayContainer>
				<DarkGray variants={image} initial="initial" animate="animate" />
			</DarkGrayContainer>
			<DarkGrayContainer2>
				<DarkGray2 variants={image} initial="initial" animate="animate" />
			</DarkGrayContainer2>
			<SecondaryImageContainer>
				<SecondaryImage variants={image} initial="initial" animate="animate" />
			</SecondaryImageContainer>
		</BackgroundGrid>
	)
}

const BackgroundGrid = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	z-index: -1;

	background: linear-gradient(0deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
		url('/white-wall.jpg');
	background-size: contain;
	background-position: bottom left;

	display: grid;
	grid-template-columns: 1fr 2.5fr 2fr 3fr 1fr 1fr;
	grid-template-rows: 4fr 1fr 1fr 3fr 1fr;
	grid-template-areas:
		'pimage pimage dgray  simage dgray2 dgray2'
		'pimage pimage dgray  simage dgray2 dgray2'
		'pimage pimage dgray  simage dgray2 dgray2'
		'pimage pimage ...... simage dgray2 dgray2'
		'...... linec  ...... simage dgray2 dgray2';

	@media (max-width: 1024px) {
		background-color: ${colors('bg.darker')};
		grid-template-columns: 2fr 1fr;
		grid-template-rows: 6fr 2fr;
		grid-template-areas:
			'pimage simage'
			'...... ......';
	}

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		grid-template-rows: 6fr 2fr;
		grid-template-areas:
			'pimage'
			'......';
	}
`

const PrimaryImageContainer = styled.div`
	grid-area: pimage;
	position: relative;
	overflow: hidden;
`

const PrimaryImage = styled(motion.div)`
	width: 100%;
	height: 100%;
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
		url('/blue-paint.jpg');
	background-size: cover;
	background-position: center;
`

const SecondaryImageContainer = styled.div`
	grid-area: simage;
	overflow: hidden;
`

const SecondaryImage = styled(motion.div)`
	width: 100%;
	height: 100%;
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
		url('/gradient-pattern.jpg');
	background-size: cover;
	background-position: center;
`

const DarkGrayContainer = styled.div`
	grid-area: dgray;
	overflow: hidden;
`

const DarkGray = styled(motion.div)`
	width: 100%;
	height: 100%;
	background-color: ${colors('bg.darker')};
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
		url('/red-wall.jpg');
	background-size: cover;
	background-position: center;
`

const DarkGrayContainer2 = styled.div`
	grid-area: dgray2;
	overflow: hidden;
`

const DarkGray2 = styled(motion.div)`
	width: 100%;
	height: 100%;
	background-color: ${colors('bg.darker')};
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
		url('/wave.jpg');
	background-size: cover;
	background-position: center;
`
