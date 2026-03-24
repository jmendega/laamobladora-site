import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { estilos, toSlug } from "../../_data";
import ImageGallery from "@/components/ImageGallery";

const WA = "https://wa.me/573013799401";
const IG = "https://instagram.com/la.amobladora";

export function generateStaticParams() {
  return estilos.flatMap(({ slug, productos }) =>
    productos.map(({ name }) => ({ estilo: slug, producto: toSlug(name) }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ estilo: string; producto: string }>;
}): Promise<Metadata> {
  const { estilo, producto } = await params;
  const estiloData = estilos.find((e) => e.slug === estilo);
  if (!estiloData) return {};
  const prod = estiloData.productos.find((p) => toSlug(p.name) === producto);
  if (!prod) return {};
  return {
    title: `${prod.name} | ${estiloData.label} | La Amobladora`,
    description: prod.desc.slice(0, 160),
  };
}

export default async function ProductoPage({
  params,
}: {
  params: Promise<{ estilo: string; producto: string }>;
}) {
  const { estilo, producto } = await params;
  const estiloData = estilos.find((e) => e.slug === estilo);
  if (!estiloData) notFound();

  const prod = estiloData.productos.find((p) => toSlug(p.name) === producto);
  if (!prod) notFound();

  const { name, sub, desc, Art, img, images, price } = prod;

  // Build image array for gallery: prefer images[], fall back to img
  const galleryImages: string[] = images ?? (img ? [img] : []);

  // Prev / next product within the same category
  const idx = estiloData.productos.findIndex((p) => toSlug(p.name) === producto);
  const prevProd = estiloData.productos[idx - 1];
  const nextProd = estiloData.productos[idx + 1];

  return (
    <main className="bg-[#070E1C] min-h-screen">
      {/* Breadcrumb */}
      <div className="px-6 sm:px-10 py-6 border-b border-[#162040]">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase flex-wrap">
          <Link href="/catalogo" className="text-[#5A6F85] hover:text-[#F2EDE0] transition-colors">
            Catálogo
          </Link>
          <span className="text-[#162040]">/</span>
          <Link
            href={`/catalogo/${estilo}`}
            className="text-[#5A6F85] hover:text-[#F2EDE0] transition-colors"
          >
            {estiloData.label}
          </Link>
          <span className="text-[#162040]">/</span>
          <span className="text-[#D4AE35] font-semibold">{name}</span>
        </nav>
      </div>

      {/* Product layout */}
      <section className="grid lg:grid-cols-2 gap-0 lg:min-h-[600px]">
        {/* Gallery */}
        <div className="border-b lg:border-b-0 lg:border-r border-[#162040]">
          {galleryImages.length > 0 ? (
            <ImageGallery images={galleryImages} name={name} />
          ) : (
            <div className="bg-[#0D1628] flex items-center justify-center min-h-[420px] sm:min-h-[520px] lg:min-h-[600px]">
              <div className="w-full max-w-sm p-10">
                <Art />
              </div>
            </div>
          )}
        </div>

        {/* Product info */}
        <div className="px-8 sm:px-12 py-12 flex flex-col gap-6">
          <div>
            <p className="text-[#5A6F85] text-[10px] tracking-[0.25em] uppercase mb-3">{sub}</p>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl text-[#F2EDE0] leading-tight mb-2">
              {name}
            </h1>
          </div>

          <p className="text-[#5A6F85] text-base leading-relaxed">{desc}</p>

          {/* Price */}
          <div className="py-4 border-t border-b border-[#162040]">
            {price ? (
              <p className="font-[family-name:var(--font-heading)] text-3xl text-[#D4AE35]">
                {price}
              </p>
            ) : (
              <p className="text-[#5A6F85] text-sm tracking-wide">
                Precio a consultar — fabricamos a medida
              </p>
            )}
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            <a
              href={`${WA}?text=Hola, me interesa el producto ${encodeURIComponent(name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#D4AE35] hover:bg-[#E0BE45] text-[#0D1B38] font-bold px-8 py-4 text-sm tracking-widest uppercase transition-colors"
            >
              {/* WhatsApp icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Consultar por WhatsApp
            </a>

            <a
              href={IG}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-[#D4AE35]/40 hover:border-[#D4AE35] text-[#D4AE35] hover:bg-[#D4AE35]/5 px-8 py-4 text-sm tracking-widest uppercase transition-all font-semibold"
            >
              {/* Instagram icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              @la.amobladora
            </a>
          </div>

          {/* Back link */}
          <Link
            href={`/catalogo/${estilo}`}
            className="inline-flex items-center gap-2 text-[#5A6F85] hover:text-[#F2EDE0] text-xs tracking-[0.15em] uppercase transition-colors mt-2 w-fit"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Volver a {estiloData.label}
          </Link>
        </div>
      </section>

      {/* Prev / Next product */}
      {(prevProd || nextProd) && (
        <section className="border-t border-[#162040] grid grid-cols-2 divide-x divide-[#162040]">
          {prevProd ? (
            <Link
              href={`/catalogo/${estilo}/${toSlug(prevProd.name)}`}
              className="group flex flex-col gap-1 p-8 hover:bg-[#0D1628] transition-colors"
            >
              <span className="text-[#5A6F85] text-[10px] tracking-[0.2em] uppercase">← Anterior</span>
              <span className="font-[family-name:var(--font-heading)] text-xl text-[#F2EDE0] group-hover:text-[#D4AE35] transition-colors">
                {prevProd.name}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {nextProd ? (
            <Link
              href={`/catalogo/${estilo}/${toSlug(nextProd.name)}`}
              className="group flex flex-col gap-1 p-8 hover:bg-[#0D1628] transition-colors text-right"
            >
              <span className="text-[#5A6F85] text-[10px] tracking-[0.2em] uppercase">Siguiente →</span>
              <span className="font-[family-name:var(--font-heading)] text-xl text-[#F2EDE0] group-hover:text-[#D4AE35] transition-colors">
                {nextProd.name}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </section>
      )}
    </main>
  );
}
