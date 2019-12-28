const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  context: path.join(__dirname, 'src'),
  entry: {
    app: './main.ts'
  },
  plugins: [
    new CopyPlugin([
      { from: '*.{css,html}', to: '[name].[ext]' }
    ]),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: [ '.ts', '.tsx' ]
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          compilerOptions: {
            isolatedModules: true
          }
        }
      }
    ]
  }
};