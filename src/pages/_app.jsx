import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../styles/GlobalStyles'
import theme from '../styles/theme'
import Layout from '../components/shared/Layout'

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<GlobalStyles />
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	)
}

export default MyApp
