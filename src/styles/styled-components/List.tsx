import styled from 'styled-components'

type ListProps = {
	columns?: number
}

export const List = styled.ul`
	color: ${({ theme }) => theme.colors.text.primary_lightest};
	font-size: 18px;
	line-height: 2;
    margin-bottom: 2rem;
    list-style-position: inside;

	display: grid;
	grid-template-rows: repeat(auto, 1fr);
	grid-template-columns: ${({ columns }: ListProps) => {
		return columns ? '1fr '.repeat(columns) : '1fr'
	}};
`
