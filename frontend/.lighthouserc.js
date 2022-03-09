module.exports = {
    ci: {
      collect: {
        "staticDistDir": "./"
      },
      assert: {
        "preset": "lighthouse:no-pwa",
        "assertions": {
            "csp-xss": "off",
            "errors-in-console": "off"
        }
      },
      upload: {
        "target": "temporary-public-storage"
      }
    }
  };