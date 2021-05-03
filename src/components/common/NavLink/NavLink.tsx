import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { ATag } from './NavLink.styles'

type TNavLinkProps = {
	href: string
	children: ReactNode
}

export const NavLink = ({ href, children }: TNavLinkProps) => {
	const router = useRouter()
	const isActive = router.pathname === href

	return (
		<Link href={href}>
			<ATag isActive={isActive}>{children}</ATag>
		</Link>
	)
}
