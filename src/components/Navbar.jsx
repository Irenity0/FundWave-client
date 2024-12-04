import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider"; // Update the path based on your project structure
import logo from "../assets/logo.png";
import ThemeToggle from "./ThemeToggle";
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [mongoUser, setMongoUser] = useState(null);

  useEffect(() => {
      if (user?.email) {
          fetch(`http://localhost:5000/users/${user.email}`)
              .then(res => res.json())
              .then(data => setMongoUser(data))
              .catch(error => console.error("Error fetching MongoDB user:", error));
      }
  }, [user]);

  const handleLogout = () => {
      logOut()
          .then(() => console.log("Logged out successfully"))
          .catch((error) => console.error("Error logging out:", error));
  };

  const avatarURL = user?.photoURL || mongoUser?.photo || "https://via.placeholder.com/150";
  const displayName = user?.displayName || mongoUser?.name || "User";


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
            className="menu menu-sm dropdown-content z-10 bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            <li><NavLink to={"/"}>Home</NavLink></li> 
            <li><NavLink to={"/allcampaigns"}>All Campaigns</NavLink></li> 
            <li><NavLink to={"/addcampaign"}>Add New Campaign</NavLink></li> 
            <li><NavLink to={"/mycampaign"}>My Campaign</NavLink></li> 
            <li><NavLink to={"/donations"}>My Donations</NavLink></li> 
            {!user ? (
              <>
                <li><NavLink to={"/auth/login"}>Login</NavLink></li>
                <li><NavLink to={"/auth/register"}>Register</NavLink></li>
              </>
            ) : (
              <>
                <li><button className="md:hidden" onClick={handleLogout}>Log out</button></li>
              </>
            )}
            <li className="md:hidden"><ThemeToggle /></li>
          </ul>
        </div>
        <div className="flex justify-between items-center flex-row">
          <div><img className="w-16 h-16 hidden md:block md:animate-spin" src={logo} alt="" /></div>
          <Link to={"/"} className="btn btn-ghost text-2xl font-bold text-primary hover:bg-neutral"> FundWave</Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu space-x-2 menu-horizontal px-1">
          <li><NavLink to={"/"}>Home</NavLink></li> 
          <li><NavLink to={"/allcampaigns"}>All Campaigns</NavLink></li> 
          <li><NavLink to={"/addcampaign"}>Add New Campaign</NavLink></li> 
          <li><NavLink to={"/mycampaign"}>My Campaign</NavLink></li> 
          <li><NavLink to={"/donations"}>My Donations</NavLink></li>  
        </ul>
      </div>
      <div className="navbar-end hidden md:flex space-x-4 items-center">
        
          {!user ? (
            <>
            <Link to={"/auth/login"} className="btn border-2 border-primary text-primary hover:bg-neutral hover:border-primary mr-4">Login</Link> 
            <Link to={"/auth/register"} className="btn border-2 border-primary text-primary hover:bg-neutral hover:border-primary mr-4">Register</Link>
            </>
          ) : (
            <>
                <div className="avatar">
                  <div data-tooltip-id="my-tooltip" data-tooltip-content={displayName} className="w-14 h-14 rounded-full">
                    <img src={avatarURL} />
                  </div>
                </div>
              <button className="btn border-2 border-primary text-primary hover:bg-neutral hover:border-primary ml-4" onClick={handleLogout}>Log out</button>
            </>
          )}
          <ThemeToggle />
          <Tooltip id="my-tooltip" />
      </div>
    </div>
  );
};

export default Navbar;
