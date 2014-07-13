module.exports = function(grunt) {
  grunt.initConfig({   
    connect: {
        server: {
          options: {
            hostname: 'localhost',
            port: 8081,
            keepalive:true,
            open: {
              target: 'http://localhost:8081/index.html'
            }
          }
        }
     }
  });

  grunt.registerTask('default', ['web']);
  grunt.registerTask('web', ['connect']);

  grunt.loadNpmTasks('grunt-contrib-connect');
};