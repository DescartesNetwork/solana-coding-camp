require('dotenv-cra').config() // https://github.com/gsoft-inc/craco/issues/180

const { CracoDefaultLessPlugin } = require('./plugins/craco-less')
const CracoTheme = require('./plugins/craco-theme')
const { CracoCompatibility, CracoSilence } = require('@sentre/craco-plugins')

module.exports = {
  plugins: [
    {
      plugin: CracoDefaultLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
    {
      plugin: CracoTheme,
      options: {
        theme: ['light', 'dark'],
      },
    },
    {
      plugin: CracoCompatibility,
    },
    {
      plugin: CracoSilence,
    },
  ],
}
