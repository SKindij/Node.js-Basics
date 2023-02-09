# basics-of-Node.js
topic :radioactive: initial general basics of knowledge about Node.js


## Node Package Manager (NPM)
``npm –version`` <br>
How to Update NPM: ``npm install -g npm@latest`` <br>
To get a list of all global packages, you can run the command: ``npm list -g`` <br>
Updating is also made easy with the launcher: ``npm update <package-name>`` <br>
In addition to regular downloads, you can specify any version of a package: ``npm install <package-name>@<version>`` <br>

If your code will use **Git** for version control, first create a **Git repository** and then run ``npm init``. Git automatically fills in the following fields for your **package.json file**: ``repository, bugs, and homepage``.

the **package.json** file will contain all dependencies and scripts <br>
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

___

## Node.js = Runtime Environment + JavaScript Library 
``node –v`` <br>
> How to Update Node and NPM to the Latest Version: <br>
> > - ``npm cache clean -f``
> > - ``npm install -g n``
> > - ``n stable``




___

## ESLint




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



