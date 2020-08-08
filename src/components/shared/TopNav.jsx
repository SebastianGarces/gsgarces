import { NavLink } from './NavLink'
import styled from 'styled-components'
import { LogoMark, Github, Linkedin, Twitter, Dribbble } from '../svg'
import Link from 'next/link'
import colors from '../../utils/colors'

export const TopNav = () => {
	return (
		<Header>
			<Nav>
				<Link href="/">
					<a className="logo">
						<LogoMark />
					</a>
				</Link>
				<Socials>
					<IconWrapper
						href="https://github.com/SebastianGarces"
						target="_blank"
					>
						<Github />
					</IconWrapper>
					<IconWrapper
						href="https://www.linkedin.com/in/gsebastiangarces/"
						target="_blank"
					>
						<Linkedin />
					</IconWrapper>
					<IconWrapper href="https://twitter.com/gsgarces" target="_blank">
						<Twitter />
					</IconWrapper>
					<IconWrapper href="https://dribbble.com/g_sebastian" target="_blank">
						<Dribbble />
					</IconWrapper>
				</Socials>
				<Links>
					<NavLink href="/about">About</NavLink>
					<NavLink href="/experience">Experience</NavLink>
					<NavLink href="/projects">Projects</NavLink>
					<NavLink href="/keyframes">Keyframes</NavLink>
					<NavLink href="/contact-me">Contact me</NavLink>
				</Links>
			</Nav>
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

	.logo {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

const Socials = styled.div`
	grid-area: nav;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 2rem;

	a {
		svg {
			path {
				transition: fill 150ms ease-in-out;
			}
		}

		&:hover,
		&:focus {
			svg {
				path {
					fill: ${colors('main.primary')};
				}
			}
		}
	}
`

const Links = styled.div`
	display: flex;
	align-items: center;
	margin-left: auto;

	a {
		margin-left: 3rem;
		text-transform: uppercase;
		color: ${colors('text.primary_lighter')};
		font-weight: 600;
	}
`

const IconWrapper = styled.a`
	display: flex;
	align-items: center;
	margin-left: 2rem;
`
