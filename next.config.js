const securityHeaders = [
	{
		key: 'Content-Security-Policy',
		value: "object-src 'none' script-src 'self'",
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
