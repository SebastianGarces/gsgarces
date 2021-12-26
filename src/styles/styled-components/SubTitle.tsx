import styled, { css } from 'styled-components'

type SubTitleProps = {
	variant?: 'primary' | 'secondary' | 'terciary'
}

export const SubTitle = styled.h2`
	color: ${({ theme }) => theme.colors.text.primary_lightest};

	font-weight: 400;
	text-transform: uppercase;
	letter-spacing: 0.13em;
	margin-bottom: 1rem;

	${({ variant }: SubTitleProps) =>
		variant === 'secondary' &&
		css`
			color: ${({ theme }) => theme.colors.accent.primary};
		`}

	${({ variant }: SubTitleProps) =>
		variant === 'terciary' &&
		css`
			text-transform: unset;
			letter-spacing: unset;
			margin: 0;
		`}
`
