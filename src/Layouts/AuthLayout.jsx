import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AuthLayout = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className="w-11/12 mx-auto space-y-14 font-parkinsans">
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
        </>
    );
};

export default AuthLayout;