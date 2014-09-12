flow-mock-read
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Provides a mock sink for readable streams.


## Installation

``` bash
$ npm install flow-mock-read
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To create a mock sink (writeable) stream,

``` javascript
var mock = require( 'flow-mock-read' );
```

The method accepts two input arguments: a readable stream and a callback to invoke after reading all data values.

``` javascript
var eventStream = require( 'event-stream' );

// Simulate some data:
var data = new Array( 100 );

for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.random()*100;
}

// Create a readable stream:
var readStream = eventStream.readArray( data );

// Start streaming...
mock( readStream, function onEnd( error, data ) {
	console.log( JSON.stringify( data ) );
});
```



## Examples

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Notes

The mock implements the [classic stream](https://github.com/substack/stream-handbook#classic-streams) paradigm in Node; e.g., using event listeners.


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ open reports/coverage/lcov-report/index.html
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/flow-mock-read.svg
[npm-url]: https://npmjs.org/package/flow-mock-read

[travis-image]: http://img.shields.io/travis/flow-io/flow-mock-read/master.svg
[travis-url]: https://travis-ci.org/flow-io/flow-mock-read

[coveralls-image]: https://img.shields.io/coveralls/flow-io/flow-mock-read/master.svg
[coveralls-url]: https://coveralls.io/r/flow-io/flow-mock-read?branch=master

[dependencies-image]: http://img.shields.io/david/flow-io/flow-mock-read.svg
[dependencies-url]: https://david-dm.org/flow-io/flow-mock-read

[dev-dependencies-image]: http://img.shields.io/david/dev/flow-io/flow-mock-read.svg
[dev-dependencies-url]: https://david-dm.org/dev/flow-io/flow-mock-read

[github-issues-image]: http://img.shields.io/github/issues/flow-io/flow-mock-read.svg
[github-issues-url]: https://github.com/flow-io/flow-mock-read/issues