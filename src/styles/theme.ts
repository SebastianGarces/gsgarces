export type Color = {
	primary?: string
	darker?: string
	lighter?: string
	border?: string
}

export type ColorPallete = {
	main: Color
	bg: Color
	text: Color
}

export type Theme = {
	colors: ColorPallete
}

const theme: Theme = {
	colors: {
		main: {
			primary: '#1CF68D',
		},
		bg: {
			primary: '#333333',
			darker: '#080808',
			border: 'rgba(247, 247, 247, 0.4)',
		},
		text: {
			primary: '#F7F7F7',
			darker: '#BFBFBF',
		},
	},
}

export default theme
