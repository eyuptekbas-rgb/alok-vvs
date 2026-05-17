export type Service = {
  title: string;
  slug: string;
  href: string;
  group: "Installation" | "Varme" | "Akut & Service" | "Erhverv";
  excerpt: string;
  description: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    title: "VVS Installation",
    slug: "vvs-installation",
    href: "/services/vvs-installation",
    group: "Installation",
    excerpt: "Autoriserede installationer, udskiftninger og reparationer.",
    description:
      "Professionel VVS-installation til boliger, ejendomme og erhverv med fokus på driftssikkerhed, korrekt udførelse og en ryddelig proces.",
    highlights: ["Installation og udskiftning", "Fejlfinding", "Rådgivning om materialer"],
  },
  {
    title: "Badeværelse",
    slug: "badevaerelse",
    href: "/services/badevaerelse",
    group: "Installation",
    excerpt: "Komplette løsninger til renovering og nye badeværelser.",
    description:
      "Vi hjælper med badeværelsesprojekter fra planlægning til færdig installation, så funktion, finish og VVS-arbejde hænger sammen.",
    highlights: ["Renovering", "Sanitet og armaturer", "Koordinering af installationer"],
  },
  {
    title: "Kloak",
    slug: "kloak",
    href: "/services/kloak",
    group: "Installation",
    excerpt: "Autoriseret kloakarbejde udført korrekt og sikkert.",
    description:
      "Kloakservice og reparationer med autoriseret faglighed, tydelig dialog og fokus på holdbare løsninger.",
    highlights: ["Kloakservice", "Reparation", "Forebyggende vedligehold"],
  },
  {
    title: "Fjernvarme",
    slug: "fjernvarme",
    href: "/services/fjernvarme",
    group: "Varme",
    excerpt: "Fjernvarmeinstallationer, eftersyn og optimering.",
    description:
      "Fjernvarme udført med styr på teknik og regulering, så anlægget fungerer effektivt og passer til boligens behov.",
    highlights: ["Fjernvarmeunits", "Eftersyn", "Indregulering"],
  },
  {
    title: "Gulvvarme",
    slug: "gulvvarme",
    href: "/services/gulvvarme",
    group: "Varme",
    excerpt: "Behagelig gulvvarme til renovering og ny installation.",
    description:
      "Planlægning, installation og service af gulvvarme med fokus på jævn varmefordeling, komfort og lang levetid.",
    highlights: ["Nye installationer", "Renovering", "Styring og regulering"],
  },
  {
    title: "Varmeservice",
    slug: "varmeservice",
    href: "/services/varmeservice",
    group: "Varme",
    excerpt: "Eftersyn, service og optimering af varmeanlæg.",
    description:
      "Service og installation af varmeløsninger, hvor komfort, energiforbrug og driftssikkerhed prioriteres fra starten.",
    highlights: ["Varmeanlæg", "Radiatorer", "Optimering af drift"],
  },
  {
    title: "Akut VVS",
    slug: "akut-vvs",
    href: "/services/akut-vvs",
    group: "Akut & Service",
    excerpt: "Hurtig hjælp ved lækager, driftsstop og akutte problemer.",
    description:
      "Når problemet ikke kan vente, hjælper vi hurtigt med at begrænse skaden og få installationen tilbage i drift.",
    highlights: ["Hurtig respons", "Lækager", "Akutte driftsstop"],
  },
  {
    title: "Service & Vedligehold",
    slug: "service-vedligehold",
    href: "/services/service-vedligehold",
    group: "Akut & Service",
    excerpt: "Løbende service, reparation og forebyggende vedligehold.",
    description:
      "Regelmæssig service og vedligehold forlænger installationernes levetid og minimerer risikoen for dyre driftsstop.",
    highlights: ["Servicebesøg", "Reparation", "Forebyggelse"],
  },
  {
    title: "Fejlfinding",
    slug: "fejlfinding",
    href: "/services/fejlfinding",
    group: "Akut & Service",
    excerpt: "Systematisk fejlfinding på installationer, varme og vand.",
    description:
      "Vi lokaliserer fejl og driftsproblemer med en grundig tilgang, så du får en tydelig vurdering og en holdbar løsning.",
    highlights: ["Lækager og tryktab", "Driftsproblemer", "Tydelig vurdering"],
  },
  {
    title: "Erhvervsløsninger",
    slug: "erhvervsloesninger",
    href: "/services/erhvervsloesninger",
    group: "Erhverv",
    excerpt: "VVS-løsninger til virksomheder, ejendomme og drift.",
    description:
      "Fleksible VVS-løsninger til erhverv, ejendomsdrift og tilbagevendende opgaver, hvor oppetid og aftaler betyder noget.",
    highlights: ["Ejendomsdrift", "Planlagte opgaver", "Professionel koordinering"],
  },
  {
    title: "Serviceaftaler",
    slug: "serviceaftaler",
    href: "/services/serviceaftaler",
    group: "Erhverv",
    excerpt: "Planlagte aftaler der holder installationer stabile.",
    description:
      "Serviceaftaler til erhverv og ejendomme med faste rammer, forebyggende eftersyn og hurtig håndtering af driftsbehov.",
    highlights: ["Forebyggende eftersyn", "Aftalt responstid", "Stabil drift"],
  },
];

export const serviceGroups = [
  {
    title: "Installation",
    description: "Installationer og rum, hvor finish og funktion skal gå op.",
    services: services.filter((service) => service.group === "Installation"),
  },
  {
    title: "Varme",
    description: "Varmeløsninger med stabil komfort og effektiv drift.",
    services: services.filter((service) => service.group === "Varme"),
  },
  {
    title: "Akut & Service",
    description: "Hurtig hjælp, service og fejlfinding når installationer kræver handling.",
    services: services.filter((service) => service.group === "Akut & Service"),
  },
  {
    title: "Erhverv",
    description: "Professionel VVS til virksomheder, ejendomme og drift.",
    services: services.filter((service) => service.group === "Erhverv"),
  },
] as const;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
