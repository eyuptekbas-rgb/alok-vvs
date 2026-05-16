"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

const nav = [
  { name: "Forside", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Om os", href: "/om-os" },
  { name: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 px-6 pt-5">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[28px] border border-black/5 bg-white/80 backdrop-blur-2xl shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(15,23,42,0.04),_transparent_40%)]" />

          <div className="relative px-8 py-5">
            <div className="flex items-center justify-between">

              {/* LOGO */}
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.svg"
                  alt="ALOK VVS"
                  width={180}
                  height={60}
                  className="h-auto w-[150px]"
                  priority
                />
              </Link>

              {/* NAV */}
              <nav className="hidden lg:flex items-center gap-10">
                {nav.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-[15px] font-medium text-slate-700 hover:text-slate-950 transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* RIGHT SIDE */}
              <div className="flex items-center gap-6">

                {/* PHONE (clean minimal) */}
                <a
                  href="tel:61484829"
                  className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-950 transition"
                >
                  <Phone size={15} />
                  <span>61 48 48 29</span>
                </a>

                {/* CTA */}
                <Link
                  href="/tilbud"
                  className="group inline-flex items-center gap-3 rounded-full bg-slate-900 px-6 py-3 text-white text-sm font-semibold shadow-lg hover:-translate-y-[1px] transition"
                >
                  Få tilbud
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}