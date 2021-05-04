import theme from '@styles/theme'
import styled from 'styled-components'

export const Container = styled.main`
	height: 100%;
	width: 100%;
	display: grid;
	place-items: center;
`

export const Frame = styled.div`
	grid-area: frame;
	height: 156px;
	width: 156px;
	background-color: ${({ theme }) => theme.colors.accent.primary};
	place-self: left center;
	position: relative;
	border-radius: 18px;

	&::after {
		content: '';
		height: 156px;
		width: 156px;
		background-color: hsla(158, 95%, 59%, 1);
		position: absolute;
		right: -12px;
		bottom: -12px;
		opacity: 0.5;
		border-radius: 18px;
	}

	@media (max-width: 768px) {
		height: 94px;
		width: 94px;

		&::after {
			height: 94px;
			width: 94px;
		}
	}
`

export const HeroContainer = styled.div`
	display: grid;
	grid-gap: 64px;
	grid-template-columns: min-content 1fr;
	grid-template-rows: min-content min-content min-content;
	grid-template-areas:
		'frame title'
		'bio bio'
		'button button';

	@media (max-width: 768px) {
		grid-gap: 24px;
		grid-template-rows: fit-content repeat(auto-fit, minmax(200px, 1fr));
		grid-template-areas:
			'frame frame'
			'title title'
			'bio bio'
			'button button';
	}
`

export const TitleContainer = styled.div`
	grid-area: title;
	align-self: center;

	@media (max-width: 768px) {
		margin-top: 16px;
	}
`

export const Title = styled.h1`
	color: ${({ theme }) => theme.colors.text.primary};
	font-size: clamp(32px, 48px, 5vw);
	font-weight: 400;
`

export const SubTitle = styled.h3`
	color: ${({ theme }) => theme.colors.text.primary_lightest};

	font-weight: 400;
	text-transform: uppercase;
	letter-spacing: 0.13em;
`

export const LineTag = styled.p`
	color: ${({ theme }) => theme.colors.text.primary_lighter};

	margin-top: 16px;
	font-size: clamp(16px, 24px, 5vw);
`

export const MiniBioContainer = styled.div`
	grid-area: bio;

	@media (max-width: 768px) {
		margin-top: 16px;
	}
`
export const MiniBio = styled.p`
	color: ${({ theme }) => theme.colors.text.primary_lightest};
	max-width: 650px;
	font-size: 18px;
	line-height: 2;

	&:last-of-type {
		margin-top: 12px;
	}

	@media (max-width: 768px) {
		font-size: 14px;
	}

	span {
		color: ${({ theme }) => theme.colors.accent.primary};
	}
`

export const Button = styled.button`
	grid-area: button;
	border: 2px solid ${({ theme }) => theme.colors.accent.primary};
	background-color: transparent;
	border-radius: 8px;
	color: ${({ theme }) => theme.colors.accent.primary};
	padding: 14px;
	width: fit-content;
	font-size: 18px;
	cursor: pointer;

	@media (max-width: 768px) {
		margin-top: 16px;
		font-size: 14px;
		width: 100%;
	}
`
