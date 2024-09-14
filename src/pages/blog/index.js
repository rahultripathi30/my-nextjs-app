import Link from "next/link";

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts }) {
  return (
    <>
      <div>
        <h1>Blog Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`blog/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Link href={"/"}>Go to Home Page</Link>
    </>
  );
}
