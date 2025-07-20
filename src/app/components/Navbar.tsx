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
        <header >
            <div className="bg-background relative flex items-center px-6 py-8">
                <div className="flex-1" />

                <a
                    href="https://wa.me/628XXXXXXXXXX"
                    target="_blank"
                    className="text-sm font-sans text-foreground border border-foreground px-4 py-1 rounded hover:bg-foreground hover:text-background transition-colors"
                >
                    Reservation
                </a>

                <a
                    href="#hero"
                    className="absolute left-1/2 transform -translate-x-1/2"
                >
                    <Image
                        src="/images/verandah-logo.png"
                        alt="Verandah Logo"
                        width={190}
                        height={20}
                    />
                </a>
            </div>


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
