import Link from 'next/link'
import { NavLinkObj, ATagProps } from '../../../@types/nav'
import { useRouter } from 'next/dist/client/router'
import styled, { css } from 'styled-components'

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
			color: red;
		`}
`

export default NavLink
