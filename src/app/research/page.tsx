import { research } from "@/data/research";
import { PageHeading, SectionJump, Tags, TextLink } from "@/components/ui";
import { ContactBanner } from "@/components/contact-banner";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Research", "Research on MCTDH quantum dynamics, nonadiabatic processes, ESIPT, and solvent-aware molecular graph learning.", "/research");

export default function ResearchPage() {
  return <div className="container page-content">
    <PageHeading eyebrow="Research directions" title="Molecules, light & motion." description="Connecting electronic structure and nuclear dynamics to explain molecular photophysics—and extending those insights with machine learning."><SectionJump items={research.map((theme) => ({ id: theme.id, label: theme.shortTitle }))} /></PageHeading>
    <div className="research-details">{research.map((theme) => <section className="research-detail" id={theme.id} key={theme.id} aria-labelledby={`${theme.id}-title`}><div className="research-detail-title"><span className="large-number">{theme.number}</span><h2 id={`${theme.id}-title`}>{theme.title}</h2><p>{theme.summary}</p><Tags items={theme.methods} /></div><div className="research-detail-copy"><p className="research-question">{theme.question}</p><h3>Computational approach</h3><p>{theme.approach}</p><h3>Scientific context</h3><p>{theme.relevance}</p><div className="button-group"><TextLink href="/projects">Related projects</TextLink><TextLink href="/publications">Publications</TextLink></div></div></section>)}</div>
    <ContactBanner />
  </div>;
}
