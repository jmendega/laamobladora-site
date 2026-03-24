import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Abonos y Apartados | La Amobladora",
  description: "Condiciones para reservar productos mediante abono en La Amobladora: plazos, saldo a favor, productos personalizados y devoluciones.",
};

export default function PoliticaAbonosPage() {
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
            <span className="text-[#D4AE35] text-xs tracking-[0.15em] uppercase font-semibold">Abonos</span>
          </div>
          <p className="text-[#D4AE35] text-[10px] tracking-[0.35em] uppercase font-semibold mb-4">Legal · Ley 1480 de 2011</p>
          <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl text-[#F2EDE0] leading-tight mb-4">
            Política de Abonos<br />y Apartados
          </h1>
          <p className="text-[#5A6F85] text-base max-w-2xl leading-relaxed">
            Condiciones aplicables a los abonos realizados por los clientes para reservar productos de Amobladora Angie Lorena S.A.S. Su propósito es garantizar transparencia y claridad conforme a la Ley 1480 de 2011.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="px-6 sm:px-10 max-w-4xl">
          <div className="flex flex-col gap-12">

            {/* Definiciones */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-[#F2EDE0] text-3xl mb-6 pb-4 border-b border-[#162040]">
                1. Definiciones
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  { term: "Abono", def: "Pago parcial realizado por el cliente con el fin de reservar un producto o iniciar un proceso de fabricación." },
                  { term: "Reserva / Apartado", def: "Acción mediante la cual La Amobladora retiene un producto, evitando su venta a terceros durante un plazo determinado." },
                  { term: "Saldo a favor", def: "Valor correspondiente al abono que queda disponible para el cliente cuando la reserva expira o no se concreta la compra." },
                  { term: "Producto sobre pedido o personalizado", def: "Artículo que requiere fabricación, personalización o modificación de características estándar, tales como medidas, materiales, colores, telas, acabados o diseño." },
                ].map(({ term, def }) => (
                  <div key={term} className="flex gap-4 border-b border-[#162040] pb-4 last:border-0 last:pb-0">
                    <span className="text-[#F2EDE0] text-sm font-semibold min-w-[200px] shrink-0">{term}</span>
                    <p className="text-[#5A6F85] text-sm leading-relaxed">{def}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Plazo de reserva */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-[#F2EDE0] text-3xl mb-6 pb-4 border-b border-[#162040]">
                2. Plazo de reserva del producto
              </h2>
              <div className="bg-[#0D1628] border border-[#D4AE35]/20 p-8 mb-6">
                <p className="text-[#D4AE35] text-[10px] tracking-[0.25em] uppercase font-semibold mb-3">Plazo de reserva</p>
                <p className="font-[family-name:var(--font-heading)] text-[#F2EDE0] text-4xl mb-2">30 días calendario</p>
                <p className="text-[#5A6F85] text-sm">contados a partir de la fecha del pago.</p>
              </div>
              <p className="text-[#5A6F85] text-sm leading-relaxed mb-4">Durante este plazo, el cliente deberá cancelar el saldo restante y recoger el producto o coordinar su entrega.</p>
              <p className="text-[#5A6F85] text-sm leading-relaxed border-l-2 border-[#162040] pl-4">
                Vencido el plazo sin que el cliente haya completado el pago o coordinado la entrega, La Amobladora no garantiza la disponibilidad del producto, pudiendo liberarlo para su venta inmediata. El abono se manejará como saldo a favor.
              </p>
            </div>

            {/* Condiciones del abono */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-[#F2EDE0] text-3xl mb-6 pb-4 border-b border-[#162040]">
                3. Condiciones del abono
              </h2>

              <div className="flex flex-col gap-8">
                {/* 3.1 */}
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-[#D4AE35] text-xl mb-3">3.1 Carácter del abono y reembolsos</h3>
                  <p className="text-[#5A6F85] text-sm leading-relaxed mb-4">
                    El abono tiene como finalidad la separación del producto y/o el inicio del proceso de fabricación y, por regla general, <strong className="text-[#F2EDE0]">no es reembolsable en dinero</strong> en caso de desistimiento voluntario del cliente.
                  </p>
                  <p className="text-[#5A6F85] text-sm leading-relaxed mb-3">El abono será reembolsado en dinero cuando la devolución sea exigida por la ley colombiana, en especial en los casos de:</p>
                  <ul className="flex flex-col gap-2">
                    {[
                      "Incumplimiento por parte de Amobladora Angie Lorena S.A.S.",
                      "Imposibilidad de entrega del producto.",
                      "Producto defectuoso que no pueda ser reparado o sustituido conforme a la garantía legal.",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#5A6F85] text-sm leading-relaxed">
                        <span className="text-[#D4AE35] shrink-0 mt-1">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3.2 */}
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-[#D4AE35] text-xl mb-3">3.2 Saldo a favor</h3>
                  <div className="bg-[#0D1628] border border-[#162040] p-6 mb-4">
                    <p className="text-[#D4AE35] text-[10px] tracking-[0.25em] uppercase font-semibold mb-2">Vigencia del saldo a favor</p>
                    <p className="font-[family-name:var(--font-heading)] text-[#F2EDE0] text-3xl mb-1">6 meses</p>
                    <p className="text-[#5A6F85] text-xs">contados a partir de la fecha del pago, salvo pacto escrito diferente.</p>
                  </div>
                  <p className="text-[#5A6F85] text-sm leading-relaxed mb-3">
                    La Amobladora enviará al menos dos (2) recordatorios previos al vencimiento, por correo electrónico, WhatsApp y/o comunicación telefónica.
                  </p>
                  <p className="text-[#5A6F85] text-sm leading-relaxed border-l-2 border-[#162040] pl-4">
                    Vencido el plazo con notificaciones realizadas, el abono se entenderá expirado y no será reembolsable en dinero, salvo que la ley colombiana exija la devolución.
                  </p>
                </div>

                {/* 3.3 */}
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-[#D4AE35] text-xl mb-3">3.3 Abonos no utilizados</h3>
                  <p className="text-[#5A6F85] text-sm leading-relaxed">
                    Transcurridos 6 meses sin uso del saldo a favor y habiéndose realizado las notificaciones previas, el abono se considerará no utilizado y será dado de baja contablemente. No será reembolsable en dinero, salvo que la ley colombiana lo exija. Esto se entiende sin perjuicio de los derechos del consumidor por incumplimiento, imposibilidad de entrega o garantía legal.
                  </p>
                </div>
              </div>
            </div>

            {/* Productos sobre pedido */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-[#F2EDE0] text-3xl mb-6 pb-4 border-b border-[#162040]">
                4. Productos sobre pedido o personalizados
              </h2>
              <p className="text-[#5A6F85] text-sm leading-relaxed mb-4">
                En el caso de productos fabricados a la medida, el abono cubre costos iniciales de producción y reserva de materiales. Una vez iniciado el proceso de fabricación, el abono <strong className="text-[#F2EDE0]">no será reembolsable en dinero</strong> por desistimiento voluntario del cliente, debido a la naturaleza personalizada del producto.
              </p>
              <p className="text-[#5A6F85] text-sm leading-relaxed border-l-2 border-[#D4AE35]/30 pl-4">
                La Amobladora informará esta condición de manera clara y previa al recibir el abono. El cliente manifestará su aceptación mediante firma, comprobante de pago, mensaje de confirmación o cualquier medio que deje constancia. Esto no afecta los derechos del consumidor ante incumplimiento, imposibilidad de entrega o garantía legal.
              </p>
            </div>

            {/* Entrega */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-[#F2EDE0] text-3xl mb-6 pb-4 border-b border-[#162040]">
                5. Entrega y recogida
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-[#0D1628] border border-[#162040] p-6">
                  <p className="text-[#D4AE35] text-xs tracking-widest uppercase font-semibold mb-3">Productos en tienda</p>
                  <p className="text-[#5A6F85] text-sm leading-relaxed">El cliente deberá recoger el producto dentro del plazo de reserva. En caso de coordinar despacho, puede aplicarse un costo adicional según el destino.</p>
                </div>
                <div className="bg-[#0D1628] border border-[#162040] p-6">
                  <p className="text-[#D4AE35] text-xs tracking-widest uppercase font-semibold mb-3">Productos fabricados</p>
                  <p className="text-[#5A6F85] text-sm leading-relaxed">La entrega se realizará dentro del tiempo informado al cliente, el cual puede variar según disponibilidad de materiales, logística, clima o temporadas de alta demanda. Cualquier retraso será informado oportunamente.</p>
                </div>
              </div>
            </div>

            {/* Medios de pago */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-[#F2EDE0] text-3xl mb-6 pb-4 border-b border-[#162040]">
                6. Medios de pago y aceptación
              </h2>
              <p className="text-[#5A6F85] text-sm mb-4">Se reconoce como aceptación expresa de esta política cualquiera de las siguientes acciones:</p>
              <ul className="flex flex-col gap-3">
                {[
                  "Firma de orden de pedido o documento equivalente.",
                  "Envío de comprobante de pago por WhatsApp o correo electrónico.",
                  "Realización del abono en efectivo o por medios digitales.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#5A6F85] text-sm leading-relaxed">
                    <span className="text-[#D4AE35] shrink-0 mt-1">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Devolución excepcional */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-[#F2EDE0] text-3xl mb-6 pb-4 border-b border-[#162040]">
                7. Devolución excepcional
              </h2>
              <p className="text-[#5A6F85] text-sm leading-relaxed mb-4">
                Amobladora Angie Lorena S.A.S. podrá, de manera excepcional y previa evaluación del caso, realizar la devolución del abono o del valor total de la compra cuando no sea posible llegar a un acuerdo respecto a la ejecución del pedido.
              </p>
              <p className="text-[#5A6F85] text-sm leading-relaxed mb-4">Para proceder con la devolución, el cliente deberá:</p>
              <ul className="flex flex-col gap-3 mb-6">
                {[
                  "Diligenciar el formulario de devolución de saldos dispuesto por la empresa.",
                  "Entregar el producto en buen estado, sin uso, completo y en las mismas condiciones en que fue recibido, en las instalaciones de Amobladora Angie Lorena S.A.S., salvo que la ley disponga lo contrario.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#5A6F85] text-sm leading-relaxed">
                    <span className="text-[#D4AE35] shrink-0 mt-1">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-[#0D1628] border border-[#162040] p-6">
                <p className="text-[#D4AE35] text-[10px] tracking-[0.25em] uppercase font-semibold mb-2">Plazo de devolución</p>
                <p className="text-[#5A6F85] text-sm leading-relaxed">
                  Una vez verificados los requisitos y aprobada la solicitud, la devolución se realizará dentro de un plazo máximo de <strong className="text-[#F2EDE0]">cinco (5) días hábiles</strong>, mediante transferencia o transacción al medio de pago definido por la empresa.
                </p>
              </div>
            </div>

            {/* Modificaciones */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-[#F2EDE0] text-3xl mb-4 pb-4 border-b border-[#162040]">
                8. Modificaciones de la política
              </h2>
              <p className="text-[#5A6F85] text-sm leading-relaxed">
                La Amobladora podrá modificar o actualizar esta política por cambios normativos, operativos o comerciales. Cualquier modificación será informada de manera previa y visible a través de los canales oficiales, y aplicará únicamente a los abonos realizados con posterioridad a su entrada en vigencia. Las actualizaciones no podrán eliminar ni restringir los derechos que la ley reconoce a los consumidores.
              </p>
            </div>

            {/* Datos */}
            <div className="bg-[#0D1628] border border-[#162040] p-6">
              <p className="text-[#D4AE35] text-[10px] tracking-[0.25em] uppercase font-semibold mb-3">Protección de datos</p>
              <p className="text-[#5A6F85] text-sm leading-relaxed mb-3">
                Los datos personales suministrados para la gestión de abonos serán tratados conforme a la Política de Tratamiento de Datos Personales de La Amobladora.
              </p>
              <Link href="/politicas/datos" className="text-[#D4AE35] hover:text-[#E0BE45] text-xs tracking-widest uppercase font-semibold transition-colors">
                Ver política de datos →
              </Link>
            </div>

          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-[#162040] text-center">
        <p className="text-[#5A6F85] text-[11px]">
          Amobladora Angie Lorena S.A.S. · NIT 901265011-9 · Todos los derechos reservados
        </p>
      </footer>
    </main>
  );
}
