import NavLink from './NavLink'
import styled from 'styled-components'

export default () => {
	return (
		<Header>
			<NavContainer>
				<Nav>
					<NavLink href="/projects">Projects</NavLink>
				</Nav>
			</NavContainer>
		</Header>
	)
}

const Header = styled.header`
	display: grid;
	grid-template-columns: 1fr 2.5fr 2fr 3fr 1fr 1fr;
	grid-template-areas: '... nav nav nav nav ...';
	grid-area: top-nav;
	width: min(2660px, 95vw);

	@media (max-width: 1024px) {
		grid-template-columns: 1rem 2.5fr 2fr 3fr 1fr 1rem;
	}
`

const Nav = styled.nav`
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
