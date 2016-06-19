module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    freemarker: {
      options: {
        views : 'views',
        out : '.'
      },
      src: "mocks/*.js"
    },
    sass : {
      dist : {
        options : {
          style : 'expanded',
          loadPath : 'node_modules'
        },
        files : {
          'styles/style.css': 'styles/style.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-freemarker');
  grunt.loadNpmTasks('grunt-contrib-sass');
  
  // Default task(s).
  grunt.registerTask('default', ['freemarker']);

  grunt.registerTask('templates', ['freemarker']);
  grunt.registerTask('styles', ['sass']);

};
