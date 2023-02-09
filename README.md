# basics-of-Node.js
topic :radioactive: initial general basics of knowledge about Node.js


## Node Package Manager (NPM)
``npm –version`` <br>
How to Update NPM: ``npm install -g npm@latest`` <br>
To get a list of all global packages, you can run the command: ``npm list -g`` <br>
Updating is also made easy with the launcher: ``npm update <package-name>`` <br>
In addition to regular downloads, you can specify any version of a package: ``npm install <package-name>@<version>`` <br>

If your code will use **Git** for version control, first create a **Git repository** and then run ``npm init``. Git automatically fills in the following fields for your **package.json file**: ``repository, bugs, and homepage``.

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

use the following command to check if any modules can be updated: ``npm outdated`` <br>

In local mode, packages are installed in the **node_modules** directory of the parent directory. If the project has a **package.json** file, then by running: ``npm install`` will install everything the project needs into the **node_modules** folder, creating it if it doesn't already exist. <br>

When you first install a package in a Node.js project, **npm** automatically creates a **package-lock.json** file.
___

## Node.js = Runtime Environment + JavaScript Library 
``node –v`` <br>
> How to Update Node and NPM to the Latest Version: <br>
> > - ``npm cache clean -f``
> > - ``npm install -g n``
> > - ``n stable``




___

## ESLint
To install the package only **for development** (locally) - ``npm install eslint --save-dev`` - because it is not needed in production. <br>
To create a configuration file locally: ``./node_modules/.bin/eslint –init`` <br>
Starts ESLint checking the specified file: ``./node_modules/.bin/eslint yourfile.js``. <br>

> One of the most popular linter settings is to use the Airbnb JavaScript Style.
> > ``npm install --save-dev eslint-config-airbnb``
> > > and add to your *.eslintrc* file _located at the root of your project_: ``{ "extends": "airbnb" }``
___

## CommonJS modules





___

## Error in Node.js







___

## Nodejs async programming






___

## Command Line Application with Node.js






___

## How to Exit a Process in Node.js



___

## API - Application Programming Interface 



