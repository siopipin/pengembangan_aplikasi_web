import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      {/* header */}
      <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>FaQ</li>
        </ul>
      </nav>
      {/* body */}
      <Outlet />
      
      {/* footer */}
      <footer>Mikroskil</footer>
    </div>
  );
}

export default Layout;
