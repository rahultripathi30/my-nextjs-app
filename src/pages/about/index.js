import Link from "next/link";

export async function getStaticProps() {
  return {
    props: {
      companyName: "Next.js Blog",
      pageName: "About",
    },
  };
}
export default function About({ companyName, pageName }) {
  return (
    <div>
      <h1>
        Hello, {companyName} {pageName}
      </h1>
      <Link href={"/"}>Home</Link>
    </div>
  );
}
