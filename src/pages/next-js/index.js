import Link from "next/link";
import Questions from "@/constant/question";
export default function NextJS() {
  return (
    <>
      {Questions.map((ques) => (
        <div>
          <h3>{ques.question}</h3>
          <p>
            {ques.answer}
          </p>
        </div>
      ))}
      <br />
      <Link href={"/"}>Go to Home Page</Link>
    </>
  );
}
