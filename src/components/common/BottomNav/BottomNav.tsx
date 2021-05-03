import { Github, Linkedin, Twitter, Dribbble } from '@components/icons'
import { Footer, IconWrapper, NavContainer, Socials } from './BottomNav.styles'

export const BottomNav = () => {
	return (
		<Footer>
			<NavContainer>
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
						href="https://dribbble.com/g_sebastian"
						target="_blank"
						aria-label="Dribbble Profile"
						rel="noopener"
					>
						<Dribbble />
					</IconWrapper>
				</Socials>
			</NavContainer>
		</Footer>
	)
}
