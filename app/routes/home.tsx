import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCaaard from "~/components/ResumeCaaard";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Personal Resume Analyzer" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    <section className="main-section">
      <div className="page-heading">
        <h1>Improve Your Resume</h1>
        <h2>Analyze Your Resume with AI-powered feedback.</h2>
      </div>
    {resumes.length >0 && (
      <div className="resume-section">
      {resumes.map((resume)=> (
        <ResumeCaaard key={resume.id} resume={resume} />
      ))}
        </div>
      )}
      </section>
  </main>;
}
