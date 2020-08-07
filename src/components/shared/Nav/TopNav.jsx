import { NavLink } from './NavLink'
import styled from 'styled-components'

export const TopNav = () => {
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
	width: 100%;
`

const Nav = styled.nav`
	padding: 25px 0;
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
