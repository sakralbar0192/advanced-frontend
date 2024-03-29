module.exports = {
    chromeSelector: "#storybook-root > *",
    diffingEngine: "pixelmatch",
    pixelmatch: {
        threshold: 0.5
    },
    configurations: {
      'chrome.laptop': {
        target: 'chrome.app',
        width: 1366,
        height: 768,
      },
      'chrome.iphone7': {
        target: 'chrome.app',
        preset: 'iPhone 7',
      },
      'chrome.a4': {
        target: 'chrome.app',
        preset: 'A4 Paper',
      },
    },
    fetchFailIgnore: 'localhost:1234/get',
  };