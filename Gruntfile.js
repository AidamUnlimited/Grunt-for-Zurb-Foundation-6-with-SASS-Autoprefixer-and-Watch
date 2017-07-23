/*
	1.	INSTALL NODE.JS & NPM
	2.	IN THE PROJECT ROOT DIRECTORY, RUN npm install
	3.	THIS WILL INSTALL ALL DEPENDANCIES LISTED IN package.json

		###############################################
		IF THIS DOESN'T WORK, INSTALL THEM MANUALLY:
	
		npm install grunt --save-dev
		npm install --save-dev grunt-sass
		npm install --save-dev load-grunt-tasks
		npm install grunt-postcss --save-dev
		npm install grunt-postcss autoprefixer
		npm install grunt-contrib-watch --save-dev
		###############################################

	4. RUN grunt
*/


module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-watch');
 
	grunt.initConfig({
		sass: {
			options: {
				sourceMap: false,
				outputStyle: 'compact'
			},
			dist: {
				files: {
					'css/app.css': 'scss/app.scss'
				}
			}
		},
		postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({ browsers: ['> 0%', 'last 4 versions'] })
                ]
            },
            dist: {
                src: 'css/app.css'
            }
        },
		watch: {
		  css: {
			files: '**/*.scss',
			tasks: ['sass', 'postcss:dist']
		  }
		}
	});
	 
	grunt.registerTask('default',['watch']);

};