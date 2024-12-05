import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/loading";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();  // To remember the previous route

    if (loading) {
        return <Loading />; // Display a loading component while the user state is being determined
    }

    if (user && user?.email) {
        return children; // Allow access to the route if the user is authenticated
    }

    // Redirect to login if not authenticated, with the current path saved in state
    return <Navigate to="/auth/login" state={{ from: location }} />;
};

export default PrivateRoute;
