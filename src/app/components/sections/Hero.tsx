import Image from 'next/image';
export default function Hero() {
    return (
        <div id="hero" className="relative h-[80vh] w-full">
            <Image src="/section-hero.jpg" alt="Hero" fill className="object-cover brightness-75" />

        </div>
    );
}