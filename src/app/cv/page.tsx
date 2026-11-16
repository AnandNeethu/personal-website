import { Download, FileText } from "lucide-react";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { awards } from "@/data/awards";
import { PageHeading, ReviewNote, SectionHeading, TextLink } from "@/components/ui";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Curriculum vitae", "A public academic CV summary for Neethu Anand, including research appointments, qualifications, and recognition.", "/cv");

export default function CvPage() {
  return <div className="container page-content">
    <PageHeading eyebrow="Curriculum vitae" title="An academic overview." description="A concise public summary of my research experience, education, and recognition.">
      {profile.publicCv ? <a className="button button-primary cv-download" href={profile.publicCv} download>Download public CV<Download size={17} aria-hidden="true" /></a> : <div className="cv-availability"><FileText size={19} aria-hidden="true" /><span>Public PDF version to be added</span></div>}
    </PageHeading>
    <div className="cv-layout"><aside className="cv-sidebar"><h2>{profile.name}</h2><p>{profile.designation}<br />{profile.department}<br />POSTECH</p><TextLink href="/contact">Contact & academic profiles</TextLink></aside><div className="cv-summary"><section><SectionHeading title="Research experience" />{experience.map((item) => <article key={item.id}><p className="eyebrow">{item.period}</p><h3>{item.position}</h3><p>{item.institution}</p></article>)}<TextLink href="/experience">Full research experience</TextLink></section><section><SectionHeading title="Education" />{education.map((item) => <article key={item.id}><p className="eyebrow">{item.period}</p><h3>{item.degree}</h3><p>{item.institution}</p><p className="muted">Awarded {item.awardDate}</p></article>)}</section><section><SectionHeading title="Selected recognition" /><ul className="cv-awards">{awards.map((award) => <li key={award.title}><span>{award.title}</span><span>{award.period}</span></li>)}</ul></section><div className="button-group"><TextLink href="/publications">Complete publication record</TextLink><TextLink href="/skills">Methods & skills</TextLink></div></div></div>
    {!profile.publicCv && <ReviewNote>A downloadable public CV has not been supplied. The original PDF remains private. A separately reviewed version can be added when ready.</ReviewNote>}
  </div>;
}
