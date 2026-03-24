import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { estilos, toSlug } from "../_data";

const WA = "https://wa.me/573013799401";

export function generateStaticParams() {
  return estilos.map(({ slug }) => ({ estilo: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ estilo: string }>;
}): Promise<Metadata> {
  const { estilo } = await params;
  const data = estilos.find((e) => e.slug === estilo);
  if (!data) return {};
  return {
    title: `${data.label} | Catálogo | La Amobladora`,
    description: `${data.descripcion} Fabricación propia en Bogotá.`,
  };
}

export default async function EstiloPage({
  params,
}: {
  params: Promise<{ estilo: string }>;
}) {
  const { estilo } = await params;
  const data = estilos.find((e) => e.slug === estilo);
  if (!data) notFound();

  const { label, tagline, descripcion, productos } = data;

  // Previous / next style
  const currentIndex = estilos.findIndex((e) => e.slug === estilo);
  const prev = estilos[currentIndex - 1];
  const next = estilos[currentIndex + 1];

  return (
    <main className="bg-[#070E1C] min-h-screen">
      {/* Header */}
      <section className="py-20 border-b border-[#162040] bg-[#0D1628]">
        <div className="px-6 sm:px-10">
          <div className="flex items-center gap-4 mb-12">
            <Link
              href="/catalogo"
              className="inline-flex items-center gap-2 text-[#5A6F85] hover:text-[#F2EDE0] transition-colors text-xs tracking-[0.15em] uppercase"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              Catálogo
            </Link>
            <span className="text-[#162040]">/</span>
            <span className="text-[#D4AE35] text-xs tracking-[0.15em] uppercase font-semibold">{label}</span>
          </div>

          <p className="text-[#D4AE35] text-[10px] tracking-[0.35em] uppercase font-semibold mb-4">
            {productos.length} productos
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl lg:text-7xl text-[#F2EDE0] leading-tight mb-4">
            {label}
          </h1>
          <p className="text-[#D4AE35] font-[family-name:var(--font-heading)] text-xl mb-4">{tagline}</p>
          <p className="text-[#5A6F85] text-base max-w-xl leading-relaxed">{descripcion}</p>
        </div>
      </section>

      {/* Product grid — ALL products */}
      <section className="py-16">
        <div className="px-6 sm:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productos.map(({ name, sub, desc, Art, img }) => (
              <Link
                key={name}
                href={`/catalogo/${estilo}/${toSlug(name)}`}
                className="group border-0 flex flex-col bg-[#070E1C] hover:bg-[#0D1628] transition-colors"
              >
                <div className="relative border-b border-[#162040] bg-[#0D1628] h-96 overflow-hidden">
                  {img ? (
                    <Image src={img} alt={name} fill className="object-contain p-4" />
                  ) : (
                    <div className="p-6 h-full flex items-center">
                      <Art />
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1 gap-3">
                  <div>
                    <p className="text-[#5A6F85] text-[10px] tracking-[0.2em] uppercase mb-1">{sub}</p>
                    <h2 className="font-[family-name:var(--font-heading)] text-xl text-[#F2EDE0] tracking-wide group-hover:text-[#D4AE35] transition-colors">
                      {name}
                    </h2>
                  </div>
                  <p className="text-[#5A6F85] text-sm leading-relaxed flex-1">{desc}</p>
                  <span className="mt-2 inline-flex items-center gap-2 text-[#D4AE35] group-hover:text-[#E0BE45] text-xs tracking-[0.18em] uppercase font-semibold transition-colors border-b border-[#D4AE35]/30 group-hover:border-[#D4AE35] pb-0.5 w-fit">
                    Ver producto →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other categories navigation */}
      {(prev || next) && (
        <section className="border-t border-[#162040] grid grid-cols-2 divide-x divide-[#162040]">
          {prev ? (
            <Link
              href={`/catalogo/${prev.slug}`}
              className="group flex flex-col gap-1 p-8 hover:bg-[#0D1628] transition-colors"
            >
              <span className="text-[#5A6F85] text-[10px] tracking-[0.2em] uppercase">← Categoría anterior</span>
              <span className="font-[family-name:var(--font-heading)] text-2xl text-[#F2EDE0] group-hover:text-[#D4AE35] transition-colors">
                {prev.label}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/catalogo/${next.slug}`}
              className="group flex flex-col gap-1 p-8 hover:bg-[#0D1628] transition-colors text-right"
            >
              <span className="text-[#5A6F85] text-[10px] tracking-[0.2em] uppercase">Siguiente categoría →</span>
              <span className="font-[family-name:var(--font-heading)] text-2xl text-[#F2EDE0] group-hover:text-[#D4AE35] transition-colors">
                {next.label}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </section>
      )}

      {/* CTA */}
      <section className="py-20 text-center border-t border-[#162040]">
        <div className="px-6 sm:px-10">
          <p className="text-[#5A6F85] mb-6 leading-relaxed">
            ¿No encontraste lo que buscas? Fabricamos a medida.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#D4AE35] hover:bg-[#E0BE45] text-[#0D1B38] font-bold px-8 py-4 text-sm tracking-widest uppercase transition-colors"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </section>

    </main>
  );
}
