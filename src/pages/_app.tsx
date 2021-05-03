import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import GlobalStyles from '../styles/GlobalStyles'
import theme from '../styles/theme'
import { Layout } from '@components/common'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
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

// MyApp.getInitialProps = async ({ Component, ctx }) => {
// 	let pageProps = {}

// 	if (Component.getInitialProps) {
// 		pageProps = await Component.getInitialProps(ctx)
// 	}

// 	return { pageProps }
// }

export default MyApp
