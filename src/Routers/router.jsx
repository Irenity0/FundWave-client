import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../Pages/ErrorPage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/LoginPage";
import Register from "../Pages/RegisterPage";
import Campaigns from "../components/Campaigns";
import Campaign from "../components/AddCampaign";
import Donations from "../components/Donations";
import AddCampaign from "../components/AddCampaign";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "/campaigns", 
                element: <Campaigns></Campaigns> 
            },
            {
                path: "/addcampaign", 
                element: <Campaign></Campaign> 
            },
            {
                path: "/mycampaign",
                element: <AddCampaign></AddCampaign>
            },
            {
                path: "/donations",
                element: <Donations></Donations>
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;
