exports.config = {
  output: 'reports',
  helpers: {
    Puppeteer: {
      browser: process.env.BROWSER || 'chrome',
      url: process.env.BASE_URL || 'http://cmp-localdev.newscred.com:3000',
      show: process.env.SHOW ? process.env.SHOW === "true" : true,
      waitForNavigation: ['networkidle2', 'domcontentloaded'],
      chrome: {
        defaultViewport: {
          width: 1920,
          height: 1080
        },
        ignoreHTTPSErrors: true,
        args: ['--start-maximized']
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