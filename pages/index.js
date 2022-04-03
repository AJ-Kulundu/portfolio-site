import Landing from "../components/landing/Home";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Project from "../components/Project";

export default function Home() {
  return (
    <div>
      <Landing />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
}
