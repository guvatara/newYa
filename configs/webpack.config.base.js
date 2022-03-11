const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: {
      import: paths.src + '/index.tsx',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@components': paths.src + '/components',
      "@models": paths.src + '/models',
      '@containers': paths.src + '/containers',
      '@store': paths.src + '/store',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Output Management',
      template: paths.template + '/template.html'
    })
  ],
  stats: {
    colors: true,
  },
  output: {
    filename: '[name].bundle.js',
    path: paths.build + '/',
    clean: true
  }
};
