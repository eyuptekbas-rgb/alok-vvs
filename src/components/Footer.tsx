import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { serviceGroups } from "@/src/lib/services";
import { buttonClass } from "@/src/lib/ui";

export default function Footer() {
  const featuredServices = serviceGroups.flatMap((group) =>
    group.services.slice(0, 2),
  );

  return (
    <footer className="relative mt-0 overflow-hidden border-t border-sky-100 bg-gradient-to-br from-white via-sky-50/70 to-blue-50/70 text-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,_rgba(125,211,252,0.22),_transparent_30%),radial-gradient(circle_at_86%_8%,_rgba(219,234,254,0.78),_transparent_32%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="mb-10 overflow-hidden rounded-[2rem] border border-sky-100 bg-white/88 p-5 shadow-[0_24px_80px_rgba(14,165,233,0.14)] ring-1 ring-white/70 backdrop-blur sm:p-7 lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-sky-800">
                <ShieldCheck size={16} />
                Autoriseret hjælp
              </p>
              <h2 className="max-w-2xl text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                Har du brug for en tydelig VVS-vurdering?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Få ro om opgaven med klar dialog, faglig rådgivning og en
                løsning der bliver udført ordentligt.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <a
                href="tel:61484829"
                className={buttonClass("secondary", "px-5 py-4 text-base")}
              >
                <Phone size={18} />
                Ring 61 48 48 29
              </a>
              <Link
                href="/kontakt"
                className={buttonClass("primary", "px-5 py-4 text-base [&_*]:!text-white")}
              >
                <span className="text-white">Få tilbud</span>
                <ArrowRight size={18} className="text-white" />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_1.35fr_0.9fr]">
          <section className="rounded-[2rem] border border-sky-100 bg-white/82 p-6 shadow-[0_18px_60px_rgba(14,165,233,0.1)] ring-1 ring-white/70 backdrop-blur">
            <Image src="/logo.svg" alt="Alok VVS" width={240} height={69} />
            <p className="mt-6 leading-7 text-slate-600">
              Autoriseret VVS-installatør og kloakmester med fokus på kvalitet,
              service og professionelle løsninger til private og erhverv.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                "Autoriseret VVS-installatør",
                "Kloakmester",
                "Private, erhverv og ejendomme",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-2xl border border-sky-100 bg-sky-50/65 px-4 py-3 text-sm font-bold text-slate-700"
                >
                  <BadgeCheck size={16} className="shrink-0 text-sky-700" />
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-sky-100 bg-white/82 p-6 shadow-[0_18px_60px_rgba(14,165,233,0.1)] ring-1 ring-white/70 backdrop-blur">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
                  Navigation
                </h3>
                <div className="grid gap-3">
                  {[
                    ["Forside", "/"],
                    ["Services", "/services"],
                    ["Om os", "/om-os"],
                    ["Kontakt", "/kontakt"],
                    ["Få tilbud", "/tilbud"],
                  ].map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      className="group inline-flex items-center justify-between rounded-2xl px-3 py-2.5 font-semibold text-slate-700 transition hover:bg-sky-50 hover:text-sky-800"
                    >
                      {label}
                      <ArrowRight
                        size={15}
                        className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                      />
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
                  Hurtige services
                </h3>
                <div className="grid gap-2">
                  {featuredServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={service.href}
                      className="rounded-2xl border border-transparent px-3 py-2.5 text-sm font-bold text-slate-700 transition hover:border-sky-100 hover:bg-sky-50 hover:text-sky-800"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border border-sky-100 bg-white/82 p-6 shadow-[0_18px_60px_rgba(14,165,233,0.1)] ring-1 ring-white/70 backdrop-blur">
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
              Kontakt
            </h3>
            <div className="grid gap-4 text-slate-600">
              {[
                { icon: Phone, label: "Telefon", value: "61 48 48 29" },
                { icon: Mail, label: "Email", value: "kontakt@alokvvs.dk" },
                { icon: Clock, label: "Åbningstid", value: "Man-fre 08:00-16:30" },
                { icon: MapPin, label: "Serviceområde", value: "Efter aftale" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-sky-100">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-1 font-bold text-slate-800">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>

      <div className="border-t border-sky-100">
        <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 py-6 text-sm text-slate-500 md:flex-row">
          <span>© 2026 Alok VVS. Alle rettigheder forbeholdes.</span>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privatliv" className="transition hover:text-sky-800">
              Privatliv
            </Link>
            <Link href="/cookies" className="transition hover:text-sky-800">
              Cookies
            </Link>
            <Link href="/betingelser" className="transition hover:text-sky-800">
              Betingelser
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}