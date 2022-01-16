export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.ico","favicon.png","robots.txt"]),
	_: {
		mime: {".ico":"image/vnd.microsoft.icon",".png":"image/png",".txt":"text/plain"},
		entry: {"file":"start-9f3dd52b.js","js":["start-9f3dd52b.js","chunks/vendor-91d27c94.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			}
		]
	}
};
