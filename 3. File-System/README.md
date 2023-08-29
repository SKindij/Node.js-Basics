
# Reading and writing files using Node.js file system module


Node.js provides a built-in file system module that allows you to work with the file system on your computer.

You can use the file system module's fs.readFile() method to read data from a file.

You can use the file system module's fs.writeFile() method to write data to a file.

The file system module also provides other methods, such as fs.appendFile(), fs.rename(), and fs.unlink(), that allow you to append data to a file, rename a file, and delete a file, respectively.

When working with the file system module, you need to handle errors that may occur, such as file not found or file permissions errors.

You can use the file system module's fs.existsSync() method to check if a file exists before attempting to read from or write to it.

Node.js also provides the path module, which allows you to work with file paths and directories in a cross-platform way.

When working with large files, it is recommended to use the file system module's fs.createReadStream() and fs.createWriteStream() methods, which allow you to stream data to and from a file in chunks, instead of loading the entire file into memory.
