import type { ResearchTheme } from "@/types/academic";

export const research: readonly ResearchTheme[] = [
  {
    id: "quantum-dynamics", number: "01", title: "Ultrafast & nonadiabatic dynamics", shortTitle: "Quantum dynamics",
    summary: "Following the nuclear and electronic motion that governs molecular relaxation after photoexcitation.",
    question: "How do conical intersections and collective vibrational motion control the rate of internal conversion?",
    approach: "MCTDH quantum wave-packet propagation and linear/quadratic vibronic-coupling models connect excited-state potential-energy surfaces with population transfer and coherent nuclear motion.",
    relevance: "Work on closely related BODIPY derivatives relates contrasting S₂ → S₁ internal-conversion rates to conical-intersection accessibility and multimode vibronic coupling.",
    methods: ["MCTDH", "ML-MCTDH", "Vibronic-coupling models", "Conical intersections"],
  },
  {
    id: "proton-transfer", number: "02", title: "Excited-state proton transfer", shortTitle: "Proton transfer",
    summary: "Resolving the interplay of proton motion, electronic transitions, and molecular structure in ESIPT.",
    question: "When does proton transfer follow a nonadiabatic pathway, and how do molecular structure and nuclear motion influence it?",
    approach: "Quantum dynamics, surface hopping, DFT/TDDFT, normal-mode analysis, and excited-state molecular dynamics investigate hydroxypyrone, hydroxychromone, hydroxyflavone, and related systems.",
    relevance: "The published work examines the participation of conical intersections and higher excited states in ESIPT. Ongoing theory–experiment studies investigate substituent effects and non-Condon optical responses.",
    methods: ["ESIPT", "Surface hopping", "DFT / TDDFT", "Excited-state dynamics"],
  },
  {
    id: "molecular-learning", number: "03", title: "Data-driven molecular photophysics", shortTitle: "Molecular learning",
    summary: "Building solvent-aware models to connect molecular structure with optical and photophysical properties.",
    question: "How can molecular learning account for both the chromophore and its solvent when predicting photophysical behavior?",
    approach: "A two-tower Graph Isomorphism Network encodes chromophore and solvent graphs separately. Related work compares classification and regression strategies for solvent-induced changes in fluorescence quantum yield.",
    relevance: "These projects extend mechanistic simulation toward molecular screening. Both studies are described in the CV as completed work with preprints forthcoming; no public preprint links were supplied.",
    methods: ["Graph neural networks", "Python", "Property prediction", "Solvent effects"],
  },
];
