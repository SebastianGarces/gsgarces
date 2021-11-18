import styled, { css } from 'styled-components'

export const ATag = styled.a`
	display: block;
	color: ${({ theme }) => theme.colors.text.primary_lightest};
	font-weight: 600;
	transition: color 150ms ease-in-out;

	&:hover {
		color: ${({ theme }) => theme.colors.accent.primary};
	}

	${({ isActive }: { isActive: Boolean }) =>
		isActive &&
		css`
			color: ${({ theme }) => theme.colors.accent.primary};
		`};
`
