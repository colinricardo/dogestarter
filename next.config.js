const env = require(`./config/environment`);

module.exports = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  publicRuntimeConfig: { ...env },
};
