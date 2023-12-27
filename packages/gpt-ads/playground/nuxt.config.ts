export default defineNuxtConfig({
  modules: ['../src/module'],
  /**
   * Google Publisher Tags Ads module configuration
   */
  gptAds: {
    networkCode: 7851837,
    responsive: true,
    collapseEmptyDivs: false,
    emptyClass: '',
    ghostMode: false,
  },
  devtools: { enabled: true }
})
