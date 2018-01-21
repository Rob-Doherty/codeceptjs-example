const outputDir = './output';

exports.config = {
  tests: './test/*_test.js',
  timeout: 10000,
  output: outputDir,
  helpers: {
    Puppeteer: {
      url: 'http://www.whiteboxitsolutions.com',
      show: true,
      waitForAction: 500
    }
  },
  include: { I: './steps_file.js' },
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