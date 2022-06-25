const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = (env, options) => {
  const prod = options.mode === 'production';

  const devOptions = prod ? null : { devtool: 'eval-source-map' };
  return {
    ...devOptions,
    entry: './src/index.tsx',
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, './build'),
      clean: true,
      publicPath: '/',
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.(s[ac]ss|less|css)$/i,
          use: [
            // Creates `style` nodes from JS strings
            { loader: 'style-loader' },
            // Translates CSS into CommonJS
            // Compiles Sass to CSS
            {
              loader: 'css-loader',
            },
            { loader: 'sass-loader' },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|jp2|webp)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      ],
    },
    plugins: [
      // @ts-ignore
      new ESLintPlugin({}),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        inject: true,
      }),
    ],
    devServer: {
      compress: true,
      historyApiFallback: true,
      open: true,
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
      },
    },
  };
};
