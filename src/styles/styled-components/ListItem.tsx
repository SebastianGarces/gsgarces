import styled from 'styled-components'

export const ListItem = styled.li`
	&::marker {
		color: ${({ theme }) => theme.colors.accent.primary};
	}
`
