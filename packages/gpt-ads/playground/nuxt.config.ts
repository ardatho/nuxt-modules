export default defineNuxtConfig({
  modules: ['../src/module'],
  /**
   * Google Publisher Tags Ads module configuration
   */
  gptAds: {
    networkCode: null,
    responsive: true,
    collapseEmptyDivs: false,
    emptyClass: '',
    ghostMode: false,
  },
  devtools: { enabled: true }
})
