import React from "react";
import { NavLink } from "react-router-dom";

const style = { color: "#FFF", textDecoration: "none" };

const Navbar = () => {
  return (
    <header>
      <div className="inner_header">
        <nav>
          <ul>
            <li>
              <NavLink style={style} to={"/now_playing"}>
                Now Playing
              </NavLink>
            </li>
            <li>
              <NavLink style={style} to={"/popular"}>
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink style={style} to={"/top_rated"}>
                Top Rated
              </NavLink>
            </li>
            <li>
              <NavLink style={style} to={"/upcoming"}>
                Up Coming
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
