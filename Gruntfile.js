module.exports = function(grunt) {
  grunt.initConfig({
    nodemon: {
      dev: {
        script: './17-Template-engine/GruntJS/server.js'
      }
    }
  })

  grunt.loadNpmTasks('grunt-nodemon')

  grunt.registerTask('default', ['nodemon'])
}