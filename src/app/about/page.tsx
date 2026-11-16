import Image from "next/image";
import { MapPin } from "lucide-react";
import { profile, collaborations } from "@/data/profile";
import { PageHeading, SectionHeading, Tags, TextLink } from "@/components/ui";
import { ContactBanner } from "@/components/contact-banner";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("About", "Academic biography, research journey, mentoring, and collaborations of Neethu Anand, computational chemist at POSTECH.", "/about");

export default function AboutPage() {
  return <div className="container page-content">
    <PageHeading eyebrow="The person behind the research" title="A curiosity for molecular motion." description="An academic journey through excited-state chemistry, quantum dynamics, and molecular learning." />
    <div className="biography-layout">
      <aside className="biography-profile">{profile.portrait ? <Image src={profile.portrait} width={200} height={267} alt="Neethu Anand" className="about-portrait" sizes="200px" /> : <div className="portrait-placeholder">Profile photograph to be added</div>}<h2>{profile.name}</h2><p>{profile.designation}</p><p className="muted">{profile.department}<br />{profile.affiliation}</p><span className="location"><MapPin size={13} aria-hidden="true" />{profile.location}</span><TextLink href="/cv">Academic CV</TextLink></aside>
      <div className="biography-prose"><h2>Understanding what happens after light.</h2>{profile.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<Tags items={profile.interests} /><div className="button-group"><TextLink href="/experience">Research experience</TextLink><TextLink href="/education">Education</TextLink></div></div>
    </div>
    <section className="section"><SectionHeading title="Research through collaboration" description="Theory–experiment exchange and shared expertise are central to my work." /><div className="two-column">{collaborations.map((item) => <article className="simple-card" key={item.institution}><p className="eyebrow">{item.context}</p><h3>{item.institution}</h3><p>{item.description}</p></article>)}</div></section>
    <section className="mentoring-panel"><p className="eyebrow">Teaching & mentoring</p><h2>Sharing the tools of discovery.</h2><p>During my Ph.D., I co-supervised four Master’s thesis students, providing guidance in electronic-structure calculations, excited-state photochemistry, data analysis, and thesis preparation. Teaching assistantships and a POSTECH Young Chemist Colloquium lecture complement this research mentoring.</p><TextLink href="/experience#teaching">Teaching & academic training</TextLink></section>
    <ContactBanner />
  </div>;
}
