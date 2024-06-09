const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js', // Entry point for the first HTML file
    login: './src/login.js', // Entry point for the second HTML file
    team: './src/team.js',
    products: './src/products.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js', // Use [name] placeholder to generate bundle names dynamically
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 4000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        },
      },
    ],
  },
};
