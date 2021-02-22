// Load HTTP module
// This is node.js core module.
const http = require('http')

const hostname = '127.0.0.1'
const port = 8000

// Create HTTP server
// The http.createServer() method includes request and response parameters which is supplied bu node.js.
// The request (req) object can be used to get information about the current HTTP request e.g: url, request header, and data.
// The response (res) object can be used to send a response for a current HTTP request. here response body i.e "Hello World".
const server = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, { 'Content-Type': 'text/plain' })
        // Send the response body "Hello World"
    res.end('Hello World\n')
})

// Prints a log once the server starts listening
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})