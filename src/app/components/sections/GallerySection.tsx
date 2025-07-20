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
];
export default function GallerySection() {
    return (
        <section id="gallery" className="py-16 pb-30 px-4 bg-dark">
            <h2 className="text-3xl font-heading text-primary text-center">Galeri</h2>
            <div className="mt-8 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map(src => (
                    <div key={src} className="relative h-80 w-full">
                        <Image src={`/facilities/${src}`} alt={src} fill className="object-cover rounded" />
                    </div>
                ))}
            </div>
        </section>
    );
}