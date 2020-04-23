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

## Node Package Manager

Node Package Manager(NPM) is a command line tool that installs, updates or uninstalls Node.js packages in your application.

```js
npm -v

// update npm
npm install npm -g
```

All the modules installed using NPM are installed under **node_modules** folder.

## Node.js Web Server

A **MIME type** (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled <kbd>audio/ogg</kbd> , or an image file <kbd>image/png</kbd>).

[List of MIME types](https://www.iana.org/assignments/media-types/media-types.xhtml)

## Node.js File System

**Reading File**

```js
var fs = require('fs')
// asynchronously
fs.readFile('test.txt', 'utf-8', function(err, data) {
    if (err) {
        throw err
    }
    console.log(data)
})

// synchronously
var data = fs.readFileSync('test.txt', 'utf-8')
console.log(data)
```

**Write File**

Use fs.writeFile() method to write data to a file. If file already exists then it overwrites the existing content otherwise it creates a new file and writes data into it.

Use fs.appendFile() method to append the content to an existing file.

```js
var fs = require('fs')

// creating & writing file
fs.writeFile('test.txt', 'Hello World!', function(err) {
    if (err) {
        throw err
    } else {
    	console.log('Write operation complete.') 
    }
})

// append file content
fs.appendFile('test.txt', 'append content', function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log('Append operation complete.')
    }
})
```

**Open File**

**Delete File**

```js
var fs = require('fs')
fs.unlink('test.txt', function() {
    console.log('delete operation complete.')
})
```

## Debugging Node.js

1. Core Node.js debugger
2. Node Inspector
3. Built-in debugger in IDEs

```js
// app.js
var fs = require('fs')
fs.readFile('test.txt', 'utf-8', function(err, data) {
  debugger
  if (err) {
    throw err
  }
  console.log(data)
})

// REPL
// deprecated
node debug app.js

node inspect app.js
watch('data')
watchers
```

Write `help` in debug mode in the Node.js console(REPL).



