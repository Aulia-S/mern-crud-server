const path = require("path");

module.exports = {
  entry: "./server.js",
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    fallback: {
      zlib: false,
      querystring: false,
      path: false,
      url: false,
      util: false,
      stream: false,
      buffer: false,
      http: false,
      fs: false,
      crypto: false,
      net: false,
    },
  },
};
