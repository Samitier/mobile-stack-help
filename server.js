const 	express = require("express"),
		http = require("http"),
		path = require("path"),
		compression = require("compression"),
		sslRedirect = require("heroku-ssl-redirect")


const { PORT } = process.env


const app = express()
	// Gzip
	.use(compression())
	// Heroku https redirect
	.use(sslRedirect())
	// Setting the static file server to the folder "public"
	.use(express.static(path.join(__dirname, "./dist")))
	// Return index.html instead on 404
	.use((_, res) => res.sendFile(path.join(__dirname, "./dist/index.html")))
// Create server
http.createServer(app)
	.listen(PORT || 3001)
	.on(
		"listening",
		() => console.log("Server listening on port " + (PORT || 3001))
	)
	

