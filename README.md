# Node.js knowledge base

|           Topic                                                                        | Description                                                |
|----------------------------------------------------------------------------------------|------------------------------------------------------------|
| 1. Basics                                                                              | Introduction to Node.js and NPM                            |
| 2. [Modules](https://github.com/SKindij/Node.js-Basics/tree/main/2.%20Modules)         | Creating and using modules in Node.js                      |
| 3. [File System](https://github.com/SKindij/Node.js-Basics/tree/main/3.%20File-System) | Interacting with files using 'fs' and 'path' modules       |
| 4. [HTTP](https://github.com/SKindij/Node.js-Basics/tree/main/4.%20HTTP)               | Creating HTTP server and client using HTTP module          |
| 5. [Events](https://github.com/SKindij/Node.js-Basics/tree/main/5.%20Events)           | Using events and event emitters in Node.js                 |
| 6. [Streams](https://github.com/SKindij/Node.js-Basics/tree/main/6.%20Streams)         | Implementing streams and piping in Node.js                 |
| 7. [Child Processes](https://github.com/SKindij/Node.js-Basics/tree/main/7.%20Child%20Processes) | Spawning child processes in Node.js              |
| 8. [Debugging](https://github.com/SKindij/Node.js-Basics/tree/main/8.%20Debugging)     | Debugging Node.js app using built-in and third-party tools |
| 9. [Express.js](https://github.com/SKindij/Node.js-Basics/tree/main/Express)           | Introduction to Express.js web application framework       |
| 10. [MongoDB](https://github.com/SKindij/Database-Handbook-MongoDB-PostgreSQL/tree/main/MongoDB) | Using MongoDB database with Node.js              |
| 11. [WebSockets](https://github.com/SKindij/Node.js-Basics/tree/main/11.%20WebSockets) | Implementing real-time communication using WebSockets      |
| 12. [Authentication](https://github.com/SKindij/Node.js-Basics/tree/main/12.%20Authentication) | Implementing user authentication and authorization |
| 13. [Testing](https://github.com/SKindij/Node.js-Basics/tree/main/13.%20Testing) | Unit and integration testing in Node.js                          |
| 14. [Deployment](https://github.com/SKindij/Node.js-Basics/tree/main/14.%20Deployment)  | Deploying Node.js applications to production              |

## Basics: Introduction to Node.js and NPM

&emsp;Node.js runs the **V8 JavaScript engine** (_core of Google Chrome_) outside of the browser. This allows Node.js to be very performant.
When Node.js performs an I/O operation, like reading from the network, accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back. <br>
&emsp; ECMAScript standards can be used without problems, as you don’t have to wait for all your users to update their browsers.

#### Node.js has a vast number of libraries
&emsp;_npm helped the ecosystem of node.js proliferate and now the npm registry hosts almost 500.000 open source packages you can freely use;_
* Express - simple powerful way to create a web server. Its minimalist approach, focused on the core features of a server, is key to its success.
* Meteor - incredibly powerful full-stack framework to building apps with JS, sharing code on the client and the server. It integrates with frontend libs React, Vue and Angular. Can be used to create mobile apps as well.
* Next.js - a framework to render server-side rendered React applications.
* Micro - very lightweight server to create asynchronous HTTP microservices.
* Socket.io - real-time communication engine to build network applications.
* SvelteKit: Sapper - framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing. Offers SSR and more!
* Remix - fullstack web framework for building excellent user experiences for the web. It comes out of the box with everything you need to build modern web applications (both frontend and backend) and deploy them to any JS-based runtime environment (including Node.js).
* Fastify - fast and efficient web framework highly focused on providing the best developer experience with the least overhead and a powerful plugin architecture, inspired by Hapi and Express.


### Node Package Manager (NPM)
&emsp;``npm –version`` <br>
&emsp;How to Update NPM: ``npm install -g npm@latest`` <br>
&emsp;To get a list of all global packages, you can run the command: ``npm list -g`` <br>

&emsp;Updating is also made easy with the launcher: ``npm update <package-name>`` <br>
&emsp;In addition to regular downloads, you can specify any version of a package: ``npm install <package-name>@<version>`` <br>

#### Before installing the packages locally, we pre-initialize the project and create the **package.json** file.
&emsp; ***Note:*** If your code will use **Git** for version control, first create a **Git repository** and then run ``npm init``. Git automatically fills in the following fields for your **package.json file**: ``repository, bugs, and homepage``.

> >  go to the folder of your project in the console
> > > - _execute the_ ``npm init`` _command and answer the questions or just press_ <kbd>Enter</kbd>;
> > > - _or enter the command_ ``npm init -y`` _to quickly create package.json_;

the **package.json** file will contain all dependencies and scripts. _Here is an example of a shortened version of the standard project_:
```javascript
{
  "name": "app project",                    // by default, this is the name of the folder you're in
  "version": "0.5.7",                      // <major> "." <minor> (functions) "." <patch> (bugs)  https://semver.org/
  "description": "",                       // what does your module do
  "main": "index.js",                      // entry point for the application being loaded
  "scripts": { ….. },                     // this is the object for the necessary scripts
  "devDependencies": { ..…   },          // (it contains development tools)
  "dependencies": { ……. },               // (it is part of the program in working condition)
  "keywords": [],                       // an array of strings with useful terms to search the repository
  "author": "SKindij",                 // optional "Name \<Email\> (Website)"
  "license": "UNLICENSED"             // licensing options https://opensource.org/licenses
}
```

&emsp;Packages may not be necessary for your application in a production environment, but may be useful when writing code. <br>
You can also use flag abbreviations: 
> > > + ``npm i -D eslint`` - linting для JavaScript;
> > > + ``npm install -D node-sass`` - 

Additional commands in the console:
> > > + ``npm ls`` - _displays the entire dependency tree — your project's modules and the modules your dependencies depend on_;
> > > + _to list only the modules you have installed, without their dependencies, type the following in a shell_: ``npm ls --depth 0``;
> > > + ``npm outdated`` - use the following command to check if any modules can be updated;
> > > + _to update a specific program use the following (as an example)_: ``npm up eslint``;
> > > + _npm provides a command to detect potential security risks in your dependencies_: ``npm audit`` and then ``npm audit fix``;

&emsp;In local mode, packages are installed in the **node_modules** directory of the parent directory. If the project has a **package.json** file, then by running: ``npm install`` will install everything the project needs into the **node_modules** folder, creating it if it doesn't already exist. <br>

When you first install a package in a Node.js project, **npm** automatically creates a **package-lock.json** file.

- - -

#### Node.js = Runtime Environment + JavaScript Library 
``node –v`` <br>
> How to Update Node and NPM to the Latest Version: <br>
> > - ``npm cache clean -f``
> > - ``npm install -g n``
> > - ``n stable``

#### What can Node.js do?
 + can generate dynamic page content;
 + can create, open, read, write, delete and close files on the server;
 + can collect form data;
 + can add, delete and modify data in your database;

- - -

### Nodejs async programming
&emsp;Read [Asynchronous programming in JavaScript and Node.js](https://github.com/SKindij/Asynchronous-Programming-JS)...

- - -

### Command Line Application with Node.js
&emsp;CLIs are often the primary tools for automating tasks (deploying worker app, running tests, generating reports, migrating data, DevOps). If you do the same thing over and over again, chances are you can automate these steps with a script and save yourself a lot of time!
> 1. ``mkdir swork-cli`` - _create a new folder_
> 2. ``cd swork-cli`` - _and get into it_
> 3. ``npm init`` - _This utility will walk you through creating a package.json file._
> 4. ``mkdir bin`` - _create another folder in the project_

&emsp;_Variables and constants represent unique locations in memory that contain data that a program uses in its calculations._<br>
&emsp;**Environment Variables** are variables external to our program that are contained in the OS or container where the working program is running. They are stored in a local **.env** file that we should put in **.gitignore**.<br>
&emsp;These variables exist outside of your code, are part of your server environment, and can help you both optimize and make script and program execution more secure. Node.js provides an **env property** under the main module, that is, the process, which contains all the environment variables set when the process is started.

&emsp;When a **Node.js process** is loaded, it automatically provides access to all existing environment variables by creating an **envobject** as a property of a global object named **process**...<br>
&emsp;``process.env`` is a global object injected at runtime by your Node.js application to display the state of the environment your application is in at the time of initiation and use this at runtime.

> Common examples of configuration data stored in environment variables include:
> > + * HTTP port
> > + * database connection string
> > + * location of static files
> > + * endpoints of external services.

- - -

### How to Exit a Process in Node.js
&emsp;You need to manage various services for your application to work efficiently and properly.<br>
&emsp; **Exiting of Script Implicitly** - _You just need to wait for the script to complete. The code will automatically exit the process when it reaches the end and there is nothing left to process_.

&emsp;If the script hangs, press <kbd>ctrl</kbd>+<kbd>c</kbd> to exit the process. Or just close the terminal.

&emsp;You can use the ``exit()`` function if your process has not terminated properly to force it to terminate. <br>
&emsp; &emsp; &emsp; &emsp; &emsp; ``process.exit(code);`` - this function takes one parameter: different status codes (exit codes).
> **0** - _need to terminate the process when asynchronous operations are not in progress; default argument_; <br>
> **1** - _useful for fatal exceptions not handled by the domain_; <br>
> **3** - _for development where internal code cannot be properly analyzed_; <br>
> **4** - _used in the development case when the JavaScript code does not return a function value_; <br>
> **5** - _useful for fatal errors where the V8 engine cannot recover_; <br>
> **6** - _when the critical exception handler's internal function is set to no function and cannot be called_; <br>
> **7** - _if an error occurs during uncaught expectation processing_; <br>
> **9** - _when we do not provide a value for a required parameter_; <br>
> **10** - _JavaScript throws an error when calling Node.js initialization_; <br>
> **12** - _if you selected the wrong port number in the process_; <br>
> **13** - _when await is outside a function in top-level code, but the passed Promise has never been resolved_;

- - -

### API - Application Programming Interface 
&emsp; APIs are mechanisms that allow two software components to interact with each other using a set of definitions and protocols.
> _For example, a weather service system contains daily weather data. The weather app on your phone communicates with this system via an API and displays daily weather updates on your phone._

&emsp; In the context of an API, the word "application" refers to any piece of software with a specific function. An interface can be thought of as a service contract between two programs (how they interact using requests and responses). The API documentation provides information on how developers should structure these requests and responses.<br>
&emsp; API architecture: The application that sends the request is called the client, and the application that sends the response is called the server.
> _So, in the weather example, the service database is the server and the mobile app is the client._

&emsp; There are four different ways APIs work, depending on when and why they were created.
+ **SOAP** (Simple Object Access Protocol) is a simple object access protocol. The client and server exchange messages using XML. This is a less flexible API that was more popular in the past.
+ **RPC** are called the Remote Procedure Call System. The client executes a function (or procedure) on the server, and the server sends the result back to the client.
+ **Websocket** is another modern development that uses JSON objects to transfer data. Supports two-way communication between client programs and the server. The server can send callback messages to connected clients, making it more efficient than the REST API.
+ **REST** is currently the most popular and flexible API interfaces on the Internet. The client sends requests to the server in the form of data. The server uses this client input to run internal functions and returns the output back to the client.
> _Web API or Web Service API is an application processing interface between a web server and a web browser. All web services are APIs, but not all APIs are web services. A REST API is a special type of Web API that uses a standard architectural style._
> > REST – Representational State Transfer defines a set of functions such as GET, PUT, DELETE, etc. that clients can use to access server data. Clients and servers exchange data using the HTTP protocol. <br>
> > The main feature of the REST API is that such transfer is performed without saving state (servers do not save client data between requests). Client requests to the server are similar to the URLs you type in your browser to visit a website. The response from the server is plain data without the typical graphical representation of a web page.

