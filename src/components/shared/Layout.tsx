import styled from 'styled-components'

import colors from '../../utils/colors'

import Nav from './Nav/Nav'

const Layout: React.FC = ({ children }) => {
	return (
		<Container>
			<Nav />
			<Background>
				<PrimaryImage />
				<DarkGray />
				<DarkGray2 />
				<DarkGray3 />
				<SecondaryImage />
			</Background>
			{children}
		</Container>
	)
}

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	color: ${colors('main.primary')};
	display: grid;
	grid-template-rows: 80px 1fr;
`

const Background = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	z-index: -1;

	background-color: ${colors('bg.primary')};

	display: grid;
	grid-template-columns: 1fr 3fr 2fr 4fr 1fr 1fr;
	grid-template-rows: 4fr 2fr 1fr 3fr 1fr;
	grid-template-areas:
		'pimage pimage dgray  simage dgray2 dgray3'
		'pimage pimage dgray  simage dgray2 dgray3'
		'pimage pimage dgray  simage dgray2 dgray3'
		'pimage pimage ...... simage dgray2 dgray3'
		'...... ...... ...... simage dgray2 dgray3';
`

const PrimaryImage = styled.div`
	background-color: darkslategray;
	grid-area: pimage;
	border-bottom: 1px solid ${colors('bg.border')};
	border-right: 1px solid ${colors('bg.border')};
`

const SecondaryImage = styled.div`
	background-color: darkslategray;
	grid-area: simage;
	border-left: 1px solid ${colors('bg.border')};
	border-right: 1px solid ${colors('bg.border')};
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
`

export default Layout
