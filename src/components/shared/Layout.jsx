import styled from 'styled-components'

import colors from '../../utils/colors'

import { TopNav, BottomNav } from './nav'
import Background from '../Background'

export const Layout = ({ children }) => {
	return (
		<Container>
			<ContentWrapper>
				<TopNav />
				<BottomNav />
				{children}
			</ContentWrapper>
			<Background />
		</Container>
	)
}

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	color: ${colors('main.primary')};

	display: grid;
	grid-template-columns: repeat(13, 1fr);
	grid-gap: 20px;

	justify-content: center;

	@media (max-width: 1024px) {
		grid-gap: 0px;
	}
`

const ContentWrapper = styled.main`
	grid-column: 3/12;

	display: grid;
	grid-template-rows: min-content 1fr;
	grid-template-areas:
		'top-nav'
		'...';

	@media (max-width: 1024px) {
		grid-column: 2/13;
		grid-template-rows: 90px 1fr 90px;
		grid-template-areas:
			'top-nav'
			'.......'
			'bot-nav';
	}

	@media (max-width: 768px) {
		grid-column: 1/14;
		padding: 15px;
	}
`
