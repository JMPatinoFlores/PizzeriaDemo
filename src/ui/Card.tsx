export default function Card({
    title,
    highlight,
    subtitle,
}: {
    title: string;
    highlight: string;
    subtitle: string;
}) {
    return (
        <div className="flex flex-col items-center">
            <p className="uppercase text-sm tracking-wide mb-1">{title}</p>
            <div className="rounded-2xl flex flex-col items-center justify-center font-extrabold md:text-lg md:h-[115px] h-[100px] w-[100px] md:w-[115px] bg-white/10 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <span className="text-red-500">{highlight}</span>
                <p>{subtitle}</p>
            </div>
        </div>
    );
}
