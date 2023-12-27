import { defineNuxtModule, addPlugin, createResolver, addTemplate } from '@nuxt/kit'

import { resolve } from 'path';

import {
  DEFAULT_OPTIONS,
  QUERY_SITE_ID_KEY,
  COOKIE_SITE_KEY,
  CSS_VARS_STYLE_ID,
} from './constants';

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'multisite',
    configKey: 'multisite'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup (options, nuxt) {
    // @ts-ignore
    const resolver = createResolver(import.meta.url)

    const moduleOptions = Object.assign(DEFAULT_OPTIONS, options);

    const templatesOptions = {
      ...moduleOptions,
      QUERY_SITE_ID_KEY,
      COOKIE_SITE_KEY,
      CSS_VARS_STYLE_ID,
      isDev: nuxt.options.dev,
    };
    addTemplate({ filename: 'multisite-config.mjs', getContents: () => `export default ${JSON.stringify(templatesOptions, null, 2)}` })
    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin({
      src: resolver.resolve('runtime/plugin')
    })
  }
})
