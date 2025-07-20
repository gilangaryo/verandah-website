export default function MenuSection() {
    return (
        <section id="menu" className="py-20 px-4 text-dark">
            <div className="max-w-4xl mx-auto text-center">
                <p className="font-heading uppercase text-sm text-primary tracking-widest">Menu</p>
                <h2 className="text-3xl font-heading text-primary mt-2">Makanan &amp; Minuman</h2>



            </div>

            <div className='max-w-4xl mx-auto text-center mt-6'>
                <a
                    href="/images/food.png"
                    className="text-sm font-sans text-foreground border border-foreground px-4 py-2 rounded hover:bg-foreground hover:text-background transition-colors"
                >
                    Lihat Buku Menu
                </a>
            </div>

        </section>
    )
}
