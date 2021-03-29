import Link from 'next/link'
import { useRouter } from 'next/router'
import styled, { css } from 'styled-components'
import colors from '../../utils/colors'

export const NavLink = ({ href, children }) => {
	const router = useRouter()
	const isActive = router.pathname === href

	return (
		<Link href={href}>
			<ATag isActive={isActive}>{children}</ATag>
		</Link>
	)
}

const ATag = styled.a`
	display: block;
	color: ${colors('text.primary_lightest')};
	font-weight: 600;

	${({ isActive }) =>
		isActive &&
		css`
			color: ${colors('accent.primary')};
		`};
`
