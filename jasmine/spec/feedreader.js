$( function() {

	describe( 'RSS Feeds', function() {
		/* This test is to make sure that the
		 * allFeeds variable has been defined and that it is not
		 * empty.
		 */
		it( 'feeds are defined', function() {
			expect( allFeeds ).toBeDefined();
			expect( allFeeds.length ).not.toBe( 0 );
		} );


		/* This test loops through each feed
		 * in the allFeeds object and ensures it has a URL defined
		 * and that the URL is not empty.
		 */
		it( 'feed has URL', function() {
			for ( var i = 0; i < allFeeds.length; i++ ) {
				expect( allFeeds[ i ].url ).toBeDefined();
				expect( allFeeds[ i ].url.length ).not.toBe( 0 );
			}
		} );

		/* This test loops through each feed
		 * in the allFeeds object and ensures it has a name defined
		 * and that the name is not empty.
		 */

		it( 'feed has Name', function() {
			for ( var i = 0; i < allFeeds.length; i++ ) {
				expect( allFeeds[ i ].name ).toBeDefined();
				expect( allFeeds[ i ].name.length ).not.toBe( 0 );
			}
		} );
	} );
} );



$( function() {

	describe( 'The menu', function() {
		/* this test ensures the menu element is
		 * hidden by default.
		 */
		it( 'Menu is hidden on load', function() {
			expect( $( 'body' ).attr( "class" ).split( ' ' )[ 0 ] ).toBe( "menu-hidden" );
		} );


		/* This test ensures the menu changes
		 * visibility when the menu icon is clicked. This test
		 * has two expectations: does the menu display when
		 * clicked and does it hide when clicked again.
		 */

		it( 'Menu changes visibilty when menu icon is clicked', function() {

			expect( document.body.classList ).toContain( 'menu-hidden' );
			$( ".menu-icon-link" ).click();
			expect( document.body.classList ).not.toContain( 'menu-hidden' );
			$( ".menu-icon-link" ).click();
			expect( document.body.classList ).toContain( 'menu-hidden' );
		} );
	} );
} );


$( function() {
	describe( 'Initial Entries', function() {

		/* this is a test that ensures when the loadFeed
		 * function is called and completes its work, there is at least
		 * a single .entry element within the .feed container.
		 */

		beforeEach( function( done ) {
			loadFeed( 0, done );
		} );
		it( 'At least one entry is in the feed list on load.', function() {
			expect( $( '.feed' ).length ).not.toBe( 0 );
		} );
	} );
} );
/* TODO: Write a new test suite named "New Feed Selection" */
$( function() {
describe( 'New Feed Selection', function() {
	/* this test ensures when a new feed is loaded
	 * by the loadFeed function that the content actually changes.
	 */
	var beforeLoad;
	var afterLoad;
	beforeEach( function( done ) {
		loadFeed( 0, function() {
			beforeLoad = $( '.feed' ).text();
			loadFeed( 1, function() {
				afterLoad = $( '.feed' ).text();
				done();
			} );
		} );
	} );
	it( 'Content updates on feed load.', function() {
		expect( afterLoad ).not.toBe( beforeLoad );
	} );
} );

} );
