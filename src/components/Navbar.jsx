import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png"

const Navbar = () => {


    return (
        <div className="navbar bg-base font-raleway text-primary w-11/12 mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><NavLink to={"/"}>Home</NavLink></li> 
                <li><NavLink to={"/lessons"}>Start_Learning</NavLink></li> 
                <li><NavLink to={"/tutorial"}>Tutorials</NavLink></li> 
                <li><NavLink to={"/aboutus"}>About_Us</NavLink></li> 
              </ul>
            </div>
            <div className="flex items-center">
            <span className=""><img className="w-16 h-16" src={logo} alt="" /></span>
            <Link to={"/"} className="btn btn-ghost text-2xl font-bold text-primary hover:bg-neutral"> FundWave</Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><NavLink to={"/"}>Home</NavLink></li> 
                <li><NavLink to={"/lessons"}>Start_Learning</NavLink></li> 
                <li><NavLink to={"/tutorial"}>Tutorials</NavLink></li> 
                <li><NavLink to={"/aboutus"}>About_Us</NavLink></li> 
            </ul>
          </div>
          <div className="navbar-end">
            <p className="text-primary mr-4 border-b-2 border-dashed border-primary">Welcome!</p>
            
            <Link to={"/auth/login"} className="btn border-2 border-primary text-primary hover:bg-neutral hover:border-primary">Login</Link>
          </div>
        </div>
    );
};

export default Navbar;