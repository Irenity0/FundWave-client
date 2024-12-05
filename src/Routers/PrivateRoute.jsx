import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../components/loading";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({children}) => {
    
    const {user, loading} = useContext(AuthContext);
    if(loading){
        <Loading/>
    }
    if(user && user?.email) {
        return children;
    }
    
    return <Navigate to={"/auth/login"} state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;