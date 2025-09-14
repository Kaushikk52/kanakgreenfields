import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaPhoneAlt,
    FaEnvelope,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import whiteLogo from "../assets/KGFLogoWhite.png"; // replace with your actual logo path

export default function Footer() {
    return (
        <footer className="bg-[#457f5e] text-white pt-12 pb-6 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/40 pb-10">
                {/* Logo & Tagline */}
                <div className="col-span-1">
                    <img
                        src={whiteLogo}
                        alt="Aranyam Greens"
                        className="h-32 "
                    />
                    <p className="text-sm leading-relaxed text-gray-300">
                        A serene nature-aligned residential community nestled in
                        the Kumaon hills. Experience sustainable luxury living.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li>
                            <a
                                href="/"
                                className="hover:text-green-400 transition"
                            >
                                Home
                            </a>
                        </li>
                        
                        <li>
                            <a
                                href="/team"
                                className="hover:text-green-400 transition"
                            >
                                Team
                            </a>
                        </li>
                        <li>
                            <a
                                href="/explore"
                                className="hover:text-green-400 transition"
                            >
                                Aranyam
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <ul className="space-y-3 text-gray-300 text-sm">
                        <li className="flex items-center gap-2">
                            <FaPhoneAlt /> +91 6399010100
                        </li>
                        <li className="flex items-center gap-2">
                            <FaEnvelope /> contact@aranyamgreens.com
                        </li>
                        <li className="flex items-start gap-2">
                            <HiLocationMarker size={32} />
                            Village – Galla, Tehsil – Bhimtal, District –
                            Nainital, Uttarakhand, India – 263136
                        </li>
                    </ul>
                </div>

                {/* Company Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Company</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li>
                            <a
                                href="/terms"
                                className="hover:text-green-400 transition"
                            >
                                Terms & Conditions
                            </a>
                        </li>
                        <li>
                            <a
                                href="/privacy"
                                className="hover:text-green-400 transition"
                            >
                                Privacy Policy
                            </a>
                        </li>
                        {/* <li>
                            <a
                                href="/careers"
                                className="hover:text-green-400 transition"
                            >
                                Careers
                            </a>
                        </li>
                        <li>
                            <a
                                href="/partners"
                                className="hover:text-green-400 transition"
                            >
                                Partners
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>

            {/* Bottom */}
            <div className="text-center text-white/40 text-sm pt-6">
                © {new Date().getFullYear()} KGF. All rights
                reserved.
            </div>
        </footer>
    );
}
