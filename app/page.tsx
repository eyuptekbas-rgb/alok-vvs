import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Clock,
  ShieldCheck,
  Wrench,
  Flame,
  Droplets,
} from "lucide-react";

const services = [
  {
    title: "VVS Installation",
    text: "Installation, reparation og vedligeholdelse til private og erhverv.",
    icon: Wrench,
  },
  {
    title: "Varme",
    text: "Fjernvarme og varmeløsninger med fokus på driftssikkerhed.",
    icon: Flame,
  },
  {
    title: "Kloak",
    text: "Autoriseret kloakarbejde udført korrekt og sikkert.",
    icon: Droplets,
  },
];

export default function Home() {
  return (
    <main className="bg-white text-slate-900">

      {/* HERO */}
      <section className="border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div>
            <div className="flex items-center gap-2 text-sm text-slate-600 mb-6">
              <ShieldCheck size={16} />
              Autoriseret VVS-installatør
            </div>

            <h1 className="text-5xl lg:text-6xl font-semibold leading-tight">
              Professionel VVS service til private og erhverv
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              Vi leverer pålidelige løsninger inden for VVS, varme og kloak med fokus på kvalitet og korrekt udførelse.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <a
                href="/tilbud"
                className="bg-slate-900 text-white px-7 py-4 rounded-xl font-semibold inline-flex items-center gap-2"
              >
                Få et tilbud
                <ArrowRight size={18} />
              </a>

              <a
                href="/kontakt"
                className="border border-slate-200 px-7 py-4 rounded-xl font-semibold"
              >
                Kontakt os
              </a>
            </div>

            <div className="mt-10 flex gap-6 text-sm text-slate-600 flex-wrap">
              <span className="flex items-center gap-2">
                <BadgeCheck size={16} /> Autoriseret
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} /> Hurtig respons
              </span>
              <span className="flex items-center gap-2">
                <Building2 size={16} /> Privat & erhverv
              </span>
            </div>
          </div>

          {/* IMAGE HERO */}
          <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/hero-bathroom.jpg"
              alt="VVS arbejde"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-10">
            Vores ydelser
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => {
              const Icon = s.icon;

              return (
                <div
                  key={s.title}
                  className="border border-slate-100 rounded-2xl p-6 hover:shadow-md transition"
                >
                  <Icon className="mb-4 text-slate-700" />
                  <h3 className="font-semibold text-xl mb-2">{s.title}</h3>
                  <p className="text-slate-600">{s.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          <div>
            <h3 className="font-semibold mb-2">Kvalitet</h3>
            <p className="text-slate-600">Vi går aldrig på kompromis.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Pålidelighed</h3>
            <p className="text-slate-600">Vi overholder aftaler.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Faglighed</h3>
            <p className="text-slate-600">Autoriseret arbejde.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-semibold mb-4">
            Har du brug for VVS hjælp?
          </h2>

          <p className="text-slate-600 mb-8">
            Kontakt os i dag for et uforpligtende tilbud.
          </p>

          <a
            href="/tilbud"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold"
          >
            Få tilbud
            <ArrowRight size={18} />
          </a>

        </div>
      </section>

    </main>
  );
}