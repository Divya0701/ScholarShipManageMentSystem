import { ProSidebar, Menu, MenuItem} from 'react-pro-sidebar';
import {MdDashboard} from "react-icons/md";
import {CgProfile} from "react-icons/cg";
import {RiSettings4Fill} from "react-icons/ri";
import 'react-pro-sidebar/dist/css/styles.css';
import "./index.css"

const MainNavbar = props => {
  const {data_name} = props
  return(
    <div  className="main-navbar-container">
      <ProSidebar className="sidebar" width="15vw">
        <Menu iconShape="square" >
            <MenuItem>
            <div className="menu-profile">
              <img src="https://res.cloudinary.com/dx4ela47a/image/upload/v1636366732/min-project-2/er_xzqayj.jpg" alt="sme" className="profilePic"/>
              <h1>Hi, {data_name}</h1>
            </div>
            </MenuItem>
            {/* <MenuItem icon={<MdDashboard className="icon"/>}>
              <div className="menuItem"> 
                <h1 className="headings">Dashboard</h1>
              </div>
            </MenuItem>
            <MenuItem icon={<RiSettings4Fill className="icon"/>}>
              <div className="menuItem">
                <h1 className="headings">Settings</h1>
              </div>
            </MenuItem> */}
        </Menu>
  </ProSidebar>
    </div>
  );
}


export default MainNavbar;