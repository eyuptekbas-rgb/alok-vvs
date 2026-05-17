"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Bath,
  BriefcaseBusiness,
  ChevronDown,
  Flame,
  LifeBuoy,
  Menu,
  Phone,
  ShieldCheck,
  X,
  type LucideIcon,
} from "lucide-react";
import { serviceGroups } from "@/src/lib/services";
import { buttonClass } from "@/src/lib/ui";

const nav = [
  { name: "Forside", href: "/" },
  { name: "Om os", href: "/om-os" },
  { name: "Kontakt", href: "/kontakt" },
];

type ServiceGroupTitle = (typeof serviceGroups)[number]["title"];

const groupIcons: Record<ServiceGroupTitle, LucideIcon> = {
  Installation: Bath,
  Varme: Flame,
  "Akut & Service": LifeBuoy,
  Erhverv: BriefcaseBusiness,
};

const mobileServices = [
  { name: "VVS Installation", href: "/services/vvs-installation" },
  { name: "Badeværelse", href: "/services/badevaerelse" },
  { name: "Fjernvarme", href: "/services/fjernvarme" },
  { name: "Varmeanlæg", href: "/services/varmeservice" },
  { name: "Akut service", href: "/services/akut-vvs" },
  { name: "Kloak", href: "/services/kloak" },
  { name: "Erhverv", href: "/services/erhvervsloesninger" },
  { name: "Serviceaftaler", href: "/services/serviceaftaler" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 px-3 pt-2.5 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="relative rounded-[1.75rem] border border-sky-100/80 bg-white/88 shadow-[0_22px_70px_rgba(14,165,233,0.13)] ring-1 ring-sky-200/40 backdrop-blur-2xl">
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.75rem]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.24),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(219,234,254,0.55),_transparent_36%)]" />
            </div>

            <div className="relative px-4 py-4 sm:px-5 lg:px-7 lg:py-3.5">
              <div className="flex items-center justify-between gap-4 sm:gap-5">
              <Link
                href="/"
                className="flex shrink-0 items-center"
                aria-label="ALOK VVS forside"
                onClick={() => setIsOpen(false)}
              >
                <Image
                  src="/logo.svg"
                  alt="ALOK VVS"
                  width={220}
                  height={74}
                  className="h-auto w-[180px] sm:w-[238px] lg:w-[260px]"
                  priority
                />
              </Link>

              <nav className="hidden items-center gap-2 lg:flex" aria-label="Primær navigation">
                <Link
                  href="/"
                  className="rounded-full px-4 py-2.5 text-[15px] font-semibold text-slate-700 transition hover:bg-sky-50 hover:text-sky-800"
                >
                  Forside
                </Link>

                <div className="group">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[15px] font-semibold text-slate-700 transition hover:bg-sky-50 hover:text-sky-800 group-focus-within:bg-sky-50 group-focus-within:text-sky-800"
                  >
                    Services
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                    />
                  </Link>

                  <div className="invisible absolute left-1/2 top-[calc(100%-0.25rem)] w-[min(1080px,calc(100vw-3rem))] -translate-x-1/2 translate-y-3 opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="pt-4">
                      <div className="overflow-hidden rounded-[2rem] border border-sky-100 bg-white/96 p-3 shadow-[0_30px_90px_rgba(14,165,233,0.16)] ring-1 ring-sky-200/50 backdrop-blur-2xl">
                        <div className="grid gap-3 lg:grid-cols-[1.05fr_2fr]">
                          <div className="rounded-[1.5rem] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-blue-50 p-6 text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                            <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sky-700 shadow-sm ring-1 ring-sky-100">
                              <ShieldCheck size={24} />
                            </div>
                            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
                              ALOK VVS
                            </p>
                            <p className="mt-3 text-2xl font-bold leading-tight tracking-[-0.03em]">
                              Autoriserede VVS-løsninger med tydelig proces.
                            </p>
                            <p className="mt-4 text-sm leading-6 text-slate-600">
                              Find den rigtige ydelse, eller kontakt os direkte for hurtig rådgivning om opgaven.
                            </p>
                            <div className="mt-6 grid gap-2">
                              <Link
                                href="/tilbud"
                                className={buttonClass("primary", "group/cta px-4 py-3")}
                              >
                                Få et tilbud
                                <ArrowRight
                                  size={16}
                                  className="transition-transform group-hover/cta:translate-x-1"
                                />
                              </Link>
                              <a
                                href="tel:61484829"
                                className={buttonClass("secondary", "px-4 py-3")}
                              >
                                <Phone size={16} />
                                Ring 61 48 48 29
                              </a>
                            </div>
                          </div>

                          <div className="grid gap-3 p-2 sm:grid-cols-2">
                            {serviceGroups.map((group) => {
                              const Icon = groupIcons[group.title];

                              return (
                                <section
                                  key={group.title}
                                  className="rounded-[1.35rem] border border-sky-100 bg-sky-50/45 p-4 transition hover:border-sky-200 hover:bg-white hover:shadow-[0_16px_35px_rgba(14,165,233,0.1)]"
                                >
                                  <div className="mb-3 flex items-start gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-sky-700 shadow-sm ring-1 ring-sky-100">
                                      <Icon size={20} />
                                    </div>
                                    <div>
                                      <h2 className="font-bold tracking-[-0.02em] text-slate-950">
                                        {group.title}
                                      </h2>
                                      <p className="mt-1 text-sm leading-5 text-slate-500">
                                        {group.description}
                                      </p>
                                    </div>
                                  </div>

                                  <div className="grid gap-1">
                                    {group.services.map((service) => (
                                      <Link
                                        key={service.slug}
                                        href={service.href}
                                        className="group/link flex items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-sky-800 hover:shadow-sm"
                                      >
                                        <span>{service.title}</span>
                                        <ArrowRight
                                          size={14}
                                          className="opacity-0 transition group-hover/link:translate-x-1 group-hover/link:opacity-100"
                                        />
                                      </Link>
                                    ))}
                                  </div>
                                </section>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {nav.slice(1).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="rounded-full px-4 py-2.5 text-[15px] font-semibold text-slate-700 transition hover:bg-sky-50 hover:text-sky-800"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="flex shrink-0 items-center gap-3 sm:gap-4 lg:gap-5">
                <Link
                  href="/tilbud"
                  className="inline-flex items-center justify-center rounded-full bg-sky-600 px-3.5 py-2 text-xs font-bold text-white shadow-[0_10px_24px_rgba(14,165,233,0.22)] transition active:scale-95 sm:px-4 sm:text-sm lg:hidden"
                  onClick={() => setIsOpen(false)}
                >
                  Tilbud
                </Link>

                <a
                  href="tel:61484829"
                  className="hidden items-center gap-2 rounded-full border border-sky-100 bg-white/90 px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-sky-200 hover:bg-sky-50 md:flex"
                >
                  <Phone size={16} />
                  <span>61 48 48 29</span>
                </a>

                <Link
                  href="/tilbud"
                  className={`${buttonClass("pill")} !hidden lg:!inline-flex [&_*]:!text-white`}
                >
                  <span className="text-white">Få tilbud</span>
                  <ArrowRight
                    size={16}
                    className="text-white transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <button
                  type="button"
                  className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-sky-100 bg-white/85 text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-50 active:scale-95 lg:hidden"
                  aria-label={isOpen ? "Luk menu" : "Åbn menu"}
                  aria-expanded={isOpen}
                  onClick={() => {
                    setIsOpen((open) => !open);
                    setIsServicesOpen(false);
                  }}
                >
                  {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            </div>

            {isOpen && (
              <div className="relative mt-4 overflow-hidden rounded-[2rem] border border-sky-100 bg-white/97 p-3 shadow-[0_24px_60px_rgba(14,165,233,0.14)] ring-1 ring-sky-200/40 lg:hidden">
                <span className="water-ripple pointer-events-none absolute -right-10 top-8 h-32 w-32 rounded-full border border-sky-300/70" />
                <span className="water-ripple pointer-events-none absolute -right-1 top-16 h-16 w-16 rounded-full border border-sky-400/40 [animation-delay:800ms]" />
                <span className="water-glint pointer-events-none absolute left-0 top-0 h-px w-2/3 bg-gradient-to-r from-transparent via-sky-300/80 to-transparent" />

                <nav className="relative grid gap-2.5" aria-label="Mobil navigation">
                  <Link
                    href="/"
                    className="group flex items-center justify-between rounded-[1.35rem] border border-sky-100 bg-white px-4 py-4 text-lg font-extrabold tracking-[-0.03em] text-slate-950 shadow-[0_10px_24px_rgba(14,165,233,0.07)] transition hover:bg-sky-50 active:scale-[0.99]"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>Forside</span>
                    <ArrowRight
                      size={16}
                      className="text-sky-700 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </Link>

                  <div className="overflow-hidden rounded-[1.35rem] border border-sky-100 bg-white shadow-[0_12px_30px_rgba(14,165,233,0.09)]">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left transition hover:bg-sky-50/75 active:scale-[0.99]"
                      aria-expanded={isServicesOpen}
                      onClick={() => setIsServicesOpen((open) => !open)}
                    >
                      <span>
                        <span className="block text-lg font-extrabold tracking-[-0.03em] text-slate-950">
                          Services
                        </span>
                        <span className="mt-1 block text-sm font-semibold leading-5 text-slate-500">
                          Installation, varme, service og erhverv.
                        </span>
                      </span>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-800 ring-1 ring-sky-100">
                        <ChevronDown
                          size={19}
                          className={`transition-transform duration-300 ease-out ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>

                    <div
                      aria-hidden={!isServicesOpen}
                      className={`grid overflow-hidden border-t border-sky-50 bg-gradient-to-b from-white via-sky-50/35 to-white transition-all duration-300 ease-out ${
                        isServicesOpen
                          ? "max-h-[30rem] gap-1.5 px-3 pb-3 pt-2 opacity-100"
                          : "max-h-0 gap-0 px-3 py-0 opacity-0"
                      }`}
                    >
                      {mobileServices.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="group/service flex items-center justify-between rounded-2xl px-3 py-2.5 text-[15px] font-bold text-slate-700 transition hover:bg-white hover:text-sky-800 hover:shadow-sm active:scale-[0.99]"
                          onClick={() => setIsOpen(false)}
                          tabIndex={isServicesOpen ? undefined : -1}
                        >
                          <span>{service.name}</span>
                          <ArrowRight
                            size={14}
                            className="text-sky-700 opacity-0 transition group-hover/service:translate-x-1 group-hover/service:opacity-100"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>

                  {nav.slice(1).map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group flex items-center justify-between rounded-[1.35rem] border border-sky-100 bg-white px-4 py-4 text-lg font-extrabold tracking-[-0.03em] text-slate-950 shadow-[0_10px_24px_rgba(14,165,233,0.07)] transition hover:bg-sky-50 active:scale-[0.99]"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{item.name}</span>
                      <ArrowRight
                        size={16}
                        className="text-sky-700 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                      />
                    </Link>
                  ))}
                </nav>

                <div className="relative mt-4 grid gap-2.5 overflow-hidden rounded-[1.5rem] border border-sky-100 bg-sky-50/70 p-2">
                  <span className="water-glint pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/80 to-transparent" />
                  <a
                    href="tel:61484829"
                    className="relative inline-flex items-center justify-center gap-2 rounded-[1.1rem] border border-sky-100 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 transition hover:bg-sky-50 active:scale-[0.99]"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone size={16} />
                    Ring 61 48 48 29
                  </a>

                  <Link
                    href="/tilbud"
                    className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-[1.1rem] bg-sky-600 px-4 py-2.5 text-sm font-bold text-white shadow-[0_12px_26px_rgba(14,165,233,0.22)] transition active:scale-[0.99]"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="water-droplet pointer-events-none absolute right-5 top-2 h-1.5 w-1.5 rounded-full bg-white/55" />
                    Få tilbud
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            )}
            </div>
          </div>
        </div>
      </header>

      <div className="fixed inset-x-4 bottom-3 z-50 grid grid-cols-2 gap-1 overflow-hidden rounded-full border border-sky-100 bg-white/90 p-1 shadow-[0_12px_30px_rgba(14,165,233,0.16)] ring-1 ring-white/70 backdrop-blur-xl lg:hidden">
        <span className="water-glint pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-sky-200/70 to-transparent" />
        <span className="water-ripple pointer-events-none absolute right-5 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full border border-sky-300/60" />
        <a
          href="tel:61484829"
          className="relative inline-flex items-center justify-center gap-2 rounded-full px-3 py-2 text-[13px] font-extrabold text-slate-800 transition active:scale-[0.98]"
        >
          <Phone size={15} className="text-sky-700" />
          Ring nu
        </a>
        <Link
          href="/tilbud"
          className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-sky-600 px-3 py-2 text-[13px] font-extrabold text-white shadow-[0_8px_20px_rgba(14,165,233,0.24)] transition active:scale-[0.98]"
        >
          <span className="water-droplet pointer-events-none absolute right-4 top-1.5 h-1.5 w-1.5 rounded-full bg-white/60" />
          Få tilbud
          <ArrowRight size={15} />
        </Link>
      </div>
    </>
  );
}