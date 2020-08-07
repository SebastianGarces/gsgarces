import styled from 'styled-components'
import colors from '../utils/colors'

const Background = () => {
	return <BackgroundGrid></BackgroundGrid>
}

const BackgroundGrid = styled.div`
	background-color: ${colors('bg.primary')};
	position: absolute;
	height: 100vh;
	width: 100vw;

	z-index: -1;
`

export default Background
