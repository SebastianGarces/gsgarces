import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.div)`
	min-height: 100vh;
	color: ${({ theme }) => theme.colors.main.primary};
	overflow: hidden;

	display: grid;
	grid-template-columns: repeat(13, 1fr);
	grid-gap: 20px;

	@media (max-width: 1024px) {
		grid-gap: 0px;
	}
`

export const ContentWrapper = styled.main`
	grid-column: 3/12;
	overflow: hidden;

	display: grid;
	grid-template-rows: min-content 1fr;
	grid-template-areas:
		'top-nav'
		'...';

	@media (max-width: 2200px) {
		grid-column: 2/13;
		grid-template-rows: 90px 1fr 50px;
	}

	@media (max-width: 768px) {
		grid-column: 1/14;
		padding: 0 28px;
		grid-template-rows: 90px 1fr 90px;
		grid-template-areas:
			'top-nav'
			'.......'
			'bot-nav';
	}

	@media (min-width: 2600px) {
		grid-column: 3/12;
	}

	@media (min-width: 3200px) {
		grid-column: 4/11;
	}
`
