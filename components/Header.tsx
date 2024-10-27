

// components/Header.js
import Link from "next/link";

export default function Header() {
    return (
        <header className="p-3 bg-pink-800 px-7">
            <nav className="space-x-7 text-lg font-semibold">
                <Link className="hover:text-white-300" href="/">Home</Link>
                <Link className="hover:text-white-300" href="/about">About</Link>
                <Link className="hover:text-white-300" href="/contact">Contact</Link>
            </nav>
        </header>
    );
}


