// @ts-ignore
import { defineNuxtPlugin } from '#app'
// @ts-ignore
import options from '#build/gptads-config.mjs'

export default defineNuxtPlugin((nuxtApp) => {
  // Module options
  const debug = options.debug || false;
  const individualRefresh = options.individualRefresh || false;
  const collapseEmptyDivs = options.collapseEmptyDivs || false;
  const networkCode = options.networkCode;
  const GPT_LIB_SCRIPT_ID = options.GPT_LIB_SCRIPT_ID;
  const GPT_INIT_SCRIPT_ID = options.GPT_INIT_SCRIPT_ID;

  // Instance options
  const gptAdsOptions = {
    networkCode,
    individualRefresh,
    slots: [],
  };

  // Inject GPT lib
  const gptLibScript = {
    id: GPT_LIB_SCRIPT_ID,
    src: 'https://www.googletagservices.com/tag/js/gpt.js',
    async: true,
  };

  // Inject GPT init script
  let gptInitScriptHtml = 'var googletag = googletag || {};googletag.cmd = googletag.cmd || [];';
  if (debug) {
    gptInitScriptHtml += 'googletag.cmd.push(function(){googletag.openConsole();});';
  }
  // Disable initial load
  const gptDisableInitialLoad = individualRefresh ? 'googletag.pubads().disableInitialLoad();' : '';
  // Collapse empty div
  const gptCollapseEmptyDivs = collapseEmptyDivs ? 'googletag.pubads().collapseEmptyDivs();' : '';

  gptInitScriptHtml += `
    googletag.cmd.push(function(){
      googletag.pubads().enableSingleRequest();
      ${gptDisableInitialLoad}
      ${gptCollapseEmptyDivs}
      googletag.enableServices();
    });
  `;
  const gptInitScript = {
    id: GPT_INIT_SCRIPT_ID,
    innerHTML: gptInitScriptHtml,
  };

  // @ts-ignore
  useHead({
    script: [
      gptLibScript,
      gptInitScript,
    ],
  })

  return {
    provide: {
      gptAds: gptAdsOptions
    }
  }
})
