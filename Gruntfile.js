module.exports = function (grunt) {
    grunt.initConfig({
        pkg : grunt.file.readJSON("package.json"),
        browserify : {
            "jquery-linked.js" : ["lib/app.js"]
        },
        watch : {
            "files" : ["lib/*.js"],
            "tasks" : ["browserify", "uglify"]
        },
        uglify: { 
            dest : {
                files: {
                    "jquery-linked.min.js": ["jquery-linked.js"]
                }
            }
        }
    });

    grunt.registerTask("default", ["browserify", "uglify"]);

    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-uglify");
};
