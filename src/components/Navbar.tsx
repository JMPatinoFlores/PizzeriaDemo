"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-sm">
            <div className="h-24 flex justify-between items-center px-6 md:px-40">
                <Link
                    href="#hero"
                    className="text-2xl font-bold tracking-wide text-shadow-lg"
                >
                    <span className="text-red-500 underline underline-offset-4">
                        PIZZA
                    </span>
                    JY
                </Link>

                {/* Menú para pantallas grandes */}
                <div className="hidden md:flex bg-red-500 space-x-6 rounded-full px-10 py-4 shadow-lg">
                    <NavLinks />
                </div>

                {/* Botón de hamburguesa para móviles */}
                <button
                    className="md:hidden text-3xl text-red-500"
                    onClick={toggleMenu}
                    aria-label="Abrir menú"
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Menú mobile desplegable */}
            {menuOpen && (
                <div className="md:hidden flex flex-col bg-red-500 py-6 px-10 space-y-4 text-center">
                    <NavLinks />
                </div>
            )}
        </nav>
    );
}

function NavLinks() {
    const classes =
        "uppercase font-semibold text-sm text-white hover:underline hover:underline-offset-8";
    return (
        <>
            <Link href="#hero" className={classes}>
                Inicio
            </Link>
            <Link href="#thebest" className={classes}>
                Lo mejor
            </Link>
            <Link href="#combos" className={classes}>
                Combos
            </Link>
            <Link href="#about" className={classes}>
                Sobre nosotros
            </Link>
            <Link href="#contact" className={classes}>
                Contacto
            </Link>
        </>
    );
}
