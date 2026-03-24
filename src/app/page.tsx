import Link from "next/link";
import Image from "next/image";

/* ─── Decorative SVG ─── */
function HeroMark() {
  return (
    <svg viewBox="0 0 500 500" fill="none" aria-hidden="true" className="w-full h-full">
      <circle cx="250" cy="250" r="240" stroke="#D4AE35" strokeWidth="0.6" strokeOpacity="0.18" />
      <circle cx="250" cy="250" r="170" stroke="#D4AE35" strokeWidth="0.4" strokeOpacity="0.1" />
      <rect x="170" y="170" width="160" height="160" stroke="#D4AE35" strokeWidth="0.6" strokeOpacity="0.2" transform="rotate(45 250 250)" />
      <circle cx="250" cy="250" r="6" fill="#D4AE35" fillOpacity="0.6" />
      <circle cx="370" cy="130" r="4" fill="#D4AE35" fillOpacity="0.4" />
      <circle cx="130" cy="370" r="3" fill="#D4AE35" fillOpacity="0.3" />
      <line x1="10" y1="250" x2="490" y2="250" stroke="#D4AE35" strokeWidth="0.3" strokeOpacity="0.1" />
      <line x1="250" y1="10" x2="250" y2="490" stroke="#D4AE35" strokeWidth="0.3" strokeOpacity="0.1" />
    </svg>
  );
}

function ArtModerno() {
  return (
    <svg viewBox="0 0 280 180" fill="none" aria-hidden="true" className="w-full">
      <rect x="20" y="100" width="240" height="55" rx="4" fill="#D4AE35" fillOpacity="0.1" />
      <rect x="20" y="72" width="240" height="32" rx="3" fill="#D4AE35" fillOpacity="0.2" />
      <rect x="10" y="78" width="22" height="72" rx="3" fill="#D4AE35" fillOpacity="0.16" />
      <rect x="248" y="78" width="22" height="72" rx="3" fill="#D4AE35" fillOpacity="0.16" />
      <line x1="20" y1="104" x2="260" y2="104" stroke="#D4AE35" strokeWidth="0.5" strokeOpacity="0.3" />
      <rect x="50" y="152" width="12" height="10" rx="1" fill="#D4AE35" fillOpacity="0.22" />
      <rect x="218" y="152" width="12" height="10" rx="1" fill="#D4AE35" fillOpacity="0.22" />
    </svg>
  );
}

function ArtClasico() {
  return (
    <svg viewBox="0 0 280 180" fill="none" aria-hidden="true" className="w-full">
      <rect x="35" y="85" width="210" height="62" rx="14" fill="#D4AE35" fillOpacity="0.1" />
      <rect x="12" y="70" width="34" height="78" rx="16" fill="#D4AE35" fillOpacity="0.2" />
      <rect x="234" y="70" width="34" height="78" rx="16" fill="#D4AE35" fillOpacity="0.2" />
      <rect x="35" y="56" width="210" height="34" rx="8" fill="#D4AE35" fillOpacity="0.24" />
      <circle cx="95" cy="73" r="3.5" fill="#D4AE35" fillOpacity="0.45" />
      <circle cx="140" cy="73" r="3.5" fill="#D4AE35" fillOpacity="0.45" />
      <circle cx="185" cy="73" r="3.5" fill="#D4AE35" fillOpacity="0.45" />
      <rect x="62" y="145" width="10" height="22" rx="3" fill="#D4AE35" fillOpacity="0.28" />
      <rect x="208" y="145" width="10" height="22" rx="3" fill="#D4AE35" fillOpacity="0.28" />
    </svg>
  );
}

function ArtContemporaneo() {
  return (
    <svg viewBox="0 0 280 180" fill="none" aria-hidden="true" className="w-full">
      <rect x="20" y="88" width="170" height="62" rx="6" fill="#D4AE35" fillOpacity="0.12" />
      <rect x="20" y="60" width="170" height="32" rx="5" fill="#D4AE35" fillOpacity="0.2" />
      <rect x="186" y="88" width="62" height="62" rx="6" fill="#D4AE35" fillOpacity="0.16" />
      <rect x="10" y="66" width="20" height="80" rx="4" fill="#D4AE35" fillOpacity="0.18" />
      <rect x="186" y="66" width="62" height="26" rx="4" fill="#D4AE35" fillOpacity="0.14" />
      <rect x="40" y="148" width="10" height="12" rx="2" fill="#D4AE35" fillOpacity="0.24" />
      <rect x="160" y="148" width="10" height="12" rx="2" fill="#D4AE35" fillOpacity="0.24" />
    </svg>
  );
}

const features = [
  { num: "01", label: "Fabricación propia", desc: "Sin intermediarios. Hacemos cada pieza desde cero en nuestro taller en Bogotá." },
  { num: "02", label: "24 años de experiencia", desc: "Desde el año 2000. Lo que sabemos lo aprendimos haciendo muebles, no leyendo sobre ellos." },
  { num: "03", label: "Calidad y diseño", desc: "Materiales seleccionados. Acabados que duran. Piezas que se ven bien con el tiempo." },
  { num: "04", label: "Entrega a domicilio", desc: "Te llevamos el mueble hasta la puerta. En el tiempo acordado, sin excusas." },
];

const styles = [
  {
    id: "moderno",
    label: "MODERNO",
    sub: "Líneas limpias · Formas contemporáneas · Sin adornos",
    examples: "MANHATTAN · BURBUJA · HAMBURGO",
    Art: ArtModerno,
    img: "/images/catalogo/ZEUS.jpg",
  },
  {
    id: "clasico",
    label: "CLÁSICO",
    sub: "Capitoné · Madera noble · Detalle artesanal",
    examples: "CHESTER · POLTRONA · CILO",
    Art: ArtClasico,
    img: "/images/catalogo/SOFA_BERLIN.jpg",
  },
  {
    id: "contemporaneo",
    label: "CONTEMPORÁNEO",
    sub: "La mezcla perfecta de ambos mundos",
    examples: "BOGOTÁ · SECCIONAL · MILÁN",
    Art: ArtContemporaneo,
    img: "/images/catalogo/SOFA_ANGEL.jpg",
  },
];

const testimonials = [
  {
    name: "Laura Ospina",
    text: "Compramos la sala hace tres años y sigue igual que el primer día. Nos ayudaron a elegir sin apresurarnos.",
  },
  {
    name: "Camilo Vargas",
    text: "El comedor quedó perfecto. Les mandamos las medidas y lo adaptaron. El precio, honesto.",
  },
  {
    name: "Mariana Jiménez",
    text: "La cama llegó puntual y armada. Llevo un año usándola y el colchón mantiene su forma.",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#070E1C]">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col border-b border-[#162040]">
        {/* Content — split layout */}
        <div className="flex-1 grid md:grid-cols-2">
          {/* Left: text */}
          <div className="relative flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-32">
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 100% 80% at 0% 50%, #0D1E42 0%, #070E1C 70%)" }} aria-hidden="true" />
            <div className="relative">
              <p className="text-[#D4AE35] text-[10px] tracking-[0.35em] uppercase font-semibold mb-10">
                Bogotá &nbsp;·&nbsp; Desde 2000 &nbsp;·&nbsp; Fabricación Propia
              </p>
              <h1 className="font-[family-name:var(--font-heading)] text-[clamp(3.5rem,7vw,6rem)] text-[#F2EDE0] leading-[0.95] tracking-tight mb-8">
                Tu hogar,<br />
                <em className="not-italic text-[#D4AE35]">bien amoblado.</em>
              </h1>
              <p className="text-[#5A6F85] text-lg leading-relaxed max-w-sm mb-12">
                Diseñamos y fabricamos los muebles que hacen que tu espacio hable por sí solo.
              </p>
              <div className="flex flex-wrap gap-4 items-center mb-8">
                <Link
                  href="/catalogo"
                  className="inline-flex items-center gap-2 bg-[#D4AE35] hover:bg-[#E0BE45] text-[#070E1C] font-bold px-8 py-4 text-sm tracking-widest uppercase transition-colors"
                >
                  Ver catálogo
                </Link>
                <a
                  href="https://wa.me/573013799401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F2EDE0] hover:text-[#D4AE35] text-sm tracking-widest uppercase font-semibold transition-colors border-b border-[#F2EDE0]/20 hover:border-[#D4AE35] pb-0.5"
                >
                  Escríbenos →
                </a>
              </div>
              <div className="border-t border-[#162040] pt-8">
                <p className="text-[#5A6F85] text-sm leading-relaxed max-w-sm mb-4">
                  Mira nuestros proyectos terminados, novedades de catálogo y muebles en proceso. La mejor forma de ver cómo trabajamos antes de comprar.
                </p>
                <a
                  href="https://instagram.com/la.amobladora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#D4AE35] hover:text-[#E0BE45] transition-colors text-xs tracking-[0.18em] uppercase font-semibold"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  @la.amobladora
                </a>
              </div>
            </div>
          </div>

          {/* Right: image — full bleed with blend */}
          <div className="relative hidden md:block min-h-[500px]">
            <Image
              src="/images/hero-v2.jpg"
              alt="Sala de estar amoblada por La Amobladora"
              fill
              className="object-cover object-top"
              priority
            />
            {/* Blend left edge into dark bg */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#070E1C] via-[#070E1C]/10 to-transparent pointer-events-none" aria-hidden="true" />
            {/* Blend top edge */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#070E1C]/60 via-transparent to-[#070E1C]/40 pointer-events-none" aria-hidden="true" />
          </div>
        </div>

        {/* Bottom stat bar */}
        <div className="relative border-t border-[#162040] px-6 sm:px-10 py-6 grid grid-cols-3 gap-4">
          {[
            { n: "24", label: "Años de experiencia" },
            { n: "+500", label: "Hogares amoblados" },
            { n: "100%", label: "Fabricación propia" },
          ].map(({ n, label }) => (
            <div key={label}>
              <p className="font-[family-name:var(--font-heading)] text-[#D4AE35] text-2xl sm:text-3xl">{n}</p>
              <p className="text-[#5A6F85] text-xs tracking-wide mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ESTILOS ── */}
      <section className="py-28 border-b border-[#162040]">
        <div className="px-6 sm:px-10">
          <div className="flex items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-[#D4AE35] text-[10px] tracking-[0.35em] uppercase font-semibold mb-4">
                Catálogo por estilo
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl text-[#F2EDE0] leading-tight">
                Encuentra tu estilo
              </h2>
            </div>
            <Link
              href="/catalogo"
              className="hidden sm:block text-[#D4AE35] text-xs tracking-[0.2em] uppercase font-semibold hover:text-[#E0BE45] transition-colors shrink-0"
            >
              Ver todo →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {styles.map(({ id, label, sub, examples, Art, img }) => (
              <Link
                key={id}
                href={`/catalogo#${id}`}
                className="group bg-[#070E1C] hover:bg-[#0D1628] flex flex-col gap-6 transition-colors overflow-hidden"
              >
                <div className="relative h-72 overflow-hidden">
                  {img ? (
                    <Image src={img} alt={label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="p-8 h-full flex items-center"><Art /></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070E1C] via-[#070E1C]/20 to-transparent pointer-events-none" />
                </div>
                <div className="px-8 pb-8">
                  <h3 className="font-[family-name:var(--font-heading)] text-[#F2EDE0] text-2xl tracking-wide group-hover:text-[#D4AE35] transition-colors mb-2">
                    {label}
                  </h3>
                  <p className="text-[#5A6F85] text-xs leading-relaxed mb-4">{sub}</p>
                  <p className="text-[#D4AE35]/60 text-[10px] tracking-[0.18em] uppercase">{examples}</p>
                  <span className="text-[#5A6F85] text-xs tracking-widest uppercase group-hover:text-[#D4AE35] transition-colors">
                    Ver colección →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOSOTROS / FEATURES ── */}
      <section id="nosotros" className="py-28 border-b border-[#162040]">
        <div className="px-6 sm:px-10">
          <p className="text-[#D4AE35] text-[10px] tracking-[0.35em] uppercase font-semibold mb-16">
            Por qué La Amobladora
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#162040]">
            {features.map(({ num, label, desc }) => (
              <div key={num} className="bg-[#070E1C] p-8 flex flex-col gap-4">
                <span className="font-[family-name:var(--font-heading)] text-[#D4AE35]/40 text-5xl leading-none">
                  {num}
                </span>
                <h3 className="text-[#F2EDE0] text-sm tracking-[0.12em] uppercase font-semibold">
                  {label}
                </h3>
                <p className="text-[#5A6F85] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ASESORÍA CTA ── */}
      <section className="py-28 border-b border-[#162040] bg-[#0D1628]">
        <div className="px-6 sm:px-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#D4AE35] text-[10px] tracking-[0.35em] uppercase font-semibold mb-6">
              Asesoría sin costo
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl text-[#F2EDE0] leading-tight mb-6">
              ¿No sabes por dónde empezar?
            </h2>
            <p className="text-[#5A6F85] text-lg leading-relaxed">
              Cuéntanos cómo es tu espacio, cuántas personas viven ahí y qué estilo te gusta.
              Nosotros te recomendamos qué comprar y en qué orden.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="https://wa.me/573013799401?text=Hola, necesito asesoría para amueblar mi hogar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#D4AE35] hover:bg-[#E0BE45] text-[#070E1C] font-bold px-8 py-5 text-sm tracking-widest uppercase transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.55 4.106 1.512 5.834L0 24l6.334-1.499A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.004-1.366l-.36-.214-3.726.881.938-3.632-.234-.374A9.817 9.817 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.397 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
              </svg>
              Pedir asesoría gratis
            </a>
            <p className="text-[#5A6F85] text-xs">Sin compromiso. Respondemos en menos de 24 horas.</p>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section className="py-28 border-b border-[#162040]">
        <div className="px-6 sm:px-10">
          <p className="text-[#D4AE35] text-[10px] tracking-[0.35em] uppercase font-semibold mb-16">
            Clientes
          </p>
          <div className="grid md:grid-cols-3 gap-px bg-[#162040]">
            {testimonials.map(({ name, text }) => (
              <div key={name} className="bg-[#070E1C] p-8 flex flex-col gap-6">
                <div className="flex gap-1" role="img" aria-label="5 estrellas">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-[#D4AE35] text-xs" aria-hidden="true">★</span>
                  ))}
                </div>
                <p className="text-[#C8D4D0] text-sm leading-relaxed flex-1">
                  &ldquo;{text}&rdquo;
                </p>
                <p className="text-[#F2EDE0] text-xs tracking-[0.15em] uppercase font-semibold">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACTO CTA ── */}
      <section id="contacto" className="py-28 border-b border-[#162040]">
        <div className="px-6 sm:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left: CTA */}
            <div>
              <p className="text-[#D4AE35] text-[10px] tracking-[0.35em] uppercase font-semibold mb-8">
                Contacto
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl text-[#F2EDE0] leading-tight mb-10">
                ¿Listo para<br />
                <span className="text-[#D4AE35]">amueblar tu hogar?</span>
              </h2>
              <a
                href="https://wa.me/573013799401"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#D4AE35] hover:bg-[#E0BE45] text-[#070E1C] font-bold px-12 py-5 text-sm tracking-widest uppercase transition-colors"
              >
                Escribir por WhatsApp
              </a>
            </div>

            {/* Right: info */}
            <div className="flex flex-col gap-8 pt-2">
              <div>
                <p className="text-[#D4AE35] text-[10px] tracking-[0.25em] uppercase font-semibold mb-3">Contáctanos</p>
                <p className="text-[#5A6F85] text-sm leading-relaxed">
                  Somos fabricantes y distribuidores de muebles en Bogotá. Nuestra sede principal queda en el barrio San Carlos en la localidad de Tunjuelito.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <span className="text-[#D4AE35] text-xs tracking-widest uppercase font-semibold w-20 shrink-0 pt-0.5">Dirección</span>
                  <div>
                    <p className="text-[#F2EDE0] text-sm">Cra. 13f # 52-33 Sur, Bogotá, Colombia</p>
                    <p className="text-[#5A6F85] text-xs mt-0.5">Muebles barrio San Carlos</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#D4AE35] text-xs tracking-widest uppercase font-semibold w-20 shrink-0 pt-0.5">Correo</span>
                  <a href="mailto:laamobladora@gmail.com" className="text-[#F2EDE0] hover:text-[#D4AE35] text-sm transition-colors">
                    laamobladora@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#D4AE35] text-xs tracking-widest uppercase font-semibold w-20 shrink-0 pt-0.5">Teléfonos</span>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+573187119515" className="text-[#F2EDE0] hover:text-[#D4AE35] text-sm transition-colors">318 711 9515</a>
                    <a href="tel:+573187119521" className="text-[#F2EDE0] hover:text-[#D4AE35] text-sm transition-colors">318 711 9521</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#D4AE35] text-xs tracking-widest uppercase font-semibold w-20 shrink-0 pt-0.5">Instagram</span>
                  <a
                    href="https://instagram.com/la.amobladora"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F2EDE0] hover:text-[#D4AE35] text-sm transition-colors flex items-center gap-2"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    @la.amobladora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12 bg-[#070E1C]">
        <div className="px-6 sm:px-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
            <Link href="/" className="font-[family-name:var(--font-heading)] text-2xl text-[#F2EDE0]">
              La Amobladora
            </Link>
            <nav aria-label="Navegación secundaria" className="flex flex-wrap gap-8">
              {[
                { label: "Catálogo", href: "/catalogo" },
                { label: "Nosotros", href: "/#nosotros" },
                { label: "Políticas", href: "/politicas" },
                { label: "WhatsApp", href: "https://wa.me/573013799401" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-[#5A6F85] hover:text-[#F2EDE0] text-xs tracking-[0.15em] uppercase transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
            <a
              href="https://instagram.com/la.amobladora"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5A6F85] hover:text-[#F2EDE0] transition-colors flex items-center gap-2 text-xs tracking-[0.15em] uppercase"
              aria-label="Instagram @la.amobladora"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @la.amobladora
            </a>
          </div>
          <div className="border-t border-[#162040] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#5A6F85] text-[11px] tracking-wide">
              © 2025 La Amobladora · Bogotá, Colombia
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
