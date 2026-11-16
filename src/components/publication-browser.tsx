"use client";

import { useId, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import type { Publication } from "@/types/academic";
import { PublicationCard } from "@/components/publication-card";

export function PublicationBrowser({ publications }: { publications: readonly Publication[] }) {
  const id = useId();
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");
  const [topic, setTopic] = useState("all");
  const statuses = [...new Set(publications.map((paper) => paper.status))];
  const topics = [...new Set(publications.flatMap((paper) => paper.topics))].sort();
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const visible = publications.filter((paper) =>
    (status === "all" || paper.status === status) && (topic === "all" || paper.topics.includes(topic)) &&
    [paper.title, ...paper.authors, paper.journal ?? "", paper.doi ?? "", String(paper.year ?? ""), ...paper.topics].join(" ").toLocaleLowerCase().includes(normalizedQuery),
  );
  const published = visible.filter((paper) => paper.status === "Published").toSorted((a, b) => (b.year ?? 0) - (a.year ?? 0));
  const other = visible.filter((paper) => paper.status !== "Published");
  const years = [...new Set(published.map((paper) => paper.year))];
  function reset() { setQuery(""); setStatus("all"); setTopic("all"); }

  return <div className="publication-browser">
    <div className="publication-controls" role="search" aria-label="Filter publications">
      <div className="search-field"><label htmlFor={`${id}-query`}>Search publications</label><div><Search size={17} aria-hidden="true" /><input id={`${id}-query`} type="search" placeholder="Title, author, DOI, or year…" value={query} onChange={(event) => setQuery(event.target.value)} /></div></div>
      <div className="select-field"><label htmlFor={`${id}-status`}>Publication status</label><select id={`${id}-status`} value={status} onChange={(event) => setStatus(event.target.value)}><option value="all">All statuses</option>{statuses.map((value) => <option key={value}>{value}</option>)}</select></div>
      <div className="select-field"><label htmlFor={`${id}-topic`}>Research topic</label><select id={`${id}-topic`} value={topic} onChange={(event) => setTopic(event.target.value)}><option value="all">All topics</option>{topics.map((value) => <option key={value}>{value}</option>)}</select></div>
    </div>
    <div className="results-summary"><p role="status" aria-live="polite" aria-atomic="true"><SlidersHorizontal size={14} aria-hidden="true" />Showing {visible.length} of {publications.length} records</p>{(query || status !== "all" || topic !== "all") && <button type="button" className="text-button" onClick={reset}>Clear filters</button>}</div>
    {visible.length === 0 && <div className="empty-state"><h2>No matching publications</h2><p>Try a different term or clear the filters to view the full list.</p><button className="button button-secondary" onClick={reset} type="button">Clear filters</button></div>}
    {years.length > 0 && <section aria-labelledby="published-heading"><h2 id="published-heading" className="sr-only">Peer-reviewed publications</h2>{years.map((year) => <div key={year ?? "undated"} className="publication-year-group"><div className="publication-year"><h3>{year ?? "Year to be confirmed"}</h3><span>Peer reviewed</span></div><div>{published.filter((paper) => paper.year === year).map((paper) => <PublicationCard key={paper.id} publication={paper} />)}</div></div>)}</section>}
    {other.length > 0 && <section className="manuscript-section" aria-labelledby="manuscript-heading"><div className="section-heading"><div><p className="eyebrow">Ongoing & forthcoming</p><h2 id="manuscript-heading">Manuscripts & ongoing work</h2><p className="section-description">Statuses follow the October 2026 CV. Publication dates have not been assigned to these records.</p></div></div>{other.map((paper) => <PublicationCard key={paper.id} publication={paper} />)}</section>}
  </div>;
}
