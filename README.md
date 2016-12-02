# PKM 

This is web application of UGCC community of parish Cyril and Methodius in Ivano-Frankivsk, Ukraine.

This application provides:

  - Separate client based on Angular 2 framework
  - Separate node.js server, based on Express framework. 
  - Public API of server for future(like mobile applications)
  - Client and server parts of application based on Typescript language. 

### Tech stack

PKM uses a number of open source projects to work properly:

* [Angular2] - HTML enhanced for web apps!
* [Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework

### Installation steps for demo purposes

```sh
$ git clone [git@github.com:yvelianyk/PKM.git]
$ cd PKM
$ bash ./run-server.sh
```
run-server.sh script starts client and server parts of application with installing all dependencies.
After finishing install app available on http://localhost:3000
API Server available on port 3002.

### Installation steps for development purposes

###### Developer must working with project separately for server and client side of application due to properly working of typescript compiler.

```sh
$ git clone [git@github.com:yvelianyk/PKM.git]
$ cd PKM
$ bash ./run-for-dev.sh
```
run-for-dev.sh script automatically running client. Also, this script run watchers for server file changes. For debugging, developer must run server manually in IDE.
After finishing install app available on http://localhost:3000
API Server available on port 3002.

### Todos

 - Write Tests
 - Implement webpack build for production
 - add section in this README file about manually install project

License
----

MIT



[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [node.js]: <http://nodejs.org>
   [Bootstrap]: <https://startbootstrap.com/>
   [express]: <http://expressjs.com>
   [Angular2]: <https://angular.io/>

