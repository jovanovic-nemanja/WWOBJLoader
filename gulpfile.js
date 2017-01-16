'use strict';

var fs = require( 'fs' );

var gulp = require( 'gulp' );
var clean = require( 'gulp-clean' );
var rename = require( 'gulp-rename' );
var concat = require( 'gulp-concat' );
var uglify = require( 'gulp-uglify' );
var header = require( 'gulp-header' );
var replace = require( 'gulp-replace-task' );
var jsdoc = require( 'gulp-jsdoc3' );

var DIR_BUILD = 'build/';

gulp.task( 'bundle-objloader2', function () {
	return gulp.src(
			[
				'src/loaders/OBJLoader2.js',
				'src/loaders/OBJLoader2Parser.js',
				'src/loaders/OBJLoader2MeshCreator.js'
			]
		)
		// all input files are concatenated and then saved to OBJLoader2.js
		.pipe( concat( 'OBJLoader2.js' ) )
		.pipe( header( "/**\n  * @author Kai Salmen / www.kaisalmen.de\n  */\n\n'use strict';\n\n" ) )
		.pipe( gulp.dest( DIR_BUILD ) )

		// create minified version
		.pipe( uglify() )
		.pipe( rename( { basename: 'OBJLoader2.min' } ) )
		.pipe( gulp.dest( DIR_BUILD ) );
} );


gulp.task( 'bundle-wwobjloader2', function () {

	return gulp.src(
			[
				'src/loaders/WWOBJLoader2.js',
				'src/loaders/WWOBJLoader2Director.js'
			]
		)
		.pipe( concat( 'WWOBJLoader2.js' ) )
		.pipe( header( "/**\n  * @author Kai Salmen / www.kaisalmen.de\n  */\n\n'use strict';\n\n" ) )
		.pipe( gulp.dest( DIR_BUILD ) )

		// create minified version
		.pipe( uglify() )
		.pipe( rename( { basename: 'WWOBJLoader2.min' } ) )
		.pipe( gulp.dest( DIR_BUILD ) );
} );

gulp.task( 'doc', function ( cb ) {
	var config = require('./jsdoc.json');
	gulp.src(
			[
				'README.md',
				'src/loaders/OBJLoader2.js',
				'src/loaders/OBJLoader2Parser.js',
				'src/loaders/OBJLoader2MeshCreator.js',
				'src/loaders/WWOBJLoader2.js',
				'src/loaders/WWOBJLoader2Director.js'
			],
			{
				read: false
			}
		)
		.pipe( jsdoc( config, cb ) );
});

gulp.task( 'clean-build', function () {
	return gulp.src(
			'build/doc',
			{
				read: false
			}
		)
		.pipe( clean() );
});

gulp.task( 'default', [ 'clean-build', 'bundle-objloader2', 'bundle-wwobjloader2', 'doc' ] );
