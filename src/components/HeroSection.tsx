// src/components/ui/HeroSection.tsx
import React from "react";
import { motion } from "framer-motion";
import {Button} from "./ui/button"; // your shadcn button

const HeroSection: React.FC = () => {
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Side - Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <h1 className="text-5xl font-bold text-gray-800">
                        Welcome to <span className="text-blue-600">MyShop</span>
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Discover amazing products at unbeatable prices. Shop
                        your favorite items with ease and enjoy a seamless
                        online experience.
                    </p>
                    <div className="flex gap-4">
                        <Button>Shop Now</Button>
                        <Button variant="outline">Learn More</Button>
                    </div>
                </motion.div>

                {/* Right Side - Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src="https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg"
                        alt="Online Shopping"
                        className="w-full rounded-lg shadow-lg"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
