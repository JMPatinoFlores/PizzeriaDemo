"use client";

import { Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FlipCard } from "@/ui/FlipCard";

export default function Combos() {
    const combos = [
        {
            img: "/combo1.png",
            name: "3 Pizzas por $500.00",
            desc: "Escoge 3 pizzas y solo paga  $500",
            details: "Escoge 3 pizzas de la especialidad que prefieras.",
        },
        {
            img: "/combo2.png",
            name: "3 Pizzas por $500.00",
            desc: "Escoge 3 pizzas y solo paga  $500",
            details: "Escoge 3 pizzas de la especialidad que prefieras.",
        },
        {
            img: "/combo3.png",
            name: "3 Pizzas por $500.00",
            desc: "Escoge 3 pizzas y solo paga  $500",
            details: "Escoge 3 pizzas de la especialidad que prefieras.",
        },
        {
            img: "/combo1.png",
            name: "3 Pizzas por $500.00",
            desc: "Escoge 3 pizzas y solo paga  $500",
            details: "Escoge 3 pizzas de la especialidad que prefieras.",
        },
        {
            img: "/combo2.png",
            name: "3 Pizzas por $500.00",
            desc: "Escoge 3 pizzas y solo paga  $500",
            details: "Escoge 3 pizzas de la especialidad que prefieras.",
        },
        {
            img: "/combo3.png",
            name: "3 Pizzas por $500.00",
            desc: "Escoge 3 pizzas y solo paga  $500",
            details: "Escoge 3 pizzas de la especialidad que prefieras.",
        },
    ];

    return (
        <section id="combos" className="w-full py-16 px-4 md:px-40">
            <h2 className="text-4xl md:text-6xl font-bold mb-12 md:text-left text-center uppercase">
                Combos
            </h2>
            <div className="w-full mx-auto">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                        1440: { slidesPerView: 5 },
                    }}
                    loop={true}
                    className="w-full mx-auto"
                >
                    {combos.map((combo, i) => (
                        <SwiperSlide key={i}>
                            <FlipCard combo={combo} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
