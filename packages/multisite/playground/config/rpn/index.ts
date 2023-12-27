/* eslint-disable no-useless-escape */

const audienceBuckets = {
  22: {
    name: 'Metals Recycling',
    label: 'metals-recycling',
    productCategories: [
    ],
  },
  26: {
    name: 'Paper Recycling',
    label: 'paper-recycling',
    productCategories: [
    ],
  },
  30: {
    name: 'Plastics Recycling',
    label: 'plastics-recycling',
    productCategories: [
    ],
  },
  25: {
    name: 'Organics Recycling',
    label: 'organics-recycling',
    productCategories: [
    ],
  },
  62: {
    name: 'Battery Recycling',
    label: 'battery-recycling',
    productCategories: [
    ],
  },
  59: {
    name: 'ICI Recycling',
    label: 'ici-recycling',
    productCategories: [
    ],
  },
  9: {
    name: 'Electronics Recycling',
    label: 'electronics-recycling',
    productCategories: [
    ],
  },
  71: {
    name: 'Textiles Recycling',
    label: 'textiles-recycling',
    productCategories: [
    ],
  },
  72: {
    name: 'Tire & Auto Recycling ',
    label: 'tire-and-auto-recycling',
    productCategories: [
    ],
  },
  58: {
    name: 'ELV Recycling ',
    label: 'tire-and-auto-recycling',
    productCategories: [
    ],
  },
  53: {
    name: 'Tire Recycling ',
    label: 'tire-and-auto-recycling',
    productCategories: [
    ],
  },
  14: {
    name: 'Recycling Industry News',
    label: 'recycling-industry-news',
    productCategories: [
    ],
  },
  10: {
    name: 'Environmental',
    label: 'environmental',
    productCategories: [
    ],
  },
  11: {
    name: 'Collection and Hauling',
    label: 'collection-and-hauling',
    productCategories: [
    ],
  },
  5: {
    name: 'Construction and Demolition Recycling ',
    label: 'construction-and-demolition-recycling',
    productCategories: [
    ],
  },
  21: {
    name: 'Equipment Maintenance',
    label: 'equipment-maintenance',
    productCategories: [
    ],
  },
  34: {
    name: 'Waste Diversion',
    label: 'waste-diversion',
    productCategories: [
    ],
  },
  54: {
    name: 'Composting',
    label: 'composting',
    productCategories: [
    ],
  },
  12: {
    name: 'Glass Recycling',
    label: 'glass-recycling',
    productCategories: [
    ],
  },
  66: {
    name: 'Waste to Energy ',
    label: 'waste-to-energy',
    productCategories: [
    ],
  },
};
const sizeMappings = {
  interstitial: [
    // Desktop Small
    ['980x0', '900x600'],
    // Tablets
    ['768x0', '600x400'],
    // XS
    ['0x0', '300x250, 300x200'],
  ],
  leaderboard: [
    // Desktop Large
    ['1280x0', '728x90, 970x250, 970x500'],
    // Desktop Small
    ['980x0', '728x90, 970x250, 970x500'],
    // Tablets
    ['768x0', '728x90'],
    // Mobile
    ['320x0', '320x100'],
    // XS
    ['0x0', '320x100'],
  ],
  featurebox: [
    [[1280, 0], [900, 300], [728, 90], [600, 300]],
    [[980, 0], [600, 300], [300, 250]],
    [[768, 0], [728, 90], [600, 300], [300, 250]],
    [[320, 0], [300, 250]],
    [[0, 0], [300, 250]],
  ],
};

const SITE_URL = 'https://www.recyclingproductnews.com';
const META = {
  description: 'Recycling Product News covers the latest industry news, product information and new equipment technologies for the solid waste and recycling industry.',
  site_logo: `${SITE_URL}/rpn/logo-header.png`,
};

export default {
  id: 'rpn',
  title: 'Recycling Product News',
  gtmCode: 'GTM-NNVD8V6',
  hostPatterns: 'recyclingproductnews\.com',
  audienceBuckets,
  cssVars: {
    '--primary-1': '#399c53',
    '--primary-2': '#62dc82',
    '--primary-2-r': '98,220,130',
    '--secondary-1': '#fed147',
    '--secondary-2': '#eeeeee',
    '--gradient': 'linear-gradient(to right, #399c53, #62dc82)',
  },
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/rpn/favicon.ico' },
    ],
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: META.description,
      },
      // Open Graph
      {
        property: 'og:title',
        hid: 'og:title',
        content: 'Recycling Product News',
      },
      {
        property: 'og:site_name',
        hid: 'og:site_name',
        content: 'Recycling Product News',
      },
      {
        property: 'og:locale',
        hid: 'og:locale',
        content: 'en_US',
      },
      {
        property: 'og:url',
        hid: 'og:url',
        content: SITE_URL,
      },
      {
        property: 'og:description',
        hid: 'og:description',
        content: META.description,
      },
      // Twitter cards
      {
        name: 'twitter:card',
        hid: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:site',
        hid: 'twitter:site',
        content: '@recyclingpn',
      },
    ],
    script: [
      {
        hid: 'sd-organization',
        innerHTML: `
          {
            "@context": "http://schema.org",
            "@type": "Corporation",
            "name": "Recycling Product News",
            "url": "${SITE_URL}",
            "logo": "${META.site_logo}"
          }
        `,
        type: 'application/ld+json',
      },
      {
        hid: 'sd-website',
        innerHTML: `
          {
            "@context": "http://schema.org",
            "@type": "WebSite",
            "url": "${SITE_URL}",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "${SITE_URL}/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `,
        type: 'application/ld+json',
      },
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'sd-organization': ['innerHTML'],
      'sd-website': ['innerHTML'],
    },
  },
  config: {
    advertiseURL: 'https://baumpub.com/contact-us?topics=advertising',
    menu: {
      socialLinks: {
        facebook: 'https://www.facebook.com/Recycling-Product-News-125816040801921/',
        twitter: 'https://twitter.com/recyclingpn',
        youtube: 'https://www.youtube.com/channel/UCeoSUTf-pz59PH1_jDNudCA/',
        linkedIn: 'https://www.linkedin.com/company/recycling-product-news/',
      },
    },
    /**
     * Magazine
     */
    hasMagazine: true,
    /**
     * Google Ads
     */
    ads: {
      interstitial: {
        adUnit: 'RPN-INTERSTITIAL',
        size: '900x600,600x400,300x250,300x200',
        sizeMapping: sizeMappings.interstitial,
      },
      catfish: {
        adUnit: 'RPN-CATFISH',
        size: '320x50',
      },
      leaderboard1: {
        adUnit: 'RPN-LEADERBOARD1',
        size: '320x100,468x60,728x90,970x250,970x500',
        sizeMapping: sizeMappings.leaderboard,
      },
      leaderboard2: {
        adUnit: 'RPN-LEADERBOARD2',
        size: '320x100,468x60,728x90,970x250,970x500',
        sizeMapping: sizeMappings.leaderboard,
      },
      bigbox1: {
        adUnit: 'RPN-BIGBOX1',
        size: '300x250,300x600',
      },
      bigbox2: {
        adUnit: 'RPN-BIGBOX2',
        size: '300x250,300x600',
      },
      bigbox3: {
        adUnit: 'RPN-BIGBOX3',
        size: '300x250,300x600',
      },
      bigbox4: {
        adUnit: 'RPN-BIGBOX4',
        size: '300x250,300x600',
      },
      bigbox5: {
        adUnit: 'RPN-BIGBOX5',
        size: '300x250,300x600',
      },
      bigbox6: {
        adUnit: 'RPN-BIGBOX6',
        size: '300x250,300x600',
      },
      bigbox7: {
        adUnit: 'RPN-BIGBOX7',
        size: '300x250,300x600',
      },
      bigbox8: {
        adUnit: 'RPN-BIGBOX8',
        size: '300x250,300x600',
      },
      bigbox9: {
        adUnit: 'RPN-BIGBOX9',
        size: '300x250,300x600',
      },
      bigbox10: {
        adUnit: 'RPN-BIGBOX10',
        size: '300x250,300x600',
      },
      bigbox11: {
        adUnit: 'RPN-BIGBOX11',
        size: '300x250,300x600',
      },
      bigbox12: {
        adUnit: 'RPN-BIGBOX12',
        size: '300x250,300x600',
      },
      featurebox1: {
        adUnit: 'RPN-FEATURE1',
        size: '300x250,600x300,728x90,750x300,900x300',
        sizeMapping: sizeMappings.featurebox,
      },
      featurebox2: {
        adUnit: 'RPN-FEATURE2',
        size: '300x250,600x300,728x90,750x300,900x300',
        sizeMapping: sizeMappings.featurebox,
      },
      featurebox3: {
        adUnit: 'RPN-FEATURE3',
        size: '300x250,600x300,728x90,750x300,900x300',
        sizeMapping: sizeMappings.featurebox,
      },
      featurebox4: {
        adUnit: 'RPN-FEATURE4',
        size: '300x250,600x300,728x90,750x300,900x300',
        sizeMapping: sizeMappings.featurebox,
      },
      featurebox5: {
        adUnit: 'RPN-FEATURE5',
        size: '300x250,600x300,728x90,750x300,900x300',
        sizeMapping: sizeMappings.featurebox,
      },
      featurebox6: {
        adUnit: 'RPN-FEATURE6',
        size: '300x250,600x300,728x90,750x300,900x300',
        sizeMapping: sizeMappings.featurebox,
      },
      featurebox7: {
        adUnit: 'RPN-FEATURE7',
        size: '300x250,600x300,728x90,750x300,900x300',
        sizeMapping: sizeMappings.featurebox,
      },
      featurebox8: {
        adUnit: 'RPN-FEATURE8',
        size: '300x250,600x300,728x90,750x300,900x300',
        sizeMapping: sizeMappings.featurebox,
      },
    },
    /**
     * Sitemap
     */
    sitemap: [
      [
        {
          label: 'Homepage',
          slug: '/',
        },
        {
          label: 'Magazine',
          slug: '/digital-edition',
        },
        {
          label: 'Newsletter',
          slug: '/newsletter-info',
        },
        {
          label: 'About Us',
          slug: '/about-us',
        },
        {
          label: 'RSS Feed',
          slug: '/rss',
        },
        {
          label: 'Privacy Statement',
          slug: '/privacy-statement',
        },
        {
          label: 'Site Map',
          slug: '/sitemap',
        },
        {
          label: 'Authors',
          spaced: true,
          subnav: [
            {
              label: 'Slone Fox',
              slug: '/author/slone-fox-56',
            },
            {
              label: 'Arturo Santiago',
              slug: '/author/arturo-santiago-491',
            },
            {
              label: 'Recycling Product News Staff',
              slug: '/author/recycling-product-news-staff-454',
            },
          ],
        },
      ],
      [
        {
          label: 'News',
          slug: '/latest',
          subnav: [
            {
              label: 'Metals',
              slug: '/article/topic/metals-22',
            },
            {
              label: 'Plastics',
              slug: '/article/topic/plastics-30',
            },
            {
              label: 'Paper',
              slug: '/article/topic/paper-26',
            },
            {
              label: 'C&D',
              slug: '/article/topic/candd-5',
            },
            {
              label: 'Organics',
              slug: '/article/topic/organics-25',
            },
            {
              label: 'Electronics',
              slug: '/article/topic/electronics-9',
            },
            {
              label: 'Batteries',
              slug: '/article/topic/batteries-62',
            },
            {
              label: 'Textiles',
              slug: '/article/topic/textiles-71',
            },
            {
              label: 'Glass',
              slug: '/article/topic/glass-12',
            },
            {
              label: 'Hauling & Collection',
              slug: '/article/topic/hauling-and-collection-11',
            },
          ],
        },
      ],
      [
        {
          label: 'Videos',
          slug: '/videos',
          subnav: [
            {
              label: 'Metals',
              slug: '/video/topic/metals-22',
            },
            {
              label: 'Plastics',
              slug: '/video/topic/plastics-30',
            },
            {
              label: 'Paper',
              slug: '/video/topic/paper-26',
            },
            {
              label: 'C&D',
              slug: '/video/topic/candd-5',
            },
            {
              label: 'Organics',
              slug: '/video/topic/organics-25',
            },
            {
              label: 'Electronics',
              slug: '/video/topic/electronics-9',
            },
            {
              label: 'Batteries',
              slug: '/video/topic/batteries-62',
            },
            {
              label: 'Textiles',
              slug: '/video/topic/textiles-71',
            },
            {
              label: 'Glass',
              slug: '/video/topic/glass-12',
            },
            {
              label: 'Hauling & Collection',
              slug: '/video/topic/hauling-and-collection-11',
            },
          ],
        },
      ],
      [
        {
          label: 'Products',
          slug: '/products',
          subnav: [
            {
              label: 'C&D',
              slug: '/product/topic/candd-5',
            },
            {
              label: 'Circular Economy',
              slug: '/product/topic/circular-economy-77',
            },
            {
              label: 'Electronics',
              slug: '/product/topic/electronics-9',
            },
            {
              label: 'Equipment',
              slug: '/product/topic/equipment-75',
            },
            {
              label: 'Glass',
              slug: '/product/topic/glass-12',
            },
            {
              label: 'Hauling & Collection',
              slug: '/product/topic/hauling-and-collection-11',
            },
            {
              label: 'Industry News',
              slug: '/product/topic/industry-news-14',
            },
            {
              label: 'Metals',
              slug: '/product/topic/metals-22',
            },
            {
              label: 'Organics',
              slug: '/product/topic/organics-25',
            },
            {
              label: 'Paper',
              slug: '/product/topic/paper-26',
            },
            {
              label: 'Plastics',
              slug: '/product/topic/plastics-30',
            },
          ],
        },
      ],
      [
        {
          label: 'Companies',
          slug: '/companies',
          subnav: [
            {
              label: 'Association',
              slug: '/company/company-type/association-2',
            },
            {
              label: 'Auctions',
              slug: '/company/company-type/auctions-16',
            },
            {
              label: 'Contractors',
              slug: '/company/company-type/contractors-12',
            },
            {
              label: 'Distributor',
              slug: '/company/company-type/distributor-15',
            },
            {
              label: 'Education',
              slug: '/company/company-type/education-13',
            },
            {
              label: 'Environmental Services',
              slug: '/company/company-type/environmental-services-5',
            },
            {
              label: 'Equipment Dealer',
              slug: '/company/company-type/equipment-dealer-8',
            },
            {
              label: 'Equipment Rental',
              slug: '/company/company-type/equipment-rental-9',
            },
            {
              label: 'Financial Services',
              slug: '/company/company-type/financial-services-10',
            },
            {
              label: 'Government',
              slug: '/company/company-type/government-6',
            },
            {
              label: 'Manufacturer',
              slug: '/company/company-type/manufacturer-1',
            },
            {
              label: 'Media',
              slug: '/company/company-type/media-17',
            },
            {
              label: 'Oil & Gas Company',
              slug: '/company/company-type/oil-and-gas-company-7',
            },
            {
              label: 'Recycling Processor',
              slug: '/company/company-type/recycling-processor-11',
            },
            {
              label: 'Service Provider',
              slug: '/company/company-type/service-provider-4',
            },
            {
              label: 'Shows & Events',
              slug: '/company/company-type/shows-and-events-14',
            },
          ],
        },
      ],
    ],
    /**
     * Homepage sections
     */
    homepageSections: [
      // Headlines
      {
        component: 'HomepageBlockTwoThird',
        options: {
          left: {
            title: 'Headlines',
            category: 'feed.headlines.topic',
            highlight: {
              data: 'feed.headlines.featured',
              class: 'card-highlight--alt',
            },
            list: {
              component: 'Card',
              data: 'feed.headlines.list',
              attrs: {
                class: 'mb-30',
              },
            },
            sponsored: {
              component: 'CardSponsored',
              data: 'feed.headlines.sponsored',
            },
            adMobileTop: {
              options: '$multisite.site.config.ads.bigbox1',
            },
            adMobileBottom: {
              options: '$multisite.site.config.ads.bigbox2',
            },
          },
          right: {
            title: 'Trending',
            carousel: {
              component: 'Bulletin',
              data: 'hot_news',
              attrs: {
                reinitOnResize: true,
                class: 'carousel-horizontal-vertical mb-60 mb-md-30',
                options: {
                  direction: 'vertical',
                  slidesPerView: 'auto',
                  slidesPerGroup: 'auto',
                  spaceBetween: 16,
                  watchOverflow: true,
                  breakpointsInverse: true,
                },
              },
            },
            ad: {
              above: true,
              options: [
                '$multisite.site.config.ads.bigbox1',
                '$multisite.site.config.ads.bigbox2',
              ],
            },
          },
        },
      },

      {
        component: 'AdBlock',
        options: {
          class: 'mt-30 mb-30 mt-md-60 mb-md-60',
          data: {
            ad: {
              options: '$multisite.site.config.ads.featurebox1',
            },
          },
        },
      },

      // More headlines
      {
        component: 'HomepageBlockTwoThird',
        options: {
          left: {
            title: 'More headlines',
            highlight: {
              data: 'feed.more_headlines.featured',
              class: 'card-highlight--alt',
            },
            list: {
              component: 'Card',
              data: 'feed.more_headlines.list',
              attrs: {
                class: 'mb-30',
              },
            },
            sponsored: {
              component: 'CardSponsored',
              data: 'feed.more_headlines.sponsored',
            },
            adMobileTop: {
              options: '$multisite.site.config.ads.bigbox3',
            },
            adMobileBottom: {
              options: '$multisite.site.config.ads.bigbox4',
            },
          },
          right: {
            attrs: {
              class: 'pt-30 pt-md-0',
            },
            newsletter: true,
            ad: {
              options: [
                '$multisite.site.config.ads.bigbox3',
                '$multisite.site.config.ads.bigbox4',
              ],
            },
          },
        },
      },

      {
        component: 'AdBlock',
        options: {
          class: 'mt-30 mb-30 mt-md-60 mb-md-60',
          data: {
            ad: {
              options: '$multisite.site.config.ads.featurebox2',
            },
          },
        },
      },

      // Videos
      {
        component: 'HomepageBlockVideosCarousel',
        options: {
          data: {
            title: 'Videos',
            list: {
              data: 'videos',
            },
          },
        },
      },

      {
        component: 'AdBlock',
        options: {
          class: 'mt-30 mb-30 mt-md-60 mb-md-60',
          data: {
            ad: {
              options: '$multisite.site.config.ads.featurebox3',
            },
          },
        },
      },

      // Metals Recycling
      {
        component: 'HomepageBlockTwoThird',
        options: {
          left: {
            title: 'Metals recycling',
            category: 'feed.metals.topic',
            highlight: {
              data: 'feed.metals.featured',
              component: 'CardArticle',
              class: 'card-article--large',
              attrs: {
                showText: true,
              },
            },
            list: {
              component: 'Card',
              data: 'feed.metals.list',
              limit: 3,
              attrs: {
                class: 'mb-30',
              },
            },
            adMobileTop: {
              options: '$multisite.site.config.ads.bigbox5',
            },
          },
          right: {
            attrs: {
              class: 'pt-30 pt-md-0',
            },
            ad: {
              options: '$multisite.site.config.ads.bigbox5',
            },
          },
        },
      },

      {
        component: 'AdBlock',
        options: {
          class: 'mt-30 mb-30 mt-md-60 mb-md-60',
          data: {
            ad: {
              options: '$multisite.site.config.ads.featurebox4',
            },
          },
        },
      },

      // From the magazine
      {
        component: 'HomepageBlockCoverCarousel',
        options: {
          data: {
            title: 'From the magazine',
            list: {
              data: 'from_magazine',
            },
          },
        },
      },

      // Subscribe
      { component: 'HomepageBlockSubscribe' },

      {
        component: 'AdBlock',
        options: {
          class: 'mt-30 mb-30 mt-md-60 mb-md-60',
          data: {
            ad: {
              options: '$multisite.site.config.ads.featurebox5',
            },
          },
        },
      },

      // Plastics Recycling
      {
        component: 'HomepageBlockTwoThird',
        options: {
          left: {
            title: 'Plastics Recycling',
            category: 'feed.plastics.topic',
            highlight: {
              data: 'feed.plastics.featured',
              component: 'CardArticle',
              class: 'card-article--large',
              attrs: {
                showText: true,
              },
            },
            list: {
              component: 'Card',
              data: 'feed.plastics.list',
              limit: 3,
            },
            adMobileTop: {
              options: '$multisite.site.config.ads.bigbox6',
            },
          },
          right: {
            attrs: {
              class: 'pt-30 pt-md-0',
            },
            ad: {
              options: '$multisite.site.config.ads.bigbox6',
            },
          },
        },
      },

      {
        component: 'AdBlock',
        options: {
          class: 'mt-30 mb-30 mt-md-60 mb-md-60',
          data: {
            ad: {
              options: '$multisite.site.config.ads.featurebox6',
            },
          },
        },
      },

      // Paper Recycling
      {
        component: 'HomepageBlockTwoThird',
        options: {
          left: {
            title: 'Paper Recycling',
            category: 'feed.paper.topic',
            highlight: {
              data: 'feed.paper.featured',
              component: 'CardArticle',
              class: 'card-article--large',
              attrs: {
                showText: true,
              },
            },
            list: {
              component: 'Card',
              data: 'feed.paper.list',
              limit: 3,
            },
            adMobileTop: {
              options: '$multisite.site.config.ads.bigbox7',
            },
            adMobileBottom: {
              options: '$multisite.site.config.ads.bigbox8',
            },
          },
          right: {
            attrs: {
              class: 'pt-30 pt-md-0',
            },
            ad: {
              options: [
                '$multisite.site.config.ads.bigbox7',
                '$multisite.site.config.ads.bigbox8',
              ],
            },
          },
        },
      },

      {
        component: 'AdBlock',
        options: {
          class: 'mt-30 mb-30 mt-md-60 mb-md-60',
          data: {
            ad: {
              options: '$multisite.site.config.ads.featurebox7',
            },
          },
        },
      },

      // Organics Recycling
      {
        component: 'HomepageBlockTwoThird',
        options: {
          left: {
            title: 'Organics Recycling',
            category: 'feed.organics.topic',
            highlight: {
              data: 'feed.organics.featured',
              component: 'CardArticle',
              class: 'card-article--large',
              attrs: {
                showText: true,
              },
            },
            list: {
              component: 'Card',
              data: 'feed.organics.list',
              limit: 3,
            },
            adMobileTop: {
              options: '$multisite.site.config.ads.bigbox9',
            },
            adMobileBottom: {
              options: '$multisite.site.config.ads.bigbox10',
            },
          },
          right: {
            attrs: {
              class: 'pt-30 pt-md-0',
            },
            newsletter: true,
            ad: {
              options: [
                '$multisite.site.config.ads.bigbox9',
                '$multisite.site.config.ads.bigbox10',
              ],
            },
          },
        },
      },

      {
        component: 'AdBlock',
        options: {
          class: 'mt-30 mb-30 mt-md-60 mb-md-60',
          data: {
            ad: {
              options: '$multisite.site.config.ads.featurebox8',
            },
          },
        },
      },

      // C&D
      {
        component: 'HomepageBlockTwoThird',
        options: {
          left: {
            title: 'C&D',
            category: 'feed.candd.topic',
            highlight: {
              data: 'feed.candd.featured',
              component: 'CardArticle',
              class: 'card-article--large',
              attrs: {
                showText: true,
              },
            },
            list: {
              component: 'Card',
              data: 'feed.candd.list',
              limit: 3,
            },
            adMobileTop: {
              options: '$multisite.site.config.ads.bigbox11',
            },
            adMobileBottom: {
              options: '$multisite.site.config.ads.bigbox12',
            },
          },
          right: {
            attrs: {
              class: 'pt-30 pt-md-0',
            },
            ad: {
              options: [
                '$multisite.site.config.ads.bigbox11',
                '$multisite.site.config.ads.bigbox12',
              ],
            },
          },
        },
      },

    ],
  },
};
