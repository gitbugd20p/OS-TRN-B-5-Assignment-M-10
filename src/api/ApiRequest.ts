import axios from "axios";

const BaseUrl = "https://ecom-rs8e.onrender.com/api";

export async function slideData() {
    const result = await axios.get(BaseUrl + "/slides");
    if (result.status === 200) {
        return result.data;
    } else {
        return [];
    }
}

export async function productData() {
    const result = await axios.get(BaseUrl + "/products");
    if (result.status === 200) {
        return result.data;
    } else {
        return [];
    }
}

export async function productDetailsData(id: string) {
    const result = await axios.get(BaseUrl + `/products/id/${id}`);
    if (result.status === 200) {
        return result.data;
    } else {
        return [];
    }
}
