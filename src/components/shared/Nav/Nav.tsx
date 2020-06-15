import NavLink from './NavLink'
import styled from 'styled-components'

export default () => {
	return (
		<Header>
			<nav>
				<NavLink href="/projects">Projects</NavLink>
			</nav>
		</Header>
	)
}

const Header = styled.header`
	border: 2px solid red;
`
