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
    copy: {
      main: {
        files: [
          {expand: true, flatten: true, src: ['css/*'], dest: 'docs/assets/css/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['bootstrap/docs/assets/css/*'], dest: 'docs/assets/css/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['fonts/*'], dest: 'docs/assets/fonts/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['bootstrap/docs/assets/ico/*'], dest: 'docs/assets/ico/', filter: 'isFile'}, 
          {expand: true, flatten: true, src: ['bootstrap/docs/assets/img/examples/*'], dest: 'docs/assets/img/examples', filter: 'isFile'},
          {expand: true, flatten: true, src: ['bootstrap/docs/assets/js/**'], dest: 'docs/assets/js/', filter: 'isFile'}  
        ]
      }
    },
    watch: {
      files: ['less/*.less', 'docs/**.html'],
      tasks: ['less', 'copy']
    }
  });


  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['less', 'copy']);

};