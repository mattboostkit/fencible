/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://fencible.co.uk',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [],
  },
  exclude: ['/api/*'],
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    // Set higher priority for important pages
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (path.startsWith('/services')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.startsWith('/areas')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path === '/contact') {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path === '/portfolio') {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path === '/about') {
      priority = 0.7;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
