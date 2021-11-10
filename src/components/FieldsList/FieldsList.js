import {Component} from "react"
import "react-multi-carousel/lib/styles.css";
import FieldItem from "../FieldItem/FieldItem"
import "./index.css"



class FieldsList extends Component{
 
  render(){
    const {data} = this.props
    const studentsList = data
    console.log(studentsList)
      return(
        <div  className="ullist">
            {studentsList.map(eachItem=><FieldItem item={eachItem} key={eachItem.idNo}/>)}
        </div> 
      )
  }
}

export default FieldsList