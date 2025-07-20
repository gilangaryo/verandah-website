'use client'
import Image from 'next/image'

const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'facilities', label: 'Fasilitas' },
    { id: 'menu', label: 'Menu' },
    { id: 'gallery', label: 'Galeri' },
    { id: 'contact', label: 'Kontak' },
]

export default function Navbar() {
    return (
        <header>
            {/* Atas: Logo & Reservation */}
            <div className="
                bg-background relative flex items-center
                px-6 py-8
                flex-row
                sm:justify-center
            ">
                {/* Logo di kiri HP, di tengah desktop */}
                <a
                    href="#hero"
                    className="
                        flex-shrink-0
                        sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2
                    "
                >
                    <Image
                        src="/images/verandah-logo.png"
                        alt="Verandah Logo"
                        width={190}
                        height={20}
                    />
                </a>

                {/* Spacer di tengah, sembunyi di mobile */}
                <div className="flex-1 hidden sm:block" />

                {/* Reservation di kanan di mobile, kiri di desktop */}
                <a
                    href="https://wa.me/6285143087250"
                    target="_blank"
                    className="
                        text-sm font-sans text-foreground border border-foreground
                        px-4 py-1 rounded hover:bg-foreground hover:text-background transition-colors
                        ml-auto
                        sm:ml-0 sm:mr-auto
                    "
                >
                    Reservation
                </a>
            </div>

            {/* Bawah: Navigasi */}
            <nav className="sticky top-0 z-50 bg-background/90 border-t border-gray-300">
                <div className="max-w-6xl mx-auto">
                    <ul className="flex justify-center gap-8 py-2 text-sm font-sans text-foreground">
                        {navItems.map(({ id, label }) => (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    className="hover:text-primary hover:underline underline-offset-4 transition-colors font-light "
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
}
