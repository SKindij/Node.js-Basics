# basics-of-Node.js
&emsp;topic :radioactive: initial general basics of knowledge about Node.js


## Node Package Manager (NPM)
&emsp;``npm –version`` <br>
&emsp;How to Update NPM: ``npm install -g npm@latest`` <br>
&emsp;To get a list of all global packages, you can run the command: ``npm list -g`` <br>
&emsp;Updating is also made easy with the launcher: ``npm update <package-name>`` <br>
&emsp;In addition to regular downloads, you can specify any version of a package: ``npm install <package-name>@<version>`` <br>

&emsp;If your code will use **Git** for version control, first create a **Git repository** and then run ``npm init``. Git automatically fills in the following fields for your **package.json file**: ``repository, bugs, and homepage``.

```javascript
{
  "name": "SKrollo-app project",       // by default, this is the name of the folder you're in
  "version": "0.0.7",                 // <major> "." <minor> (functions) "." <patch> (bugs)     https://semver.org/
  "description": "",                       // what does your module do
  "main": "index.js",                      // entry point for the application being loaded
  "scripts": { ….. },                     // this is the object for the necessary scripts
  "devDependencies": { ..…   },          // this is an object for external packages
  "dependencies": { ……. },
  "keywords": [],                       // an array of strings with useful terms to search the repository
  "author": "SKindij",                 // optional "Name \<Email\> (Website)"
  "license": "UNLICENSED"             // licensing options https://opensource.org/licenses
}
```

&emsp;use the following command to check if any modules can be updated: ``npm outdated`` <br>

&emsp;In local mode, packages are installed in the **node_modules** directory of the parent directory. If the project has a **package.json** file, then by running: ``npm install`` will install everything the project needs into the **node_modules** folder, creating it if it doesn't already exist. <br>

&emsp;When you first install a package in a Node.js project, **npm** automatically creates a **package-lock.json** file.
___

## Node.js = Runtime Environment + JavaScript Library 
``node –v`` <br>
> How to Update Node and NPM to the Latest Version: <br>
> > - ``npm cache clean -f``
> > - ``npm install -g n``
> > - ``n stable``

What can Node.js do?
 + can generate dynamic page content;
 + can create, open, read, write, delete and close files on the server;
 + can collect form data;
 + can add, delete and modify data in your database;


___

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

&emsp;You can use the ``exit()`` function if your process has not terminated properly to force it to terminate.





___

## API - Application Programming Interface 



