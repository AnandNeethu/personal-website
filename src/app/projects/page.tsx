import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/academic-cards";
import { PageHeading } from "@/components/ui";
import { ContactBanner } from "@/components/contact-banner";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Projects", "Research projects in BODIPY internal conversion, ESIPT, non-Condon effects, solvent-aware graph learning, and fluorescence prediction.", "/projects");

export default function ProjectsPage() {
  return <div className="container page-content">
    <PageHeading eyebrow="Questions, methods & contributions" title="A closer look at the work." description="Selected research studies, from ultrafast molecular mechanisms to solvent-aware prediction of photophysical properties." />
    <div className="project-grid">{projects.map((project) => <ProjectCard project={project} key={project.id} />)}</div>
    <p className="source-note">These descriptive project groupings are drawn from the CV. They do not imply separately funded grants. Statuses reflect the October 2026 record.</p>
    <ContactBanner />
  </div>;
}
