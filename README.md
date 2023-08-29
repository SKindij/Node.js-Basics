# Node.js knowledge base

| Topic           | Description                                                                  |
|-----------------|------------------------------------------------------------------------------|
| Basics          | Introduction to Node.js and NPM                                 |
| Modules         | Creating and using modules in Node.js                                        |
| File System     | Reading and writing files using Node.js file system module                   |
| HTTP            | Creating HTTP server and client using Node.js HTTP module                    |
| Events          | Using events and event emitters in Node.js                                   |
| Streams         | Implementing streams and piping in Node.js                                   |
| Child Processes | Spawning child processes in Node.js                                          |
| Debugging       | Debugging Node.js applications using built-in and third-party tools          |
| Express.js      | Introduction to Express.js web application framework                         |
| MongoDB         | Using MongoDB database with Node.js                                          |
| WebSockets      | Implementing real-time communication using WebSockets in Node.js             |
| Authentication  | Implementing user authentication and authorization in Node.js                |
| Testing         | Unit and integration testing in Node.js                                      |
| Deployment      | Deploying Node.js applications to production                                 |

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

## ESLint
&emsp;To install the package only **for development** (locally) - ``npm install eslint --save-dev`` - because it is not needed in production. <br>
&emsp;To create a configuration file locally: ``./node_modules/.bin/eslint –init`` <br>
&emsp;Starts ESLint checking the specified file: ``./node_modules/.bin/eslint yourfile.js``. <br>

> One of the most popular linter settings is to use the Airbnb JavaScript Style.
> > ``npm install --save-dev eslint-config-airbnb``
> > > and add to your *.eslintrc* file _located at the root of your project_: ``{ "extends": "airbnb" }``
___

## CommonJS modules
&emsp;Think of modules the same as JavaScript libraries. It's like a set of features that you want to include in your app. 

&emsp;In the browser ecosystem, the use of JavaScript modules depends on the ``import`` and ``export`` operators; which load and export **EMCAScript (ES) modules**, respectively. By default, **Node.js** supports a module system called **CommonJS modules** (_treating each JavaScript file as a separate module_). To include (import) a module, the ``require('module name')`` function is used, and the variables and functions themselves are exported from this module using ``module.exports``. Starting with version **Node.js 14.0.0** supports **ES modules**.

Library authors can simply **enable ES modules** in a Node.js package by changing the file extension from **.js** to **.mjs**.
> Consider a short example. => Let's create two files and write the following in them:
> > + util.mjs
> > > ```javascript
> > >    export function doTesting(isElectricity, quantityGood) { 
> > >      if (isElectricity) { console.log(` < Testing quality of ${quantityGood} spare parts. > `);
> > >        let defectRate = 0.018;
> > >        console.log(` < Transfering ${Math.floor(quantityGood * (1-defectRate))} parts to the production workshop. > `);
> > >        return true
> > >      } else { console.log(" We cannot do this without electricity. ");
> > >        return false}; 
> > >    };  
> > >    export function doPacking(hasDeliveryArrived, quantityOrders) {
> > >      if (hasDeliveryArrived) { console.log(` < Packing assembled structures according to ${quantityOrders} orders. > `);  
> > >        return true
> > >      } else { console.log(" Unfortunately, the raw material has not yet been delivered from the supplier. ");
> > >        return false}; 
> > >    }; 
> > > ```
> > + app.mjs
> > > ```javascript
> > >    import {doTesting, doPacking} from './util.mjs'
> > >      let isElectricity = true
> > >      let quantityGoods = 300;
> > >      let hasDeliveryArrived = true;
> > >      let quantityOrders = 28;
> > >    doTesting(isElectricity, quantityGoods);
> > >    doPacking(hasDeliveryArrived, quantityOrders);
> > > ```

&emsp;Another way to **enable ES modules** in your project is to add a ``"type: module"`` field to the nearest **package.json** file. With this inclusion, Node.js treats all files in this package as ES modules, and you don't have to change the file extension to .mjs.

&emsp;Alternatively, you can install and configure a transpiler like **Babel** to compile ES module syntax to CommonJS syntax. Projects like **React** and **Vue** support ES modules because they use Babel under the hood to compile code.

&emsp;One limitation of using ``require()`` is that it loads modules ***synchronously***. _This means that the modules are loaded and processed one after the other._ As you might have guessed, this can cause some performance issues for large-scale applications with hundreds of modules. In this case, ``import`` can outperform ``require()`` because of its ***asynchronous*** behavior. <br>
&emsp;However, the synchronous nature of ``require()`` may not pose much of a problem for a small application using a couple of modules. <br>

&emsp;Beginners can find it useful and convenient to learn about **ES modules**, as they are becoming the standard format for defining modules in JavaScript, both client-side (_browser_) and server-side (_Node.js_).
| Core Modules |   Description                                              |
| ------------ | ---------------------------------------------------------- |
|   http       | creates an HTTP server in Node.js                          |
|   assert     | set of assertion functions useful for testing              |
|   fs         | used to handle file system                                 |
|   path       | includes methods to deal with file paths                   |
|   process    | provides information and control about the current Node.js process |
|   os         | provides information about the operating system            |
|   url        | module provides utilities for URL resolution and parsing   |
|   querystring| utility used for parsing and formatting URL query strings  |

&emsp;Third-party modules are modules that are available online using the Node Package Manager(NPM).

___

## An error in Node.js is any instance of the Error object.
&emsp;**Built-in error classes:**
  + ReferenceError (_an attempt to reach a non-existent reference_), 
  + RangeError (_occurs when a numeric variable or parameter is outside the permissible range_), 
  + TypeError (_occurs when an invalid type for a variable or parameter_), 
  + URIError (_!parameters_), 
  + EvalError (_occurs in global function eval_) 
  + SyntaxError (_occurs when parsing the source code of the eval function_).

> Here are some **examples of operational errors** in Node.js:
> > * The API request is not executed for some reason (for example, the server is down or the speed limit is exceeded).
> > * The user sends invalid data to the server, such as an invalid phone number or email address.
> > * The connection to the database is lost, possibly due to a faulty network connection.
> > * The OS cannot fulfill your request to open or write to the file.

> **Handling operational errors** includes considering whether an operation might fail, why it might fail, and what to do if it does.
> > 1. Report the error to the stack
> > 2. Repeat the operation
> > 3. Send the error to the client
> > 4. Interrupt the program.

&emsp;In addition to the built-in Error object classes, you can create your own to better represent the types of errors that may occur in your application. For example, you might have a **ValidationError** class for errors that occur when validating user input, a **DatabaseError** class for database operations, a **TimeoutError** class for operations that run out of assigned timeouts, and so on.

&emsp;Basically, **exceptions** are synchronous errors, and **rejections** are asynchronous errors.<br>
> >   There are four main error reporting strategies in Node.js: <br>
> >    \* try…catch blocks; * Callbacks; * Promises; * Event emitters.


___

## Nodejs async programming
&emsp;Read [Node.js uses asynchronous programming!](https://github.com/SKindij/Asynchronous-JS-Nodejs)...




___

## Command Line Application with Node.js
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

___

## How to Exit a Process in Node.js
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



___

## API - Application Programming Interface 
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










