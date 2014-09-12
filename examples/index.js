var eventStream = require( 'event-stream' ),
	mock = require( './../lib' );

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