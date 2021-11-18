import Link from 'next/link'
import socials from './socials'

import { NavLink } from '../NavLink/NavLink'
import { LogoMark, HamburgerMenu } from '@components/icons'
import {
	Header,
	IconWrapper,
	Links,
	MenuIconWrapper,
	Nav,
	Socials,
} from './TopNav.styles'

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
					{socials.map(({ ariaLabel, url, icon: Icon }) => {
						return (
							<IconWrapper
								key={url}
								href={url}
								target="_blank"
								aria-label={ariaLabel}
								rel="noopener"
							>
								<Icon />
							</IconWrapper>
						)
					})}
				</Socials>
				<Links>
					<NavLink href="/">Home</NavLink>
					<NavLink href="/about">About</NavLink>
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
