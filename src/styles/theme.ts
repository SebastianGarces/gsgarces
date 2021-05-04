import { DefaultTheme } from 'styled-components'
import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			main: {
				primary: string
				hover: string
				light: string
			}
			accent: {
				primary: string
			}
			bg: {
				primary: string
				dark: string
				border: string
			}
			text: {
				primary: string
				primary_lighter: string
				primary_lightest: string
			}
		}
	}
}

const theme: DefaultTheme = {
	colors: {
		main: {
			primary: '#041118',
			hover: '#333E43',
			light: '#93989B',
		},
		accent: {
			primary: '#32F9B2',
		},
		bg: {
			primary: '#041118',
			dark: '#111111',
			border: 'rgba(247, 247, 247, 0.4)',
		},
		text: {
			primary: '#F9F9F9',
			primary_lighter: 'hsla(0, 0%, 95%, 1)',
			primary_lightest: '#B7BFC9',
		},
	},
}

export default theme
