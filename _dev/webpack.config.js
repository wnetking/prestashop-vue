/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
var webpack = require('webpack')
const path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
const finder = require('fs-finder')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = env => {
  const production = process.env.NODE_ENV === 'development' ? true : false

  return [{
    entry: getEntries(),
    output: {
      path: __dirname,
      filename: '[name]'
    },
    devtool: production ? 'none' : 'inline-source-map',
    module: {
      rules: [{
        test: /\.vue/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader'
          }
        }
      },
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [{
              loader: 'css-loader',
              options: {
                sourceMap: !production,
                minimize: production
              }
            },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: !production
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: !production,
                  data: '@import "css/partials/_variables";'
                }
              }
            ]
          })
        },
        {
          test: /.(png|jpg|gif|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
          use: [{
            loader: 'file-loader',
            options: {
              name(file) {
                if (file.indexOf('node_modules') >= 0) {
                  return '../assets/css/[name].[ext]'
                } else if (file.indexOf('modules') >= 0) {
                  return '../[path][name].[ext]'
                } else {
                  return '../assets/[path][name].[ext]'
                }
              },
              publicPath(file) {
                if (file.indexOf('node_modules') >= 0) {
                  return '../' + file
                } else if (file.indexOf('modules') >= 0) {
                  return '../../../' + file
                } else {
                  return '../' + file
                }
              }
            }
          }]
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader']
        }
      ]
    },
    externals: {
      prestashop: 'prestashop',
      $: '$',
      jquery: 'jQuery',
      VueCarousel: 'VueCarousel'
    },
    plugins: [
      new ExtractTextPlugin(path.join('[name]')),
      new webpack.ProvidePlugin({
        Popper: ['popper.js', 'default']
      }),
      production ?
        new UglifyJSPlugin({
          sourceMap: false,
          parallel: true,
          uglifyOptions: {
            ie8: false,
            compress: true,
            warnings: false,
            output: {
              comments: false,
              beautify: false
            }
          }
        }) :
        () => {
        }
    ],
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
      }
    }
  }]
}

function getEntries () {
  let skipFiles = finder.in(__dirname).findFiles('*.*'),
    files = finder.from(__dirname).exclude(skipFiles).exclude(['node_modules', 'modules', 'global-methods', 'filters', 'core', 'partials', 'components', 'lib', 'img', 'fonts', 'index']).findFiles('*.*'),
    filesFromModules = finder.from(__dirname + '/modules/').exclude(['img', 'index']).findFiles('*.*'),
    childFiles = finder.from(__dirname + '/../../..').exclude(['index']).findFiles('themeChild'),
    childFilesFromModules = finder.from(__dirname + '/../../..').exclude(['img', 'index']).findFiles('moduleChild'),
    entry = {}
  for (let i = 0; i < files.length; i++) {
    let name = files[i].replace(__dirname, '../assets').replace('scss', 'css')
    entry[name] = files[i]
  }
  for (let i = 0; i < filesFromModules.length; i++) {
    let moduleName = filesFromModules[i].replace(__dirname, '..').replace('scss', 'css')
    entry[moduleName] = filesFromModules[i]
  }
  for (let i = 0; i < childFiles.length; i++) {
    let themeName = childFiles[i].match(/themes(\S+)/i)[1].replace(childFiles[i].match(/_dev(\S+)/i)[0], '')
    let childName = '../..' + themeName + 'assets' + childFiles[i].match(/_dev(\S+)/i)[1].replace('-themeChild', '').replace('scss', 'css')
    entry[childName] = childFiles[i]
  }
  for (let i = 0; i < childFilesFromModules.length; i++) {
    let themeName = childFilesFromModules[i].match(/themes(\S+)/i)[1].replace(childFilesFromModules[i].match(/_dev(\S+)/i)[0], '')
    let childNameModule = '../..' + themeName + childFilesFromModules[i].match(/_dev(\S+)/i)[1].replace('-moduleChild', '').replace('scss', 'css')
    entry[childNameModule] = childFilesFromModules[i]
  }

  return entry
}
