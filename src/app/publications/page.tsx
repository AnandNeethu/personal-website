import { publications, publishedPapers, manuscripts } from "@/data/publications";
import { PublicationBrowser } from "@/components/publication-browser";
import { PageHeading } from "@/components/ui";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("Publications", "Peer-reviewed publications and forthcoming work by Neethu Anand. Full citations, DOI links, status, and topic filtering.", "/publications");

export default function PublicationsPage() {
  return <div className="container page-content">
    <PageHeading eyebrow="Articles & scientific contributions" title="A record of discovery." description="Published research in quantum dynamics and molecular photochemistry, alongside manuscripts and forthcoming work."><div className="publication-stats"><p><strong>{String(publishedPapers.length).padStart(2, "0")}</strong>Peer-reviewed articles</p><p><strong>{String(manuscripts.length).padStart(2, "0")}</strong>Ongoing / forthcoming</p><p className="stats-note">Record based on the<br />October 2026 CV</p></div></PageHeading>
    <PublicationBrowser publications={publications} />
    <p className="source-note">Within each year, articles follow the CV order; exact publication months were not supplied. Manuscripts in preparation and forthcoming preprints are listed separately from published work. No accepted or submitted articles were identified in the supplied CV.</p>
  </div>;
}
