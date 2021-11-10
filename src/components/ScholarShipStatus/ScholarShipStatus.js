import AmoutItem from "../AmountItem/AmountItem"
import {Component} from "react"
import "./index.css"


class ScholarShipStatus extends Component{
    render(){
        const {data}=this.props
        const amoutList=data
        console.log(data)
        return (
        <div className="moneyList">
            <div  className="scholar-status">
            <h1>ScholarShipStatus</h1>
            <h2>Total 12,000</h2>
            </div>
            <div>
                {amoutList.map((eachItem)=><AmoutItem item={eachItem} key={eachItem.ID}/>)}
            </div>
        </div>)
    }
}

export default ScholarShipStatus