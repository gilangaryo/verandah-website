import { SiInstagram, SiWhatsapp } from "react-icons/si";
import { HiOutlineMail, HiOutlinePhone, HiOutlineMap } from "react-icons/hi";

export default function Footer() {
    return (
        <footer className="bg-[#F7F5F2] px-4 pt-8 pb-3">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
                {/* LEFT: Logo & Contact */}
                <div className="md:w-1/2 flex flex-col gap-5">
                    {/* Logo */}
                    <div className="mb-2">
                        <span className="text-2xl font-heading text-primary">Verandah</span>
                        <span className="text-xl font-heading text-[#AB8536] ml-2">Glamping</span>
                    </div>
                    {/* Contact Info */}
                    <div className="text-sm text-gray-800 text-left flex flex-col gap-1">
                        <div className="flex items-start gap-2">
                            <HiOutlineMap className="mt-0.5" />
                            <span>
                                Mangli, Kec. Kaliangkrik, <br />
                                Kab. Magelang, Jawa Tengah 56153
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <HiOutlinePhone />
                            <a href="https://wa.me/6285143087250" className="hover:underline">+62 851-4308-7250</a>
                        </div>
                        {/* <div className="flex items-center gap-2">
                            <HiOutlineMail />
                            <a href="mailto:info@verandahglamping.com" className="hover:underline">info@verandahglamping.com</a>
                        </div> */}
                    </div>
                </div>
                {/* RIGHT: Newsletter & Social */}
                <div className="md:w-1/2 flex flex-col gap-7">
                    <div>
                        <div className="font-semibold mb-2">CONNECT WITH US</div>
                        <div className="flex gap-4 justify-center md:justify-start">
                            <a href="https://www.instagram.com/verandahmangli/" target="_blank" rel="noopener noreferrer" className="hover:text-primary"><SiInstagram size={22} /></a>
                            <a href="https://wa.me/6285143087250" target="_blank" rel="noopener noreferrer" className="hover:text-primary"><SiWhatsapp size={22} /></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom */}
            <div className="mt-6 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} Verandah Glamping Villa Mangli. All rights reserved.
            </div>
        </footer>
    );
}

