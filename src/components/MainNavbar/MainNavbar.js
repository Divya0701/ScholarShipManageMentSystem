import {MdLogin} from "react-icons/md";
import {MdSpaceDashboard} from "react-icons/md"
import {MdMonetizationOn} from "react-icons/md"
import "./index.css"

const MainNavbar = props => {

  const {data_name,getProp,getDashBoard, getWithdraw} = props

  const goback=()=>{
   getProp()
  }
  const goDash=()=>{
      getDashBoard()
  }

  const goWith=()=>{
    getWithdraw()
  }

  return(
    <div  className="main-navbar-container">
      <div className="menu-profile">
        <img src="https://res.cloudinary.com/dx4ela47a/image/upload/v1636366732/min-project-2/er_xzqayj.jpg" alt="sme" className="profilePic"/>
        <h1 className="headings">Hi, {data_name}</h1>
      </div>
      <div className="dash" onClick={goDash}>
        <MdSpaceDashboard className="icon"/>
        <h1 className="headings">dashboard</h1>
      </div>
      <div className="dash" onClick={goWith}>
        <MdMonetizationOn className="icon"/>
        <h1 className="headings">withdrawal</h1>
      </div>
      <div className="menuItem-logout" onClick={goback}> 
        <MdLogin className="icon"/>
      </div>
    </div>
  );
}


export default MainNavbar;