const path = require("path"); // Getting the os-file path where the files is going to be exported or imported
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Here we are saying to webpack like any file name as tsx apart inside the node_modules load inside the babel loader to load it
const rules = [
  {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    loader: "babel-loader",
  },
  {
    test: /\.css$/,
    loader: "css-loader",
  },
];
module.exports = {
  target: "web", // Native app
  mode: "development", // What mode the application is running in Development/Production Mode.
  entry: "./src/index.tsx", // Where the file execution  started
  output: {
    // File output path
    path: path.resolve(__dirname, "build"), // Create a folder name build and put all the production minified code inside it
    filename: "bundle.js",
  },
  module: {
    rules,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"], // Omits the file types from the {import import App from './App'}
  },
  devServer: { static: path.join(__dirname, "src") },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html"),
    }),
  ],
};
