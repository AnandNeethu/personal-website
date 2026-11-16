import { ArrowUpRight, Building2, Code2, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { PageHeading, ReviewNote, Tags } from "@/components/ui";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Contact", "Affiliation, research collaboration interests, and approved professional contact information for Neethu Anand.", "/contact");

export default function ContactPage() {
  return <div className="container page-content">
    <PageHeading eyebrow="Scientific exchange & collaboration" title="Let’s find common ground." description="Shared questions in molecular photophysics, quantum dynamics, and computational chemistry are a starting point for scientific exchange." />
    <div className="contact-layout"><section className="contact-information" aria-label="Contact information"><article className="contact-detail"><Building2 size={23} aria-hidden="true" /><div><h2>Research affiliation</h2><p>{profile.group}<br />{profile.department}<br />{profile.affiliation}</p><p className="location"><MapPin size={13} aria-hidden="true" />{profile.location}</p></div></article><article className="contact-detail"><Mail size={23} aria-hidden="true" /><div><h2>Professional email</h2>{profile.email ? <a className="text-link" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={15} aria-hidden="true" /></a> : <><p className="placeholder-text">Public contact email to be added.</p><p className="muted">An approved professional email address will appear here.</p></>}</div></article><div className="contact-links">{profile.links.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"><Code2 size={20} aria-hidden="true" /><span><strong>{link.label}</strong><small>{link.description}</small></span><ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>)}</div></section><aside className="collaboration-card"><p className="eyebrow">Shared research interests</p><h2>From molecular mechanisms to new methods.</h2><p>My work brings together quantum-dynamical simulation, electronic-structure analysis, ultrafast spectroscopy comparisons, and molecular machine learning.</p><Tags items={profile.interests} /><p className="muted">Explore the research and projects pages for specific scientific questions and methods.</p></aside></div>
    {profile.missingProfiles.length > 0 && <section className="missing-profiles"><h2>Academic profiles</h2><p className="muted">Verified profile links were not included in the supplied CV.</p><ul>{profile.missingProfiles.map((name) => <li key={name}><span>{name}</span><span className="placeholder-text">Link to be added</span></li>)}</ul></section>}
    {!profile.email && <ReviewNote>Add an approved public email address before sharing this site as a contact destination. Personal contact details from the source CV have been withheld.</ReviewNote>}
  </div>;
}
