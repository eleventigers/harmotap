module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less : {
      development: {
        options: {
          paths: ["less"]
        },
        files: {
          "css/<%= pkg.name %>.css": "less/harmotap.less"
        }
      },
      production: {
        options: {
          paths: ["less"],
          yuicompress: true
        },
        files: {
          "css/<%= pkg.name %>.min.css": "less/harmotap.less"
        }
      }
    },
    watch: {
      files: ['less/*.less'],
      tasks: ['less']
    }
  });


  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['less']);

};