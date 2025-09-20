// src/pages/ProductDetails.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "@/type";
import { productDetailsData } from "@/api/ApiRequest";

function ProductDetails() {
    const { id } = useParams<{ id: string }>();

    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const fetchProduct = async () => {
            try {
                const res = await productDetailsData(id);
                setProduct(res.data); // ✅ single product comes in `data`
                console.log(res.data);
            } catch (err) {
                console.error("Error fetching product:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) {
        return <div className="container mx-auto p-8">Loading...</div>;
    }

    if (!product) {
        return <div className="container mx-auto p-8">Product not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left - Image */}
            <div>
                <img
                    src={
                        product.photos?.[0] || "https://via.placeholder.com/600"
                    }
                    alt={product.title}
                    className="w-full h-[400px] object-cover rounded-md shadow"
                />
            </div>

            {/* Right - Details */}
            <div>
                <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

                {/* Brand */}
                <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Brand:</span>{" "}
                    {product.brand?.title || "N/A"}
                </p>

                {/* Categories */}
                <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Category:</span>{" "}
                    {product.categories?.map((cat) => cat.title).join(", ") ||
                        "N/A"}
                </p>

                {/* Price */}
                <p className="text-2xl text-blue-600 font-semibold mb-4">
                    ৳ {product.current_price?.toLocaleString()}
                </p>

                {/* Quantity */}
                <p className="text-gray-700 mb-4">
                    <span className="font-semibold">In Stock:</span>{" "}
                    {product.quantity > 0 ? product.quantity : "Out of stock"}
                </p>

                {/* Description */}
                <p className="text-gray-700 mb-6">{product.description}</p>

                {/* Actions */}
                <div className="flex gap-4">
                    <button
                        className="flex-1 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
                        disabled={product.quantity === 0}
                    >
                        {product.quantity > 0 ? "Add to Cart" : "Out of Stock"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
