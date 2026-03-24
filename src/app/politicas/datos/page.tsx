import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Tratamiento de Datos | La Amobladora",
  description: "Política de tratamiento de datos personales de Amobladora Angie Lorena S.A.S., conforme a la Ley 1581 de 2012.",
};

export default function PoliticaDatosPage() {
  return (
    <main className="bg-[#070E1C] min-h-screen">
      {/* Header */}
      <section className="py-20 border-b border-[#162040] bg-[#0D1628]">
        <div className="px-6 sm:px-10">
          <div className="flex items-center gap-4 mb-12">
            <Link
              href="/politicas"
              className="inline-flex items-center gap-2 text-[#5A6F85] hover:text-[#F2EDE0] transition-colors text-xs tracking-[0.15em] uppercase"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              Políticas
            </Link>
            <span className="text-[#162040]">/</span>
            <span className="text-[#D4AE35] text-xs tracking-[0.15em] uppercase font-semibold">Datos personales</span>
          </div>
          <p className="text-[#D4AE35] text-[10px] tracking-[0.35em] uppercase font-semibold mb-4">Legal · Ley 1581 de 2012</p>
          <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl text-[#F2EDE0] leading-tight mb-4">
            Política de Tratamiento<br />de Datos Personales
          </h1>
          <p className="text-[#5A6F85] text-base max-w-2xl leading-relaxed">
            Amobladora Angie Lorena S.A.S., NIT 901265011-9, domiciliada en Bogotá, Colombia (Cra. 13f # 52-33 Sur), es responsable del tratamiento de los datos personales recolectados en el desarrollo de sus actividades comerciales.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="px-6 sm:px-10 max-w-4xl">
          <div className="flex flex-col gap-12">

            {/* Objetivo */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-[#F2EDE0] text-3xl mb-4 pb-4 border-b border-[#162040]">
                1. Objetivo
              </h2>
              <p className="text-[#5A6F85] text-sm leading-relaxed">
                Establecer las directrices bajo las cuales Amobladora Angie Lorena S.A.S. realiza la recolección, almacenamiento, uso, circulación, supresión y demás actividades relacionadas con el tratamiento de los datos personales de clientes, proveedores, empleados y demás terceros, garantizando la protección de los derechos de los titulares conforme a la Ley 1581 de 2012 y sus decretos reglamentarios.
              </p>
            </div>

            {/* Alcance */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-[#F2EDE0] text-3xl mb-4 pb-4 border-b border-[#162040]">
                2. Alcance
              </h2>
              <p className="text-[#5A6F85] text-sm leading-relaxed">
                Esta política aplica a todos los datos personales recolectados, almacenados y tratados por Amobladora Angie Lorena S.A.S. en el marco de sus actividades comerciales, laborales y contractuales. Abarca la información recibida a través de medios físicos, electrónicos, telefónicos, formularios web, redes sociales, WhatsApp Business y cualquier otro canal de contacto con la empresa.
              </p>
            </div>

            {/* Definiciones */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-[#F2EDE0] text-3xl mb-6 pb-4 border-b border-[#162040]">
                3. Definiciones
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  { term: "Titular", def: "Persona natural cuyos datos personales sean objeto de tratamiento." },
                  { term: "Dato Personal", def: "Cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables." },
                  { term: "Tratamiento", def: "Cualquier operación o conjunto de operaciones sobre datos personales, tales como la recolección, almacenamiento, uso, circulación o supresión." },
                  { term: "Responsable del Tratamiento", def: "Persona natural o jurídica que por sí misma o en asocio con otros, decida sobre la base de datos y/o el tratamiento de los datos." },
                  { term: "Encargado del Tratamiento", def: "Persona natural o jurídica que realice el tratamiento de datos personales por cuenta del responsable del tratamiento." },
                  { term: "Autorización", def: "Consentimiento previo, expreso e informado del titular para llevar a cabo el tratamiento de datos personales." },
                ].map(({ term, def }) => (
                  <div key={term} className="flex gap-4 border-b border-[#162040] pb-4 last:border-0 last:pb-0">
                    <span className="text-[#F2EDE0] text-sm font-semibold min-w-[200px] shrink-0">{term}</span>
                    <p className="text-[#5A6F85] text-sm leading-relaxed">{def}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Finalidad */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-[#F2EDE0] text-3xl mb-6 pb-4 border-b border-[#162040]">
                4. Finalidad del tratamiento
              </h2>
              <p className="text-[#5A6F85] text-sm mb-4">Amobladora Angie Lorena S.A.S. recolecta y trata datos personales para:</p>
              <ul className="flex flex-col gap-3">
                {[
                  "Gestionar información relacionada con la venta de muebles, colchones y artículos para el hogar.",
                  "Realizar procesos de facturación, garantías y servicio postventa.",
                  "Enviar información comercial, publicitaria y promocional de productos y servicios.",
                  "Gestionar información relacionada con proveedores y empleados.",
                  "Cumplir obligaciones legales, contractuales, contables y tributarias.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#5A6F85] text-sm leading-relaxed">
                    <span className="text-[#D4AE35] shrink-0 mt-1">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Derechos del titular */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-[#F2EDE0] text-3xl mb-6 pb-4 border-b border-[#162040]">
                5. Derechos del titular
              </h2>
              <p className="text-[#5A6F85] text-sm mb-4">De acuerdo con la Ley 1581 de 2012, los titulares de datos personales tienen derecho a:</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Conocer, actualizar y rectificar sus datos.",
                  "Solicitar prueba de la autorización otorgada.",
                  "Ser informados sobre el uso de sus datos.",
                  "Presentar quejas ante la Superintendencia de Industria y Comercio (SIC).",
                  "Revocar la autorización o solicitar la supresión de sus datos cuando no se respeten sus derechos.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#0D1628] border border-[#162040] p-4">
                    <span className="text-[#D4AE35] shrink-0 mt-0.5">—</span>
                    <p className="text-[#5A6F85] text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Deberes */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-[#F2EDE0] text-3xl mb-6 pb-4 border-b border-[#162040]">
                6. Deberes del responsable
              </h2>
              <p className="text-[#5A6F85] text-sm mb-4">Amobladora Angie Lorena S.A.S. se compromete a:</p>
              <ul className="flex flex-col gap-3">
                {[
                  "Garantizar el derecho de hábeas data.",
                  "Solicitar y conservar copia de la autorización otorgada por el titular.",
                  "Informar debidamente al titular sobre la finalidad de la recolección.",
                  "Conservar la información bajo las condiciones de seguridad necesarias.",
                  "Garantizar que la información sea veraz, completa, exacta y actualizada.",
                  "Actualizar y rectificar los datos cuando sea necesario.",
                  "Suministrar al encargado del tratamiento únicamente datos cuyo tratamiento esté previamente autorizado.",
                  "Exigir al encargado del tratamiento el respeto a las condiciones de seguridad y privacidad.",
                  "Tramitar las consultas y reclamos formulados.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#5A6F85] text-sm leading-relaxed">
                    <span className="text-[#D4AE35] shrink-0 mt-1">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Datos sensibles */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-[#F2EDE0] text-3xl mb-4 pb-4 border-b border-[#162040]">
                7. Tratamiento de datos sensibles
              </h2>
              <p className="text-[#5A6F85] text-sm leading-relaxed">
                Amobladora Angie Lorena S.A.S. no recolecta ni trata datos sensibles, salvo en los casos estrictamente necesarios para el cumplimiento de obligaciones laborales o legales, para lo cual solicitará autorización expresa del titular.
              </p>
            </div>

            {/* Procedimiento */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-[#F2EDE0] text-3xl mb-6 pb-4 border-b border-[#162040]">
                8. Ejercicio de derechos
              </h2>
              <p className="text-[#5A6F85] text-sm mb-6">El titular podrá ejercer sus derechos presentando una solicitud a través de los canales oficiales. La solicitud será atendida en máximo 10 días hábiles para consultas y 15 días hábiles para reclamos.</p>
              <div className="bg-[#0D1628] border border-[#162040] p-8 flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <span className="text-[#D4AE35] text-xs tracking-widest uppercase font-semibold w-24 shrink-0">Correo</span>
                  <a href="mailto:laamobladora@gmail.com" className="text-[#F2EDE0] hover:text-[#D4AE35] text-sm transition-colors">laamobladora@gmail.com</a>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#D4AE35] text-xs tracking-widest uppercase font-semibold w-24 shrink-0">Teléfonos</span>
                  <p className="text-[#5A6F85] text-sm">301 379 9401 · 318 711 9515</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#D4AE35] text-xs tracking-widest uppercase font-semibold w-24 shrink-0">Dirección</span>
                  <p className="text-[#5A6F85] text-sm">Cra. 13f # 52-33 Sur, Bogotá D.C.</p>
                </div>
              </div>
            </div>

            {/* Autorización */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-[#F2EDE0] text-3xl mb-4 pb-4 border-b border-[#162040]">
                9. Autorización del titular
              </h2>
              <p className="text-[#5A6F85] text-sm leading-relaxed">
                El cliente, al entregar sus datos personales por cualquier medio (físico, digital, telefónico, redes sociales o WhatsApp), autoriza de manera libre, previa, expresa e informada a Amobladora Angie Lorena S.A.S. para el tratamiento de sus datos conforme a esta política.
              </p>
            </div>

            {/* Vigencia */}
            <div className="bg-[#0D1628] border border-[#162040] p-6">
              <p className="text-[#D4AE35] text-[10px] tracking-[0.25em] uppercase font-semibold mb-2">Vigencia</p>
              <p className="text-[#5A6F85] text-sm leading-relaxed">
                Esta política entra en vigencia a partir de enero 2025. Los datos recolectados permanecerán en nuestras bases mientras se mantenga la relación comercial y durante el tiempo necesario para cumplir con las finalidades descritas.
              </p>
            </div>

          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-[#162040] text-center">
        <p className="text-[#5A6F85] text-[11px]">
          Amobladora Angie Lorena S.A.S. · NIT 901265011-9 · Bogotá, Colombia
        </p>
      </footer>
    </main>
  );
}
