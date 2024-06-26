module.exports = {
    chromeSelector: "#storybook-root > *",
    diffingEngine: "pixelmatch",
    pixelmatch: {
        threshold: 0.5
    },
    configurations: {
      'chrome.laptop': {
        target: 'chrome.docker',
        width: 1366,
        height: 768,
      },
      'chrome.iphone7': {
        target: 'chrome.docker',
        preset: 'iPhone 7',
      },
      'chrome.a4': {
        target: 'chrome.docker',
        preset: 'A4 Paper',
      },
    },
    fetchFailIgnore: 'localhost:1234/get',
    fileNameFormatter: ({ configurationName, kind, story, parameters }) => {
      console.log(`${configurationName}/${kind} ${story}`.toLowerCase())
      return `${configurationName}/${kind} ${story}`.toLowerCase()
    }
  };