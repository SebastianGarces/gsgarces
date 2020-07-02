import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Home = () => (
	<div>
		<Container>
			<Heading>Front End Developer</Heading>
		</Container>
	</div>
)

const Container = styled.section`
	padding: 2rem;
	border: 2px solid white;
	height: 100%;
`

const Heading = styled(motion.div)`
	font-family: Roboto;
	font-size: 144px;
	font-weight: 700;
	color: white;
`

export default Home
