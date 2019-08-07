"use strict";
(function () {
	let
		array = [ 'Mosby', 'Ragnar', 'Atom' ],
		list = document.getElementById( 'list' ),
		input = document.querySelector( '#input' ),
		button = document.querySelector( '#addButton' );

	function addItem() {
		let value = input.value;

		if( value.length < 1 ) {
			return ;
		}

		array.push( value );
		input.value = '';
		console.log( array );

		addItemInDom( value, list.length - 1 );

		renderList();
		saveToLocalStorage();
	}

	function removeItem( index ) {
		delete array[ index ];

		renderList();
		saveToLocalStorage();
	}

	function addItemInDom( item, index ) {
		let listItem = document.createElement( 'li' ),
			removeButton = document.createElement( 'button' );
		listItem.setAttribute( "data-index", index );
		listItem.innerHTML = item;
		list.appendChild( listItem );

		removeButton.innerHTML = 'X';
		removeButton.addEventListener( 'click', function() {
			removeItem( index );
		} );

		list.appendChild( removeButton );
	}

	function renderList() {
		list.innerHTML = '';
		array.forEach( ( element, index ) => {
			addItemInDom( element, index );
		} );
	}

	function saveToLocalStorage() {
		localStorage.setItem( 'ragnar_Items', JSON.stringify( list ) );
	}

	button.addEventListener( 'click', addItem );

	renderList();
}());