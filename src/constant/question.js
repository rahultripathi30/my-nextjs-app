const Questions = [
    {
        id:1,
        question:"1. What is Next.js, and how is it different from React?",
        answer:"Next.js is a React framework that provides features like server-side rendering (SSR), static site generation (SSG), and automatic codesplitting. React is a library for building UIs, but it doesn’t provide routing or SSR out-of-the-box, while Next.js does."
    },
    {
        id:2,
        question:"2. What are the key features of Next.js?",
        answer:"Some key features include: Server-side rendering (SSR), Static site generation (SSG), Incremental static regeneration (ISR), Automatic code splitting, Image optimization, File-based routing, API routes"
    },
    {
        id:3,
        question:"3. What are the differences between SSR, SSG, and CSR in Next.js?",
        answer:"SSR (Server-Side Rendering): Pages are rendered on each request, ensuring fresh content but with slightly longer load times. SSG (Static Site Generation): Pages are pre-rendered at build time and served as static HTML. Fast performance but data might be stale. CSR (Client-Side Rendering): Rendering happens entirely on the client, usually after fetching data with JavaScript."
    },
    {
        id:4,
        question:"4. What is Incremental Static Regeneration (ISR) in Next.js?",
        answer:"ISR allows pages to be statically generated at build time and revalidated in the background after a specified time (revalidate). It enables fresh content without full builds for each update."
    },
    {
        id:5,
        question:"5. Explain the difference between getStaticProps and getServerSideProps.",
        answer:"getStaticProps: Fetches data at build time for static generation (SSG). Optionally, you can revalidate content using ISR. getServerSideProps: Fetches data on every request for server-side rendering (SSR)."
    },
    {
        id:6,
        question:"6. How does Next.js optimize images?",
        answer:"Next.js uses the next/image component to optimize images. It provides features like automatic lazy loading, responsive images, and serving modern formats like WebP. Image files are optimized on the server and cached."
    },
    {
        id:7,
        question:"7. What is the purpose of getInitialProps, and how does it differ from getServerSideProps?",
        answer:"getInitialProps was used to fetch data for both SSR and CSR, but it has been replaced with getServerSideProps for SSR and getStaticProps for SSG in newer versions of Next.js. It is still supported but not recommended."
    },
    {
        id:8,
        question:"8. Explain how routing works in Next.js.",
        answer:"Next.js uses a file-based routing system. Any .js file in the pages/ directory automatically becomes a route. Dynamic routing can be created by using square brackets (e.g., [id].js)."
    },
    {
        id:9,
        question:"9. What are dynamic routes in Next.js? How do you create them?",
        answer:"Dynamic routes are created by defining filenames with square brackets. For example, pages/post/[id].js will match routes like /post/1 or /post/hello."
    },
    {
        id:10,
        question:"10. How do you handle redirects and rewrites in Next.js?",
        answer:"Redirects and rewrites are handled in next.config.js through the redirects() and rewrites() functions. Redirects send users from one URL to another, while rewrites allow you to mask URLs without changing the displayed URL."
    },
    {
        id:11,
        question:"11. How does Next.js help with SEO?",
        answer:"Next.js helps with SEO by providing features like SSR and SSG, which render pages on the server, allowing search engines to crawl the fully rendered HTML. It also enables dynamic meta tags via next/head."
    },
    {
        id:12,
        question:"12. How do you optimize performance in a Next.js application?",
        answer:"Performance can be optimized using various techniques: Image optimization with next/image,  Lazy loading components with dynamic imports (import('path-to-component')),  Prefetching pages with the Link component,  Using SSG/ISR for fast page loads,  Minimizing the JavaScript bundle by using next.config.js with webpack optimizations"
    },
    {
        id:13,
        question:"13. How does code splitting work in Next.js?",
        answer:"Next.js automatically splits code by default. Each page has its own JavaScript bundle, and shared code is extracted into separate chunks. This ensures only the required JavaScript is loaded for each page, improving performance."
    },
    {
        id:14,
        question:"What is Middleware in Next.js, and how do you use it?",
        answer:" Middleware allows you to run code before a request is completed, enabling features like redirects, authentication, or modifying the response. Middleware runs in the edge runtime."
    },
    {
        id:15,
        question:"15. What is custom _app.js and _document.js?",
        answer:"_app.js: Customizes the root component that wraps all pages. It's commonly used for global styles, layouts, or state management.  _document.js: Customizes the structure of the HTML document (e.g., adding meta tags, external scripts)."
    },
    {
        id:16,
        question:"16. Explain the concept of prefetching in Next.js.",
        answer:"Next.js automatically prefetches linked pages when they enter the viewport using the Link component. This preloads the page code in the background, leading to faster navigation."
    },
    {
        id:17,
        question:"17. How does Next.js handle static file serving?",
        answer:"Static files (images, fonts, etc.) are stored in the public/ directory in a Next.js project. They can be accessed directly via the root URL (e.g., public/logo.png is accessible at /logo.png)."
    },
];
export default Questions;