# Spawning child processes in Node.js

In Node.js, a child process is a separate process created by another process, known as the parent process. Child processes are a powerful tool for managing tasks like running external commands, parallel processing, and enabling inter-process communication.

## Using the ``child_process`` Module

Node.js provides a built-in module called child_process for spawning and managing child processes. Here are some key methods and concepts related to this module:

### spawn()

The ``spawn()`` method of the child_process module is used to spawn new child processes. It takes the command to run as its first argument, followed by an array of arguments to pass to the command. This method is commonly used for running external commands and is non-blocking.

```javascript
  const { spawn } = require('child_process');

  const childProcess = spawn('ls', ['-l', '/usr']);
```

### exec()

The ``exec()`` method of the child_process module is used to run shell commands. It's useful when you need to execute simple shell commands and capture their output.

```javascript
  const { exec } = require('child_process');

  exec('ls -l /usr', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
     return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
```

### execFile()

The ``execFile()`` method of the child_process module is used to run executable files. It allows you to execute binary files directly, making it efficient and secure.

```javascript
  const { execFile } = require('child_process');

  execFile('node', ['--version'], (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    console.log(`Node.js version: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
```

### Inter-Process Communication (IPC)

Child processes can communicate with their parent process and vice versa using a message passing mechanism. The send() method of the child_process module is used to send messages from a child process to its parent process. The on() method of the process global object is used in the parent process to listen for messages from child processes.

#### Parent Process:

```javascript
  const { fork } = require('child_process');

  const child = fork('child.js');

  child.on('message', (message) => {
    console.log(`Received message from child process: ${message}`);
  });
```

#### Child Process (child.js)

```javascript
  process.send('Hello, parent!');
```

#### fork()








