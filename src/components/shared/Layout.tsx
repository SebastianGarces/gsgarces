import styled from 'styled-components'

import colors from '../../utils/colors'

import Nav from './Nav/Nav'
import Background from '../Background'

const Layout: React.FC = ({ children }) => {
	return (
		<Container>
			<Nav />
			<Background />
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
	grid-template-rows: 150px 1fr;
`

export default Layout
