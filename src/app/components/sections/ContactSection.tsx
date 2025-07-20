import { SiInstagram, SiWhatsapp } from "react-icons/si";
export default function ContactSection() {
    return (
        <section id="contact" className="py-16 px-4 text-center">
            <h2 className="text-3xl font-heading text-primary">Kontak & Lokasi</h2>
            <p className="mt-4 text-black">Mangli, Kec. Kaliangkrik, Kab. Magelang, Jawa Tengah 56153</p>
            <div className="mt-6 flex justify-center gap-6">
                <a
                    href="https://wa.me/628XXXXXXXXXX"
                    className="px-6 py-2 bg-primary text-dark rounded-lg font-semibold flex items-center gap-2 
                        transition-all duration-200 hover:bg-background hover:scale-105 shadow-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SiWhatsapp className="w-5 h-5 transition-colors duration-200 group-hover:text-white" />
                    WhatsApp
                </a>
                <a
                    href="https://www.instagram.com/verandahmangli"
                    className="px-6 py-2 bg-primary text-dark rounded-lg font-semibold flex items-center gap-2
                        transition-all duration-200 hover:bg-background  hover:scale-105 shadow-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SiInstagram className="w-5 h-5 transition-colors duration-200 group-hover:text-white" />
                    Instagram
                </a>
            </div>
            <div className="mt-16">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.149537473332!2d110.10057431478353!3d-7.411920479625679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a9b0012fdd4ef%3A0xfd60d7ac1cf90401!2sVerandah%20Glamping%20Villa%20Mangli!5e0!3m2!1sen!2sid!4v1687961234567!5m2!1sen!2sid"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </section>
    );
}
