import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Hello, Next JS</h2>
      <Link href={"about"}>Go to About Page</Link>
      <br />
      <Link href={"home"}>Go to Home Page</Link>
    </div>
  );
}
