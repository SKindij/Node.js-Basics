# Implementing streams and piping in Node.js

Streams are a fundamental concept in Node.js, enabling efficient handling of data by reading or writing it in smaller, manageable chunks. This approach is particularly valuable when working with large files or data streams, as it minimizes memory usage and improves performance.

## Types of Streams

Node.js offers four primary types of streams:
1. **Readable Streams:** These streams allow you to read data from a source, such as a file or an HTTP request.
2. **Writable Streams:** These streams enable you to write data to a destination, such as a file or an HTTP response.
3. **Duplex Streams:** These streams represent both a readable and writable stream, allowing two-way data transfer.
4. **Transform Streams:** These streams are a subset of duplex streams and are designed for data transformation. They are particularly useful when you need to modify data as it flows through the stream.

### Using the fs Module for Streams

The built-in fs module in Node.js provides two essential methods for working with streams:
+ ``createReadStream()``: This method allows you to create a readable stream from a file.
+ ``createWriteStream()``: This method creates a writable stream for writing data to a file.

```javascript
  const fs = require('fs');

  // create a readable stream from a file
  const readableStream = fs.createReadStream('input.txt');

  // create a writable stream to write data to a file
  const writableStream = fs.createWriteStream('output.txt');
```

### Piping Streams

Piping is a powerful technique that simplifies the transfer of data from one stream to another. You can pipe a readable stream directly to a writable stream, or you can chain multiple streams together to create a data pipeline that performs a series of transformations.

```javascript
  // pipe data from the readable stream to the writable stream
  readableStream.pipe(writableStream);
```






