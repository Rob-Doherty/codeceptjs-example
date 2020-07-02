# codeceptjs-example
Example usage of CodeceptJS test framework


## DONE:
- setup of CodeceptJS
    - Google Puppeteer
    - Mochawesome reporting
- setup of linting (Eslint) = `yarn lint`
    - auto triggered on pre-commit
- basic example = `yarn test`
- codecept.conf.js usage
- page object pattern example
- parallelised example = `yarn test-run-multiple`
    - shards by 'Feature' (i.e. by test file)
- CircleCI test pipelines (`yarn_lint`, `yarn_test`, `yarn_test_parallel`)


## TODO:
- Page Fragments for menu
- Custom Steps
- Custom Helper
- Extend Hooks
- Mobile Testing
- WebdriverIO for multiple browsers
