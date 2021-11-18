import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import GlobalStyles from '../styles/GlobalStyles'
import theme from '../styles/theme'
import { Layout } from '@components/common'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>G. Sebastian Garces Portfolio</title>
			</Head>
			<ThemeProvider theme={theme}>
				<Layout>
					<GlobalStyles />
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	)
}
