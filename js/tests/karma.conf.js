module.exports = function(config) {
    config.set({
        frameworks: ['mocha'],

        files: [
            "vendor/mocha/mocha.js",
            "vendor/mocha/chai.js",
            "vendor/mocha/sinon-chai.js",
            "vendor/sinon-1.7.3.js",

            "../jquery-min-1.8.1.js",

             "../functions.js",
//             "../asmcrypto.js",
             "../jquery.jscrollpane.min.js",
             "../mega.js",

             "../vendor/chat/strophe.js",
             "../vendor/chat/strophe.disco.js",
             "../vendor/chat/strophe.jingle.js",
             "../vendor/chat/strophe.jingle.session.js",
             "../vendor/chat/strophe.jingle.sdp.js",
             "../vendor/chat/strophe.jingle.adapter.js",
             "../vendor/chat/strophe.muc.js",
             "../vendor/chat/strophe.roster.js",
             "../vendor/chat/wildemitter.patched.js",
             "../vendor/chat/hark.patched.js",
             "../vendor/Autolinker.js",

             "../chat/rtcSession.js",

             "../chat/urlFilter.js",
             "../chat/emoticonsFilter.js",
             "../chat/capslockFilterDemo.js",

             "../chat/karere.js",
             "../chat/chat.js",

            "src/helpers/functionsmocker.js",
            "src/helpers/eventmocker.js",
            "src/helpers/fixtures.js",
            "src/helpers/objectmocker.js",
            "src/helpers/kareremocker.js",
            "src/helpers/strophemocker.js",
            "src/helpers/utils.js",
             "../tests/src/unit/*.js",
             "../tests/src/integration/*.js",

            { pattern: 'src/unit/fixtures/**/*.html', included: false, served: true }

        ],
        // coverage reporter generates the coverage
        reporters: ['progress', 'coverage'],

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            '../chat/*.js': ['coverage'],
            'src/helpers/*.js': ['coverage']
        },

//        browsers: ['PhantomJS_custom'],

        // you can define custom flags
        customLaunchers: {
            'PhantomJS_custom': {
                base: 'PhantomJS',
                options: {
                    windowName: 'my-window',
                    settings: {
                        webSecurityEnabled: false
                    }
                },
                flags: [
                    '--web-security=false',
                    '--local-to-remote-url-access=true'
                ]
            }
        },

        // optionally, configure the reporter
        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        },
        client: {
            mocha: {
                ui: 'bdd'
            }
        }
    });
};