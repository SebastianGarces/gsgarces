import styled, { css } from 'styled-components'

type ButtonProps = {
	gridArea?: string
}

export const Button = styled.button`
	border: 2px solid ${({ theme }) => theme.colors.accent.primary};
	background-color: transparent;
	border-radius: 8px;
	color: ${({ theme }) => theme.colors.accent.primary};
	padding: 8px 16px;
	width: fit-content;
	font-size: 18px;
	font-weight: 500;
	cursor: pointer;
	transition-property: background color;
	transition-duration: 150ms;
	transition-timing-function: ease-in-out;

	&:hover {
		background: ${({ theme }) => theme.colors.accent.primary};
		color: ${({ theme }) => theme.colors.bg.primary};
	}

	${({ gridArea }: ButtonProps) =>
		gridArea &&
		css`
			grid-area: ${gridArea};
		`}

	@media (max-width: 768px) {
		margin-top: 16px;
		font-size: 14px;
		width: 100%;
	}
`
