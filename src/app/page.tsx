import About from "@/components/About";
import Combos from "@/components/Combos";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import TheBest from "@/components/TheBest";
import WhatsAppButton from "@/ui/WhatsAppButton";

export default function Home() {
    return (
        <div>
            <Hero />
            <TheBest />
            <Combos />
            <About />
            <Contact />
            <WhatsAppButton />
        </div>
    );
}
