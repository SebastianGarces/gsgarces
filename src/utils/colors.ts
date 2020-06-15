import theme, { ColorPallete, Color } from '../styles/theme'

const validateColors: (key: string, colors: ColorPallete) => asserts key is keyof ColorPallete = (key, colors) => {
	if (!(key in colors)) {
		throw Error(`${key} must be a valid key of the type "Colors"`)
	}
}
const validateColor: (key: string, color: Color) => asserts key is keyof Color = (key, color) => {
	if (!(key in color)) {
		throw Error(`${key} must be a valid key of the type "Color"`)
	}
}

const colors = (color: string): string | undefined => {
	const colorObj = color.split('.')[0]
	const colorHue = color.split('.')[1]

	validateColors(colorObj, theme.colors)
	validateColor(colorHue, theme.colors[colorObj])

	return theme.colors[colorObj][colorHue]
}

export default colors
