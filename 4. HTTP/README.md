# Creating HTTP Server and Client using Node.js HTTP module

**HTTP** (HyperText Transfer Protocol) is a fundamental protocol for transmitting data over the internet. Node.js provides the **http module** to create both HTTP servers and clients, allowing you to build powerful web applications.

#### Creating an HTTP Server

To create an HTTP server using Node.js, you can utilize the **createServer()** method from the http module. This method takes a callback function as an argument, which gets executed every time a request is made to the server:

```javascript
  const http = require('http');
  const server = http.createServer( (request, response) => {
      // handle incoming HTTP requests here
  } );
```
> The callback function receives two arguments: **request** (representing the incoming request) and **response** (used to send a response back to the client).

#### Handling Responses

You can use the response object to send a response back to the client. Methods like **writeHead()** and **end()** are commonly used for this purpose:

```javascript
  const http = require('http');
  const server = http.createServer( (request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello, Node World!\n');
  } );

  server.listen(3000, () => {
    console.log('Server is listening on port 3000');
  } );
```
> In this example, we set the response status code to 200 and specify the content type as plain text.




