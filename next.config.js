module.exports = {
  trailingSlash: false,
  images: {
    domains: ["img.discogs.com"],
  },
  async redirects() {
    return [
      {
        source: "/projects",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "https://twitter.com/mirshko",
        permanent: false,
      },
      {
        source: "/photos",
        destination: "https://www.are.na/jeff-reiner/index",
        permanent: false,
      },
    ];
  },
};
