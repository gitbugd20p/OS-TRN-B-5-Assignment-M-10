// src/pages/About.tsx
const About = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            {/* Hero Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    About Us
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Welcome to{" "}
                    <span className="font-semibold text-blue-600">MyShop</span>,
                    your trusted online marketplace. We provide a wide range of
                    quality products at the best prices, with a focus on
                    customer satisfaction and seamless shopping experience.
                </p>
            </div>

            {/* Mission Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8b25saW5lJTIwc2hvcHBpbmd8fHx8fHwxNjkxNzYxMzA5&ixlib=rb-4.0.3&q=80&w=800"
                    alt="About MyShop"
                    className="w-full rounded-lg shadow-md"
                />

                <div>
                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                    <p className="text-gray-700 mb-4">
                        At MyShop, our mission is simple: to make online
                        shopping easier, faster, and more enjoyable. We are
                        dedicated to providing you with the latest products,
                        competitive prices, and excellent customer service.
                    </p>
                    <p className="text-gray-700">
                        We believe in quality, trust, and transparency —
                        ensuring that every purchase you make with us adds value
                        to your life.
                    </p>
                </div>
            </div>

            {/* Highlights */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="p-6 bg-gray-100 rounded-lg shadow-sm">
                    <h3 className="text-3xl font-bold text-blue-600">500+</h3>
                    <p className="text-gray-600">Products Available</p>
                </div>
                <div className="p-6 bg-gray-100 rounded-lg shadow-sm">
                    <h3 className="text-3xl font-bold text-blue-600">1K+</h3>
                    <p className="text-gray-600">Happy Customers</p>
                </div>
                <div className="p-6 bg-gray-100 rounded-lg shadow-sm">
                    <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
                    <p className="text-gray-600">Customer Support</p>
                </div>
            </div>
        </div>
    );
};

export default About;
