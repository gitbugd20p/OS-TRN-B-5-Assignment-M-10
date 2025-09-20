import MyCarousel from "@/components/MyCarousel";
import LatestProduct from "@/components/LatestProduct";
import HeroSection from "@/components/HeroSection";

function Home() {
    return (
        <>
            <MyCarousel />
            <HeroSection />
            <LatestProduct isAll={false} />
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
                <p>Featured section will go here</p>
            </div>
        </>
    );
}

export default Home;
