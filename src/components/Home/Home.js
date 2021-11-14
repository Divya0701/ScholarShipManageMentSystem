import MainNavbar  from "../MainNavbar/MainNavbar"
import Withdraw from "../Withdraw"
import Chatbox from "../Chatbox"
import ScholarShipStatus from "../ScholarShipStatus/ScholarShipStatus"
import FieldsList from "../FieldsList/FieldsList"
import "./index.css"
import React from "react"
class Home extends React.Component{
    state={page:"DashBoard"}
     getProp=()=>{
        this.props.history.replace("/login")
    }

    getDashBoard=()=>{
        this.setState({page:"DashBoard"})
    }

    getWithdraw=()=>{
        this.setState({page:"Withdraw"})
    }

    render(){
    const data_object = this.props.location.state
    const {page}=this.state
    return(
    <div className="main-home">
        <MainNavbar data_name={data_object[0]["firstname"]} getProp={this.getProp} getDashBoard={this.getDashBoard} getWithdraw={this.getWithdraw}/>
       {page==="DashBoard"? <><FieldsList data={data_object[0]["fileds_list"]}/>
        <ScholarShipStatus data={data_object[0]["scholar"]}/></>:<Withdraw/>}
        <Chatbox/>
    </div>)
    }
}

export default Home;