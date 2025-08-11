"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { match } from "path-to-regexp";

export function Header() {
    const arr = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "Explore",
            link: "/explore",
        },
        {
            name: "Profile",
            link: "/profile",
        },
    ];

    // url путь
    const pathName = usePathname();

    console.log("pathName: ", pathName);

    return (
        <header className="border-b px-6 py-4 flex items-center justify-between bg-black/70 mb-4">
            <Link href="/">
                <Image src="/window.svg" alt="Vercel Logo" width={28} height={24} />
            </Link>

            {/* Компонент Menu - можно разбить на MenuItem */}
            <nav className="flex gap-6 text-white/60">
                {arr.map((item) => (
                    <Link key={item.link} href={item.link} className={!!match(item.link)(pathName) ? "text-white" : ""}>
                        {item.name}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
