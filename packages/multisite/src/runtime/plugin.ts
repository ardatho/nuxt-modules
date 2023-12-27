import Cookies from 'js-cookie';
import cookie from 'cookie';
import * as deepmerge from 'deepmerge';
// @ts-ignore
import { defineNuxtPlugin } from '#app'
// @ts-ignore
import options from '#build/multisite-config.mjs'

export default defineNuxtPlugin((nuxtApp) => {
  const {
    ssrContext,
    _route,
  } = nuxtApp;


  const req = ssrContext?.event?.node?.req;
  const res = ssrContext?.event?.node?.res;

  // Module options
  const sites = options.sites;
  const debug = options.debug;
  const isDev = options.isDev;
  const QUERY_SITE_ID_KEY = options.QUERY_SITE_ID_KEY;
  const COOKIE_SITE_KEY = options.COOKIE_SITE_KEY;
  const CSS_VARS_STYLE_ID = options.CSS_VARS_STYLE_ID;
  const defaultSite = sites.find(site => site.isDefault);

  // Guess current site
  let currentSiteId = null;
  // In development, get current site from cookies or query string
  if (debug || isDev) {
    currentSiteId = _route.query[QUERY_SITE_ID_KEY];

    // If no site ID found in query string, attempt to retrieve it from cookies
    if (!currentSiteId) {
      if (process.server) {
        const cookies = cookie.parse(req.headers.cookie || '');
        currentSiteId = cookies[COOKIE_SITE_KEY] || null;
      } else {
        currentSiteId = Cookies.get(COOKIE_SITE_KEY) || null;
      }
    }

    // Set cookie
    if (currentSiteId && process.server) {
      res.setHeader('Set-Cookie', cookie.serialize(COOKIE_SITE_KEY, String(currentSiteId), {
        httpOnly: false,
        path: '/',
        maxAge: 60 * 60 * 24 * 365, // 1 year
      }));
    }
  } else {
    // Get current site from request or location
    const { host } = process.server ? req.headers : window.location;
    sites.some((site) => {
      let patterns = site.hostPatterns || null;
      if (patterns) {
        patterns = patterns.split(',');
        return patterns.some((pattern) => {
          const regexp = new RegExp(pattern);
          if (regexp.test(host)) {
            currentSiteId = site.id;
            return true;
          }
        });
      }
    });
  }

  const currentSite = sites.find(site => site.id === currentSiteId) ?? defaultSite;

  // Instance options
  const multisiteOptions = {
    site: currentSite,
    asset: null,
  };

  // CSS vars
  const getComputedCssVars = (cssVars) => {
    const style = cssVars ? Object.keys(cssVars).map(key => `${key}:${cssVars[key]}`) : [];
    return `:root{${style.join(';')}}`;
    // #2865ab
  };
  const headStyle = {
    id: CSS_VARS_STYLE_ID,
    type: 'text/css',
    innerHTML: getComputedCssVars(currentSite?.cssVars),
  };
  if (process.server) {
    // @ts-ignore
    useHead({
      style: [
        headStyle,
      ],
    })
  }

  // Assets helper
  multisiteOptions.asset = (path, site = null) => {
    site = site || currentSite.id;
    return `/${site}/${path}`;
  };

  return {
    provide: {
      multisite: multisiteOptions
    }
  }
})
