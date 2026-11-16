import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return <div className="container page-content not-found"><p className="eyebrow">404 / Page not found</p><h1>A different path to discovery.</h1><p>The page you’re looking for could not be found.</p><div className="button-group"><ButtonLink href="/">Return home</ButtonLink><ButtonLink href="/research" secondary>Explore research</ButtonLink></div></div>;
}
