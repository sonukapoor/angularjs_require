# AngularJS & RequireJS TodoMVC Example

This is a simple application used to demonstrate the usage of RequireJS's r.js. It will fetch js libraries from the CDN. 
Part of the optimization is to embedd the RequireJS as well. 

## Optimze your JS files. 

Optimization is done through the r.js and the supplied build.js. You can see a full list of parameters supported for the build file here:

https://github.com/requirejs/r.js/blob/master/build/example.build.js

The build.js is optimized using r.js by issuing following command from the root directory of your project. 

```
node -o build.js
```

## Getting started

The below steps will help you to install the necessary plugins and start the site. 
First install the necessary modules using npm:

```
npm install
```

Then run the following command to run the site.

```
lite-server
```
