import styled from 'styled-components'

export const Header = styled.header`
	width: 100%;
`

export const Nav = styled.nav`
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

export const Socials = styled.div`
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
					fill: ${({ theme }) => theme.colors.accent.primary};
				}
			}
		}
	}

	@media (max-width: 768px) {
		display: none;
	}
`

export const Links = styled.div`
	display: none;
	align-items: center;
	margin-left: auto;

	a {
		margin-left: 4rem;
		text-transform: uppercase;
	}

	@media (min-width: 1200px) {
		display: flex;
	}
`

export const IconWrapper = styled.a`
	display: flex;
	align-items: center;
	margin-left: 2rem;
`

export const MenuIconWrapper = styled.div`
	margin-left: auto;
	cursor: pointer;

	@media (min-width: 1200px) {
		display: none;
	}
`
