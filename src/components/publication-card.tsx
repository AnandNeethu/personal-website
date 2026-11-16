import { ArrowUpRight } from "lucide-react";
import type { Publication } from "@/types/academic";
import { Tags } from "@/components/ui";

export function PublicationCard({ publication: paper, compact = false }: { publication: Publication; compact?: boolean }) {
  const href = paper.doi ? `https://doi.org/${paper.doi}` : paper.url;
  return <article className={`publication-card ${compact ? "is-compact" : ""}`} id={paper.id}>
    <div className="publication-meta"><span className={`status-tag ${paper.status === "Published" ? "" : "status-pending"}`}>{paper.status}</span>{paper.featured && <span className="cover-note">Journal cover feature</span>}</div>
    <h3>{href ? <a href={href} target="_blank" rel="noopener noreferrer">{paper.title}<ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a> : paper.title}</h3>
    {paper.authors.length > 0 ? <p className="publication-authors">{paper.authors.map((author, i) => <span key={`${author}-${i}`}>{i > 0 && ", "}{author === "Neethu Anand" ? <strong>{author}</strong> : author}</span>)}</p> : <p className="publication-authors placeholder-text">Author list to be confirmed</p>}
    <p className="publication-venue">{paper.journal ? <><em>{paper.journal}</em>{paper.citation && ` · ${paper.citation}`}{paper.year && ` (${paper.year})`}</> : "Venue and publication year to be confirmed"}</p>
    {!compact && <div className="publication-bottom"><Tags items={paper.topics} />{href && <a className="doi-link" href={href} target="_blank" rel="noopener noreferrer">{paper.doi ? `DOI: ${paper.doi}` : "Publisher / preprint"}<ArrowUpRight size={13} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>}</div>}
    {!compact && paper.note && <p className="publication-note">{paper.note}</p>}
  </article>;
}
