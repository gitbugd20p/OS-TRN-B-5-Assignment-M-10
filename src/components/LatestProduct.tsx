// src/components/LatestProduct.tsx
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { productData } from "@/api/ApiRequest";
import type { Product } from "@/type";

function LatestProduct({ isAll }: { isAll: boolean }) {
    const [latestProducts, setLatestProducts] = useState<Product[]>([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLatestProducts = async () => {
            try {
                const res = await productData();
                // ✅ take only first 4
                let latest;
                if (isAll) {
                    latest = res.data.results;
                } else {
                    latest = res.data.results.slice(0, 4);
                }
                setLatestProducts(latest);
            } catch (error) {
                console.error("Error fetching latest products:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchLatestProducts();
    }, [isAll]);

    if (loading) {
        return <div className="container mx-auto p-8">Loading...</div>;
    }

    if (!latestProducts) {
        return <div className="container mx-auto p-8">Product not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6">Latest Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {latestProducts.map((product) => (
                    <ProductItem key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default LatestProduct;
