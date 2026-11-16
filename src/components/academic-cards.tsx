import Link from "next/link";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import { publications } from "@/data/publications";
import type { Appointment, Education, Project, ResearchTheme } from "@/types/academic";
import { Tags } from "@/components/ui";

export function ResearchCard({ theme }: { theme: ResearchTheme }) {
  return <Link className="research-card" href={`/research#${theme.id}`}>
    <div className="card-top"><span className="card-number">{theme.number}</span><ArrowUpRight size={21} aria-hidden="true" /></div>
    <h3>{theme.title}</h3><p>{theme.summary}</p><div className="card-bottom"><span>{theme.methods[0]}</span><span>{theme.methods[1]}</span></div>
  </Link>;
}

export function ExperienceTimeline({ appointments }: { appointments: readonly Appointment[] }) {
  return <ol className="timeline">{appointments.map((item) => <li key={item.id} className="timeline-entry" id={item.id}>
    <div className="timeline-date"><span className="timeline-dot" /><p>{item.period}</p>{!item.end && <span className="status-tag">Current appointment</span>}</div>
    <article className="timeline-content"><h2>{item.position}</h2><p className="institution">{item.institution}</p><p className="muted">{item.department}{item.group && <> · {item.group}</>}</p><ul className="contribution-list">{item.contributions.map((text) => <li key={text}>{text}</li>)}</ul></article>
  </li>)}</ol>;
}

export function EducationCard({ item }: { item: Education }) {
  return <article className="education-card"><div className="education-icon"><GraduationCap size={25} aria-hidden="true" /></div><div><p className="eyebrow">{item.period}</p><h2>{item.degree}</h2><p className="institution">{item.institution}</p><p className="muted">Degree awarded {item.awardDate}</p>{item.thesis && <div className="thesis"><span className="eyebrow">Doctoral thesis</span><p>{item.thesis}</p>{item.supervisor && <small>Supervisor: {item.supervisor}</small>}</div>}<ul className="contribution-list">{item.details.map((text) => <li key={text}>{text}</li>)}</ul></div></article>;
}

export function ProjectCard({ project }: { project: Project }) {
  const related = project.publicationIds.flatMap((id) => {
    const publication = publications.find((paper) => paper.id === id);
    return publication ? [publication] : [];
  });
  return <article className="project-card" id={project.id}>
    <div className="project-kicker"><span>{project.theme}</span><span>{project.status}</span></div><h2>{project.title}</h2><p>{project.objective}</p><Tags items={project.methods} /><div className="project-contribution"><h3>Research contribution</h3><p>{project.contribution}</p></div>
    {related.length > 0 && <details className="related-publications"><summary>Related work <span>({related.length})</span></summary><ul>{related.map((paper) => <li key={paper.id}><Link href={`/publications#${paper.id}`}>{paper.title}<ArrowUpRight size={14} aria-hidden="true" /></Link></li>)}</ul></details>}
  </article>;
}
