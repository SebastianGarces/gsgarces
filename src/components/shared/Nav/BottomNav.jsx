import { NavLink } from './NavLink'
import styled from 'styled-components'

export const BottomNav = () => {
	return (
		<Footer>
			<NavContainer>
				<TopNav>
					<NavLink href="/projects">X</NavLink>
				</TopNav>
			</NavContainer>
		</Footer>
	)
}

const Footer = styled.footer`
	display: none;
	grid-area: bot-nav;

	@media (max-width: 1024px) {
		display: grid;
		grid-template-columns: 1rem 1fr 1rem;
		grid-template-areas: '... nav ...';
	}
`

const TopNav = styled.nav`
	padding: 1rem 0;
	width: 100%;
	display: flex;
	align-items: center;
`

const NavContainer = styled.div`
	grid-area: nav;
	display: flex;
	justify-content: center;
	align-items: center;
`
