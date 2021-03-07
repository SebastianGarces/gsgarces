import styled from 'styled-components'
import { Github, Linkedin, Twitter, Dribbble } from '@components/icons'
import colors from '../../utils/colors'

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

const Footer = styled.footer`
	display: none;
	grid-area: bot-nav;

	@media (max-width: 768px) {
		display: flex;
	}
`

const NavContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 100%;
`

const Socials = styled.div`
	grid-area: nav;
	display: flex;
	justify-content: center;
	align-items: center;

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

const IconWrapper = styled.a`
	display: flex;
	align-items: center;
	margin-left: 2rem;
`
