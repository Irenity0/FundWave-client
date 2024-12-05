import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../Pages/ErrorPage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/LoginPage";
import Register from "../Pages/RegisterPage";
import Campaigns from "../components/Campaigns";
import MyCampaigns from "../components/MyCampaigns";
import Donations from "../components/Donations";
import AddCampaign from "../components/AddCampaign";
import PrivateRoute from "./PrivateRoute";
import CampaignDetails from '../components/CampaignDetails';


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>,
                loader: () => fetch('http://localhost:5000/campaigns')
            },
            {
                path: "/allcampaigns", 
                element: <Campaigns></Campaigns>,
                loader: () => fetch('http://localhost:5000/campaigns')
            },
            {
                path: "/allcampaigns/:id",
                element: <CampaignDetails></CampaignDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/campaigns/${params.id}`)
            },
            {
                path: "/addcampaign", 
                element: <PrivateRoute><AddCampaign></AddCampaign></PrivateRoute>
            },
            {
                path: "/mycampaign",
                element: <PrivateRoute><MyCampaigns></MyCampaigns></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/campaigns')
            },
            {
                path: "/donations",
                element: <PrivateRoute><Donations></Donations></PrivateRoute>
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
