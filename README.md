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

