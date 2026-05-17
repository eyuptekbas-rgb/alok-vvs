import { FileText, Phone, ShieldCheck } from "lucide-react";
import { buttonClass } from "@/src/lib/ui";

export default function TilbudPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50/70 to-blue-50/60">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,_rgba(125,211,252,0.2),_transparent_32%),radial-gradient(circle_at_82%_16%,_rgba(219,234,254,0.7),_transparent_30%)]" />
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-sky-700 font-bold uppercase tracking-[0.18em] mb-4">
              Få et tilbud
            </p>

            <h1 className="text-4xl font-bold tracking-[-0.04em] text-slate-900 mb-6 sm:text-5xl">
              Indhent et professionelt tilbud
            </h1>

            <p className="text-lg leading-8 text-slate-600 max-w-3xl mx-auto">
              Fortæl os om din opgave, så vender vi tilbage med et tilbud hurtigst muligt.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white/92 rounded-[2rem] shadow-[0_24px_70px_rgba(14,165,233,0.11)] border border-sky-100 p-8 sm:p-10 backdrop-blur">
              <h2 className="text-3xl font-bold tracking-[-0.02em] mb-8">Hvorfor vælge os?</h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <ShieldCheck className="text-sky-700 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Autoriseret kvalitet</h3>
                    <p className="text-slate-600">
                      Professionelt udført arbejde med fokus på kvalitet og holdbare løsninger.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-sky-700 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Hurtig kontakt</h3>
                    <p className="text-slate-600">
                      Vi vender hurtigt tilbage på din forespørgsel.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FileText className="text-sky-700 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Klar proces</h3>
                    <p className="text-slate-600">
                      Enkel og professionel proces fra forespørgsel til løsning.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form className="bg-white/92 rounded-[2rem] shadow-[0_24px_70px_rgba(14,165,233,0.11)] border border-sky-100 p-8 sm:p-10 space-y-5 backdrop-blur">
              <input
                type="text"
                placeholder="Navn"
                className="w-full border border-sky-100 rounded-xl bg-white px-4 py-4 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border border-sky-100 rounded-xl bg-white px-4 py-4 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
              />

              <input
                type="tel"
                placeholder="Telefon"
                className="w-full border border-sky-100 rounded-xl bg-white px-4 py-4 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
              />

              <input
                type="text"
                placeholder="Type af opgave"
                className="w-full border border-sky-100 rounded-xl bg-white px-4 py-4 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
              />

              <textarea
                placeholder="Beskriv opgaven"
                rows={7}
                className="w-full border border-sky-100 rounded-xl bg-white px-4 py-4 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
              />

              <button className={buttonClass("primary", "w-full py-4 text-base")}>
                Send forespørgsel
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}