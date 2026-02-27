import Header from "../UI/Header";
import Footer from "../UI/Footer";
import { Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";

const AppLayout = () =>{
    return(
        <div>
            
                <Header />

                <Suspense fallback={<div className="text-white text-center mt-20">Loading...</div>}>
                    <Outlet />
                </Suspense> 
                
                <Footer />
            
        </div>
    )
}

export default AppLayout;