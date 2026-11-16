import type { Project } from "@/types/academic";

// Descriptive project groupings derived from the CV, not invented funded grants.
export const projects: readonly Project[] = [
  {
    id: "bodipy", title: "Internal conversion in BODIPY derivatives", theme: "Quantum dynamics", status: "Published research",
    objective: "Explain contrasting S₂ → S₁ internal-conversion rates in closely related boron-dipyrromethene derivatives.",
    methods: ["MCTDH", "Vibronic-coupling models", "Electronic structure"],
    contribution: "Related differences in ultrafast relaxation to the proximity of conical intersections to the Franck–Condon region and to collective multimode vibronic coupling.",
    publicationIds: ["bodipy-2025"],
  },
  {
    id: "esipt", title: "Nonadiabatic pathways in ESIPT", theme: "Proton transfer", status: "Published research",
    objective: "Resolve the roles of conical intersections, higher excited states, and O–H vibrational motion in hydroxypyrone and hydroxychromone photochemistry.",
    methods: ["Wave-packet dynamics", "Surface hopping", "Potential-energy surfaces"],
    contribution: "Developed and applied quantum-dynamical and trajectory descriptions of excited-state proton transfer, connecting nuclear motion with nonadiabatic relaxation.",
    publicationIds: ["hydroxypyran-2023", "hydroxychromone-2021", "hydroxypyran-2020", "hydroxychromones-2020", "hydroxyflavone-2019"],
  },
  {
    id: "substituent-control", title: "Substituent control of proton transfer", theme: "Proton transfer", status: "Manuscript in preparation",
    objective: "Understand how substituents influence ESIPT in 10-substituted benzo[h]quinoline derivatives beyond static energetic descriptions.",
    methods: ["Time-resolved fluorescence", "DFT / TDDFT", "Hydrogen-bond analysis", "Excited-state MD"],
    contribution: "Combines theory and experiment to investigate hydrogen-bond preorganisation, structural distortion, and nuclear motion in proton-transfer dynamics.",
    publicationIds: ["substituent-esipt"],
  },
  {
    id: "optical-response", title: "Non-Condon effects & nuclear motion", theme: "Quantum dynamics", status: "Manuscript in preparation",
    objective: "Investigate the relationship between nonadiabatic population transfer and optical-strength modulation in 2,2′-DHAB.",
    methods: ["Time-resolved spectroscopy", "QVC", "ML-MCTDH"],
    contribution: "Combines spectroscopy and multidimensional quantum simulations to interpret a vibronically modulated non-Condon response.",
    publicationIds: ["non-condon"],
  },
  {
    id: "graph-learning", title: "Solvent-aware molecular graph learning", theme: "Machine learning", status: "Completed · preprint forthcoming",
    objective: "Predict optical and photophysical properties while explicitly representing both chromophore and solvent.",
    methods: ["Two-tower GIN", "Molecular graphs", "Python"],
    contribution: "Developed separate graph encoders for chromophores and solvents to predict absorption and emission maxima, bandwidths, extinction coefficient, photoluminescence quantum yield, and lifetime.",
    publicationIds: ["solvent-gin"],
  },
  {
    id: "quantum-yield", title: "Predicting solvent-dependent fluorescence", theme: "Machine learning", status: "Completed · preprint forthcoming",
    objective: "Compare strategies for predicting solvent-induced changes in fluorescence quantum yield.",
    methods: ["FluoDB-Lite", "Classification", "Regression", "Molecule-weighted evaluation"],
    contribution: "Compared direct classification with prediction of quantum yields in two solvents followed by classification of their difference. The CV reports no clear statistical evidence of superiority for either approach.",
    publicationIds: ["solvent-quantum-yield"],
  },
];
