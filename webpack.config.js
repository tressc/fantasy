// NOTE: This application uses Webpack 4, which requires a recent version of NPM.  To run Webpack make sure your NVM is set to use 9.10.1, and then run the command `npm run dev` (for development mode) or `npm run build` for production.

const path = require("path");
const webpack = require("webpack");


module.exports = {
  entry: "./frontend/index.jsx",
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
