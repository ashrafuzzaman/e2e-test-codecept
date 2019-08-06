exports.config = {
  output: 'reports',
  helpers: {
    Puppeteer: {
      url: 'http://cmp-localdev.newscred.com:3000',
      show: true,
      waitForNavigation: ['networkidle2', 'domcontentloaded'],
      chrome: {
        ignoreHTTPSErrors: true
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'e2e-test-codecept'
}