import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import AllProducts from "./pages/AllProducts";
import LatestProduct from "./components/LatestProduct";
import ProductDetails from "./components/ProductDetails";
import Contact from "./pages/Contact";

function App() {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/products" element={<AllProducts />} />
                    <Route
                        path="/latest"
                        element={<LatestProduct isAll={true} />}
                    />
                    <Route
                        path="/products/id/:id"
                        element={<ProductDetails />}
                    />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
}

export default App;
