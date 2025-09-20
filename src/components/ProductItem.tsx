import { Link } from "react-router-dom";
import type { Product } from "@/type";

function ProductItem({ product }: { product: Product }) {
    return (
        <div className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
            {/* Product Image */}
            <Link to={`/products/id/${product._id}`}>
                <img
                    src={product.photos?.[0] || "https://placehold.co/400"}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-md mb-3"
                />
            </Link>

            {/* Product Info */}
            <h3 className="font-semibold text-lg text-gray-800 line-clamp-1">
                {product.title}
            </h3>
            <p className="flex gap-2 items-center text-sm text-gray-500">
                <img
                    src={
                        product.categories?.[0].icon || "https://placehold.co/400"
                    }
                    alt={product.title}
                    className="w-4 h-4 object-cover rounded-md"
                />
                <span>{product.brand?.title}</span>
            </p>

            {/* Price */}
            <p className="mt-2 text-blue-600 font-bold">
               Price: ৳ {product.current_price?.toLocaleString()}
            </p>
        </div>
    );
}

export default ProductItem;
