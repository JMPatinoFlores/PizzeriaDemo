import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "PIZZAJY | La mejor pizza, al mejor precio",
    description:
        "Prueba nuestras pizzas, combos irresistibles y servicio a domicilio. ¡Pide ya tu pizza favorita!",
    keywords:
        "pizzería, pizza mexicana, pizza pepperoni, combos de pizza, pizza a domicilio",
    authors: [{ name: "JessiOwe" }],
    robots: "index, follow",
    openGraph: {
        title: "PIZZAJY",
        description: "¡La pizza que se te antoja, cuando quieras!",
        images: [
            "https://opengraph.b-cdn.net/production/images/b9388535-7c20-4544-bab9-e30bb5531637.jpg?token=chPNDi-quNghOOw2MUmJHteb3630H3IAKiL96vn36wo&height=800&width=1200&expires=33281551997",
        ],
        url: "https://pizzeria-demo-ecru.vercel.app/",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {" "}
                <div className="cursor-default bg-gradient-to-tr from-zinc-900 via-black to-black">
                    <Navbar />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
