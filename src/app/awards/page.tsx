import { Award as AwardIcon, Sparkles } from "lucide-react";
import { awards } from "@/data/awards";
import { PageHeading, TextLink } from "@/components/ui";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Awards & recognition", "Academic awards, journal recognition, INSPIRE fellowship, and scholarship documented in Neethu Anand’s CV.", "/awards");

export default function AwardsPage() {
  return <div className="container page-content">
    <PageHeading eyebrow="Recognition & competitive funding" title="Milestones along the way." description="Academic awards, research recognition, and support for a journey in theoretical and computational chemistry." />
    <div className="awards-list">{awards.map((award) => <article className="award-card" key={award.title}><div className="award-icon">{award.category === "Recognition" ? <Sparkles size={22} aria-hidden="true" /> : <AwardIcon size={22} aria-hidden="true" />}</div><div><p className="eyebrow">{award.category}</p><h2>{award.title}</h2><p className="institution">{award.organization}</p>{award.detail && <p className="muted">{award.detail}</p>}</div><span className="award-year">{award.period}</span></article>)}</div>
    <div className="inline-callout"><p>Explore the research behind the recognition.</p><TextLink href="/publications">Publications & scientific contributions</TextLink></div>
  </div>;
}
