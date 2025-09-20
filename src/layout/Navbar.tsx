// src/layout/Navbar.tsx
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import eLogo from "/e-com-title-icon1.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2">
                    <img src={eLogo} alt="MyShop Logo" className="h-8 w-8" />
                    <span className="text-2xl font-bold text-blue-600">
                        MyShop
                    </span>
                </Link>

                {/* Desktop Links */}
                <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
                    <li>
                        <Link to="/products" className="hover:text-blue-600">
                            All Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/latest" className="hover:text-blue-600">
                            Latest
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-blue-600">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-blue-600">
                            Contacts
                        </Link>
                    </li>
                </ul>

                {/* Right Side (Desktop) */}
                <div className="hidden md:flex items-center space-x-4">
                    {/* Cart */}
                    <Link
                        to="/cart"
                        className="relative p-2 rounded-full hover:bg-gray-100"
                    >
                        <ShoppingCart className="w-6 h-6 text-gray-700" />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                            0
                        </span>
                    </Link>

                    {/* Login */}
                    <Link
                        to="/login"
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Login
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden p-2 rounded-md hover:bg-gray-100"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t shadow-md">
                    <ul className="flex flex-col space-y-3 px-4 py-4 font-medium text-gray-700">
                        <li>
                            <Link
                                to="/products"
                                onClick={() => setIsOpen(false)}
                                className="block hover:text-blue-600"
                            >
                                All Products
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/latest"
                                onClick={() => setIsOpen(false)}
                                className="block hover:text-blue-600"
                            >
                                Latest
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                onClick={() => setIsOpen(false)}
                                className="block hover:text-blue-600"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="block hover:text-blue-600"
                            >
                                Contacts
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/cart"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center hover:text-blue-600"
                            >
                                <ShoppingCart className="w-5 h-5 mr-2" /> Cart
                                (0)
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/login"
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 bg-blue-600 text-white rounded-md text-center hover:bg-blue-700"
                            >
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
