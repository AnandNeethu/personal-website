import type { Education } from "@/types/academic";

export const education: readonly Education[] = [
  {
    id: "phd", degree: "Ph.D. in Theoretical and Computational Chemistry",
    institution: "Indian Institute of Science Education and Research Thiruvananthapuram",
    period: "1 August 2015 – 31 December 2020", awardDate: "28 July 2021",
    thesis: "Nonadiabatic Excited-State Intramolecular Proton Transfer in Hydroxypyrone Analogs",
    supervisor: "Dr. Vennapusa Sivaranjana Reddy",
    details: ["School of Chemistry · India", "Nonadiabatic ESIPT, conical intersections, quantum wave-packet dynamics, and excited-state potential-energy surfaces."],
  },
  {
    id: "bs-ms", degree: "BS–MS Dual Degree",
    institution: "Indian Institute of Science Education and Research Thiruvananthapuram",
    period: "1 August 2010 – 30 May 2015", awardDate: "30 May 2015",
    details: ["Major in Chemical Science · Minor in Physical Science", "CGPA: 7.3 / 10", "INSPIRE Scholarship, Department of Science and Technology, India (2010–2015)."],
  },
];
