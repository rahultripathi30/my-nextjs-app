/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /*A redirect in Next.js is when a user is sent from one URL to another. This is useful when a page has been moved, 
  or you want to guide the user to a new location permanently or temporarily.
  How to define a redirect?
  You define redirects in next.config.js using the redirects function. The function returns an array of objects where each object defines:
  source: The old path (where users are coming from).
  destination: The new path (where users should be redirected to).
  permanent: Whether the redirect is permanent (true) or temporary (false).*/

  // async redirects() {
  //   return [
  //     {
  //       source: '/about', // The old URL
  //       destination: '/new-about', // The new URL
  //       permanent: true, // Permanent redirect (301)
  //     },
  //   ];
  // },

  /* 
  A rewrite in Next.js allows you to mask a URL. Unlike a redirect, rewrites keep the URL in the browser the same while 
  serving content from a different path or URL. The user does not see the destination URL in the browser's address bar.
  Similar to redirects, rewrites are also defined in next.config.js using the rewrites function. 
  The key difference is that the destination URL is served without changing the browser URL.
  */
  // async rewrites() {
  //   return [
  //     {
  //       source: '/about', // The user sees this URL in the browser
  //       destination: '/new-about', // Internally Next.js serves content from this URL
  //     },
  //   ];
  // },
};

export default nextConfig;
