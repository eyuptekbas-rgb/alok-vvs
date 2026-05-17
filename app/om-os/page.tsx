import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { buttonClass } from "@/src/lib/ui";

export default function OmOsPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50/70 to-blue-50/60">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,_rgba(125,211,252,0.2),_transparent_32%),radial-gradient(circle_at_82%_16%,_rgba(219,234,254,0.7),_transparent_30%)]" />
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sky-700 font-bold uppercase tracking-[0.18em] mb-4">
              Om Alok VVS
            </p>

            <h1 className="text-4xl font-bold tracking-[-0.04em] text-slate-900 mb-8 sm:text-5xl">
              Professionel VVS-service med fokus på kvalitet
            </h1>

            <p className="text-lg text-slate-600 leading-8 mb-8">
              Alok VVS er en autoriseret VVS-installatør og kloakmester med
              fokus på professionelle løsninger, kvalitet og god service.
              Vi hjælper både private og erhverv med alt fra installationer
              og service til akutte opgaver.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-sky-700" />
                <span className="font-semibold">Autoriseret VVS-installatør</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-sky-700" />
                <span className="font-semibold">Kloakmester</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-sky-700" />
                <span className="font-semibold">Service for private & erhverv</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-sky-700" />
                <span className="font-semibold">Akut vagttelefon</span>
              </div>
            </div>

            <Link
              href="/kontakt"
              className={buttonClass("primary", "mt-8 px-7 py-4 text-base")}
            >
              Kontakt os
              <ArrowRight size={18} className="text-white" />
            </Link>
          </div>

          <div className="bg-white/92 rounded-[2rem] min-h-[500px] shadow-[0_24px_70px_rgba(14,165,233,0.11)] border border-sky-100 p-8 sm:p-10 flex flex-col justify-center backdrop-blur">
            <h2 className="text-3xl font-bold tracking-[-0.02em] mb-8">Vores tilgang</h2>

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