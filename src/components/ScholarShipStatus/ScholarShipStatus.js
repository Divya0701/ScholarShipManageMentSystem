import AmoutItem from "../AmountItem/AmountItem"
import {Component} from "react"
import "./index.css"


class ScholarShipStatus extends Component{
    render(){
        const {data}=this.props
        const amoutList=data
        const total=data[0].score+data[1].score+data[2].score;
        return (
        <div className="moneyList">
            <div  className="scholar-status">
            <h1>Amount Left</h1>
            <h2>Total {total}Rs</h2>
            </div>
            <div>
                {amoutList.map((eachItem)=><AmoutItem item={eachItem} key={eachItem.ID}/>)}
            </div>
        </div>)
    }
}

export default ScholarShipStatus