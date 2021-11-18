const isDev = process.env.NODE_ENV !== 'production'

const securityHeaders = [
	{
		key: 'Content-Security-Policy',
		value: isDev ? 'none' : "object-src 'none'; script-src 'self';",
	},
]

module.exports = {
	devIndicators: {
		autoPrerender: false,
	},
	async headers() {
		return [
			{
				// Apply these headers to all routes in your application.
				source: '/(.*)',
				headers: securityHeaders,
			},
		]
	},
}
