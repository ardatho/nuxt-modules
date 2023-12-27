const SEARCH_RESULTS_PER_PAGE = 20;

/**
 * Some features depend on route names
 * This object exposes some constants containing those routes names in order to keep
 * all these features in sync with the router if we were to change some route's name
 */
export const routeNames = {
  VIDEOS_LIST: 'video-list',
  ARTICLES_LIST: 'article-list',
  ARTICLE_DETAILS: 'article-details',
  ARTICLES_LATEST: 'latest',
  ARTICLES_VIDEOS: 'videos',
  ARTICLES_SEARCH: 'article-search',
  PRODUCTS_LIST: 'product-list',
  PRODUCT_DETAILS: 'product-details',
  PRODUCT_FILTERED_LIST: 'product-filteredlist',
  PRODUCT_TOPICS_LIST: 'product-topics-list',
  COMPANIES_LIST: 'company-list',
  COMPANY_DETAILS: 'company-details',
  COMPANY_FILTERED_LIST: 'company-filteredlist',
  COMPANY_TOPICS_LIST: 'company-topics-list',
  AUTHOR_DETAILS: 'author-details',
  TOPICS_LIST: 'topics-list',
  MESSAGE: 'message',
  LEADGEN: 'leadgen',
  SITEMAP: 'sitemap',
};

// Keys in the global key are registered globally and accessible via this.$config
export const globalSettings = {
  global: [
    {
      id: 'heg',
      title: 'Heavy Equipment Guide',
      devUrl: 'https://dev.heavyequipmentguide.ca/',
      prodUrl: 'https://www.heavyequipmentguide.ca/',
    },
    {
      id: 'rpn',
      title: 'Recycling Product News',
      devUrl: 'https://dev.recyclingproductnews.com/',
      prodUrl: 'https://www.recyclingproductnews.com/',
    },
  ],
  searchCategories: [
    {
      key: 'article',
      label: 'Article',
      cardComponent: 'Card',
      routeName: routeNames.ARTICLES_SEARCH,
    },
    {
      key: 'product',
      label: 'Product',
      cardComponent: 'CardProduct',
      routeName: routeNames.PRODUCTS_LIST,
    },
    {
      key: 'product-category',
      label: 'Product category',
      cardComponent: 'CardProductCategory',
      routeName: routeNames.PRODUCTS_LIST,
    },
    {
      key: 'company',
      label: 'Company',
      cardComponent: 'CardCompanySummary',
      routeName: routeNames.COMPANIES_LIST,
    },
  ],
  search: {
    resultsPerPage: SEARCH_RESULTS_PER_PAGE,
  },
  // Available date formats
  dateFormats: {
    long: 'MMMM DD, YYYY',
    iso: 'YYYY-MM-DD HH:mm:ss',
  },
  // Image formats that we can expect from the API
  imageFormats: [
    {
      id: 'cmsthumb',
      media: '(min-width: 0px)',
    },
    {
      id: 'tiny',
      hdpi: ['2x'],
      media: '(max-width: 320px)',
    },
    {
      id: 'small',
      hdpi: ['2x'],
      media: '(max-width: 980px)',
    },
    {
      id: 'medium',
      hdpi: ['2x'],
      media: '(min-width: 981px)',
    },
    {
      id: 'large',
      hdpi: ['2x'],
      media: '(min-width: 1024px)',
    },
    {
      id: 'full',
      hdpi: [],
      media: '(min-width: 1280px)',
    },
  ],
  // SEO settings
  seo: {
    metaDescriptionMaxLength: 155,
  },
};

/**
 * Describe filters supported by the app
 *
 * key: String, represents the app's filter ID
 * {
 *   apiKey     String    By default, API queries are built by using the filter's key, set apiKey if the API expects
 *                        a different key
 *
 *   multiple   Boolean   Wether or not the filter accepts multiple values
 *
 *   url        Boolean   Wether or not the filter should appear in the app's URLs
 *
 *   transform  Function  A function to transform the filter's value when it sent to the API, by default, the value
 *                        is passed as is
 *
 *   global     Boolean   Global filters will be preserved when navigating from a search page to another, this should
 *                        be disabled in most cases
 * }
 */
export const searchFilters = {
  // Keywords
  q: {
    apiKey: 'value',
    multiple: false,
    global: true,
  },
  // Aggregation
  // Set to 0 when aggregations aren't required, otherwise, don't send this parameter
  agg: {
    multiple: false,
    global: false,
    url: false,
  },
  // Type (article, product, category)
  type: {
    multiple: false,
    url: false,
    global: false,
  },
  // Page number
  page: {
    apiKey: 'from',
    multiple: false,
    transform: (page, { size = SEARCH_RESULTS_PER_PAGE } = {}) => (page - 1) * size,
    global: false,
  },
  // Topic (product category)
  topic: {
    multiple: false,
    url: true,
    global: false,
  },
  // Prefix search
  prefix: {
    multiple: false,
    global: false,
  },
  // Sort field
  sort: {
    multiple: false,
    global: false,
  },
  // Sort order
  order: {
    multiple: false,
    global: false,
  },
  // Size
  size: {
    multiple: false,
    global: false,
    url: false,
  },
};

/**
 * API resources
 * These are used to instantiate resources' repositories using the generic
 * repository factory
 */
export const apiResources = [
  'article',
  'product',
  'company',
  'productcategory',
];

export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 1024,
  xl: 1440,
  all: Infinity,
};
