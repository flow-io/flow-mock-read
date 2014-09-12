
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Event stream:
	eventStream = require( 'event-stream' ),

	// Event emitter:
	EventEmitter = require( 'events' ).EventEmitter,

	// Module to be tested:
	mock = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'flow-mock-read', function tests() {
	'use strict';

	it( 'should export a function', function test() {
		expect( mock ).to.be.a( 'function' );
	});

	it( 'should read from a readable stream', function test( done ) {
		var data = new Array( 100 ),
			readable;

		for ( var i = 0; i < data.length; i++ ) {
			data[ i ] = Math.random()*100;
		}

		readable = eventStream.readArray( data );

		mock( readable, onEnd );

		function onEnd( error, actual ) {
			if ( error ) {
				assert.notOk( true );
			} else {
				assert.deepEqual( data, actual );
			}
			done();
		}
	});

	it( 'should listen for error events', function test( done ) {
		var stream = new EventEmitter();
		mock( stream, onError );
		stream.emit( 'error', 'Error' );
		function onError( error, data ) {
			if ( error ) {
				assert.ok( true );
			} else {
				assert.notOk( true );
			}
			done();
		}
	});

});