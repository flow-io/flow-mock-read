/**
*
*	STREAM: mock-read
*
*
*	DESCRIPTION:
*		- Provides a mock sink for readable streams.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	/**
	* FUNCTION: sink( stream, clbk )
	*	Mocks reading from a stream.
	*
	* @param {Stream} stream - stream to read from
	* @param {Function} clbk - callback to invoke after stream ends. The function should accept two arguments: [ error, data ].
	*/
	function sink( stream, clbk ) {
		var actual = [];
		stream.on( 'data', function onData( data ) {
			actual.push( data );
		});
		stream.once( 'end', function onEnd() {
			clbk( null, actual );
		});
		stream.once( 'error', function onError( error ) {
			clbk( error );
		});
	} // end FUNCTION sink()


	// EXPORTS //

	module.exports = sink;

})();