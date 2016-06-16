module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    freemarker: {
      options: {
        views : 'views',
        out : '.'
      },
      src: "mocks/*.js"
    }
  });

  grunt.loadNpmTasks('grunt-freemarker');

  // Default task(s).
  grunt.registerTask('default', ['freemarker']);

};
