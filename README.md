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

___

## Error in Node.js







___

## Nodejs async programming
Read [Node.js uses asynchronous programming!](https://github.com/SKindij/Asynchronous-JS-Nodejs)...




___

## Command Line Application with Node.js






___

## How to Exit a Process in Node.js



___

## API - Application Programming Interface 



