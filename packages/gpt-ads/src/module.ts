import { defineNuxtModule, addPlugin, createResolver, addTemplate, addComponent } from '@nuxt/kit'

import {
  DEFAULT_OPTIONS,
  GPT_LIB_SCRIPT_ID,
  GPT_INIT_SCRIPT_ID,
} from './constants';

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'gpt-ads',
    configKey: 'gptAds'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup (options, nuxt) {
    // @ts-ignore
    const resolver = createResolver(import.meta.url)

    const moduleOptions = Object.assign(DEFAULT_OPTIONS, options);

    const templatesOptions = {
      ...moduleOptions,
      GPT_LIB_SCRIPT_ID,
      GPT_INIT_SCRIPT_ID,
    };

    const runtimeDir = resolver.resolve('./runtime')
    nuxt.options.build.transpile.push(runtimeDir)

    addTemplate({ filename: 'gptads-config.mjs', getContents: () => `export default ${JSON.stringify(templatesOptions, null, 2)}` })

    addComponent({
      name: templatesOptions.componentName,
      filePath: resolver.resolve('./runtime/component')
    })

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))

  }
})
