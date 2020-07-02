const outputDir = './output';

exports.config = {
  tests: '../test/*_test.js',
  timeout: 10000,
  output: outputDir,
  helpers: {
    Puppeteer: {
      url: 'http://www.whiteboxitsolutions.com',
      show: false,
      waitForAction: 500,
      chrome: {
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox'
        ]
      }
    }
  },
  include: {
    I: '../steps_file.js',
    homePage: '../test/pages/HomePage.js'
  },
  bootstrap: false,
  mocha: {
    reporterOptions: {
      reportDir: outputDir,
      reportName: 'test_report',
      reportTitle: 'CodeceptJS Example Test Report',
      inlineAssets: true
    }

  },
  name: 'codeceptjs-example'
};
