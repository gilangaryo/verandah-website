'use client'
import Image from 'next/image'

const menu = [
    { title: 'Nasi Goreng Ayam', price: 'Rp 35.000', img: '/images/food/nasi-goreng.jpg' },
    { title: 'Sop Iga', price: 'Rp 45.000', img: '/images/food/nasi-goreng.jpg' },
    { title: 'Pisang Goreng', price: 'Rp 20.000', img: '/images/food/nasi-goreng.jpg' },
    { title: 'Kopi Hitam', price: 'Rp 15.000', img: '/images/food/nasi-goreng.jpg' },
    { title: 'Lemon Tea', price: 'Rp 18.000', img: '/images/food/nasi-goreng.jpg' },
    { title: 'Mendoan', price: 'Rp 18.000', img: '/images/food/nasi-goreng.jpg' },
]

export default function MenuSection() {
    return (
        <section id="menu" className="py-16 px-4 text-dark">
            <div className="max-w-4xl mx-auto text-center">
                <p className="font-heading uppercase text-sm text-primary tracking-widest">Menu</p>
                <h2 className="text-3xl font-heading text-primary mt-2">Makanan &amp; Minuman</h2>



            </div>

            <div className='max-w-4xl mx-auto text-center mt-6'>
                <a
                    href="/images/food.png"
                    className="text-sm font-sans text-foreground border border-foreground px-4 py-2 rounded hover:bg-foreground hover:text-background transition-colors"
                >
                    Lihat Foto Buku Menu
                </a>
            </div>
            <div className="mt-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {menu.map((item) => (
                    <div
                        key={item.title}
                        className="bg-card  p-6 rounded-md shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center"
                    >
                        <div className="relative h-40 w-full rounded-lg overflow-hidden">
                            <Image
                                src={item.img}
                                alt={item.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="font-heading text-xl mt-4">{item.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
}
