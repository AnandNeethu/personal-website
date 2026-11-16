import type { Appointment } from "@/types/academic";

export const experience: readonly Appointment[] = [
  {
    id: "postech", position: "Postdoctoral Research Associate",
    institution: "Pohang University of Science and Technology (POSTECH)",
    department: "Department of Chemistry", group: "Ultrafast Dynamics Laboratory",
    period: "17 November 2021 – Present", start: "2021-11-17", end: null,
    contributions: [
      "Investigate ultrafast internal conversion and nonadiabatic excited-state processes using quantum dynamics and electronic-structure calculations.",
      "Apply MCTDH wave-packet simulations and vibronic-coupling models to ESIPT, conical-intersection pathways, multimode effects, non-Condon effects, and coherent nuclear motion.",
      "Compare theoretical predictions with ultrafast time-resolved spectroscopy to interpret molecular photophysics and structure–dynamics relationships.",
      "Develop graph-isomorphism neural-network approaches for optical and photophysical property prediction.",
    ],
  },
  {
    id: "doctoral", position: "Doctoral research in theoretical and computational chemistry",
    institution: "IISER Thiruvananthapuram", department: "School of Chemistry",
    group: "Supervised by Dr. Vennapusa Sivaranjana Reddy",
    period: "1 August 2015 – 31 December 2020", start: "2015-08-01", end: "2020-12-31",
    contributions: [
      "Investigated nonadiabatic ESIPT in hydroxypyrone analogs, including conical intersections, higher excited states, and multimode nuclear motion.",
      "Applied quantum wave-packet dynamics, electronic-structure calculations, and analysis of excited-state potential-energy surfaces.",
      "Co-supervised four Master’s thesis students in electronic-structure calculations, photochemistry, data analysis, and thesis preparation.",
    ],
  },
];

export const teaching = [
  {
    role: "Lecturer · CHEM801A-01 Young Chemist Colloquium", institution: "POSTECH", period: "Spring 2023",
    description: "Delivered a departmental Young Chemist Colloquium lecture as part of academic training and research communication.",
  },
  {
    role: "Teaching Assistant · School of Chemistry", institution: "IISER Thiruvananthapuram", period: "During Ph.D.",
    description: "Supported CHY 111 (Atomic Structure and Chemical Bonding), IDC 221 (Principles and Applications of Spectroscopy), and the Computational Chemistry Laboratory, including Gaussian exercises.",
  },
] as const;

export const conferences = [
  { year: "2026", title: "137th General Meeting of the Korean Chemical Society", location: "Jeju, Republic of Korea", format: "Poster" },
  { year: "2024", title: "Center for Quantum Dynamics Summer Workshop", location: "Gangneung, Republic of Korea", format: "Workshop" },
  { year: "2023", title: "Center for Quantum Dynamics Summer Workshop", location: "Gangneung, Republic of Korea", format: "Contributed talk" },
  { year: "2023", title: "22nd Advanced Lasers and Their Applications (ALTA)", location: "Jeju Island, Republic of Korea", format: "Conference" },
  { year: "2023", title: "Young Chemist Colloquium Lecture", location: "POSTECH, Republic of Korea", format: "Lecture" },
  { year: "2022", title: "Center for Quantum Dynamics Summer Workshop", location: "PyeongChang Alpensia, Republic of Korea", format: "Workshop" },
  { year: "2020", title: "Frontier Symposium in Chemistry", location: "IISER Thiruvananthapuram", format: "Poster · Best Poster Award" },
  { year: "2020", title: "International Conference on Ultrafast Spectroscopy", location: "IISER Thiruvananthapuram", format: "Conference" },
  { year: "2020", title: "National Symposium on Recent Advances in Chemistry", location: "Pondicherry University", format: "Poster" },
  { year: "2019", title: "16th Theoretical Chemistry Symposium", location: "BITS Pilani", format: "Poster" },
  { year: "2017", title: "8th Asia-Pacific Conference on Theoretical and Computational Chemistry", location: "IIT Bombay", format: "Poster" },
] as const;
