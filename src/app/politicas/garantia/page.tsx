import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Garantía | La Amobladora",
  description: "Política de garantía de La Amobladora. Cobertura, tiempos y proceso de activación para tapizados, madera y colchones.",
};

export default function PoliticaGarantiaPage() {
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
            <span className="text-[#D4AE35] text-xs tracking-[0.15em] uppercase font-semibold">Garantía</span>
          </div>
          <p className="text-[#D4AE35] text-[10px] tracking-[0.35em] uppercase font-semibold mb-4">Legal</p>
          <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl text-[#F2EDE0] leading-tight mb-4">
            Política de Garantía
          </h1>
          <p className="text-[#5A6F85] text-base max-w-2xl leading-relaxed">
            Queremos asegurarnos de que cada visita a La Amobladora sea memorable. Hemos desarrollado una clara política de garantía para que puedas informarte sobre cómo operamos.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="px-6 sm:px-10 max-w-4xl">

          {/* Resumen */}
          <div className="border border-[#D4AE35]/20 bg-[#0D1628] p-8 mb-12">
            <p className="text-[#D4AE35] text-[10px] tracking-[0.25em] uppercase font-semibold mb-3">Resumen</p>
            <p className="text-[#C8D4D0] text-sm leading-relaxed">
              La garantía tiene vigencia a partir de la fecha de entrega del producto y cubre <strong className="text-[#F2EDE0]">únicamente defectos de fabricación</strong>. Si el cliente ocasiona daños en la estructura, la garantía queda anulada. AMOBLADORA ANGIE LORENA S.A.S garantiza el servicio y reparación por cualquier defecto de fábrica a través de un técnico autorizado.
            </p>
          </div>

          <div className="flex flex-col gap-12">

            {/* Proceso */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-[#F2EDE0] text-3xl mb-6 pb-4 border-b border-[#162040]">
                Proceso para activación de garantía
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  { n: "1", text: "Radicación: Envía un correo a laamobladora@gmail.com con número de remisión, fecha de compra, descripción del daño, registro fotográfico/video y datos de contacto." },
                  { n: "2", text: "Nuestro departamento validará si la garantía procede en los 5 días hábiles siguientes al recibo de la solicitud." },
                  { n: "3", text: "La respuesta será otorgada vía correo electrónico o telefónica." },
                  { n: "4", text: "El equipo realizará un diagnóstico remoto (Caso 1) y si es necesario programará visita técnica en máximo 8 días hábiles (Caso 2)." },
                  { n: "5", text: "Aceptada la garantía (Caso 2), se coordinará con el consumidor la recogida del bien." },
                  { n: "6", text: "Tras recibir el producto, La Amobladora emitirá un formato de garantía con identificación, condiciones del bien, falla y tiempo máximo de devolución." },
                  { n: "7", text: "Si la falla persiste o no es posible la reparación, el cliente podrá optar por cambio del bien o devolución del dinero." },
                  { n: "8", text: "El cambio de producto se realizará dentro de los 10 a 15 días hábiles siguientes a la entrega del bien a La Amobladora." },
                ].map(({ n, text }) => (
                  <div key={n} className="flex gap-4">
                    <span className="font-[family-name:var(--font-heading)] text-[#D4AE35]/50 text-2xl leading-none w-8 shrink-0">{n}.</span>
                    <p className="text-[#5A6F85] text-sm leading-relaxed pt-1">{text}</p>
                  </div>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-[#0D1628] border border-[#162040] p-6">
                  <p className="text-[#D4AE35] text-xs tracking-widest uppercase font-semibold mb-3">Caso 1 — Sin visita técnica</p>
                  <p className="text-[#5A6F85] text-sm leading-relaxed">Si se evidencia defecto de fabricación: solución en máximo 8 días hábiles. Si no se evidencia defecto: se entrega cotización para arreglo y el cliente decide.</p>
                </div>
                <div className="bg-[#0D1628] border border-[#162040] p-6">
                  <p className="text-[#D4AE35] text-xs tracking-widest uppercase font-semibold mb-3">Caso 2 — Con visita técnica</p>
                  <p className="text-[#5A6F85] text-sm leading-relaxed">En máximo 8 días hábiles un técnico se acercará a tu dirección con previo acuerdo. En la visita se define el dictamen y tiempo de solución (no mayor a 8 días hábiles).</p>
                </div>
              </div>
            </div>

            {/* Consideraciones generales */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-[#F2EDE0] text-3xl mb-6 pb-4 border-b border-[#162040]">
                Consideraciones generales
              </h2>
              <ul className="flex flex-col gap-3">
                {[
                  "La garantía cubre defectos de fabricación, mano de obra y materiales.",
                  "Las garantías no se renuevan ni extienden.",
                  "La garantía se pierde cuando los productos han sido modificados o intervenidos indebidamente por el cliente.",
                  "Cuando la mercancía es entregada a terceros y estos la reciben a satisfacción, la empresa no responderá por el estado en que llegue a su destino final.",
                  "La madera es de origen natural: las diferencias de color en pintura son inherentes a la textura de la madera y no aplican como garantía.",
                  "No se realiza devolución de dinero cuando el producto es personalizado por el cliente en medidas, telas o piezas adicionales.",
                  "Los daños durante el transporte deben reportarse oportunamente con anotación en la factura o remisión.",
                  "Telas Pet Friendly: aunque minimizan el impacto, las mascotas o elementos cortopunzantes pueden dañar el material y se pierde garantía.",
                  "La garantía cubre en la ciudad y dirección inicial de entrega. Si el mueble se mueve de ciudad, los fletes son asumidos por el cliente.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#5A6F85] text-sm leading-relaxed">
                    <span className="text-[#D4AE35] shrink-0 mt-1">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cobertura */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-[#F2EDE0] text-3xl mb-6 pb-4 border-b border-[#162040]">
                Cobertura de garantía
              </h2>

              {/* Tapizados */}
              <div className="mb-8">
                <h3 className="font-[family-name:var(--font-heading)] text-[#D4AE35] text-xl mb-4">1. Línea Tapizados</h3>
                <p className="text-[#5A6F85] text-sm mb-4">Aplica a: salas, sillas, sofás, sofá camas, poltronas, puf, sillas de comedor, bases cama, cabeceros y pie de camas.</p>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div className="bg-[#0D1628] border border-[#162040] p-5">
                    <p className="text-[#F2EDE0] text-sm font-semibold mb-2">1 año de garantía</p>
                    <p className="text-[#5A6F85] text-xs leading-relaxed">Estructura (fracturas en madera interna), espumas (aplastamiento mayor al 30%), herrajes y patas (fractura o mal funcionamiento), costuras (desprendimiento o ruptura por defecto de fabricación).</p>
                  </div>
                  <div className="bg-[#0D1628] border border-[#162040] p-5">
                    <p className="text-[#F2EDE0] text-sm font-semibold mb-2">6 meses de garantía</p>
                    <p className="text-[#5A6F85] text-xs leading-relaxed">Rellenos siliconados o picado de espuma por aplastamiento en condiciones adecuadas de uso.</p>
                  </div>
                </div>
                <p className="text-[#5A6F85] text-xs leading-relaxed border-l-2 border-[#162040] pl-4">
                  No aplica garantía por: daños biológicos, exposición climática adversa, uso indebido, falta de higiene, manipulaciones no autorizadas, exceder límites de peso, humedad, daños en transporte, fuerza mayor, arreglos o modificaciones a diseños originales, mercancía de saldos o promoción.
                </p>
              </div>

              {/* Madera natural */}
              <div className="mb-8">
                <h3 className="font-[family-name:var(--font-heading)] text-[#D4AE35] text-xl mb-4">2. Línea Madera Natural</h3>
                <p className="text-[#5A6F85] text-sm mb-4">Incluye: camas, comedores, mesas de centro, butacas.</p>
                <div className="flex flex-col gap-2 mb-4">
                  {[
                    "Maderas contraídas y dilatadas: 1 año en condiciones adecuadas de uso.",
                    "Correderas, herrajes y bisagras: 1 año en condiciones normales de uso.",
                    "Rupturas de partes: 1 año en condiciones normales de uso.",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-[#5A6F85] text-sm">
                      <span className="text-[#D4AE35] shrink-0">—</span>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <p className="text-[#F2EDE0] text-sm font-semibold mb-2">Pintura de madera</p>
                  <p className="text-[#5A6F85] text-xs leading-relaxed mb-2">1 año de garantía para craquelamiento y desprendimiento en condiciones apropiadas. No cubre: exposición a rayos UV, altas temperaturas, solventes químicos (thiner, acetona), golpes, rayones o abrasiones.</p>
                </div>
              </div>

              {/* Colchones */}
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-[#D4AE35] text-xl mb-4">3. Colchones</h3>
                <p className="text-[#5A6F85] text-sm mb-4">El periodo de garantía está estipulado en la etiqueta de cada colchón. En acolchados y terminados: 6 meses por defectos de fabricación.</p>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-[#F2EDE0] text-xs tracking-widest uppercase font-semibold mb-3">Línea Hogar</p>
                    <ul className="flex flex-col gap-1.5 text-[#5A6F85] text-xs">
                      <li>Colchonetas densidad 20 — 6 meses</li>
                      <li>Colchonetas densidad 23 — 1 año</li>
                      <li>Colchonetas densidad 26 — 3 años</li>
                      <li>Sensoflex densidad 20 — 6 meses</li>
                      <li>Sensoflex densidad 23 — 1 año</li>
                      <li>Ortopédico — 3 años</li>
                      <li>Semiortopédico — 3 años</li>
                      <li>Orto-Resortado — 3 años</li>
                      <li>Pillowtop ortopédico — 5 años</li>
                      <li>Pillowtop resortado — 5 años</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-[#F2EDE0] text-xs tracking-widest uppercase font-semibold mb-3">Línea Premium</p>
                    <ul className="flex flex-col gap-1.5 text-[#5A6F85] text-xs">
                      <li>Super Pillowtop — 5 años</li>
                      <li>Pentaflex densidad 20 — 6 meses</li>
                      <li>Pentaflex densidad 26 — 2 años</li>
                      <li>Nixury — 5 años</li>
                    </ul>
                  </div>
                </div>
                <p className="text-[#5A6F85] text-xs leading-relaxed border-l-2 border-[#162040] pl-4">
                  No aplica garantía en colchones por: malas condiciones de higiene, manchas de líquidos o fluidos, garantía vencida, mal uso o rotación, almacenaje inadecuado, quemaduras, deformidades por mal uso, productos químicos, insectos u hongos, preferencias subjetivas de confort.
                </p>
              </div>
            </div>

            {/* Derecho de retracto */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-[#F2EDE0] text-3xl mb-6 pb-4 border-b border-[#162040]">
                Derecho de retracto
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-[#0D1628] border border-[#162040] p-6">
                  <p className="text-[#D4AE35] text-xs tracking-widest uppercase font-semibold mb-3">Compra presencial</p>
                  <p className="text-[#5A6F85] text-sm leading-relaxed">Si el cliente desiste o pide cambio, acepta un cargo del 10% sobre el valor de la compra sin IVA (tapicería y madera). Aplica dentro de los primeros 5 días hábiles después de la entrega, en perfecto estado.</p>
                </div>
                <div className="bg-[#0D1628] border border-[#162040] p-6">
                  <p className="text-[#D4AE35] text-xs tracking-widest uppercase font-semibold mb-3">Compra no presencial</p>
                  <p className="text-[#5A6F85] text-sm leading-relaxed">Aplica Art. 47 Ley 1480 de 2011. Transferencia electrónica: 10 días hábiles. Reversión del pago: 30 días hábiles. Consignación bancaria: 30 días hábiles.</p>
                </div>
              </div>
              <p className="text-[#5A6F85] text-xs leading-relaxed border-l-2 border-[#D4AE35]/30 pl-4">
                Nota: Los cambios no aplican para colchones (prenda íntima). Por la naturaleza personalizada de los muebles sobre pedido, no aplica derecho de retracto ni devolución de dinero.
              </p>
            </div>

            {/* Entrega */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-[#F2EDE0] text-3xl mb-6 pb-4 border-b border-[#162040]">
                Entrega del producto
              </h2>
              <ul className="flex flex-col gap-3">
                {[
                  "Al fijar una fecha de despacho, tanto el cliente como La Amobladora generan un compromiso de entregar y recibir en el plazo acordado.",
                  "El vendedor notificará por correo electrónico o WhatsApp la confirmación de entrega.",
                  "Una vez notificado el pedido como terminado, el comprador deberá realizar el pago del saldo pendiente (si aplica).",
                  "Pasados 90 días de almacenada la mercancía, el cliente autoriza a La Amobladora a disponer de ella y dejar dinero abonado para futuras compras.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#5A6F85] text-sm leading-relaxed">
                    <span className="text-[#D4AE35] shrink-0 mt-1">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div className="bg-[#0D1628] border border-[#162040] p-8">
              <p className="text-[#D4AE35] text-[10px] tracking-[0.25em] uppercase font-semibold mb-2">¿Necesitas activar una garantía?</p>
              <p className="text-[#5A6F85] text-sm mb-4">Escribe al correo indicando tu número de remisión, fecha de compra, descripción del daño y registro fotográfico.</p>
              <a href="mailto:laamobladora@gmail.com" className="text-[#F2EDE0] hover:text-[#D4AE35] text-sm font-semibold transition-colors">
                laamobladora@gmail.com →
              </a>
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
