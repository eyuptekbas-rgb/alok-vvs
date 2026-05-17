import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Clock,
  ShieldCheck,
  Wrench,
  Flame,
  Droplets,
  CheckCircle2,
} from "lucide-react";
import { buttonClass } from "@/src/lib/ui";

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
      <section className="relative overflow-hidden border-b border-sky-100">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,_rgba(125,211,252,0.2),_transparent_34%),radial-gradient(circle_at_82%_12%,_rgba(219,234,254,0.65),_transparent_30%)]" />
        <div className="water-flow pointer-events-none absolute left-[-12%] top-20 h-28 w-[62rem] rotate-[-8deg] rounded-full bg-gradient-to-r from-transparent via-sky-200/30 to-transparent blur-xl" />
        <div className="water-flow water-flow-slow pointer-events-none absolute bottom-16 right-[-18%] h-24 w-[48rem] rotate-[-10deg] rounded-full bg-gradient-to-r from-transparent via-blue-200/25 to-transparent blur-xl" />
        <span className="water-hero-ripple pointer-events-none absolute right-[12%] top-28 hidden h-24 w-24 rounded-full border border-sky-200/70 lg:block" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* TEXT */}
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/85 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
              <ShieldCheck size={16} className="text-sky-700" />
              Autoriseret VVS-installatør
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-[-0.045em] text-balance">
              VVS hjælp med styr på aftaler, kvalitet og finish
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600 max-w-xl">
              Få hurtig afklaring, autoriseret håndværk og en løsning der bliver
              udført ordentligt fra første besøg.
            </p>

            <div className="mt-9 flex gap-4 flex-wrap">
              <Link
                href="/tilbud"
                className={buttonClass("primary", "px-7 py-4 text-base [&_*]:!text-white")}
              >
                <span className="text-white">Få tilbud</span>
                <ArrowRight
                  size={18}
                  className="text-white transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/kontakt"
                className={buttonClass("secondary", "px-7 py-4 text-base")}
              >
                Kontakt os
              </Link>
            </div>

            <div className="mt-10 grid gap-3 text-sm font-semibold tracking-[-0.01em] text-slate-700 sm:grid-cols-3 sm:text-base">
              <span className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-white/85 px-4 py-2.5 shadow-[0_10px_25px_rgba(15,23,42,0.06)] backdrop-blur">
                <BadgeCheck size={16} strokeWidth={2.2} className="text-sky-700" /> Autoriseret
              </span>
              <span className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-white/85 px-4 py-2.5 shadow-[0_10px_25px_rgba(15,23,42,0.06)] backdrop-blur">
                <Clock size={16} strokeWidth={2.2} className="text-sky-700" /> Hurtig respons
              </span>
              <span className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-white/85 px-4 py-2.5 shadow-[0_10px_25px_rgba(15,23,42,0.06)] backdrop-blur">
                <Building2 size={16} strokeWidth={2.2} className="text-sky-700" /> Privat & erhverv
              </span>
            </div>
          </div>

          {/* IMAGE HERO */}
          <div className="relative h-[500px] lg:h-[560px] rounded-[2rem] overflow-hidden border border-sky-100 shadow-[0_30px_80px_rgba(14,165,233,0.18)]">
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-slate-950/10 via-transparent to-white/10 ring-1 ring-inset ring-white/50" />
            <Image
              src="/placeholder-bathroom.png"
              alt="Placeholder for client-ejet eller licenseret badeværelsesfoto"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
              Ydelser
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
              VVS-løsninger med ro, kvalitet og korrekt udførelse
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Fra installation og varme til autoriseret kloakarbejde. Vi hjælper
              både private og erhverv med et professionelt forløb fra start.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => {
              const Icon = s.icon;

              return (
                <div
                  key={s.title}
                  className="group rounded-[1.75rem] border border-sky-100 bg-white p-7 shadow-[0_16px_45px_rgba(14,165,233,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(14,165,233,0.12)]"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 shadow-sm ring-1 ring-sky-100">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-bold text-xl tracking-[-0.01em] mb-3">
                    {s.title}
                  </h3>
                  <p className="leading-7 text-slate-600">{s.text}</p>
                  <Link
                    href="/services"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-sky-700 transition group-hover:gap-3"
                  >
                    Se ydelsen
                    <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-x-0 top-1/2 -z-10 h-64 -translate-y-1/2 bg-sky-50/70" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-sky-100 bg-white shadow-[0_28px_80px_rgba(14,165,233,0.16)]">
            <Image
              src="/placeholder-installation.png"
              alt="Placeholder for client-ejet eller licenseret installationsfoto"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/70 bg-white/90 p-5 shadow-xl backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">
                Professionel proces
              </p>
              <p className="mt-2 text-lg font-bold tracking-[-0.02em]">
                Rent arbejde, klare aftaler og løsninger der holder.
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
              Fra vurdering til færdigt arbejde
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
              En rolig og premium oplevelse, også når opgaven haster
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Vi kombinerer autoriseret faglighed med en enkel kunderejse:
              hurtig afklaring, tydelig rådgivning og ryddelig aflevering.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Tydelig vurdering før arbejdet starter",
                "Materialer og installationer valgt til lang levetid",
                "Pæn finish i boliger, ejendomme og erhverv",
                "Direkte kontakt når der er brug for handling",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl border border-sky-100 bg-white p-4 shadow-[0_14px_34px_rgba(14,165,233,0.08)]"
                >
                  <CheckCircle2 className="mt-0.5 shrink-0 text-sky-700" size={20} />
                  <span className="font-semibold leading-6 text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/kontakt" className={buttonClass("primary")}>
                Tal med os
                <ArrowRight size={17} className="text-white transition group-hover:translate-x-1" />
              </Link>
              <Link href="/services" className={buttonClass("secondary")}>
                Se services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-24 bg-sky-50/55 border-y border-sky-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
              Derfor vælger kunder os
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
              Et trygt valg til både små og større VVS-opgaver
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-[1.75rem] border border-slate-200/80 bg-white p-7 shadow-sm">
              <BadgeCheck className="mb-5 text-sky-700" size={30} />
              <h3 className="font-bold text-xl mb-3">Kvalitet</h3>
              <p className="leading-7 text-slate-600">
                Vi går aldrig på kompromis med materialer, finish eller faglig
                udførelse.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200/80 bg-white p-7 shadow-sm">
              <Clock className="mb-5 text-sky-700" size={30} />
              <h3 className="font-bold text-xl mb-3">Pålidelighed</h3>
              <p className="leading-7 text-slate-600">
                Du får tydelig dialog, hurtig respons og aftaler der bliver
                overholdt.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200/80 bg-white p-7 shadow-sm">
              <Building2 className="mb-5 text-sky-700" size={30} />
              <h3 className="font-bold text-xl mb-3">Faglighed</h3>
              <p className="leading-7 text-slate-600">
                Autoriseret arbejde til private boliger, erhverv og
                ejendomsopgaver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="overflow-hidden rounded-[2rem] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-blue-50 px-6 py-14 text-center text-slate-950 shadow-[0_28px_80px_rgba(14,165,233,0.14)] sm:px-12">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
              Klar til næste skridt?
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
              Har du brug for VVS hjælp?
            </h2>

            <p className="mx-auto mt-4 mb-8 max-w-2xl text-lg leading-8 text-slate-600">
              Kontakt os i dag for et uforpligtende tilbud og en professionel
              vurdering af opgaven.
            </p>

            <Link
              href="/kontakt"
              className={buttonClass("primary", "px-8 py-4 text-base")}
            >
              Få tilbud
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}