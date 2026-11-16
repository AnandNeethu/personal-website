import type { Profile } from "@/types/academic";

// Source: the supplied October 2026 CV. Do not add private contact data here.
export const profile: Profile = {
  name: "Neethu Anand",
  initials: "NA",
  designation: "Postdoctoral Research Associate",
  discipline: "Theoretical & Computational Chemistry",
  affiliation: "Pohang University of Science and Technology (POSTECH)",
  department: "Department of Chemistry",
  group: "Ultrafast Dynamics Laboratory",
  location: "Pohang, Republic of Korea",
  introduction:
    "I study how molecules respond to light, connecting quantum dynamics, electronic structure, and machine learning to understand excited-state processes.",
  biography: [
    "I am a theoretical and computational chemist and a Postdoctoral Research Associate in the Department of Chemistry at POSTECH, working in the Ultrafast Dynamics Laboratory. My research examines ultrafast excited-state dynamics, nonadiabatic processes, conical intersections, vibronic coupling, and excited-state intramolecular proton transfer (ESIPT).",
    "I completed my Ph.D. in Theoretical and Computational Chemistry at IISER Thiruvananthapuram under the supervision of Dr. Vennapusa Sivaranjana Reddy. My doctoral research investigated nonadiabatic ESIPT in hydroxypyrone analogs, using quantum wave-packet dynamics and excited-state potential-energy surfaces. Before my Ph.D., I earned a BS–MS dual degree at the same institute, majoring in Chemical Science with a minor in Physical Science.",
    "At POSTECH, I use MCTDH wave-packet simulations, vibronic-coupling models, and electronic-structure calculations to investigate internal conversion, collective nuclear motion, and structure–dynamics relationships. Comparison with ultrafast time-resolved spectroscopy connects these molecular mechanisms to experimental observations.",
    "My current work also explores data-driven molecular photophysics, including graph neural networks that represent chromophores and solvents separately. Alongside research, I have co-supervised four Master’s thesis students during my Ph.D., supported chemistry teaching, and communicated research through publications, lectures, posters, and scientific visualization.",
  ],
  interests: ["Ultrafast photophysics", "Nonadiabatic dynamics", "ESIPT", "Molecular machine learning"],
  // The CV provides a personal Gmail address. Add an approved public email here.
  email: null,
  // Actual portrait extracted without alteration from the supplied PDF.
  portrait: "/images/neethu-anand.jpg",
  // Opt-in only: add a separately reviewed public PDF to public/ and set its URL.
  publicCv: null,
  links: [
    {
      label: "Website source on GitHub",
      url: "https://github.com/AnandNeethu/personal-website",
      description: "Source repository supplied for this website.",
    },
  ],
  missingProfiles: ["Google Scholar", "ORCID", "LinkedIn", "Institutional profile"],
  contentDate: "October 2026",
};

export const collaborations = [
  {
    institution: "POSTECH",
    context: "Ultrafast Dynamics Laboratory",
    description: "Integration of quantum-dynamical calculations with ultrafast time-resolved spectroscopy; publications with Taiha Joo and colleagues.",
  },
  {
    institution: "IISER Thiruvananthapuram",
    context: "Theoretical and computational chemistry",
    description: "Doctoral research with Dr. Vennapusa Sivaranjana Reddy and co-authored work on nonadiabatic ESIPT, surface hopping, and molecular photochemistry.",
  },
] as const;
