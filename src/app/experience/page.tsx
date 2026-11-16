import { experience, teaching, conferences } from "@/data/experience";
import { ExperienceTimeline } from "@/components/academic-cards";
import { PageHeading, SectionHeading, SectionJump } from "@/components/ui";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Research experience", "Research appointments, doctoral work, teaching, and scientific presentations at POSTECH and IISER Thiruvananthapuram.", "/experience");

export default function ExperiencePage() {
  return <div className="container page-content">
    <PageHeading eyebrow="Appointments & academic exchange" title="Research in practice." description="From mechanistic studies of proton transfer to multidimensional quantum dynamics and molecular learning."><SectionJump items={[{ id: "appointments", label: "Research appointments" }, { id: "teaching", label: "Teaching" }, { id: "presentations", label: "Talks & conferences" }]} /></PageHeading>
    <section id="appointments" aria-label="Research appointments"><ExperienceTimeline appointments={experience} /><p className="source-note">The current appointment is reported as ongoing in the October 2026 CV. The doctoral research period and formal degree award date are recorded separately on the education page.</p></section>
    <section className="section" id="teaching"><SectionHeading title="Teaching & academic training" /><div className="two-column">{teaching.map((item) => <article className="simple-card" key={item.role}><p className="eyebrow">{item.period} · {item.institution}</p><h3>{item.role}</h3><p>{item.description}</p></article>)}</div></section>
    <section id="presentations"><SectionHeading title="Selected talks, conferences & workshops" /><ol className="conference-list">{conferences.map((item) => <li key={`${item.year}-${item.title}`}><span className="conference-year">{item.year}</span><div><h3>{item.title}</h3><p>{item.location}</p></div><span className="conference-format">{item.format}</span></li>)}</ol></section>
  </div>;
}
