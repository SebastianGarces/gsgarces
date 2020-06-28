import styled from 'styled-components'

import colors from '../../utils/colors'

import Nav from './Nav/Nav'
import MobileTopNav from './Nav/MobileTopNav'
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
	grid-template-rows: 150px 1fr;
	grid-template-areas:
		'nav'
		'...';

	@media (max-width: 768px) {
		grid-template-rows: 90px 1fr 80px;
		grid-template-areas:
			'top-nav'
			'...'
			'nav';
	}
`

export default Layout
