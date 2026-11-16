import type { Publication } from "@/types/academic";

export const publications: readonly Publication[] = [
  {
    id: "bodipy-2025",
    title: "Understanding contrasting S₂→S₁ internal conversion rates in boron-dipyrromethene derivatives via multi-configuration time-dependent Hartree method",
    authors: ["Neethu Anand", "Munnyon Kim", "Changmin Lee", "Jinhyuk Ma", "Taiha Joo"],
    journal: "Physical Chemistry Chemical Physics", year: 2025, citation: "27, 23550–23560",
    doi: "10.1039/D5CP02771C", status: "Published", topics: ["Quantum dynamics"], featured: true,
    note: "Featured on the journal front cover, as recorded in the CV.",
  },
  {
    id: "hydroxypyran-2023",
    title: "Understanding the photodynamics of 3-hydroxypyran-4-one using surface hopping simulations",
    authors: ["Probal Nag", "Anshuman Bera", "Neethu Anand", "Ravi Kumar Kanaparthi", "Sivaranjana Reddy Vennapusa"],
    journal: "Journal of Photochemistry & Photobiology A: Chemistry", year: 2023, citation: "438, 114538",
    doi: "10.1016/j.jphotochem.2023.114538", status: "Published", topics: ["Proton transfer", "Surface hopping"],
  },
  {
    id: "hydroxychromone-2021",
    title: "Ultrafast nonadiabatic excited-state intramolecular proton transfer in 3-hydroxychromone: A surface hopping approach",
    authors: ["Probal Nag", "Neethu Anand", "Sivaranjana Reddy Vennapusa"],
    journal: "The Journal of Chemical Physics", year: 2021, citation: "155, 094301",
    doi: "10.1063/5.0060934", status: "Published", topics: ["Proton transfer", "Surface hopping"],
  },
  {
    id: "thiazole-2021",
    title: "Symmetrical and unsymmetrical thiazole-based ESIPT derivatives: the highly selective fluorescence sensing of Cu²⁺ and structure-controlled reversible mechanofluorochromism",
    authors: ["Parthasarathy Gayathri", "Karuppaiah Kanagajothi", "Probal Nag", "Neethu Anand", "Vennapusa Sivaranjana Reddy", "Dohyun Moon", "Savarimuthu Philip Anthony", "Vedichi Madhu"],
    journal: "CrystEngComm", year: 2021, citation: "23, 6769–6777",
    doi: "10.1039/D1CE00927C", status: "Published", topics: ["Proton transfer", "Fluorescence"],
  },
  {
    id: "halochromism-2021",
    title: "Molecular conformational twist-controlled wide fluorescence tuning and white light emission in a single fluorophore via halochromism",
    authors: ["Parthasarathy Gayathri", "Probal Nag", "Neethu Anand", "Sivaranjana Reddy Vennapusa", "Mehboobali Pannipara", "Abdullah G. Al-Sehemi", "Dohyun Moon", "Savarimuthu Philip Anthony"],
    journal: "New Journal of Chemistry", year: 2021, citation: "45, 22450–22460",
    doi: "10.1039/D1NJ04911A", status: "Published", topics: ["Fluorescence"],
  },
  {
    id: "hydroxypyran-2020",
    title: "O–H vibrational motions promote sub-50 fs nonadiabatic dynamics in 3-hydroxypyran-4-one: Interplay between internal conversion and ESIPT",
    authors: ["Neethu Anand", "Probal Nag", "Ravikumar Kanaparthi", "Sivaranjana Reddy Vennapusa"],
    journal: "Physical Chemistry Chemical Physics", year: 2020, citation: "22, 8745–8756",
    doi: "10.1039/D0CP00741B", status: "Published", topics: ["Proton transfer", "Quantum dynamics"],
  },
  {
    id: "hydroxychromones-2020",
    title: "Excited-state intramolecular proton transfer driven by conical intersection in hydroxychromones",
    authors: ["Neethu Anand", "Sai Vamsi Krishna Isukapalli", "Sivaranjana Reddy Vennapusa"],
    journal: "Journal of Computational Chemistry", year: 2020, citation: "41, 1068–1080",
    doi: "10.1002/jcc.26152", status: "Published", topics: ["Proton transfer", "Quantum dynamics"],
  },
  {
    id: "hydroxyflavone-2019",
    title: "Nonadiabatic excited-state intramolecular proton transfer in 3-hydroxyflavone: S₂ state involvement via multi-mode effect",
    authors: ["Neethu Anand", "Kai Welke", "Stephan Irle", "Sivaranjana Reddy Vennapusa"],
    journal: "The Journal of Chemical Physics", year: 2019, citation: "151, 214304",
    doi: "10.1063/1.5127271", status: "Published", topics: ["Proton transfer", "Quantum dynamics"],
  },
  {
    id: "substituent-esipt",
    title: "Substituent-Controlled ESIPT in 10-Substituted Benzo[h]quinoline Derivatives: From Static Energetics to Excited-State Dynamics",
    authors: [], journal: null, year: null, status: "In preparation", topics: ["Proton transfer"],
    note: "Being prepared for submission according to the October 2026 CV. Author list, venue, and publication year have not been supplied.",
  },
  {
    id: "non-condon",
    title: "Investigating Non-Condon Effects Influenced by Nonadiabatic Dynamics: Insights from Time-Resolved Spectroscopy",
    authors: [], journal: null, year: null, status: "In preparation", topics: ["Quantum dynamics"],
    note: "Being prepared for submission according to the October 2026 CV. Author list, venue, and publication year have not been supplied.",
  },
  {
    id: "solvent-gin",
    title: "Solvent-Aware Prediction of Molecular Optical and Photophysical Properties Using Deep Learning",
    authors: [], journal: null, year: null, status: "Preprint forthcoming", topics: ["Machine learning"],
    note: "Work concluded; the CV states that a preprint will be available soon. Author list, venue, year, and public link have not been supplied.",
  },
  {
    id: "solvent-quantum-yield",
    title: "Predicting Solvent-Induced Changes in Fluorescence Quantum Yield: A Comparison of Direct Classification and Regression Approaches",
    authors: [], journal: null, year: null, status: "Preprint forthcoming", topics: ["Machine learning", "Fluorescence"],
    note: "Work concluded; the CV states that a preprint will be available soon. Author list, venue, year, and public link have not been supplied.",
  },
];

// Null-year manuscripts remain separate; no date is inferred from the CV date.
export const publishedPapers = publications
  .filter((paper) => paper.status === "Published")
  .toSorted((a, b) => (b.year ?? 0) - (a.year ?? 0));

export const manuscripts = publications.filter((paper) => paper.status !== "Published");
