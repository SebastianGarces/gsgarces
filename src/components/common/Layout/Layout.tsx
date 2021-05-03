import { TopNav } from '../TopNav/TopNav'
import { BottomNav } from '../BottomNav/BottomNav'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { Container, ContentWrapper } from './Layout.styles'

type TLayoutProps = {
	children: ReactNode
}

export const Layout = ({ children }: TLayoutProps) => {
	const router = useRouter()
	return (
		<AnimatePresence exitBeforeEnter>
			<Container key={router.pathname}>
				<ContentWrapper>
					<TopNav />
					<BottomNav />
					{children}
				</ContentWrapper>
			</Container>
		</AnimatePresence>
	)
}
