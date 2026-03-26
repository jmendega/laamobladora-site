import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { estilos, toSlug } from "./_data";

export const metadata: Metadata = {
  title: "Catálogo | La Amobladora",
  description:
    "MANHATTAN, CHESTER, HAMBURGO, BURBUJA y más. Catálogo por estilo con fabricación propia en Bogotá.",
};

const WA = "https://wa.me/573013799401";

function ProductCard({
  name,
  sub,
  desc,
  Art,
  img,
  href,
}: {
  name: string;
  sub: string;
  desc: string;
  Art: () => React.JSX.Element;
  img?: string;
  href: string;
}) {
  return (
    <Link href={href} className="group border border-[#162040] hover:border-[#D4AE35]/50 transition-colors flex flex-col bg-[#070E1C]">
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
          <h3 className="font-[family-name:var(--font-heading)] text-[#F2EDE0] text-xl tracking-wide group-hover:text-[#D4AE35] transition-colors">
            {name}
          </h3>
        </div>
        <p className="text-[#5A6F85] text-sm leading-relaxed flex-1">{desc}</p>
        <span className="mt-2 inline-flex items-center gap-2 text-[#D4AE35] group-hover:text-[#E0BE45] text-xs tracking-[0.18em] uppercase font-semibold transition-colors border-b border-[#D4AE35]/30 group-hover:border-[#D4AE35] pb-0.5 w-fit">
          Ver producto →
        </span>
      </div>
    </Link>
  );
}

export default function CatalogoPage() {
  return (
    <main className="bg-[#070E1C] min-h-screen">
      {/* Header */}
      <section className="py-20 border-b border-[#162040] bg-[#0D1628]">
        <div className="px-6 sm:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#5A6F85] hover:text-[#F2EDE0] transition-colors text-xs tracking-[0.15em] uppercase mb-12"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Volver
          </Link>
          <p className="text-[#D4AE35] text-[10px] tracking-[0.35em] uppercase font-semibold mb-6">
            Fabricación propia · Bogotá · Desde 2000
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl lg:text-7xl text-[#F2EDE0] leading-tight mb-6">
            Catálogo
          </h1>
          <p className="text-[#5A6F85] text-lg max-w-xl leading-relaxed">
            Elige tu estilo. Consulta precios y medidas por WhatsApp.
          </p>
        </div>
      </section>

      {/* Category index nav */}
      <nav className="border-b border-[#162040] bg-[#0D1628]" aria-label="Categorías">
        <div className="px-6 sm:px-10 overflow-x-auto">
          <ul className="flex gap-0 divide-x divide-[#162040] min-w-max sm:min-w-0 sm:flex-wrap" role="list">
            {estilos.map(({ slug, label }) => (
              <li key={slug}>
                <a
                  href={`#${slug}`}
                  className="flex items-center px-4 sm:px-6 py-4 text-[10px] tracking-[0.25em] uppercase text-[#5A6F85] hover:text-[#D4AE35] transition-colors font-semibold whitespace-nowrap"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Category sections — show first 4 products + link to full page */}
      {estilos.map(({ slug, label, tagline, productos }) => (
        <section key={slug} id={slug} className="py-24 border-b border-[#162040]">
          <div className="px-6 sm:px-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl text-[#F2EDE0] mb-2">
                  {label}
                </h2>
                <p className="text-[#5A6F85] text-sm">{tagline}</p>
              </div>
              <Link
                href={`/catalogo/${slug}`}
                className="shrink-0 inline-flex items-center gap-2 border border-[#D4AE35] text-[#D4AE35] hover:bg-[#D4AE35] hover:text-[#0D1B38] px-5 py-2.5 text-xs tracking-[0.18em] uppercase font-bold transition-colors"
              >
                Ver los {productos.length} productos →
              </Link>
            </div>

            {/* Preview: first 3 */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productos.slice(0, 3).map(({ name, sub, desc, Art, img }) => (
                <ProductCard key={name} name={name} sub={sub} desc={desc} Art={Art} img={img} href={`/catalogo/${slug}/${toSlug(name)}`} />
              ))}
            </div>

            {/* See all link */}
            <div className="mt-6 text-center border border-[#162040] py-5 hover:border-[#D4AE35]/30 transition-colors">
              <Link
                href={`/catalogo/${slug}`}
                className="text-[#5A6F85] hover:text-[#D4AE35] text-xs tracking-[0.2em] uppercase font-semibold transition-colors"
              >
                + {productos.length - 3} productos más en la colección {label} →
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-28 text-center">
        <div className="px-6 sm:px-10 text-center">
          <p className="text-[#D4AE35] text-[10px] tracking-[0.35em] uppercase font-semibold mb-8">
            Hecho a tu medida
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl text-[#F2EDE0] mb-6 leading-tight">
            ¿Buscas algo diferente?
          </h2>
          <p className="text-[#5A6F85] mb-10 leading-relaxed">
            Fabricamos a medida. Dinos las dimensiones, el color y el estilo.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#D4AE35] hover:bg-[#E0BE45] text-[#0D1B38] font-bold px-10 py-5 text-sm tracking-widest uppercase transition-colors"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </section>

    </main>
  );
}
