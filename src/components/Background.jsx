import styled from 'styled-components'
import colors from '../utils/colors'
import { motion } from 'framer-motion'

export default () => {
	const variant = {
		initial: {
			scale: 1.5,
			y: 400,
		},
		animate: {
			scale: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	}

	return (
		<BackgroundGrid>
			<PrimaryImageContainer>
				<PrimaryImage variants={variant} initial="initial" animate="animate" />
			</PrimaryImageContainer>
			<DarkGray />
			<DarkGray2 />
			<DarkGray3>
				<LineRight />
			</DarkGray3>
			<LeftLineContainer>
				<LineLeft />
			</LeftLineContainer>
			<SecondaryImageContainer>
				<SecondaryImage variants={variant} initial="initial" animate="animate" />
			</SecondaryImageContainer>
		</BackgroundGrid>
	)
}

const BackgroundGrid = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	z-index: -1;

	background-color: ${colors('bg.primary')};

	display: grid;
	grid-template-columns: 1fr 2.5fr 2fr 3fr 1fr 1fr;
	grid-template-rows: 4fr 1fr 1fr 3fr 1fr;
	grid-template-areas:
		'pimage pimage dgray  simage dgray2 dgray3'
		'pimage pimage dgray  simage dgray2 dgray3'
		'pimage pimage dgray  simage dgray2 dgray3'
		'pimage pimage ...... simage dgray2 dgray3'
		'...... linec  ...... simage dgray2 dgray3';
`

const PrimaryImageContainer = styled.div`
	grid-area: pimage;
	position: relative;
	overflow: hidden;
	border-bottom: 1px solid ${colors('bg.border')};
	border-right: 1px solid ${colors('bg.border')};
`

const PrimaryImage = styled(motion.div)`
	width: 100%;
	height: 100%;
	background-image: url('/liquid-dark.jpg');
	background-size: cover;
	background-position: center;
`

const SecondaryImageContainer = styled.div`
	grid-area: simage;
	overflow: hidden;
	border-left: 1px solid ${colors('bg.border')};
	border-right: 1px solid ${colors('bg.border')};
`

const SecondaryImage = styled(motion.div)`
	width: 100%;
	height: 100%;
	background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%),
		url('/liquid-light.jpg');
	background-size: cover;
	background-position: center;
`

const DarkGray = styled.div`
	background-color: ${colors('bg.darker')};
	grid-area: dgray;
	border-bottom: 1px solid ${colors('bg.border')};
`

const DarkGray2 = styled.div`
	background-color: ${colors('bg.darker')};
	grid-area: dgray2;
`
const DarkGray3 = styled.div`
	background-color: ${colors('bg.darker')};
	grid-area: dgray3;
	position: relative;
`

const LineLeft = styled.div`
	width: 1px;
	height: 45vh;
	position: absolute;
	bottom: 0;
	left: 0;
	background-color: ${colors('bg.border')};
`
const LineRight = styled.div`
	width: 1px;
	height: 75vh;
	position: absolute;
	bottom: 0;
	left: 0;
	background-color: ${colors('bg.border')};
`

const LeftLineContainer = styled.div`
	grid-area: linec;
	position: relative;
`
