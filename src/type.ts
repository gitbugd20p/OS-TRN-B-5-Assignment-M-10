export type Slide = {
    _id: string;
    photo_url: string;
    description: string;
    product: string | null;
    brand: string | null;
    category: string | null;
    createdAt: string;
    updatedAt: string;
    __v: number;
};

export type Product = {
    _id: string;
    title: string;
    slug: string;
    brand?: {
        _id: string;
        title: string;
        slug: string;
        icon?: string;
    };
    categories?: {
        _id: string;
        title: string;
        slug: string;
        icon?: string;
    }[];
    description?: string;
    photos: string[];
    current_price: number;
    quantity: number;
    in_cart?: boolean;
    in_wishlist?: boolean;
    createdAt: string;
    updatedAt: string;
};
