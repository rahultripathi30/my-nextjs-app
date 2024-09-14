import Link from "next/link";

export async function getServerSideProps({ params }) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const posts = await response.json();

  const post = posts.find((post) => post.id === parseInt(params.id));

  //Redirect the user to 404 page by NEXT itself if the post is not found.
  //   if (!post) {
  //     return {
  //       notFound: true,
  //     };
  //   }

  if (!post) {
    // Redirect to the custom not found page if the post is not found
    return {
      redirect: {
        destination: "/notFound",
        permanent: false, // `true` if the redirect is permanent, `false` if it's temporary
      },
    };
  }

  return {
    props: {
      post,
    },
  };
}

export default function PostPage({ post }) {
  return (
    <>
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
      <Link href={"/blog"}>Go to Blog Page</Link>
      <br />
    </>
  );
}
