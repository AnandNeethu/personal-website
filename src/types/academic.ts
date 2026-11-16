export type PublicationStatus =
  | "Published"
  | "Accepted"
  | "Submitted"
  | "In preparation"
  | "Preprint forthcoming";

export interface Publication {
  id: string;
  title: string;
  authors: readonly string[];
  journal: string | null;
  year: number | null;
  citation?: string;
  doi?: string;
  url?: string;
  status: PublicationStatus;
  topics: readonly string[];
  note?: string;
  featured?: boolean;
}

export interface ResearchTheme {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  summary: string;
  question: string;
  approach: string;
  relevance: string;
  methods: readonly string[];
}

export interface Appointment {
  id: string;
  position: string;
  institution: string;
  department: string;
  group?: string;
  period: string;
  start: string;
  end: string | null;
  contributions: readonly string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  awardDate: string;
  thesis?: string;
  supervisor?: string;
  details: readonly string[];
}

export interface Project {
  id: string;
  title: string;
  theme: string;
  status: string;
  objective: string;
  methods: readonly string[];
  contribution: string;
  publicationIds: readonly string[];
}

export interface Award {
  title: string;
  organization: string;
  period: string;
  detail?: string;
  category: "Recognition" | "Award" | "Funding";
}

export interface ProfileLink {
  label: string;
  url: string;
  description: string;
}

export interface Profile {
  name: string;
  initials: string;
  designation: string;
  discipline: string;
  affiliation: string;
  department: string;
  group: string;
  location: string;
  introduction: string;
  biography: readonly string[];
  interests: readonly string[];
  email: string | null;
  portrait: string | null;
  publicCv: string | null;
  links: readonly ProfileLink[];
  missingProfiles: readonly string[];
  contentDate: string;
}
