module.exports = function (grunt) {

    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-ts");

    grunt.loadTasks("./tasks");

    grunt.initConfig({
        ts: {
            default : {
                src: [ 
                    "node_modules/phaser/typescript/phaser.d.ts",
                    "examples/**/*.ts", 
                ],
                options: {
                    noImplicitAny: true,
                    compile: true,
                    module: "amd",
                    target : "es5",
                    sourceMap: false    // We are not uglifying so.. not generating these
                }
            }
        },
        examples: {
            all: {
                options: {
                    base: "examples",
                    excludes: [
                        "_site", 
                        "assets", 
                        "states", 
                        "wip"
                    ]
                },
                src: [ "examples/**/*.js" ],
                dest: "examples/_site/examples.json"
            }
        },
        connect: {
            root: {
                options: {
                    keepalive: true,
                    hostname: "*",
                    port: 8001
                }
            }
        }
    });

    grunt.registerTask("default", [ "examples" ]);
};
