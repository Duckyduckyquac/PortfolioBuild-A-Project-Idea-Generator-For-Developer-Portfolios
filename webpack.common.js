import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/jsFiles/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/htmlFiles/template.html', 
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], 
      },
    ],
  },
};