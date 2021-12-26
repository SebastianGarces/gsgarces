import styled, { css } from 'styled-components'

type TextProps = {
	mwidth?: string
}

export const Text = styled.p`
	color: ${({ theme }) => theme.colors.text.primary_lightest};
	font-size: 18px;
	line-height: 2;

	${({ mwidth }: TextProps) =>
		css`
			max-width: ${mwidth};
		`}

	@media (max-width: 768px) {
		font-size: 14px;
	}

	a {
		color: ${({ theme }) => theme.colors.accent.primary};
		text-decoration: none;
		position: relative;
		&::after {
			content: '';
			background: ${({ theme }) => theme.colors.accent.primary};
			height: 2px;
			width: 100%;
			position: absolute;
			top: 100%;
			left: 0;
		}
	}

	span {
		color: ${({ theme }) => theme.colors.accent.primary};
	}
`
