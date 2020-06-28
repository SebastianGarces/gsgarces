import NavLink from './NavLink'
import styled from 'styled-components'

export default () => {
	return (
		<Header>
			<NavContainer>
				<TopNav>
					<NavLink href="/projects">X</NavLink>
				</TopNav>
			</NavContainer>
		</Header>
	)
}

const Header = styled.header`
	border: 2px solid white;
	display: none;
	grid-area: top-nav;

	@media (max-width: 768px) {
		display: grid;
		grid-template-columns: 20px 1fr 20px;
		grid-template-areas: '... nav ...';
	}
`

const TopNav = styled.nav`
	border: 2px solid white;
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
