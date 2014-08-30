Backbone-browserify-gulp
=======================

A simple way to start making a Backbone App with browserify and gulp!

This makes it easier to run tasks, build apps without worrying about dependencies!

Notes:
------

1. Why use watchify instead of gulp-watch?
Gulp's watch cannot recognize the dependencies of each Browserify bundle so every time you save changes to your file, Gulp has to recompile all your browserify bundles. Watchify is a persistent browserify bundler that watches files for changes and only rebuilds what it needs to!

2. gulp build runs the markup (for index.html), base( concatenation and minification of lib/*.js ), and scripts (main logic for application) and chucks them into the dist folder. The gulpfile.js can be improved further in order, especially the watch, build processes. For example, reload the browser after watchify-ing something.

3. Why not npm install backbone and underscore? Backbone already has a hard dependency on Underscore, npm installing both of them will allow us to require() both of them, but we will have an extra underscore module under node_modules. I am pretty sure there is a way around this. At the moment, this should suffice as a simple proof of concept. More improvements later :)

4. Currently no css yet. Maybe Sass when I have the time. Aight? 


How to run:
-----------
You need npm to be able to install anything, so get that installed son. 

1. npm install
2. gulp build
3. open /index.html


Extra extra stuff:
------------------
Let me know if you got any ideas to improve this repository. 
