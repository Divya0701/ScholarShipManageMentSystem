import {FcCalendar} from "react-icons/fc";
import {FcBullish} from "react-icons/fc";
import {FcSportsMode} from "react-icons/fc"
import "./index.css"

const AmoutItem=props=>{
    const {item}=props
    const {name,sid,score}=item
    const Element =()=> sid===1?<FcCalendar  className="icons"/>:sid===3?<FcBullish  className="icons"/>:sid===2?<FcSportsMode  className="icons"/>:null
    
 return(<div className="money-big-container">
    <div className="money-container">
        <Element/>
        <p className="status-para">{name} : {score}Rs</p>
    </div>
    
 </div>)
}

export default AmoutItem