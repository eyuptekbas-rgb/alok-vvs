import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BadgeCheck, Phone } from "lucide-react";
import { getService, services } from "@/src/lib/services";
import { buttonClass } from "@/src/lib/ui";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: service.href,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden border-b border-sky-100 bg-gradient-to-br from-white via-sky-50/70 to-blue-50/60">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,_rgba(125,211,252,0.2),_transparent_32%),radial-gradient(circle_at_82%_16%,_rgba(219,234,254,0.7),_transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
              {service.group}
            </p>
            <h1 className="max-w-4xl text-4xl font-bold tracking-[-0.045em] text-slate-950 sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              {service.description}
            </p>
          </div>

          <div className="rounded-[2rem] border border-sky-100 bg-white p-6 shadow-[0_18px_50px_rgba(14,165,233,0.11)]">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">
              Klar til hjælp?
            </p>
            <p className="mt-3 text-2xl font-bold tracking-[-0.03em] text-slate-950">
              Få en tydelig vurdering af opgaven.
            </p>
            <div className="mt-6 grid gap-3">
              <Link
                href="/tilbud"
                className={buttonClass("primary", "px-5 py-3.5")}
              >
                Få tilbud
                <ArrowRight
                  size={16}
                  className="text-white transition group-hover:translate-x-1"
                />
              </Link>
              <a
                href="tel:61484829"
                className={buttonClass("secondary", "px-5 py-3.5")}
              >
                <Phone size={16} />
                Ring 61 48 48 29
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-sky-100 shadow-[0_24px_70px_rgba(14,165,233,0.14)]">
              <Image
                src={service.group === "Varme" ? "/placeholder-heating.png" : "/placeholder-installation.png"}
                alt={`Placeholder for client-ejet eller licenseret foto af ${service.title}`}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
                Premium udførelse
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em]">
                Faglighed, finish og en proces du kan regne med
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Vi arbejder med rene løsninger, tydelig dialog og materialer der
                passer til både funktion, budget og lang levetid.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {service.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-[1.5rem] border border-sky-100 bg-white p-6 shadow-[0_14px_34px_rgba(14,165,233,0.08)]"
              >
                <BadgeCheck className="mb-4 text-sky-700" size={28} />
                <h2 className="text-xl font-bold tracking-[-0.02em]">
                  {highlight}
                </h2>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-blue-50 p-8 text-slate-950 shadow-[0_28px_80px_rgba(14,165,233,0.14)] sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
                  Næste skridt
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em]">
                  Fortæl os kort om din opgave.
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                  Vi vender tilbage med en professionel vurdering og en enkel plan for, hvordan opgaven kan løses.
                </p>
              </div>
              <Link
                href="/kontakt"
                className={buttonClass("primary", "px-6 py-4 text-base")}
              >
                Kontakt os
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
