# node-learn
learn node

[学习地址](https://www.tutorialsteacher.com/nodejs/nodejs-tutorials)

## 01-Node.js Console

RERPL：Read-Eval-Print-Loop.

If you need to write multi line JavaScript expression or function then just press **Enter** whenever you want to write something in the next line as continuation of your code.

To exit from the REPL terminal, press **Ctrl + C** twice or write .exit and press Enter.

>  `.help`：Display help on all the commands.

## 03-Node.js Modules

**Node.js Module Types**

Node.js includes three types of modules:

1. Core Modules
2. Local Modules
3. Third Party Modules

**Node.js Core Modules**

The core modules include bare minimum functionalities of Node.js. These core modules are compiled into its binary distibution and load automatically when Node.js process starts. However, you need to import the core module first in order to use it in your application.

| Core Module | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| http        | http module includes classes, methods and events to create Node.js http server. |
| url         | url module includes methods for URL resolution and parsing.  |
| querystring | querystring module includes methods to deal with query string. |
| path        | path module includes methods to deal with file paths.        |
| fs          | fs module includes classes, methods, and events to work with file I/O. |
| util        | util module includes utility functions useful for programmers. |

**Loading Core Modules**

```js
var module = require('module_name')
```

## 05-Export Module

The **module.exports** or **exports** is a special object which is includes in every JS file in the Node.js application by default.  *module* is a varible that represents current module and *exports* is an object that will be exposed as a module. So, whatever you assign to *module.exports* or *exports*, will be exposed as a module.

```js
console.log(module.exports === exports) // true
```

**Load Module from Separate Folder**

Use the full path of a module file where you have exported it using module.exports. For example, if log module in the log.js is stored under "utility" folder under the root folder of your application then import it as shown below.

```js
// app.js
var log = require('./utility/log.js')
```

In the above example, **.** is for folder and then specify exact path of your module file. Node.js also allows us to specify the path to the folder widthout specifing file name. For example, you can specify only utility folder widthout specifing log.js as shown below. 

```js
// app.js
var log = require('./utility')
```

In the above example, Node will search for a package definition file called package.json inside utility folder. This is because Node assumes that this folder is a package and will try to look for a package definition. The package.json file should be in a module derectory. The package.json under utility folder specifies the file name using "main" key as below.

```js
// ./utility/package.json
{
    "name": "log",
    "main": "./log.js"
}
```

Now, Node.js will find log.js file using *main* entry in package.json and import it.

> If package.json file does not exist then it will look for index.js file as a module file by default.