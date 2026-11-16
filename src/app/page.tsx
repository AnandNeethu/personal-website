import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { research } from "@/data/research";
import { publishedPapers } from "@/data/publications";
import { ResearchCard } from "@/components/academic-cards";
import { PublicationCard } from "@/components/publication-card";
import { ResearchIllustration } from "@/components/research-illustration";
import { ContactBanner } from "@/components/contact-banner";
import { ButtonLink, SectionHeading, TextLink } from "@/components/ui";
import { pageMetadata, siteDescription } from "@/lib/site";

export const metadata = pageMetadata("Home", siteDescription, "/");

export default function HomePage() {
  const [givenName, ...familyName] = profile.name.split(" ");

  return <>
    <section className="container hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span />Theoretical & computational chemistry</p>
        <h1 id="hero-title">{givenName}<br /><em>{familyName.join(" ")}<span>.</span></em></h1>
        <p className="hero-position">{profile.designation}<br /><span>Department of Chemistry · POSTECH</span></p>
        <p className="hero-introduction">{profile.introduction}</p>
        <div className="button-group">

          <ButtonLink href="/research">
            Explore my research
          </ButtonLink>

          <ButtonLink href="/cv" secondary>
            View academic CV
          </ButtonLink>
        </div>
        <a className="scroll-cue" href="#research-areas"><ArrowDown size={15} aria-hidden="true" />A closer look at my work</a>
      </div>
      <div className="hero-aside">
        <ResearchIllustration />
        <div className="profile-intro">
          {profile.portrait ? <Image src={profile.portrait} width={200} height={267} sizes="88px" alt={`Portrait of ${profile.name}`} className="profile-portrait" /> : <div className="portrait-placeholder" role="img" aria-label="Profile photograph to be added">{profile.initials}</div>}
          <div><p className="eyebrow">Based at POSTECH</p><p>Exploring the science<br />of molecules in motion.</p><span className="location"><MapPin size={12} aria-hidden="true" />Pohang, Republic of Korea</span></div>
          <Link href="/about" className="profile-arrow" aria-label={`More about ${profile.name}`}><ArrowUpRight size={22} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
    <div className="research-strip"><div className="container"><span>Research at a glance</span>{profile.interests.map((interest) => <span key={interest}><i aria-hidden="true" />{interest}</span>)}</div></div>
    <section className="container section" id="research-areas">
      <SectionHeading number="01" title="How molecules move. Why it matters." description="Three connected directions, from molecular mechanisms to data-driven predictions." href="/research" linkLabel="All research" />
      <div className="research-grid">{research.map((theme) => <ResearchCard theme={theme} key={theme.id} />)}</div>
    </section>
    <section className="about-preview section"><div className="container about-preview-inner"><div><p className="eyebrow">02 / Background</p><h2>At the intersection<br />of theory & discovery.</h2></div><div><p>From doctoral research on excited-state proton transfer at IISER Thiruvananthapuram to ultrafast quantum dynamics at POSTECH, my work connects molecular structure with what happens after light is absorbed.</p><p className="muted">I combine quantum simulations, electronic-structure methods, and experimental comparisons, with a growing focus on molecular machine learning.</p><TextLink href="/about">My academic journey</TextLink></div></div></section>
    <section className="container section">
      <SectionHeading number="03" title="Selected publications" description="Peer-reviewed contributions to molecular photophysics and excited-state dynamics." href="/publications" linkLabel={`View all ${publishedPapers.length} publications`} />
      <div className="selected-publications">{publishedPapers.filter((paper) => ["bodipy-2025", "hydroxypyran-2020", "hydroxyflavone-2019"].includes(paper.id)).map((paper) => <div className="selected-publication" key={paper.id}><span className="selected-year">{paper.year}</span><PublicationCard publication={paper} compact /></div>)}</div>
    </section>
    <div className="container section-bottom"><ContactBanner /></div>
  </>;
}
