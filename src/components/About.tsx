import { datosCliente } from "@/constants/clientInfo";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

export default function About() {
    return (
        <section
            id="about"
            className="w-full items-center py-16 px-4 md:px-40 flex md:flex-row flex-col"
        >
            <div className="flex-1 px-12">
                <h2 className="text-4xl md:text-6xl font-bold mb-12 text-left uppercase">
                    La magia detrás de nuestra{" "}
                    <span className="text-red-500">pizza</span>
                </h2>
                <p className="text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Reprehenderit possimus laboriosam impedit alias quisquam
                    eligendi optio dolorum, harum minima esse ab illum et
                    dolorem officia eaque culpa aut a obcaecati.
                </p>
                <br />
                <p className="text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Reprehenderit possimus laboriosam impedit alias quisquam
                    eligendi optio dolorum, harum minima esse ab illum et
                    dolorem officia eaque culpa aut a obcaecati.
                </p>

                <div className="w-full grid grid-cols-2 gap-2 mt-12 text-sm md:text-base">
                    <Link
                        href="/files/menu.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full border-2 border-red-500 bg-red-500 font-bold md:py-2 md:px-4 py-1 px-2 rounded-full flex items-center justify-center transition duration-300 shadow-lg/20 hover:shadow-xl/20 shadow-white"
                    >
                        <p className="mr-2">Menú</p>
                        <MdArrowOutward />
                    </Link>
                    <Link
                        href={`${datosCliente.whatsapp}¡Hola!%20Quiero%20una%20página%20web.`}
                        className="w-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold md:py-2 md:px-4 py-1 px-2 rounded-full flex items-center justify-center transition duration-300"
                    >
                        <p className="mr-2">Hacer un pedido</p>
                        <FaWhatsapp />
                    </Link>
                </div>
            </div>
            <Image
                src="/cocinarpizza.jpg"
                alt="Cocinar pizza"
                width={500}
                height={500}
                className="flex-1 m-8 object-cover rounded-4xl"
            />
        </section>
    );
}
