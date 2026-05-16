import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white mt-0">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-4 gap-12">
          <div>
            <Image
              src="/logo.svg"
              alt="Alok VVS"
              width={240}
              height={69}
            />

            <p className="text-slate-300 mt-6 leading-relaxed">
              Autoriseret VVS-installatør og kloakmester med fokus på kvalitet,
              service og professionelle løsninger til private og erhverv.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Navigation</h3>

            <div className="space-y-4 text-slate-300">
              <Link href="/" className="block hover:text-white">
                Forside
              </Link>

              <Link href="/om-os" className="block hover:text-white">
                Om os
              </Link>

              <Link href="/services" className="block hover:text-white">
                Services
              </Link>

              <Link href="/kontakt" className="block hover:text-white">
                Kontakt
              </Link>

              <Link href="/tilbud" className="block hover:text-white">
                Få tilbud
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Kontakt</h3>

            <div className="space-y-5 text-slate-300">
              <div className="flex gap-3">
                <Phone size={18} />
                <span>61 48 48 29</span>
              </div>

              <div className="flex gap-3">
                <Mail size={18} />
                <span>kontakt@alokvvs.dk</span>
              </div>

              <div className="flex gap-3">
                <Clock size={18} />
                <span>Man–fre 08:00–16:30</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Brug for hjælp?</h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              Kontakt os i dag for professionel rådgivning eller et uforpligtende tilbud.
            </p>

            <Link
              href="/tilbud"
              className="inline-block bg-blue-700 hover:bg-blue-800 px-6 py-4 rounded-xl font-semibold"
            >
              Få et tilbud
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 text-slate-400 text-sm flex flex-col md:flex-row justify-between gap-3">
          <span>© 2026 Alok VVS. Alle rettigheder forbeholdes.</span>
          <span>Autoriseret VVS-installatør & Kloakmester</span>
        </div>
      </div>
    </footer>
  );
}