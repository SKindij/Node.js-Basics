# Creating and using modules in Node.js
> _Think of modules the same as JS libraries. It's like a set of features that you want to include in your app._

## What are modules in Node.js?

&emsp;In the browser ecosystem, the use of JavaScript modules depends on the ``import`` and ``export`` operators; which load and export **EMCAScript (ES) modules**, respectively.\
&emsp;By default, **Node.js** supports a module system called **CommonJS modules** (_treating each JS file as a separate module_). To include (import) a module, the ``require('module name')`` function is used, and the variables and functions themselves are exported from this module using ``module.exports.name`` or ``exports.name``.\
&emsp;Starting with version **14.0.0 Node.js** supports **ES modules**.


## How to use a module in Node.js?

Project authors can simply **enable ES modules** in a Node.js package by changing the file extension from **.js** to **.mjs**.

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

&emsp;Another way to **enable ES modules** in your project is to add a ``"type: module"`` field to the nearest **package.json** file. With this inclusion, Node.js treats all files in this package as ES modules, and you don't have to change the file extension to .mjs.\
&emsp;Alternatively, you can install and configure a transpiler like **Babel** to compile ES module syntax to CommonJS syntax. Projects like **React** and **Vue** support ES modules because they use Babel under the hood to compile code.

&emsp;One limitation of using ``require()`` is that Node.js loads modules **synchronously**. _This means that the modules are loaded and processed one after the other._ As you might have guessed, this can cause some performance issues for large-scale applications with hundreds of modules. In this case, ``import`` can outperform ``require()`` because of its ***asynchronous*** behavior. <br>
&emsp;However, the synchronous nature of ``require()`` may not pose much of a problem for a small application using a couple of modules. <br>

&emsp;Beginners can find it useful and convenient to learn about **ES modules**, as they are becoming the standard format for defining modules in JS, both client-side (_browser_) and server-side (_Node.js_).

## What are built-in modules in Node.js?

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
