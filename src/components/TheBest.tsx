import { datosCliente } from "@/constants/clientInfo";
import Image from "next/image";
import Link from "next/link";

export default function TheBest() {
    const pizzas = [
        {
            img: "/pizza1.png",
            name: "Pizza Mexicana",
            desc: "Bacon, Ham, Hunting sausages, Mozzarella Cheese, Tomato sauce",
            price: "$250.00",
        },
        {
            img: "/pizza2.png",
            name: "Pizza Pepperoni",
            desc: "Pepperoni, Mozzarella Cheese, Tomato sauce",
            price: "$250.00",
        },
        {
            img: "/pizza3.png",
            name: "Pizza Champiñón",
            desc: "Mushrooms, Bacon, Mozzarella Cheese, Tomato sauce",
            price: "$250.00",
        },
        {
            img: "/pizza1.png",
            name: "Pizza Mexicana",
            desc: "Bacon, Ham, Hunting sausages, Mozzarella Cheese, Tomato sauce",
            price: "$250.00",
        },
        {
            img: "/pizza2.png",
            name: "Pizza Pepperoni",
            desc: "Pepperoni, Mozzarella Cheese, Tomato sauce",
            price: "$250.00",
        },
        {
            img: "/pizza3.png",
            name: "Pizza Champiñón",
            desc: "Mushrooms, Bacon, Mozzarella Cheese, Tomato sauce",
            price: "$250.00",
        },
        {
            img: "/pizza1.png",
            name: "Pizza Mexicana",
            desc: "Bacon, Ham, Hunting sausages, Mozzarella Cheese, Tomato sauce",
            price: "$250.00",
        },
        {
            img: "/pizza2.png",
            name: "Pizza Pepperoni",
            desc: "Pepperoni, Mozzarella Cheese, Tomato sauce",
            price: "$250.00",
        },
    ];

    return (
        <section id="thebest" className="w-full py-16 px-4 md:px-40">
            <h2 className="text-4xl md:text-6xl font-bold mb-12 text-left sm:text-center uppercase flex items-start">
                La mejor elección
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
                {pizzas.map((pizza, i) => (
                    <div
                        key={i}
                        className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 shadow-lg w-full max-w-xs text-center flex flex-col items-center transition-transform hover:scale-105"
                    >
                        <Image
                            src={pizza.img}
                            alt={pizza.name}
                            width={220}
                            height={220}
                            className="rounded-full"
                        />
                        <h3 className="mt-4 text-xl font-semibold">
                            {pizza.name}
                        </h3>
                        <p className="text-sm text-gray-300 my-3">
                            {pizza.desc}
                        </p>
                        <div className="flex justify-between items-center w-full mt-auto">
                            <Link
                                href={`${
                                    datosCliente.whatsapp +
                                    encodeURIComponent(
                                        `Hola, quiero una ${pizza.name}`
                                    )
                                }`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-red-500 hover:bg-red-600 font-bold py-2 px-6 rounded-full transition duration-300"
                            >
                                Comprar
                            </Link>
                            <span className="font-semibold text-lg">
                                {pizza.price}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
