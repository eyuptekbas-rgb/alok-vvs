import {
  ArrowRight,
  Flame,
  Bath,
  BriefcaseBusiness,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { serviceGroups } from "@/src/lib/services";
import { buttonClass } from "@/src/lib/ui";

type ServiceGroupTitle = (typeof serviceGroups)[number]["title"];

const groupIcons: Record<ServiceGroupTitle, LucideIcon> = {
  Installation: Bath,
  Varme: Flame,
  "Akut & Service": LifeBuoy,
  Erhverv: BriefcaseBusiness,
};

export default function ServicesPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50/70 to-blue-50/60">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,_rgba(125,211,252,0.2),_transparent_32%),radial-gradient(circle_at_82%_16%,_rgba(219,234,254,0.7),_transparent_30%)]" />
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <p className="text-slate-500 font-bold uppercase tracking-[0.18em] mb-4">
            Vores services
          </p>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-[-0.04em] text-slate-900 mb-6 sm:text-5xl">
            Professionelle VVS-løsninger
          </h1>

          <p className="text-lg leading-8 text-slate-600 max-w-3xl mx-auto">
            Alok VVS tilbyder professionelle løsninger til private og erhverv
            med fokus på kvalitet, pålidelighed og professionel service.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
                Specialiseret VVS
              </p>
              <h2 className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                Fra badeværelse og installation til varme og akut service
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Vælg den service der passer til opgaven, eller kontakt os for en
                hurtig vurdering. Vi hjælper dig sikkert videre.
              </p>
            </div>
            <div className="relative min-h-[300px] overflow-hidden rounded-[2rem] border border-sky-100 shadow-[0_24px_70px_rgba(14,165,233,0.14)]">
              <Image
                src="/placeholder-heating.png"
                alt="Placeholder for client-ejet eller licenseret varmefoto"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {serviceGroups.map((group) => {
              const Icon = groupIcons[group.title];

              return (
                <section
                  key={group.title}
                  className="rounded-[2rem] border border-sky-100 bg-white p-7 shadow-[0_18px_48px_rgba(14,165,233,0.1)]"
                >
                  <div className="mb-7 flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 shadow-sm ring-1 ring-sky-100">
                      <Icon size={28} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold tracking-[-0.03em] text-slate-950">
                        {group.title}
                      </h2>
                      <p className="mt-2 leading-7 text-slate-600">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {group.services.map((service) => (
                      <Link
                        key={service.slug}
                        href={service.href}
                        className="group/service rounded-[1.25rem] border border-sky-100 bg-sky-50/45 p-5 transition hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white hover:shadow-[0_18px_40px_rgba(14,165,233,0.1)]"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-bold tracking-[-0.02em] text-slate-950">
                              {service.title}
                            </h3>
                            <p className="mt-2 leading-7 text-slate-600">
                              {service.excerpt}
                            </p>
                          </div>
                          <ArrowRight
                            size={18}
                            className="mt-1 shrink-0 text-sky-500 transition group-hover/service:translate-x-1 group-hover/service:text-sky-700"
                          />
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          <div className="mt-14 rounded-[2rem] bg-gradient-to-br from-sky-50 via-white to-blue-50 p-8 text-center ring-1 ring-sky-100 sm:p-10">
            <h2 className="text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
              Usikker på hvilken løsning du har brug for?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
              Fortæl os kort om opgaven, så hjælper vi dig med næste skridt.
            </p>
            <Link
              href="/kontakt"
              className={buttonClass("primary", "mt-6 px-7 py-4 text-base")}
            >
              Kontakt os
              <ArrowRight size={18} className="text-white" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}