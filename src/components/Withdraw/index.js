import React from "react";
import "./index.css"
const scholarStatusList=[
  {
    "Date":"01-03-2019",
    "Amount":900,
    "status":"Successfull"
  },
  {
    "Date":"13-07-2020",
    "Amount":1000,
    "status":"Failed"
  },
  {
    "Date":"18-02-2021",
    "Amount":200,
    "status":"Pending"
  }
  ]



 const Item=input=>{
    const {item} = input
    const el = item.status==="Successfull"?"Suc":item.status==="Failed"?"Fail":"Pen";
    return(<tr className="row">
              <td className="d">{item.Date}</td> 
              <td className="d">${item.Amount}</td>
              <td className={`d ${el}`}>{item.status}</td>
            </tr>)
  }
  
class Winthdraw extends React.Component{
  state={statList:scholarStatusList,Amount:""}
  addRow=event=>{
    event.preventDefault()
    const {Amount} = this.state
    const date="15-11-2021"
    const dat ={
      "Date":date,
      "Amount":Amount,
      "status":"Pending"
    }
    this.setState(prevState=>({statList:[...prevState.statList,dat]}))
    this.setState({Amount:""})
  }
  add=event=>{
    this.setState({Amount:event.target.value})
  }
  render(){
    const {statList,Amount}=this.state
    return(
      <div className="dididi">
        <form className="form">
          <h1 className="head">Money Withdraw</h1>
          <label htmlFor="Name" className="ll">Name</label>
          <input type="text" id="Name" className="in"/>
          <label htmlFor="ID" className="ll">ID</label>
          <input type="text" id="ID" className="in"/>
          <label htmlFor="Amount" className="ll">Amount</label>
          <input type="text" id="Amount" className="in" value={Amount} onChange={this.add}/>
          <button type="submit" className="sub" onClick={this.addRow}>Submit</button>
        </form>
      <table className="table">
      <tr className="row"><th className="d">Date</th><th className="d">Amount</th><th className="d">Status</th></tr>
      {statList.map((eachItem)=><Item item={eachItem}/>)}
      </table>
  </div>)
}
}

export default Winthdraw