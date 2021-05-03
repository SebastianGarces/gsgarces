import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

export default function HomePage() {
	const router = useRouter()

	return (
		<Container>
			<div>
				<h1>Gerardo Sebastian Garces</h1>
			</div>
		</Container>
	)
}

const Container = styled(motion.section)`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media (max-width: 1024px) {
		align-content: space-between;
	}
`
