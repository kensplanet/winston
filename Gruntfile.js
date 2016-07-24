module.exports = function (grunt) {
	grunt.initConfig({
		clean: [
			"dist",
			"tmp"
		],

		useminPrepare: {
			html: 'index.html'
		},

		uglify: {
			templates: {
				files: {
					'.tmp/templates.min.js': ['.tmp/templates.js']
				}
			}
		},

		ngtemplates: {
			app: {
				src: 'templates/**/**.html',
				dest: '.tmp/templates.js',
				options: {
					htmlmin: {
						collapseWhitespace: true,
						removeComments: true, // Only if you don't use comment directives!
						removeRedundantAttributes: true,
						removeScriptTypeAttributes: true,
						removeStyleLinkTypeAttributes: true
					}
				}

			}
		},

		copy: {
			images: {
				files: [{
					expand: true,
					src: ['images/**'],
					dest: 'dist/'
				}]
			},
			index: {
				files: [{
					expand: true,
					src: ['index.html'],
					dest: '.tmp/'
				}]
			},
			fonts: {
				files: [{
					expand: true,
					cwd: 'bower_components/font-awesome/fonts/',
					src: ['*.*'],
					dest: 'dist/fonts/'

				}]
			},
			favicon: {
				files: [{
					expand: true,
					src: ['favicon.ico'],
					dest: 'dist/'

				}]
			},
			resources: {
				files: [{
					expand: true,
					src: ['resources/**'],
					dest: 'dist/'

				}]
			}
		},

		htmlmin: {
			index: {
				files: {
					'dist/index.html': '.tmp/index.html'
				},
				options: {
					collapseBooleanAttributes: true,
					collapseWhitespace: true,
					removeAttributeQuotes: true,
					removeComments: true, // Only if you don't use comment directives!
					removeEmptyAttributes: true,
					removeRedundantAttributes: true,
					removeScriptTypeAttributes: true,
					removeStyleLinkTypeAttributes: true
				}
			}
		},

		concat: {
			options: {
				separator: '\n'
			},
			dist: {
				src: ['dist/js/scripts.js', '.tmp/templates.min.js'],
				dest: 'dist/js/scripts.js'
			}
		},

		usemin: {
			html: ['.tmp/index.html']
		},

		compress: {
			dist: {
				options: {
					archive: 'dist/dist.zip',
					mode: 'zip'
				},
				files: [
					{
						expand: true,
						cwd: 'dist/',
						src: ['**/*']
					}
				]
			}
		}
	});

	grunt.registerTask('updateStackoverflowDetails', 'Update Stackoverflow Details', function () {
		var request = require('request');
		// Tell grunt this task is asynchronous.
		var done = this.async();
		request({
			uri: "https://api.stackexchange.com/2.2/users/5232935?site=stackoverflow&key=LUtq9xxjnksDU1D4ZDAjsg((",
			method: "GET",
			gzip: true
		}, function(error, response, body) {
			if (!error) {
				grunt.file.write('resources/stackoverflow.json', JSON.stringify(JSON.parse(body), null, 2));
				done();
			}
		});
	});

	grunt.registerTask('updateYoutubeDetails', 'Update Youtube Details', function () {
		var request = require('request');
		// Tell grunt this task is asynchronous.
		var done = this.async();
		request({
			uri: "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCKxN1Y0jssY7Iv8nzMR7FxQ&key=AIzaSyBxOvqHwexFvajH0if2ZetjABr8aYeD5mY",
			method: "GET"
		}, function(error, response, body) {
			if (!error) {
				grunt.file.write('resources/youtube.json', JSON.stringify(JSON.parse(body), null, 2));
				done();
			}
		});
	});

	grunt.registerTask('updateGithubDetails', 'Update Github Details', function () {
		var request = require('request');
		// Tell grunt this task is asynchronous.
		var done = this.async();
		request({
			uri: "https://api.github.com/users/kensplanet/followers",
			method: "GET",
			headers: {
				'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.84 Safari/537.36'
			}
		}, function(error, response, body) {
			if (!error) {
				grunt.file.write('resources/github.json', JSON.stringify(JSON.parse(body), null, 2));
				done();
			}
		});
	});

	grunt.registerTask('updateMetadata', 'Update Metadata', function () {
		var moment = require('moment-timezone');
		var metadata = {};
		metadata.lastModified = moment().tz("America/Toronto").format('MMMM Do YYYY, h:mm a');
		grunt.file.write('resources/metadata.json', JSON.stringify(metadata, null, 2));
	});

	// load plugins
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-angular-templates');
	// register default task
	grunt.registerTask('default', [
		'updateStackoverflowDetails',
		'updateYoutubeDetails',
		'updateGithubDetails',
		'updateMetadata',
		'clean',
		'copy',
		'useminPrepare',
		'concat:generated',
		'uglify:generated',
		'cssmin:generated',
		'ngtemplates',
		'uglify:templates',
		'concat:dist',
		'usemin',
		'htmlmin'
	]);
};