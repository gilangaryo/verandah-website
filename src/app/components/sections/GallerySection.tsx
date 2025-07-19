import Image from 'next/image';

const images = ['room-1.png', 'room-2.png', 'room-3.png', 'room-4.png', 'room-3.png', 'room-4.png'];
export default function GallerySection() {
    return (
        <section id="gallery" className="py-16 pb-30 px-4 bg-dark">
            <h2 className="text-3xl font-heading text-primary text-center">Galeri</h2>
            <div className="mt-8 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map(src => (
                    <div key={src} className="relative h-60 w-full">
                        <Image src={`/images/${src}`} alt={src} fill className="object-cover rounded" />
                    </div>
                ))}
            </div>
        </section>
    );
}