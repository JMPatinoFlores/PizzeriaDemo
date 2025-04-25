"use client";

import { datosCliente } from "@/constants/clientInfo";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    return (
        <Link
            href={`${datosCliente.whatsapp}¡Hola!%20Quiero%20una%20página%20web.`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-50 bg-red-500 p-4 rounded-full shadow-lg hover:scale-105 transition-transform"
            aria-label="Enviar mensaje en WhatsApp"
        >
            <FaWhatsapp className="text-white md:text-5xl text-xl" />
        </Link>
    );
}
