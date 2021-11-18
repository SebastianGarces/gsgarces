import styled from 'styled-components'

export const Title = styled.h1`
	color: ${({ theme }) => theme.colors.text.primary};
	font-size: clamp(32px, 48px, 5vw);
	font-weight: 400;
`
