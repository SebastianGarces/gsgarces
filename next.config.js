const securityHeaders = [
	{
		key: 'Content-Security-Policy',
		value: 'none',
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
