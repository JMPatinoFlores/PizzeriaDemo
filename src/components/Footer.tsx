import { datosCliente } from "@/constants/clientInfo";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full flex justify-between md:flex-row flex-col px-6 md:px-40 items-center h-24 text-center py-2">
            <Link
                href="#hero"
                className="text-2xl font-bold tracking-wide text-shadow-lg"
            >
                <span className="text-red-500 underline underline-offset-4">
                    PIZZA
                </span>
                JY
            </Link>
            <p className="text-sm">
                © {new Date().getFullYear()} {datosCliente.empresa}. Todos los
                derechos reservados. Hecho con ❤️ por JessiOwe.
            </p>
        </div>
    );
}
