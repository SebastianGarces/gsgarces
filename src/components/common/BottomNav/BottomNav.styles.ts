import styled from 'styled-components'

export const Footer = styled.footer`
	display: none;
	grid-area: bot-nav;

	@media (max-width: 768px) {
		display: flex;
	}
`

export const NavContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 100%;
`

export const Socials = styled.div`
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
					fill: ${({ theme }) => theme.colors.main.primary};
				}
			}
		}
	}
`

export const IconWrapper = styled.a`
	display: flex;
	align-items: center;
	margin-left: 2rem;
`
