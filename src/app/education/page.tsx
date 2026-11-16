import { education } from "@/data/education";
import { EducationCard } from "@/components/academic-cards";
import { PageHeading, TextLink } from "@/components/ui";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Education", "Ph.D. in Theoretical and Computational Chemistry and BS–MS dual degree from IISER Thiruvananthapuram.", "/education");

export default function EducationPage() {
  return <div className="container page-content">
    <PageHeading eyebrow="Academic foundations" title="A foundation in chemical science." description="Undergraduate and doctoral training at the Indian Institute of Science Education and Research Thiruvananthapuram." />
    <div className="education-list">{education.map((item) => <EducationCard key={item.id} item={item} />)}</div>
    <div className="inline-callout"><p>Continuing to learn across disciplines.</p><TextLink href="/skills#training">Professional development & certifications</TextLink></div>
  </div>;
}
