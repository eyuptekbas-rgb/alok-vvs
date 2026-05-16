import {
  Wrench,
  Flame,
  Droplets,
  ShieldCheck,
  Bath,
  Settings,
} from "lucide-react";

const services = [
  {
    title: "VVS Installation",
    text: "Professionel installation, udskiftning og vedligeholdelse af VVS-løsninger.",
    icon: Wrench,
  },
  {
    title: "Varme & Fjernvarme",
    text: "Effektive og driftssikre varmeløsninger til private og erhverv.",
    icon: Flame,
  },
  {
    title: "Kloakarbejde",
    text: "Autoriseret kloakservice med fokus på kvalitet, sikkerhed og korrekt udførelse.",
    icon: Droplets,
  },
  {
    title: "Akut VVS Service",
    text: "Hurtig assistance ved akutte VVS problemer og driftsstop.",
    icon: ShieldCheck,
  },
  {
    title: "Badeværelse",
    text: "Renovering, installation og komplette løsninger til badeværelser.",
    icon: Bath,
  },
  {
    title: "Service & Reparation",
    text: "Løbende service, fejlfinding og professionel reparation af installationer.",
    icon: Settings,
  },
];

export default function Services() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-700 font-semibold uppercase tracking-wide mb-4">
            Vores services
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Professionelle løsninger til private & erhverv
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Alok VVS tilbyder professionelle løsninger inden for VVS, varme,
            kloak og service med fokus på kvalitet, pålidelighed og god rådgivning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                  <Icon className="text-blue-700" size={28} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {service.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}