// src/pages/Contact.tsx

const Contact = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            {/* Hero Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Contact Us
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Have questions or feedback? We’d love to hear from you. Fill
                    out the form below or reach us through our contact details.
                </p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
                    <form className="space-y-4">
                        <div>
                            <label
                                className="block text-gray-700 mb-1"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label
                                className="block text-gray-700 mb-1"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="you@example.com"
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label
                                className="block text-gray-700 mb-1"
                                htmlFor="message"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                placeholder="Your message..."
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-4">
                        Contact Information
                    </h2>
                    <p className="text-gray-700">
                        <strong>Address:</strong> 123 Main Street, Dhaka,
                        Bangladesh
                    </p>
                    <p className="text-gray-700">
                        <strong>Email:</strong> support@myshop.com
                    </p>
                    <p className="text-gray-700">
                        <strong>Phone:</strong> +880 1700 000000
                    </p>
                    <div className="mt-6">
                        <iframe
                            title="MyShop Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902218553308!2d90.39002541497947!3d23.75090348458971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b0725b0c1d%3A0xe5a1f5e7b7e6e4f1!2sDhaka!5e0!3m2!1sen!2sbd!4v1691763769310!5m2!1sen!2sbd"
                            className="w-full h-64 rounded-md border-0"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
