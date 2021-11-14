import { Component } from "react"
import "./index.css"

const user_list=[
    {
        "id":"N161099",
        "firstname":"divya",
        "fileds_list":[
            {'idNo':1,
             "score":80,
             "name":"Attendance"
            },
            {'idNo':2,
            "score":95,
            "name":"CGPA"
           },
            {'idNo':3,
            "score":40,
            "name":"Sports"
            }
        ],
        "scholar":[
        {"name":"attendance",
        "score":800,
         "sid":1},
        {"name":"sports",
        "score":400,
        "sid":2},
        {"name":"CGPA",
        "score":2850,
        "sid":3}]
    },
    {
        "id":"N160619",
        "firstname":"Tejaswi",
        "fileds_list":[
            {'idNo':1,
             "score":70,
             "name":"Attendance"
            },
            {'idNo':2,
            "score":99,
            "name":"CGPA"
           },
            {'idNo':3,
            "score":50,
            "name":"Sports"
            }
        ],
        "scholar":[
        {"name":"attendance",
        "score":700,
         "sid":1},
        {"name":"sports",
        "score":500,
          "sid":2},
        {"name":"CGPA",
        "score":2700,
        "sid":3}]
    },
    {
        "id":"N161055",
        "firstname":"Maduri",
        "fileds_list":[
            {'idNo':1,
             "score":80,
             "name":"Attendance"
            },
            {'idNo':2,
            "score":93,
            "name":"CGPA"
           },
            {'idNo':3,
            "score":20,
            "name":"Sports"
            }
        ],
        "scholar":[
         {"name":"attendance",
         "score":800,
          "sid":1},
        {"name":"sports",
        "score":200,
           "sid":2},
        {"name":"CGPA",
        "score":2790,
          "sid":3}
        ]
    },
    {
        "id":"N160743",
        "firstname":"Sri laxmi",
        "fileds_list":[
            {'idNo':1,
             "score":100,
             "name":"Attendance"
            },
            {'idNo':2,
            "score":95,
            "name":"CGPA"
           },
            {'idNo':3,
            "score":87,
            "name":"Sports"
            }
        ],
       "scholar":[
        {"name":"attendance",
        "score":1000,
          "sid":1},
        {"name":"sports",
        "score":800,
          "sid":2},
        {"name":"CGPA",
        "score":2850,
          "sid":3},
       ]
    },
    {
        "id":"N160809",
        "firstname":"Vimala Kumari",
        "fileds_list":[
            {'idNo':1,
             "score":30,
             "name":"Attendance"
            },
            {'idNo':2,
            "score":79,
            "name":"CGPA"
           },
            {'idNo':3,
            "score":5,
            "name":"Sports"
            }
        ],
        "scholar":[
        {"name":"attendance",
        "score":300,
         "sid":1},
        {"name":"sports",
        "score":50,
        "sid":2},
        {"name":"CGPA",
        "score":2370,
        "sid":3}]
    },
    {
        "id":"N160421",
        "firstname":"Sameera",
        "fileds_list":[
            {'idNo':1,
             "score":83,
             "name":"Attendance"
            },
            {'idNo':2,
            "score":45,
            "name":"CGPA"
           },
            {'idNo':3,
            "score":26,
            "name":"Sports"
            }
        ],
        "scholar":[
        {"name":"attendance",
        "score":830,
        "sid":1
         },
        {"name":"sports",
        "score":260,
         "sid":2},
        {"name":"CGPA",
        "score":1350,
          "sid":3}],
    }
]

class LoginForm extends Component
{
    state ={user_input:""}

    changeInput=event=>{
          this.setState({user_input:event.target.value})
    } 

    triggered=event=>{
        const {user_input} = this.state
        event.preventDefault()
        const dummy_user_data = user_list.filter((eachItem)=>eachItem.id===user_input)
        this.props.history.push({
            pathname: '/',
              state: dummy_user_data 
          })
    }

   render(){
    const {user_input} = this.state
    return(<div className="login-background">
    <div className="firstContainer">
    <img src="https://res.cloudinary.com/dx4ela47a/image/upload/v1635668452/min-project-2/rguktlogo_tela0d.jpg" 
     className="rgukt-logo" alt="rgukt-logo"/>
    <div className="first">
    <div className="login-container">
    <h1 className="heading">Login</h1>
    <form onSubmit={this.triggered} className="form-container">
        <label htmlFor="name" className="label">ID</label>
        <input id="name" type="text" className="input" onChange={this.changeInput} value={user_input}/>
        <button type="submit" className="button">Login</button>
    </form>
    </div>
    </div>
    </div>
   
    <div className="second">
        <img src="https://res.cloudinary.com/dx4ela47a/image/upload/v1635669577/min-project-2/student_front_cgnotu.png" alt="login-right" className="right-image"/>
    </div>
    </div>)
   }
}

export default LoginForm