# phantomify

[![Build Status](https://secure.travis-ci.org/Gozala/phantomify.png)](http://travis-ci.org/Gozala/phantomify)

Phantomify lets you headlessly [browserify][]!!

[Browserify][] does a great job of letting you concentrate on writing reusable
modules that work both on [nodejs][] & browsers instead of spending efforts
on bikeshidding module format. [PhantomJS][] on the other hand is headless
[webkit][] browser that is [well supported](http://about.travis-ci.org/docs/user/gui-and-headless-browsers/)
by a [travis-ci][]. [Phantomify][] composes this great tools together to
let you run node module in a headless browser environment.

## Usage

    phantomify ./path/to/module.js

[Phantomify][] will make a browserify bundle for the given module path
and then will load & execute it in an empty "about:blank" page in a
[PhantomJS][].


Sometimes "about:blank" is just not good enough there for [Phantomify][]
can be given second argument for the page URL where code should be executed:

    phantomify ./path/to/module.js http://localhost:8080/


## Install

    npm install -g phantomify

[Browserify]:https://github.com/substack/node-browserify
[nodejs]:http://nodejs.org/
[PhantomJS]:https://github.com/ariya/phantomjs
[webkit]:http://webkit.org/
[travis-ci]:http://travis-ci.org/
[Phantomify]:https://github.com/Gozala/phantomify
