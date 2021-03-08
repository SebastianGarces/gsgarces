import { motion } from 'framer-motion'
import styled from 'styled-components'

const scrollAwayLeft = {
	initial: {
		x: '0',
		scale: 1.5,
		skewX: -10,
	},
	animate: {
		x: '135vw',
		skewX: 0,
		transition: {
			duration: 0.75,
		},
	},
	exit: {
		x: '0',
		skewX: 10,
		transition: {
			duration: 0.5,
		},
	},
}

const stagger = {
	animate: {
		transition: {
			staggerChildren: 0.02,
		},
	},
	exit: {
		transition: {
			staggerChildren: 0.02,
		},
	},
}

export default function ProjectsPage() {
	return (
		<motion.div exit="exit" initial="initial" animate="animate">
			<motion.div variants={stagger}>
				<TransitionBgPrimary variants={scrollAwayLeft} />
				<TransitionBgSecondary variants={scrollAwayLeft} />
			</motion.div>
			<h1>Projects Page</h1>
		</motion.div>
	)
}

const TransitionBgPrimary = styled(motion.div)`
	position: absolute;
	overflow: hidden;
	background: #041118;
	z-index: 2000;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	height: 100vh;
	width: 100vw;
`
const TransitionBgSecondary = styled(motion.div)`
	position: absolute;
	background: #93989b;
	overflow: hidden;
	z-index: 1000;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	height: 100vh;
	width: 100vw;
`
