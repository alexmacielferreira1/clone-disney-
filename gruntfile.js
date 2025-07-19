module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files:{
                    'main.css': 'main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files:{
                    'main.min.css': 'main.less'
                }
            }
        },

        sass: {
            dist: {
                options:{
                    style: 'compressed'
                },
                files: {
                     'dist/css/main.css': 'src/styles/main.scss'
                }
            }
        },
    concurrent: {
        target: ['less', 'sass']
    }
    })

    grunt.registerTask('olaGrunt', function() {
        console.log('olá Grunt');
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('default', ['concurrent']);
}