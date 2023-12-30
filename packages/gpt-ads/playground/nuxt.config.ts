export default defineNuxtConfig({
  modules: ['../src/module'],
  /**
   * Google Publisher Tags Ads module configuration
   */
  gptAds: {
    networkCode: process.env.NUXT_NETWORK_CODE,
    responsive: true,
    collapseEmptyDivs: false,
    emptyClass: '',
    ghostMode: false,
    debug: false,
  },
  devtools: { enabled: true }
})
