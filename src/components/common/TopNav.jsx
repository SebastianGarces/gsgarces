import styled from 'styled-components'
import Link from 'next/link'

import colors from '../../utils/colors'

import { NavLink } from './NavLink'
import { LogoMark, Github, Linkedin, Twitter, Dribbble, HamburgerMenu } from '@components/icons'

export const TopNav = () => {
	return (
		<Header>
			<Nav>
				<Link href="/">
					<a className="logo" aria-label="Landing Page">
						<LogoMark />
					</a>
				</Link>
				<Socials>
					<IconWrapper
						href="https://github.com/SebastianGarces"
						target="_blank"
						aria-label="Github Profile"
						rel="noopener"
					>
						<Github />
					</IconWrapper>
					<IconWrapper
						href="https://www.linkedin.com/in/gsebastiangarces/"
						target="_blank"
						aria-label="LinkedIn Profile"
						rel="noopener"
					>
						<Linkedin />
					</IconWrapper>
					<IconWrapper
						href="https://twitter.com/gsgarces"
						target="_blank"
						aria-label="Twitter Profile"
						rel="noopener"
					>
						<Twitter />
					</IconWrapper>
					<IconWrapper
						href="https://dribbble.com/gsgarces"
						target="_blank"
						aria-label="Dribbble Profile"
						rel="noopener"
					>
						<Dribbble />
					</IconWrapper>
				</Socials>
				<Links>
					<NavLink href="/about">About</NavLink>
					<NavLink href="/projects">Projects</NavLink>
					<NavLink href="/keyframes">Keyframes</NavLink>
					<NavLink href="/contact-me">Contact me</NavLink>
				</Links>
				<MenuIconWrapper>
					<HamburgerMenu />
				</MenuIconWrapper>
			</Nav>
		</Header>
	)
}

const Header = styled.header`
	width: 100%;
`

const Nav = styled.nav`
	padding: 35px 0;
	width: 100%;
	display: flex;
	align-items: center;

	.logo {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (max-width: 768px) {
		padding: 25px 0;
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

	@media (max-width: 768px) {
		display: none;
	}
`

const Links = styled.div`
	display: flex;
	align-items: center;
	margin-left: auto;

	a {
		margin-left: 3rem;
		text-transform: uppercase;
	}

	@media (max-width: 1200px) {
		display: none;
	}
`

const IconWrapper = styled.a`
	display: flex;
	align-items: center;
	margin-left: 2rem;
`

const MenuIconWrapper = styled.div`
	margin-left: auto;
	cursor: pointer;

	@media (min-width: 1201px) {
		display: none;
	}
`
