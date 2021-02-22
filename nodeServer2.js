const http = require('http') // Import Node.js core module

// Create HTTP server
// The http.createServer() method includes request and response parameters which is supplied bu node.js.
// The request (req) object can be used to get information about the current HTTP request e.g: url, request header, and data.
// The response (res) object can be used to send a response for a current HTTP request. here response for home page, student AND login.
const server = http.createServer(function(req, res) { // create web server
    if (req.url === '/') {
        // check the URL of the current request
        //  set response header
        res.writeHead(200, { 'Content-Type': 'text/html' })

        // set response content
        res.write('<html><body><p>This is home Page.</p></body></html>')
        res.end()
    } else if (req.url === '/student') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<html><body><p>This is student Page.</p></body></html>')
        res.end()
    } else if (req.url === '/admin') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<html><body><p>This is admin Page.</p></body></html>')
        res.end()
    } else {
        res.end('Invalid Request!')
    }
})

// For running these server certain url's are required in browsers(eg:chrome)
// http://localhost:5000/          : This url gives homepage.
// http://localhost:5000/student   : This url gives student page.
// http://localhost:5000/admin     : This url gives admin page.
// All these three(3) pages are due to req.url in if-else above after creating HTTP server.

server.listen(5000) // 6 - listen for any incoming requests
console.log('The server running at http://localhost:5000/ ')