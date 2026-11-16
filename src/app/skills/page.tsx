import { skills, training } from "@/data/skills";
import { PageHeading, SectionHeading, SectionJump } from "@/components/ui";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Skills & methods", "Scientific expertise in quantum dynamics, electronic structure, molecular dynamics, Python, graph neural networks, and research communication.", "/skills");

export default function SkillsPage() {
  return <div className="container page-content">
    <PageHeading eyebrow="Methods & technical expertise" title="The tools behind the questions." description="A computational toolkit spanning mechanistic simulation, molecular data, and scientific communication."><SectionJump items={[{ id: "expertise", label: "Expertise" }, { id: "training", label: "Professional development" }]} /></PageHeading>
    <section id="expertise" aria-label="Scientific and technical expertise" className="skills-grid">{skills.map((category, index) => <article key={category.title} className="skill-card"><p className="card-number">{String(index + 1).padStart(2, "0")}</p><h2>{category.title}</h2><p>{category.description}</p><ul>{category.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</section>
    <section id="training" className="section"><SectionHeading title="Professional development" description="Selected coursework and training recorded in the CV." /><ol className="training-list">{training.map((course) => <li key={course.title}><div><h3>{course.title}</h3><p>{course.provider}</p></div><span>{course.date}</span></li>)}</ol><p className="source-note">Course titles and dates are transcribed from the CV. Credential identifiers and unprovided verification links are omitted.</p></section>
  </div>;
}
