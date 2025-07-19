/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://verandahglamping.com', // Ganti dengan URL kamu
    generateRobotsTxt: true,                 // Otomatis generate robots.txt juga
    // Optional: jika ingin exclude halaman tertentu
    // exclude: ['/secret', '/admin/*'],
    // Optional: custom robots.txt policy
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
            // { userAgent: 'Googlebot', allow: '/' },
            // { userAgent: '*', disallow: '/private/' },
        ],
    },
};
