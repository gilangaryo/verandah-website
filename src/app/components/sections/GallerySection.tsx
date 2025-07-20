import Image from 'next/image';

const images = [
    '650748694.jpg',
    '650748353.jpg',
    '650748626.jpg',
    '641421456.jpg',
    '641421620.jpg',
    '650724108.jpg',
    '650724216.jpg',
    '650724232.jpg',
    '650724246.jpg',
    '650748048.jpg',
    '650748531.jpg',
    '650748068.jpg',
    'drone-1.jpg',
    'drone-2.jpg',
    'drone-3.jpg',
];

export default function GallerySection() {
    return (
        <section id="gallery" className="py-10 px-2 sm:px-4 bg-dark mx-2">
            <h2 className="text-2xl sm:text-3xl font-heading text-primary text-center">Galeri</h2>
            <div className="mt-6 sm:mt-8 max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                {images.map(src => (
                    <div
                        key={src}
                        className="relative w-full h-48 sm:h-60 md:h-72 lg:h-80 rounded-sm overflow-hidden
                        shadow-md hover:scale-103 transition-transform duration-300"
                    >
                        <Image
                            src={`/facilities/${src}`}
                            alt={src}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            priority={src === images[0]}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
