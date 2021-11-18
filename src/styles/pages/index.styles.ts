import styled from 'styled-components'

export const Container = styled.main`
	height: 100%;
	width: 100%;
	display: grid;
	place-items: center;
`

export const Avatar = styled.div`
	grid-area: frame;
	height: 156px;
	width: 156px;
	background-color: ${({ theme }) => theme.colors.accent.primary};
	background: url("https://avatars.githubusercontent.com/u/53976701?s=400&v=4");
	background-position: center;
	background-size: cover;
	border-radius: 16px;

	@media (max-width: 768px) {
		height: 94px;
		width: 94px;
	}
`

export const HeroContainer = styled.div`
	display: grid;
	grid-gap: 40px 64px;
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
