import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function KontaktPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-blue-700 font-semibold uppercase tracking-wide mb-4">
              Kontakt Alok VVS
            </p>

            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Vi står klar til at hjælpe
            </h1>

            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Kontakt os for spørgsmål, serviceopgaver eller akutte VVS problemer.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-10">
              <h2 className="text-3xl font-bold mb-8">Kontaktoplysninger</h2>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <Phone className="text-blue-700 mt-1" />
                  <div>
                    <h3 className="font-semibold">Telefon</h3>
                    <p className="text-slate-600">61 48 48 29</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Mail className="text-blue-700 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-slate-600">kontakt@alokvvs.dk</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Clock className="text-blue-700 mt-1" />
                  <div>
                    <h3 className="font-semibold">Åbningstid</h3>
                    <p className="text-slate-600">Man–fre 08:00–16:30</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <MapPin className="text-blue-700 mt-1" />
                  <div>
                    <h3 className="font-semibold">Serviceområde</h3>
                    <p className="text-slate-600">Efter aftale</p>
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

              <textarea
                placeholder="Din besked"
                rows={6}
                className="w-full border border-slate-300 rounded-xl px-4 py-4"
              />

              <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-semibold">
                Send besked
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}