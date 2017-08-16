exports.config = {
    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,
    specs: ['todo-spec.js'],

    multiCapabilities: [{
        browserName: 'firefox',
        version: 'latest',
        platform: 'OS X 10.10',
        name: "osx-firefox",
        build: 'test'
    }, {
        browserName: 'chrome',
        version: '41',
        platform: 'Windows 7',
        name: "win-chrome",
        build: 'test'
    }, {
        browserName: 'chrome',
        version: '53',
        platform: 'Windows 8',
        name: "win-firefox",
        build: 'test'
    }, {
        browserName: 'MicrosoftEdge',
        version: '14.14393',
        platform: 'Windows 10',
        name: "win-edge",
        build: 'test'
    }, {
        browserName: 'safari',
        version: '10.0',
        platform: 'macOS 10.12',
        name: "osx-safari",
        build: 'test'
    }]
};