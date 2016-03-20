module.exports = function (grunt) {
	var path = require('path');
	var root = path.normalize(__dirname);
	grunt.initConfig({
		less: {
			development: {
				options: {
					paths: ["less"]
				},
				files: {
					'./css/styles.css': "./less/boot.less"
				}
			}
		},
		watch: {
			less: {
				files: ['./less/*.less', './less/*/*.less'],
				tasks: ['less'],
				options: {
					atBegin: true,
					livereload: {
						files: ['./css/styles.css'],
						options: {
							livereload: 35729,
							nospawn: true,
						},
					}
				}
			},
			ts: {
				files: ['./ts/**/*.ts'],
				tasks: ['typescript'],
				options: {
					interrupt: true,
					debounceDelay: 250,
					atBegin: true,
				}
			},
		},
		typescript: {
			base: {
				src: ['ts/**/*.ts'],
				dest: 'js/script.js',
				options: {
					module: 'amd', // Specify module code generation: "commonjs" (default), "amd", "system" or "umd"
					target: 'es5', // Specify ECMAScript target version: 'ES3' (default), 'ES5', or 'ES6'
					sourceMap: true,
					declaration: true,
					removeComments: true,
				}
			}
		}
	});


	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-mincss');
	grunt.loadNpmTasks('grunt-typescript');

	grunt.registerTask('buildcss', ['less']);
	grunt.registerTask('watchless', ['watch:less', 'watch:livereload']);
	grunt.registerTask('watchts', ['watch:ts']);
	grunt.registerTask('default', ['buildcss']);

};