import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeLayout = () => {
    return (
            <div className="mx-auto space-y-14 font-raleway">
                <Navbar></Navbar>
                <section className="w-11/12 mx-auto">
                <Outlet></Outlet>
                </section>
                <Footer></Footer>
            </div>
    );
};

export default HomeLayout;