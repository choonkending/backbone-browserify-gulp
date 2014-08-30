Backbone-browserify-gulp
=======================

A simple way to start making a Backbone App with browserify and gulp!

This makes it easier to run tasks, build apps without worrying about dependencies!

Notes:
------

1. Why use watchify instead of gulp-watch?
Gulp's watch cannot recognize the dependencies of each Browserify bundle so every time you save changes to your file, Gulp has to recompile all your browserify bundles. Watchify is a persistent browserify bundler that watches files for changes and only rebuilds what it needs to!