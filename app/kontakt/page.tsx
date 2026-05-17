import Image from "next/image";
import { ArrowRight, BadgeCheck, Clock, Mail, MapPin, Phone } from "lucide-react";
import { buttonClass } from "@/src/lib/ui";

export default function KontaktPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50/70 to-blue-50/60">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,_rgba(125,211,252,0.2),_transparent_32%),radial-gradient(circle_at_82%_16%,_rgba(219,234,254,0.7),_transparent_30%)]" />
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-sky-700 font-bold uppercase tracking-[0.18em] mb-4">
              Kontakt Alok VVS
            </p>

            <h1 className="text-4xl font-bold tracking-[-0.04em] text-slate-900 mb-6 sm:text-5xl">
              Vi står klar til at hjælpe
            </h1>

            <p className="text-lg leading-8 text-slate-600 max-w-3xl mx-auto">
              Kontakt os for spørgsmål, serviceopgaver eller akutte VVS problemer.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="space-y-6">
              <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-sky-100 bg-white shadow-[0_24px_70px_rgba(14,165,233,0.14)]">
                <Image
                  src="/placeholder-tools.png"
                  alt="Placeholder for client-ejet eller licenseret værktøjsfoto"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-5 bottom-5 rounded-[1.5rem] border border-white/70 bg-white/90 p-5 shadow-xl backdrop-blur">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">
                    Tryg dialog
                  </p>
                  <p className="mt-2 text-lg font-bold tracking-[-0.02em]">
                    Vi vender tilbage med en klar vurdering og næste skridt.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {[
                  { icon: Phone, title: "Telefon", text: "61 48 48 29" },
                  { icon: Mail, title: "Email", text: "kontakt@alokvvs.dk" },
                  { icon: Clock, title: "Åbningstid", text: "Man-fre 08:00-16:30" },
                  { icon: MapPin, title: "Serviceområde", text: "Efter aftale" },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex gap-4 rounded-[1.5rem] border border-sky-100 bg-white/92 p-5 shadow-[0_14px_34px_rgba(14,165,233,0.08)] backdrop-blur"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-sky-100">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold tracking-[-0.01em]">{item.title}</h3>
                        <p className="mt-1 text-slate-600">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <form className="rounded-[2rem] border border-sky-100 bg-white/95 p-6 shadow-[0_28px_80px_rgba(14,165,233,0.14)] backdrop-blur sm:p-10">
              <div className="mb-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-bold text-sky-800">
                  <BadgeCheck size={16} />
                  Autoriseret VVS hjælp
                </div>
                <h2 className="text-3xl font-bold tracking-[-0.03em]">
                  Fortæl os om opgaven
                </h2>
                <p className="mt-3 leading-7 text-slate-600">
                  Jo bedre vi forstår opgaven, desto hurtigere kan vi give dig
                  en præcis og brugbar tilbagemelding.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-slate-700">
                  Navn
                  <input
                    type="text"
                    placeholder="Dit navn"
                    className="rounded-2xl border border-sky-100 bg-white px-4 py-4 font-medium outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                  />
                </label>

                <label className="grid gap-2 text-sm font-bold text-slate-700">
                  Telefon
                  <input
                    type="tel"
                    placeholder="Dit telefonnummer"
                    className="rounded-2xl border border-sky-100 bg-white px-4 py-4 font-medium outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                  />
                </label>

                <label className="grid gap-2 text-sm font-bold text-slate-700 sm:col-span-2">
                  Email
                  <input
                    type="email"
                    placeholder="din@email.dk"
                    className="rounded-2xl border border-sky-100 bg-white px-4 py-4 font-medium outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                  />
                </label>

                <label className="grid gap-2 text-sm font-bold text-slate-700 sm:col-span-2">
                  Hvad handler opgaven om?
                  <select className="rounded-2xl border border-sky-100 bg-white px-4 py-4 font-medium text-slate-700 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100">
                    <option>Vælg service</option>
                    <option>VVS installation</option>
                    <option>Badeværelse</option>
                    <option>Fjernvarme eller gulvvarme</option>
                    <option>Akut VVS</option>
                    <option>Service og vedligehold</option>
                    <option>Erhverv eller serviceaftale</option>
                  </select>
                </label>

                <label className="grid gap-2 text-sm font-bold text-slate-700 sm:col-span-2">
                  Besked
                  <textarea
                    placeholder="Beskriv kort opgaven, adressetype og hvornår du ønsker hjælp."
                    rows={6}
                    className="rounded-2xl border border-sky-100 bg-white px-4 py-4 font-medium outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                  />
                </label>
              </div>

              <div className="mt-7 grid gap-3 rounded-[1.5rem] border border-sky-100 bg-sky-50/60 p-4 sm:grid-cols-3">
                {[
                  "Svar indenfor 24 timer",
                  "Autoriseret VVS-installatør",
                  "Gratis uforpligtende vurdering",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <BadgeCheck size={16} className="shrink-0 text-sky-700" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
                <p className="text-sm leading-6 text-slate-500">
                  Vi bruger kun dine oplysninger til at vende tilbage om opgaven.
                </p>
                <button className={buttonClass("primary", "w-full px-7 py-4 text-base sm:w-auto")}>
                  Send besked
                  <ArrowRight size={18} className="text-white transition group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}