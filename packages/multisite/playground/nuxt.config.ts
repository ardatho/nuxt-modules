
const appEnv = process.env.APP_ENV || process.env.NODE_ENV || 'development';

const heg = require('./config/heg');
const rpn = require('./config/rpn');

export default defineNuxtConfig({
  modules: ['../src/module'],
  multisite: {
    debug: ['development', 'test'].includes(appEnv),
    sites: [
      heg,
      rpn,
    ],
  },
  devtools: { enabled: true }
})
