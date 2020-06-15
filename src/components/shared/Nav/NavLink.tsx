import Link from 'next/link'
import { NavLinkObj, ATagProps } from '../../../@types/nav'
import { useRouter } from 'next/dist/client/router'
import styled, { css } from 'styled-components'
import colors from '../../../utils/colors'

const NavLink = ({ href, children }: NavLinkObj) => {
	const router = useRouter()
	const isActive: boolean = router.pathname === href

	return (
		<Link href={href}>
			<ATag isActive={isActive}>{children}</ATag>
		</Link>
	)
}

const ATag = styled.a<ATagProps>`
	${({ isActive }) =>
		isActive &&
		css`
			color: ${colors('main.primary')};
		`}
`

export default NavLink
