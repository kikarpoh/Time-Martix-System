import React, { useState } from "react";
import { BiHomeCircle } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { IconsDiv, Navbar } from "../../Style/Sidebar_Style/Sidebar.style";

//* All Types
//! NavLinks Types
type NavLinksType = {
  Name: string;
  Path: string;
  Icons: React.ReactNode | JSX.Element;
}[];

type SidebarPropsType = {
  ToggleTheme: () => void;
};
//! Sidebar
const Sidebar: React.FC<SidebarPropsType> = ({ ToggleTheme }) => {
  //! IconsHover State
  const [IconsHover, setIconsHover] = useState(false);
  const ChangeTheme = () => {
    ToggleTheme();
  };
  const NavLinks: NavLinksType = [
    {
      Name: "Home",
      Path: "/",
      Icons: <BiHomeCircle />,
    },
    {
      Name: "Settings",
      Path: "/settings",
      Icons: <FiSettings />,
    },
  ];
  return (
    <Navbar>
      <ul>
        <IconContext.Provider value={{ size: "20px" }}>
          {NavLinks.map(({ Name, Path, Icons }, key) => {
            return (
              <li
                key={key}
                onMouseEnter={() => setIconsHover(!IconsHover)}
                onMouseLeave={() => setIconsHover(!IconsHover)}
              >
                <Link to={Path}>
                  <IconsDiv>{Icons}</IconsDiv>
                  <span>{Name}</span>
                </Link>
              </li>
            );
          })}
          <button onClick={() => ChangeTheme()}>Change The THeme</button>
        </IconContext.Provider>
      </ul>
    </Navbar>
  );
};

export default Sidebar;
