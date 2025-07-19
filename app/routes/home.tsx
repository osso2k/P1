import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";


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
    </section>
  </main>;
}
