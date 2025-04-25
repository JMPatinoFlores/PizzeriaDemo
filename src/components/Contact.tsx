import { datosCliente } from "@/constants/clientInfo";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa6";

export default function Contact() {
    return (
        <section
            id="contact"
            className="flex flex-col items-center py-16 px-4 md:px-40 space-y-16"
        >
            <div className="w-full h-[300px] md:h-[500px] overflow-hidden rounded-4xl shadow-lg">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d941.6710579224058!2d-98.9381171303694!3d19.25258879887427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1bf7ba4d5063%3A0x79697e497287ef43!2sC.%20Pirul%2038%2C%20San%20Miguel%20Xico%2C%2056614%20Valle%20de%20Chalco%20Solidaridad%2C%20M%C3%A9x.!5e0!3m2!1ses-419!2smx!4v1745541994907!5m2!1ses-419!2smx"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de la tienda de pizzería en Valle de Chalco"
                ></iframe>
            </div>
            <div className="flex items-center  bg-white/10 backdrop-blur-sm py-4 px-8 rounded-full text-red-500 text-lg md:text-3xl w-full justify-around">
                <Link
                    href={datosCliente.redes.facebook}
                    target="_blank"
                    aria-label="Ir a la página de Facebook"
                >
                    <FaFacebook />
                </Link>
                <Link
                    href={datosCliente.redes.facebook}
                    target="_blank"
                    aria-label="Ir a la página de Twitter"
                >
                    <FaTwitter />
                </Link>
                <Link
                    href={datosCliente.redes.facebook}
                    target="_blank"
                    aria-label="Ir a la página de Tiktok"
                >
                    <FaTiktok />
                </Link>
                <Link
                    href={datosCliente.redes.facebook}
                    target="_blank"
                    aria-label="Ir a la página de Instagram"
                >
                    <FaInstagram />
                </Link>
            </div>
        </section>
    );
}
