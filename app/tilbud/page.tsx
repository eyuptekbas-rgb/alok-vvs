import { FileText, Phone, ShieldCheck } from "lucide-react";

export default function TilbudPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-blue-700 font-semibold uppercase tracking-wide mb-4">
              Få et tilbud
            </p>

            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Indhent et professionelt tilbud
            </h1>

            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Fortæl os om din opgave, så vender vi tilbage med et tilbud hurtigst muligt.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-10">
              <h2 className="text-3xl font-bold mb-8">Hvorfor vælge os?</h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <ShieldCheck className="text-blue-700 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Autoriseret kvalitet</h3>
                    <p className="text-slate-600">
                      Professionelt udført arbejde med fokus på kvalitet og holdbare løsninger.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-blue-700 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Hurtig kontakt</h3>
                    <p className="text-slate-600">
                      Vi vender hurtigt tilbage på din forespørgsel.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FileText className="text-blue-700 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Klar proces</h3>
                    <p className="text-slate-600">
                      Enkel og professionel proces fra forespørgsel til løsning.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form className="bg-white rounded-3xl shadow-xl border border-slate-200 p-10 space-y-5">
              <input
                type="text"
                placeholder="Navn"
                className="w-full border border-slate-300 rounded-xl px-4 py-4"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border border-slate-300 rounded-xl px-4 py-4"
              />

              <input
                type="tel"
                placeholder="Telefon"
                className="w-full border border-slate-300 rounded-xl px-4 py-4"
              />

              <input
                type="text"
                placeholder="Type af opgave"
                className="w-full border border-slate-300 rounded-xl px-4 py-4"
              />

              <textarea
                placeholder="Beskriv opgaven"
                rows={7}
                className="w-full border border-slate-300 rounded-xl px-4 py-4"
              />

              <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-semibold">
                Send forespørgsel
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}