// src/layout/Footer.tsx
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left - Logo */}
                <div>
                    <Link to="/" className="text-2xl font-bold text-white">
                        MyShop
                    </Link>
                    <p className="mt-2 text-sm text-gray-400">
                        Your one-stop shop for everything you need.
                    </p>
                </div>

                {/* Middle - Services/Links */}
                <div>
                    <h3 className="text-white font-semibold mb-3">
                        Our Services
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link to="/products" className="hover:text-white">
                                All Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/latest" className="hover:text-white">
                                Latest Deals
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-white">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-white">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Right - Social Media */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="hover:text-white">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="hover:text-white">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="hover:text-white">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom - Copyright */}
            <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
                © {new Date().getFullYear()} MyShop. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
