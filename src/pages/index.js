import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>Welcome to My Next.js Blog</h1>
      <h2>This is the homepage of a simple blog!</h2>
      <Link href={"blog"}>Go to Blog Page</Link>
      <br />
      <Link href={"about"}>Go to About Page</Link>
    </div>
  );
}
