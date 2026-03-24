import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Políticas | La Amobladora",
  description: "Políticas de garantía, tratamiento de datos y abonos de La Amobladora. Fabricación propia en Bogotá.",
};

const politicas = [
  {
    slug: "garantia",
    titulo: "Política de Garantía",
    resumen: "Conoce los tiempos de garantía por producto, el proceso para activarla y las condiciones de cobertura en tapizados, madera natural y colchones.",
    items: ["1 año en estructura de tapizados", "Proceso en 8 días hábiles", "Cobertura en tapizados, madera y colchones"],
  },
  {
    slug: "datos",
    titulo: "Política de Tratamiento de Datos",
    resumen: "Cómo recolectamos, almacenamos y usamos tus datos personales, conforme a la Ley 1581 de 2012. Tus derechos como titular y cómo ejercerlos.",
    items: ["Ley 1581 de 2012", "Derecho de acceso, rectificación y supresión", "Contacto: laamobladora@gmail.com"],
  },
  {
    slug: "abonos",
    titulo: "Política de Abonos y Apartados",
    resumen: "Condiciones para reservar productos mediante abono: plazos, saldo a favor, productos personalizados y devoluciones excepcionales.",
    items: ["Reserva por 30 días calendario", "Saldo a favor por 6 meses", "Aplica Ley 1480 de 2011"],
  },
];

export default function PoliticasPage() {
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
          <p className="text-[#D4AE35] text-[10px] tracking-[0.35em] uppercase font-semibold mb-4">
            Legal · La Amobladora
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl text-[#F2EDE0] leading-tight mb-4">
            Políticas
          </h1>
          <p className="text-[#5A6F85] text-base max-w-xl leading-relaxed">
            Información sobre garantías, manejo de datos personales y condiciones de abono. Léelas antes de realizar tu compra.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-20">
        <div className="px-6 sm:px-10">
          <div className="grid md:grid-cols-3 gap-6">
            {politicas.map(({ slug, titulo, resumen, items }) => (
              <Link
                key={slug}
                href={`/politicas/${slug}`}
                className="group border border-[#162040] hover:border-[#D4AE35]/40 bg-[#070E1C] hover:bg-[#0D1628] p-8 flex flex-col gap-6 transition-colors"
              >
                <div className="flex-1">
                  <h2 className="font-[family-name:var(--font-heading)] text-[#F2EDE0] text-2xl group-hover:text-[#D4AE35] transition-colors mb-4">
                    {titulo}
                  </h2>
                  <p className="text-[#5A6F85] text-sm leading-relaxed mb-6">{resumen}</p>
                  <ul className="flex flex-col gap-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[#5A6F85] text-xs">
                        <span className="text-[#D4AE35] mt-0.5">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="text-[#D4AE35] text-xs tracking-[0.18em] uppercase font-semibold group-hover:text-[#E0BE45] transition-colors">
                  Leer política →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 border-t border-[#162040] text-center">
        <p className="text-[#5A6F85] text-sm mb-2">¿Tienes preguntas sobre alguna política?</p>
        <a
          href="https://wa.me/573013799401"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#D4AE35] hover:text-[#E0BE45] text-sm font-semibold transition-colors"
        >
          Escríbenos por WhatsApp →
        </a>
      </section>

    </main>
  );
}
