const glob = require('glob');
const fsPath = require('path');
const fs = require('fs');

const outputDir = './output';
const testsToRun = '../test/*_test.js';

exports.config = {
  tests: testsToRun,
  timeout: 10000,
  output: outputDir,
  multiple: getFeatureNames(),
  helpers: {
    Puppeteer: {
      url: 'http://www.whiteboxitsolutions.com',
      show: false,  // headless by default to run on CircleCI unix box
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
      reportTitle: 'CodeceptJS Parallelised Example Test Report',
      inlineAssets: true
    }

  },
  name: 'codeceptjs-example'
};


function getFeatureNames() {

  let testFiles = {};

  glob.sync(fsPath.resolve(__dirname, testsToRun)).forEach((file) => {

    // Collect features to grep for and test via 'codeceptjs run-multiple'
    let featureName;
    fs.readFileSync(file).toString().split('\n').forEach(function (line) {
      if (line.indexOf('Feature(') > -1) {
        featureName = (line.split('\'')[1]).replace('\\', '');
      }
    });

    // Build test runners that only run single features
    testFiles[featureName] = {
      'grep': '(?=.*' + featureName + ')',
      'browsers': ['chrome']
    };
  });

  return testFiles;
}

function escapeRegExp(text) { // eslint-disable-line no-unused-vars
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
