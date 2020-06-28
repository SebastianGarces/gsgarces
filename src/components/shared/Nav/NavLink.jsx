import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import styled, { css } from 'styled-components'
import colors from '../../../utils/colors'

const NavLink = ({ href, children }) => {
	const router = useRouter()
	const isActive = router.pathname === href

	return (
		<Link href={href}>
			<ATag isActive={isActive}>{children}</ATag>
		</Link>
	)
}

const ATag = styled.a`
	${({ isActive }) =>
		isActive &&
		css`
			color: ${colors('primary')};
		`}
`

export default NavLink
