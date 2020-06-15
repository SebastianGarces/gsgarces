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
	border: 2px solid white;
	display: grid;
	grid-template-columns: 1fr 2.5fr 2fr 3fr 1fr 1fr;
	grid-template-areas: '... nav nav nav nav ...';
`

const Nav = styled.nav`
	border: 2px solid white;
	padding: 1rem 0;
	width: 100%;
`

const NavContainer = styled.div`
	grid-area: nav;
	display: flex;
	justify-content: center;
	align-items: center;
`
