export const navigation = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/about", label: "About" },
] as const;

export const moreNavigation = [
  { href: "/experience", label: "Research experience" },
  { href: "/education", label: "Education" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills & methods" },
  { href: "/awards", label: "Awards & recognition" },
  { href: "/cv", label: "Curriculum vitae" },
] as const;

export const allRoutes = [...navigation, ...moreNavigation, { href: "/contact", label: "Contact" }];
