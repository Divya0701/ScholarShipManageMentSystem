
import ProgressBar from "@ramonak/react-progress-bar";
import "./index.css"

const FieldItem=props=>{
 const {item,changeId} = props
 const {score,name,idNo} = item
 const secondClass = `item${idNo}`

  const game=()=>{
    changeId(idNo)
  }

 return( 
     <div className={secondClass} onClick={game}>
     <h1 className="title">{name}</h1>
      <ProgressBar completed={score} bgColor="white" height="10px" baseBgColor="#ced4da" labelAlignment="outside"/>
      </div>
  )
}

export default FieldItem