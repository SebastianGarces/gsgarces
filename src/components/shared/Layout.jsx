import styled from 'styled-components'

import colors from '../../utils/colors'

import Nav from './Nav/TopNav'
import MobileTopNav from './Nav/BottomNav'
import Background from '../Background'

const Layout = ({ children }) => {
	return (
		<Container>
			<Nav />
			<MobileTopNav />
			<Background />
			{children}
		</Container>
	)
}

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	color: ${colors('primary')};
	display: grid;
	justify-content: center;

	grid-template-rows: 150px 1fr;
	grid-template-areas:
		'top-nav'
		'...';

	@media (max-width: 1024px) {
		grid-template-rows: 90px 1fr 90px;
		grid-template-areas:
			'top-nav'
			'.......'
			'bot-nav';
	}
`

export default Layout
