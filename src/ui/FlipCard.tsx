import Image from "next/image";
import { useState } from "react";
import { MdArrowBack, MdArrowOutward } from "react-icons/md";

interface Combo {
    img: string;
    name: string;
    desc: string;
    details: string;
}

export const FlipCard = ({ combo }: { combo: Combo }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="w-full max-w-xs h-[420px] mx-auto perspective">
            <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                    flipped ? "rotate-y-180" : ""
                }`}
            >
                {/* FRONT */}
                <div className="absolute w-full h-full bg-neutral-900 rounded-3xl shadow-lg p-6 flex flex-col items-center text-white backface-hidden">
                    <Image
                        src={combo.img}
                        alt={combo.name}
                        width={200}
                        height={200}
                        className="rounded-full mb-4"
                    />
                    <h3 className="text-xl font-semibold text-center">
                        {combo.name}
                    </h3>
                    <p className="text-sm text-gray-300 mt-2 text-center">
                        {combo.desc}
                    </p>
                    <button
                        onClick={() => setFlipped(true)}
                        className="mt-auto w-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold py-2 px-4 rounded-full flex items-center justify-center gap-2 cursor-pointer"
                    >
                        Detalles <MdArrowOutward />
                    </button>
                </div>

                {/* BACK */}
                <div className="absolute w-full h-full bg-neutral-800 rounded-3xl shadow-lg p-6 flex flex-col items-center text-white rotate-y-180 backface-hidden">
                    <h4 className="text-xl font-bold text-center mb-4">
                        Detalles del combo
                    </h4>
                    <p className="text-sm text-gray-300 text-center">
                        {combo.details}
                    </p>
                    <button
                        onClick={() => setFlipped(false)}
                        className="mt-auto w-full border-2 border-white text-white hover:bg-white hover:text-black font-bold py-2 px-4 rounded-full flex items-center justify-center gap-2"
                    >
                        Volver <MdArrowBack />
                    </button>
                </div>
            </div>
        </div>
    );
};
