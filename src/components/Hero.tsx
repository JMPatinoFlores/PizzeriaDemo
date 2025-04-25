import { datosCliente } from "@/constants/clientInfo";
import Card from "@/ui/Card";
import Image from "next/image";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative flex md:h-screen h-[100%] items-center justify-between md:justify-center w-full md:pt-24 pt-28"
        >
            <Image
                src="/pizzalanding.jpg"
                alt="pizza"
                fill
                priority
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent"></div>

            <div className="relative z-10 flex flex-col w-full px-6 md:px-20 lg:px-40">
                {/* Contenido principal */}
                <div className="md:w-1/2">
                    <p className="mb-4 text-lg tracking-wide">
                        Entregas en 30 minutos
                    </p>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl uppercase font-black tracking-wide mb-10">
                        La mejor{" "}
                        <span
                            className="text-red-500 font-extrabold text-[3.5rem] sm:text-[5rem] md:text-[6rem]"
                            style={{
                                textShadow:
                                    "0px 0px 2px white, 0px 0px 5px white, 0px 0px 10px white",
                            }}
                        >
                            PIZZA
                        </span>{" "}
                        al mejor precio
                    </h1>
                    <Link
                        href={`tel:${datosCliente.telefono}`}
                        className="flex mb-4 items-center space-x-2 text-sm"
                    >
                        <FiPhoneCall />
                        <p>{datosCliente.telefono}</p>
                    </Link>
                    <Link
                        href="/files/menu.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-1/3 border-2 border-red-500 bg-red-500 font-bold py-2 px-4 rounded-full flex items-center justify-center transition duration-300 shadow-lg/20 hover:shadow-xl/20 shadow-white"
                    >
                        <p className="mr-2">Ver Menú</p>
                        <MdArrowOutward />
                    </Link>
                </div>

                {/* Cuadros abajo en móvil */}
                <div className="flex md:hidden mt-10 gap-6">
                    {renderCards()}
                </div>
            </div>

            {/* Cuadros fijos abajo a la derecha en pantallas medianas y grandes */}
            <div className="hidden md:flex gap-6 absolute bottom-10 right-10 z-10">
                {renderCards()}
            </div>
        </section>
    );
}

function renderCards() {
    return (
        <>
            <Card title="Entregas en" highlight="30" subtitle="min" />
            <Card title="Reembolso" highlight="Precio" subtitle="Completo" />
            <Card title="Catálogo" highlight="30+" subtitle="pizzas" />
        </>
    );
}
