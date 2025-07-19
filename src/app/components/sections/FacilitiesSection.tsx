'use client'
import Image from 'next/image'

const accommodations = [
    {
        id: 'keluarga',
        title: 'Kamar Keluarga',
        image: '/images/room-1.png',
        description: `Rasakan kenyamanan desain khas Bali di Kamar Keluarga kami yang dirancang elegan. Menghadap hutan hijau yang tenang, setiap kamar menyediakan ruang luas untuk berkumpul bersama keluarga. Nikmati fasilitas bathtub hangat, dan panorama lembah dari balkon pribadi yang menenangkan, menciptakan kenangan tak terlupakan.`,
    },
    {
        id: 'vila',
        title: 'Villa',
        image: '/images/villa-1.png',
        description: `Nikmati kemewahan dan ketenangan di Vila kami yang terinspirasi gaya Bali, tersedia dalam konfigurasi satu atau dua kamar tidur. Setiap vila dilengkapi kolam renang pribadi, menawarkan pemandangan hutan tropis dan suara alam yang menenangkan. Sempurna untuk liburan santai, vila ini menggabungkan kenyamanan modern dengan nuansa alami.`,
    },
]

export default function AccommodationSection() {
    return (
        <section id="facilities" className="py-16 px-4 bg-accent text-foreground">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {accommodations.map((item) => (
                    <div key={item.id} className="space-y-4">
                        <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="font-heading text-2xl">{item.title}</h3>
                        <p className="font-sans text-sm leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
