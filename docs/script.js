"use strict";
(function () {
	let
		list = [],
		input = document.querySelector( '#input' ),
		button = document.querySelector( '#addButton' );

	button.addEventListener( 'click', function() {

		let value = input.value;

		if( value.length < 1 ) {
			return ;
		}

		list.push( value );
		input.value = '';
		console.log( list );
	} );

}());