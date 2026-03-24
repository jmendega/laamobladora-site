"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Políticas", href: "/politicas" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1E2E55] bg-[#0D1B38]/90 backdrop-blur-sm">
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between"
        aria-label="Navegación principal"
      >
        <Link
          href="/"
          className="font-[family-name:var(--font-heading)] text-xl text-[#F2EDE0] hover:text-[#D4AE35] transition-colors"
        >
          La Amobladora
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-[#7A8EA5] hover:text-[#F2EDE0] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="https://wa.me/573013799401"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-[#D4AE35] hover:bg-[#E0BE45] text-[#0D1B38] font-semibold text-sm px-4 py-2 rounded-md transition-colors"
        >
          WhatsApp
        </a>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden text-[#F2EDE0] p-2 -mr-2 bg-transparent border-0 cursor-pointer"
            aria-label="Abrir menú de navegación"
          >
            <Menu size={22} aria-hidden="true" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-[#0D1B38] border-[#1E2E55] p-6 w-72"
          >
            <SheetHeader>
              <SheetTitle className="font-[family-name:var(--font-heading)] text-[#F2EDE0] text-left">
                La Amobladora
              </SheetTitle>
            </SheetHeader>
            <nav aria-label="Menú móvil" className="mt-8">
              <ul className="flex flex-col gap-6" role="list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-lg text-[#F2EDE0] hover:text-[#D4AE35] transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href="https://wa.me/573013799401"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#D4AE35] hover:bg-[#E0BE45] text-[#0D1B38] font-semibold px-5 py-3 rounded-md transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
