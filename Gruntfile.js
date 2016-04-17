module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      options: {
        livereload: true,
      },
      scripts: {
        files: [
          '**/*/*.css',
          '**/*/*.html',
          '**/*/*.js'
        ],
      },
    },
  });


  grunt.registerTask('default', ['watch']);
};
