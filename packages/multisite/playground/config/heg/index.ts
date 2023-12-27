/* eslint-disable no-useless-escape */

const audienceBuckets = {
  8: {
    name: 'Earthmoving',
    label: 'earthmoving',
    productCategories: [
      353, // Compact Loader Dozers
      76, // Compact Track Loaders
      333, // Compact Wheel Loaders
      14, // Crawler Dozers
      94, // Crawler Loaders
      112, // Excavator Buckets
      16, // Excavators
      165, // Mini Compact Track Loaders
      329, // Mini Excavators
      166, // Mini Skid-Steer Loaders
      28, // Motor Graders
      32, // Scrapers
      243, // Skid-Steer Loaders
      247, // Soil Compactors
      272, // Tractors
      44, // Wheel Loaders
      301, // Wheeled Excavators
      55, // Articulated Dump Trucks
    ],
  },
  1: {
    name: 'Aggregates',
    label: 'aggregates',
    productCategories: [
      231, // Sand & Aggregates Washing plants
      251, // Stationary Cone Crushers
      253, // Stationary Screens
      345, // Crushing Plants
      346, // Impact Crushers
      146, // Jaw Crushers
      33, // Mobile Screens
      199, // Portable Cone Crushers
      200, // Portable Jaw Crushers
      201, // Portable Screens
      267, // Track Mounted Cone Crushers
      268, // Track Mounted Impact Crushers
      269, // Track Mounted Jaw Crushers
      270, // Track Mounted Screens
      271, // Tracked Stackers
      220, // Rigid Haulers
    ],
  },
  38: {
    name: 'Trucking and transportation',
    label: 'trucking-and-transportation',
    productCategories: [
      154, // Lowboy Trailers
      135, // On Highway Trucks
      182, // Pickup Trucks
      257, // Tandem Axle Trailers
      297, // Vocational Trucks
    ],
  },
  36: {
    name: 'Construction technologies',
    label: 'construction-technologies',
    productCategories: [
      312, // Construction Software
      157, // Machine Control
      258, // Telematics
    ],
  },
  6: {
    name: 'Concrete construction',
    label: 'concrete-construction',
    productCategories: [
      80, // Concrete Mixer Trucks
      11, // Concrete Pavers
      83, // Concrete Pump Trucks
      82, // Concrete Pulverizers
      322, // Concrete Saws
      84, // Concrete Vibrators
      406, // Volumetric Concrete Mixers
      19, // Ground Penetrating Radar
    ],
  },
  2: {
    name: 'Roadbuilding',
    label: 'roadbuilding',
    productCategories: [
      36, // Tandem Asphalt Rollers
      360, // Curb & Gutter Pavers
      160, // Material Transfer Vehicles
      198, // Pneumatic Tire Rollers
      245, // Slipform Pavers
      248, // Soil Stabilizers
    ],
  },
  19: {
    name: 'Light equipment',
    label: 'light-equipment',
    productCategories: [
      10, // Compressors
      18, // Generators
      25, // Light Towers
    ],
  },
  18: {
    name: 'Cranes and Lifts',
    label: 'cranes-and-lifts',
    productCategories: [
      358, // All Terrain Cranes
      1, // Articulated Boom Lifts
      93, // Crawler Cranes
      17, // Forklifts
      24, // Lattice Boom Cranes
      354, // Luffing-Jib Tower Cranes
      341, // Mini Cranes
      170, // Mobile Cranes
      189, // Pipe Layers
      227, // Rough Terrain Cranes
      37, // Telehandlers
      38, // Telescopic Boom Lifts
      40, // Tower Cranes
      42, // Truck Mounted Cranes
    ],
  },
  52: {
    name: 'Mining',
    label: 'mining',
    productCategories: [
      167, // Mining Shovels
      168, // Mining Trucks
      284, // Underground Mining Loaders
      285, // Underground Mining Trucks
      220, // Rigid Haulers
    ],
  },
  56: {
    name: 'Forestry',
    label: 'forestry',
    productCategories: [
      374, // Forestry Forwarders
      376, // Forestry Harvesters
      120, // Forestry Log Loaders
      121, // Forestry Tractors
      369, // Skidders
    ],
  },
  28: {
    name: 'Foundations',
    label: 'foundations',
    productCategories: [
    ],
  },
  27: {
    name: 'Parts & Components',
    label: 'parts-and-components',
    productCategories: [
      103, // Diesel Engines
      126, // Gas Engines
      273, // Transmissions
    ],
  },
  4: {
    name: 'Attachments',
    label: 'attachments',
    productCategories: [
      128, // Grapples
      7, // Hydraulic Breakers
      138, // Hydraulic Concrete Pulverizers
      139, // Hydraulic Hammers
      141, // Hydraulic Scrap Shears
      176, // Mulchers
      181, // Orange Peel Grapples
      196, // Plate Compactors
      205, // Quick Couplers
      235, // Screening Buckets
      295, // Vibratory Rammers
    ],
  },
  5: {
    name: 'Construction & Demolition Recycling',
    label: 'construction-and-demolition-recycling',
    productCategories: [
      100, // Demolition Excavators
      101, // Demolition Robots
      142, // Hydro Demolition Robots
      267, // Track Mounted Cone Crushers
      268, // Track Mounted Impact Crushers
      269, // Track Mounted Jaw Crushers
      270, // Track Mounted Screens
      271, // Tracked Stackers
    ],
  },
  21: {
    name: 'Equipment Maintenance',
    label: 'equipment-maintenance',
    productCategories: [
      156, // Lubricants
      265, // Tires
    ],
  },
  69: {
    name: 'Safety',
    label: 'construction-safety',
    productCategories: [
    ],
  },
  23: {
    name: 'Occupational Health & Safety',
    label: 'construction-safety',
    productCategories: [
    ],
  },
  50: {
    name: 'Underground Construction',
    label: 'underground-construction',
    productCategories: [
      20, // Horizontal Directional Drills
      143, // Hydro Excavators
      41, // Trenchers
      287, // Utility Locators
      289, // Vacuum Excavators
      366, // Vibratory Plows
      318, // Walk Behind Trenchers
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

const SITE_URL = 'https://www.heavyequipmentguide.ca';
const META = {
  description: 'Heavy Equipment Guide covers the latest industry news, product information and new equipment technologies for the Canadian construction, road-building, and aggregates markets.',
  site_logo: `${SITE_URL}/heg/logo-header.png`,
};

export default {
  id: 'heg',
  title: 'Heavy Equipment Guide',
  gtmCode: 'GTM-TX98NNV',
  isDefault: true,
  hostPatterns: 'heavyequipmentguide\.ca',
  audienceBuckets,
  cssVars: {
    '--primary-1': '#2865ab',
    '--primary-2': '#0076ff',
    '--primary-2-r': '0, 118, 255',
    '--secondary-1': '#ff9f00',
    '--secondary-2': '#eeeeee',
    '--gradient': 'linear-gradient(to right, #2865ab, #0076ff)',
  },
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/heg/favicon.ico' },
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
        content: 'Heavy Equipment Guide',
      },
      {
        property: 'og:site_name',
        hid: 'og:site_name',
        content: 'Heavy Equipment Guide',
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
        content: '@HeavyEquipGuide',
      },
    ],
    script: [
      {
        hid: 'sd-organization',
        innerHTML: `
          {
            "@context": "http://schema.org",
            "@type": "Corporation",
            "name": "Heavy Equipment Guide",
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
        facebook: 'https://www.facebook.com/HeavyEquipmentGuide/',
        twitter: 'https://twitter.com/HeavyEquipGuide',
        youtube: 'https://www.youtube.com/channel/UCK4eU7B8jVlMa-8ZR1u-Zzw/',
        linkedIn: 'https://www.linkedin.com/company/heavy-equipment-guide/',
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
        adUnit: 'HEG-INTERSTITIAL',
        size: '900x600,600x400,300x250,300x200',
        sizeMapping: sizeMappings.interstitial,
      },
      catfish: {
        adUnit: 'HEG-CATFISH',
        size: '320x50',
      },
      leaderboard1: {
        adUnit: 'HEG-LEADERBOARD1',
        size: '320x100,468x60,728x90,970x250,970x500',
        sizeMapping: sizeMappings.leaderboard,
      },
      leaderboard1smsequipment: {
        adUnit: 'HEG-LEADERBOARD1-SMSEQUIPMENT',
        size: '320x100,468x60,728x90,970x250,970x500',
        sizeMapping: sizeMappings.leaderboard,
      },
      leaderboard1komatsu: {
        adUnit: 'HEG-LEADERBOARD1-KOMATSU',
        size: '320x100,468x60,728x90,970x250,970x500',
        sizeMapping: sizeMappings.leaderboard,
      },
      leaderboard1bomag: {
        adUnit: 'HEG-LEADERBOARD1-BOMAG',
        size: '320x100,468x60,728x90,970x250,970x500',
        sizeMapping: sizeMappings.leaderboard,
      },
      leaderboard2: {
        adUnit: 'HEG-LEADERBOARD2',
        size: '320x100,468x60,728x90,970x250,970x500',
        sizeMapping: sizeMappings.leaderboard,
      },
      leaderboard2smsequipment: {
        adUnit: 'HEG-LEADERBOARD2-SMSEQUIPMENT',
        size: '320x100,468x60,728x90,970x250,970x500',
        sizeMapping: sizeMappings.leaderboard,
      },
      leaderboard2komatsu: {
        adUnit: 'HEG-LEADERBOARD2-KOMATSU',
        size: '320x100,468x60,728x90,970x250,970x500',
        sizeMapping: sizeMappings.leaderboard,
      },
      leaderboard2bomag: {
        adUnit: 'HEG-LEADERBOARD2-BOMAG',
        size: '320x100,468x60,728x90,970x250,970x500',
        sizeMapping: sizeMappings.leaderboard,
      },
      bigbox1: {
        adUnit: 'HEG-BIGBOX1',
        size: '300x250,300x600',
      },
      bigbox1smsequipment: {
        adUnit: 'HEG-BIGBOX1-SMSEQUIPMENT',
        size: '300x250,300x600',
      },
      bigbox1komatsu: {
        adUnit: 'HEG-BIGBOX1-KOMATSU',
        size: '300x250,300x600',
      },
      bigbox1bomag: {
        adUnit: 'HEG-BIGBOX1-BOMAG',
        size: '300x250,300x600',
      },
      bigbox2: {
        adUnit: 'HEG-BIGBOX2',
        size: '300x250,300x600',
      },
      bigbox2smsequipment: {
        adUnit: 'HEG-BIGBOX2-SMSEQUIPMENT',
        size: '300x250,300x600',
      },
      bigbox2komatsu: {
        adUnit: 'HEG-BIGBOX2-KOMATSU',
        size: '300x250,300x600',
      },
      bigbox2bomag: {
        adUnit: 'HEG-BIGBOX2-BOMAG',
        size: '300x250,300x600',
      },
      bigbox3: {
        adUnit: 'HEG-BIGBOX3',
        size: '300x250,300x600',
      },
      bigbox3smsequipment: {
        adUnit: 'HEG-BIGBOX3-SMSEQUIPMENT',
        size: '300x250,300x600',
      },
      bigbox3komatsu: {
        adUnit: 'HEG-BIGBOX3-KOMATSU',
        size: '300x250,300x600',
      },
      bigbox3bomag: {
        adUnit: 'HEG-BIGBOX3-BOMAG',
        size: '300x250,300x600',
      },
      bigbox4: {
        adUnit: 'HEG-BIGBOX4',
        size: '300x250,300x600',
      },
      bigbox4smsequipment: {
        adUnit: 'HEG-BIGBOX4-SMSEQUIPMENT',
        size: '300x250,300x600',
      },
      bigbox4komatsu: {
        adUnit: 'HEG-BIGBOX4-KOMATSU',
        size: '300x250,300x600',
      },
      bigbox4bomag: {
        adUnit: 'HEG-BIGBOX4-BOMAG',
        size: '300x250,300x600',
      },
      bigbox5: {
        adUnit: 'HEG-BIGBOX5',
        size: '300x250,300x600',
      },
      bigbox6: {
        adUnit: 'HEG-BIGBOX6',
        size: '300x250,300x600',
      },
      bigbox7: {
        adUnit: 'HEG-BIGBOX7',
        size: '300x250,300x600',
      },
      bigbox8: {
        adUnit: 'HEG-BIGBOX8',
        size: '300x250,300x600',
      },
      bigbox9: {
        adUnit: 'HEG-BIGBOX9',
        size: '300x250,300x600',
      },
      bigbox10: {
        adUnit: 'HEG-BIGBOX10',
        size: '300x250,300x600',
      },
      bigbox11: {
        adUnit: 'HEG-BIGBOX11',
        size: '300x250,300x600',
      },
      bigbox12: {
        adUnit: 'HEG-BIGBOX12',
        size: '300x250,300x600',
      },
      featurebox1: {
        adUnit: 'HEG-FEATURE1',
        size: '300x250,600x300,728x90,750x300,900x300',
        sizeMapping: sizeMappings.featurebox,
      },
      featurebox1smsequipment: {
        adUnit: 'HEG-FEATURE1-SMSEQUIPMENT',
        size: '300x250,600x300,728x90,750x300,900x300',
        sizeMapping: sizeMappings.featurebox,
      },
      featurebox1komatsu: {
        adUnit: 'HEG-FEATURE1-KOMATSU',
        size: '300x250,600x300,728x90,750x300,900x300',
        sizeMapping: sizeMappings.featurebox,
      },
      featurebox1bomag: {
        adUnit: 'HEG-FEATURE1-BOMAG',
        size: '300x250,600x300,728x90,750x300,900x300',
        sizeMapping: sizeMappings.featurebox,
      },
      featurebox2: {
        adUnit: 'HEG-FEATURE2',
        size: '300x250,600x300,728x90,750x300,900x300',
        sizeMapping: sizeMappings.featurebox,
      },
      featurebox2smsequipment: {
        adUnit: 'HEG-FEATURE2-SMSEQUIPMENT',
        size: '300x250,600x300,728x90,750x300,900x300',
        sizeMapping: sizeMappings.featurebox,
      },
      featurebox2komatsu: {
        adUnit: 'HEG-FEATURE2-KOMATSU',
        size: '300x250,600x300,728x90,750x300,900x300',
        sizeMapping: sizeMappings.featurebox,
      },
      featurebox2bomag: {
        adUnit: 'HEG-FEATURE2-BOMAG',
        size: '300x250,600x300,728x90,750x300,900x300',
        sizeMapping: sizeMappings.featurebox,
      },
      featurebox3: {
        adUnit: 'HEG-FEATURE3',
        size: '300x250,600x300,728x90,750x300,900x300',
        sizeMapping: sizeMappings.featurebox,
      },
      featurebox3smsequipment: {
        adUnit: 'HEG-FEATURE3-SMSEQUIPMENT',
        size: '300x250,600x300,728x90,750x300,900x300',
        sizeMapping: sizeMappings.featurebox,
      },
      featurebox3komatsu: {
        adUnit: 'HEG-FEATURE3-KOMATSU',
        size: '300x250,600x300,728x90,750x300,900x300',
        sizeMapping: sizeMappings.featurebox,
      },
      featurebox3bomag: {
        adUnit: 'HEG-FEATURE3-BOMAG',
        size: '300x250,600x300,728x90,750x300,900x300',
        sizeMapping: sizeMappings.featurebox,
      },
      featurebox4: {
        adUnit: 'HEG-FEATURE4',
        size: '300x250,600x300,728x90,750x300,900x300',
        sizeMapping: sizeMappings.featurebox,
      },
      featurebox4smsequipment: {
        adUnit: 'HEG-FEATURE4-SMSEQUIPMENT',
        size: '300x250,600x300,728x90,750x300,900x300',
        sizeMapping: sizeMappings.featurebox,
      },
      featurebox4komatsu: {
        adUnit: 'HEG-FEATURE4-KOMATSU',
        size: '300x250,600x300,728x90,750x300,900x300',
        sizeMapping: sizeMappings.featurebox,
      },
      featurebox4bomag: {
        adUnit: 'HEG-FEATURE4-BOMAG',
        size: '300x250,600x300,728x90,750x300,900x300',
        sizeMapping: sizeMappings.featurebox,
      },
      featurebox5: {
        adUnit: 'HEG-FEATURE5',
        size: '300x250,600x300,728x90,750x300,900x300',
        sizeMapping: sizeMappings.featurebox,
      },
      featurebox6: {
        adUnit: 'HEG-FEATURE6',
        size: '300x250,600x300,728x90,750x300,900x300',
        sizeMapping: sizeMappings.featurebox,
      },
      featurebox7: {
        adUnit: 'HEG-FEATURE7',
        size: '300x250,600x300,728x90,750x300,900x300',
        sizeMapping: sizeMappings.featurebox,
      },
      featurebox8: {
        adUnit: 'HEG-FEATURE8',
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
              label: 'Kaitlyn Till',
              slug: '/author/kaitlyn-till-55',
            },
            {
              label: 'Arturo Santiago',
              slug: '/author/arturo-santiago-491',
            },
            {
              label: 'Lee Toop',
              slug: '/author/lee-toop-4',
            },
            {
              label: 'Heavy Equipment Guide Staff',
              slug: '/author/heavy-equipment-guide-staff-57',
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
              label: 'Equipment',
              slug: '/article/topic/equipment-75',
            },
            {
              label: 'Aggregates',
              slug: '/article/topic/aggregates-1',
            },
            {
              label: 'Roadbuilding',
              slug: '/article/topic/roadbuilding-2',
            },
            {
              label: 'Cranes & Lift',
              slug: '/article/topic/cranes-and-lift-18',
            },
            {
              label: 'Trucks',
              slug: '/article/topic/trucks-38',
            },
            {
              label: 'Technology',
              slug: '/article/topic/technology-36',
            },
            {
              label: 'Concrete',
              slug: '/article/topic/concrete-6',
            },
            {
              label: 'C&D',
              slug: '/article/topic/candd-5',
            },
            {
              label: 'Safety',
              slug: '/article/topic/safety-69',
            },
            {
              label: 'Industry News',
              slug: '/article/topic/industry-news-14',
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
              label: 'Equipment',
              slug: '/video/topic/equipment-75',
            },
            {
              label: 'Aggregates',
              slug: '/video/topic/aggregates-1',
            },
            {
              label: 'Roadbuilding',
              slug: '/video/topic/roadbuilding-2',
            },
            {
              label: 'Cranes & Lift',
              slug: '/video/topic/cranes-and-lift-18',
            },
            {
              label: 'Trucks',
              slug: '/video/topic/trucks-38',
            },
            {
              label: 'Technology',
              slug: '/video/topic/technology-36',
            },
            {
              label: 'Concrete',
              slug: '/video/topic/concrete-6',
            },
            {
              label: 'C&D',
              slug: '/video/topic/candd-5',
            },
            {
              label: 'Safety',
              slug: '/video/topic/safety-69',
            },
            {
              label: 'Industry News',
              slug: '/video/topic/industry-news-14',
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
              label: 'Aggregates',
              slug: '/product/topic/aggregates-1',
            },
            {
              label: 'C&D',
              slug: '/product/topic/candd-5',
            },
            {
              label: 'Concrete',
              slug: '/product/topic/concrete-6',
            },
            {
              label: 'Cranes & Lift',
              slug: '/product/topic/cranes-and-lift-18',
            },
            {
              label: 'Equipment',
              slug: '/product/topic/equipment-75',
            },
            {
              label: 'Industry News',
              slug: '/product/topic/industry-news-14',
            },
            {
              label: 'Roadbuilding',
              slug: '/product/topic/roadbuilding-2',
            },
            {
              label: 'Safety',
              slug: '/product/topic/safety-69',
            },
            {
              label: 'Technology',
              slug: '/product/topic/technology-36',
            },
            {
              label: 'Trucks',
              slug: '/product/topic/trucks-38',
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
          class: 'mt-md-55 mb-md-55',
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
            category: 'feed.more_headlines.topic',
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
          class: 'mt-md-55 mb-md-55',
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
          class: 'mt-md-55 mb-md-55',
          data: {
            ad: {
              options: '$multisite.site.config.ads.featurebox3',
            },
          },
        },
      },

      // Equipment
      {
        component: 'HomepageBlockTwoThird',
        options: {
          left: {
            title: 'Equipment',
            category: 'feed.equipment.topic',
            highlight: {
              data: 'feed.equipment.featured',
              component: 'CardArticle',
              class: 'card-article--large',
              attrs: {
                showText: true,
              },
            },
            list: {
              component: 'Card',
              data: 'feed.equipment.list',
              limit: 3,
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
          class: 'mt-md-55 mb-md-55',
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
          class: 'mt-md-55 mb-md-55',
          data: {
            ad: {
              options: '$multisite.site.config.ads.featurebox5',
            },
          },
        },
      },

      // Aggregates
      {
        component: 'HomepageBlockTwoThird',
        options: {
          left: {
            title: 'Aggregates',
            category: 'feed.aggregates.topic',
            highlight: {
              data: 'feed.aggregates.featured',
              component: 'CardArticle',
              class: 'card-article--large',
              attrs: {
                showText: true,
              },
            },
            list: {
              component: 'Card',
              data: 'feed.aggregates.list',
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
          class: 'mt-md-55 mb-md-55',
          data: {
            ad: {
              options: '$multisite.site.config.ads.featurebox6',
            },
          },
        },
      },

      // Trucks
      {
        component: 'HomepageBlockTwoThird',
        options: {
          left: {
            title: 'Trucks',
            category: 'feed.trucks.topic',
            highlight: {
              data: 'feed.trucks.featured',
              component: 'CardArticle',
              class: 'card-article--large',
              attrs: {
                showText: true,
              },
            },
            list: {
              component: 'Card',
              data: 'feed.trucks.list',
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
          class: 'mt-md-55 mb-md-55',
          data: {
            ad: {
              options: '$multisite.site.config.ads.featurebox7',
            },
          },
        },
      },

      // Roadbuilding
      {
        component: 'HomepageBlockTwoThird',
        options: {
          left: {
            title: 'Roadbuilding',
            category: 'feed.roadbuilding.topic',
            highlight: {
              data: 'feed.roadbuilding.featured',
              component: 'CardArticle',
              class: 'card-article--large',
              attrs: {
                showText: true,
              },
            },
            list: {
              component: 'Card',
              data: 'feed.roadbuilding.list',
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
          class: 'mt-md-55 mb-md-55',
          data: {
            ad: {
              options: '$multisite.site.config.ads.featurebox8',
            },
          },
        },
      },

      // Technology
      {
        component: 'HomepageBlockTwoThird',
        options: {
          left: {
            title: 'Technology',
            category: 'feed.technology.topic',
            highlight: {
              data: 'feed.technology.featured',
              component: 'CardArticle',
              class: 'card-article--large',
              attrs: {
                showText: true,
              },
            },
            list: {
              component: 'Card',
              data: 'feed.technology.list',
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
