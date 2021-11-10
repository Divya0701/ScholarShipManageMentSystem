
import MainNavbar  from "../MainNavbar/MainNavbar"
import ScholarShipStatus from "../ScholarShipStatus/ScholarShipStatus"
import FieldsList from "../FieldsList/FieldsList"
import "./index.css"
const Home=props=>{
    const data_object = props.location.state
    return(<div className="main-home"><MainNavbar data_name={data_object[0]["firstname"]}/><FieldsList data={data_object[0]["fileds_list"]}/><ScholarShipStatus data={data_object[0]["scholar"]}/></div>)
}

export default Home;