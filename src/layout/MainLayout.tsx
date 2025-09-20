import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function MainLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

export default MainLayout;
