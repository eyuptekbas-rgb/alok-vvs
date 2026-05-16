import { CheckCircle } from "lucide-react";

export default function OmOsPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-700 font-semibold uppercase tracking-wide mb-4">
              Om Alok VVS
            </p>

            <h1 className="text-5xl font-bold text-slate-900 mb-8">
              Professionel VVS-service med fokus på kvalitet
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Alok VVS er en autoriseret VVS-installatør og kloakmester med
              fokus på professionelle løsninger, kvalitet og god service.
              Vi hjælper både private og erhverv med alt fra installationer
              og service til akutte opgaver.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-blue-700" />
                <span>Autoriseret VVS-installatør</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-blue-700" />
                <span>Kloakmester</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-blue-700" />
                <span>Service for private & erhverv</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-blue-700" />
                <span>Akut vagttelefon</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl min-h-[500px] shadow-2xl border border-slate-200 p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-8">Vores tilgang</h2>

            <div className="space-y-6 text-slate-600">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Kvalitet først
                </h3>
                <p>Vi leverer løsninger der holder.</p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Professionel rådgivning
                </h3>
                <p>Vi hjælper dig med den rigtige løsning.</p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Hurtig respons
                </h3>
                <p>Vi reagerer hurtigt når du har brug for hjælp.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}