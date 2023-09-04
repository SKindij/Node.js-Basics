
# using Node.js file system module

> Node.js provides a built-in file system module (`fs`) that allows you to interact with the file system on your computer.

1. You can use the **fs.readFile()** method to read data from a file.
    + _This method is asynchronous and takes a file path and a callback function as parameters._
    + ```javascript
        const fs = require('fs');
        fs.readFile('example.txt', 'utf8', (err, data) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log(data);
        });
        // we read the contents of the 'example.txt' file and log it to the console
      ```
2. You can use the **fs.writeFile()** method to write data to a file.
    + _This method is also asynchronous and takes a file path, data, and a callback function as parameters._
    + ```javascript
        const fs = require('fs');
        fs.writeFile('newFile.txt', 'Hello, Node.js world!', (err) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log('Data has been written to newFile.txt');
        });
        // this code creates a new file, 'newFile.txt', and writes text to it.
      ```
3. Appends data to a file
    + ```javascript
        fs.appendFile('example.txt', 'New data to append', (err) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log('Data has been appended to example.txt');
        });
      ```
4. Renames a file.
    + ```javascript
        fs.rename('oldFile.txt', 'newName.txt', (err) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log('File has been renamed');
        });
      ```
5. Deletes a file.
    + ```javascript
        fs.unlink('toBeDeleted.txt', (err) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log('File has been deleted');
        });
      ```

> _When working with file operations, it's essential to handle errors gracefully, as shown in the examples above. Always check for errors in the callback functions._

You can use the **fs.existsSync()** method to check if a file exists before attempting to read from or write to it.
```javascript
  if (fs.existsSync('example.txt')) {
    console.log('File exists');
  } else {
    console.log('File does not exist');
  }
```

When working with large files, it is recommended to use **fs.createReadStream()** and **fs.createWriteStream()** methods, which allow you to stream data to and from a file in chunks, instead of loading the entire file into memory.
```javascript
  const fs = require('fs');
  const readStream = fs.createReadStream('largeFile.txt');
  const writeStream = fs.createWriteStream('copyOfLargeFile.txt');
  // we use pipe() to efficiently copy the file
  readStream.pipe(writeStream);
  
  readStream.on('end', () => {
    console.log('File copied successfully');
  });
```

Node.js also provides the path module, which allows you to work with file paths and directories in a cross-platform way.


