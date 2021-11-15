import {Component} from "react"
import Chart from 'react-apexcharts'
import "react-multi-carousel/lib/styles.css";
import FieldItem from "../FieldItem/FieldItem"
import "./index.css"

const topperList=[
  {"name":"Sameera Kousar Shaik",
"Amount":90303,
"id":1,
"imgUrl":"https://res.cloudinary.com/dx4ela47a/image/upload/v1636899164/min-project-2/four_kbet1v.png"
},
{"name":"Pavani Yarlagadda",
"Amount":80098,
"id":2,
"imgUrl":"https://res.cloudinary.com/dx4ela47a/image/upload/v1636899185/min-project-2/three_m6qhbh.png"
},
{"name":"Bhagya Srilaxmi Pendem",
"Amount":70000,
"id":3,
"imgUrl":"https://res.cloudinary.com/dx4ela47a/image/upload/v1636899174/min-project-2/one_b2mfk3.png"
}
]
class FieldsList extends Component{
 
  state={
    "currentCard":null,
      options1: {
        chart: {
          id: 'apexchart-example'
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Agust", "Sept","Oct","Nov"]
        }
      },
      series1: [{
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 98,23,56,78]
      }],
      options2: {
        chart: {
          id: 'apexchart-example'
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Agust", "Sept","Oct","Nov"]
        }
      },
      series2: [{
        name: 'series-1',
        data: [30, 20, 45, 60, 49, 60, 40, 91, 32,23,46,28]
      }],
      options3: {
        chart: {
          id: 'apexchart-example'
        },
        xaxis: {
          categories: ["2018","2019","2020"]
        }
      },
      series3: [{
        name: 'series-1',
        data: [60,70,80]
      }]
}
  activatedCard=id=>{
     this.setState({"currentCard":id})
  }
  
  render(){
    
    const {data} = this.props
    const {currentCard} = this.state
    const studentsList = data
    const ele = currentCard===null?"hide":"display"
    const temp = currentCard!==null?"hide":"display"
      return(
        <div className="middleContainer">
        <div  className="ullist">
            {studentsList.map(eachItem=><FieldItem item={eachItem} key={eachItem.idNo} changeId={this.activatedCard}/>)}
        </div> 
        <div className={`graphContainer ${ele}`}>
          {currentCard===1?<h1>Attendance</h1>:currentCard===2?<h1>CGPA</h1>:<h1>Sports</h1>}
          {currentCard===1? <Chart type="bar" options={this.state.options1} series={this.state.series1} width={600} height={320}/>:currentCard===2? <Chart type="bar" options={this.state.options3} series={this.state.series3} width={600} height={320}/>: <Chart type="bar" options={this.state.options2} series={this.state.series2} width={600} height={320}/>}
        </div>
        <div className={`topperList ${temp}`}>
          <h1 className="top">Toppers List</h1>
           <ul className="toContainer">
             {topperList.map((eachItem)=><Top item={eachItem} key={eachItem.id}/>)}
           </ul>
        </div>
        </div>

      )
  }
}

const Top=props=>{
const {item}=props
const {name,Amount,imgUrl,id}=item
return(<li className={`topperProfile class${id}`}>
  <img src={imgUrl} alt="profile-pic" className="topperPic"/>
  <p className="name">{name}</p><p className={`amount${id}`}>{Amount}Rs</p>
  </li>)
}
export default FieldsList