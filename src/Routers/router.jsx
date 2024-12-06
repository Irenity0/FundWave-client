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
import UpdateCampaign from "../components/UpdateCampaign";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>,
                loader: () => fetch('https://assignment-10-server-eight-iota.vercel.app/campaigns')
            },
            {
                path: "/allcampaigns", 
                element: <Campaigns></Campaigns>,
                loader: () => fetch('https://assignment-10-server-eight-iota.vercel.app/campaigns')
            },
            {
                path: "/allcampaigns/:id",
                element: <PrivateRoute><CampaignDetails></CampaignDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-10-server-eight-iota.vercel.app/campaigns/${params.id}`)
            },
            {
                path: "/addcampaign", 
                element: <PrivateRoute><AddCampaign></AddCampaign></PrivateRoute>
            },
            {
                path: "/mycampaign",
                element: <PrivateRoute><MyCampaigns></MyCampaigns></PrivateRoute>,
                loader: () => fetch('https://assignment-10-server-eight-iota.vercel.app/campaigns')
            },
            {
                path: "/donations",
                element: <PrivateRoute><Donations></Donations></PrivateRoute>,
                loader: () => fetch('https://assignment-10-server-eight-iota.vercel.app/donations')
            },
            {
                path: '/updatecampaign/:id',
                element: <PrivateRoute><UpdateCampaign></UpdateCampaign></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignment-10-server-eight-iota.vercel.app/campaigns/${params.id}`)
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
