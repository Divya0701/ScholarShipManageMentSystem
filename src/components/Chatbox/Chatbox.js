import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
// all available config props
const config ={
  width: "400px",
  height: "500px",
  floating: true,
};

class Chatbox extends Component {
  render() {
    return (
      <ChatBot 
        steps={[
          {
            id:'intro', 
            message:'Do you agree to the Terms and Conditions?', 
            trigger:'intro-user',
          },
          {
            id:'intro-user', 
            options:[
            {value:'y', label:'Yes', trigger:'yes-response'},
            {value:'n', label:'No', trigger:'no-response'},
            ] 
          },
          {
            id:'yes-response', 
            message:'Great! What is your name?', 
            trigger:"name",
          },
          {
            id:'name', 
            user:true,
            trigger:'q-problem'
          },
          {
            id:'q-problem', 
            message:'What is your problem?', 
            trigger:'problem',
          },
          {
            id:'problem', 
            user:true,
            trigger:'q-email'
          },
          {
            id:'q-email', 
            message:'Finally. what is you email?', 
            trigger:'email',
          },
          {
            id:'email', 
            user:true,
            trigger:'q-submit'
          },
          {
            id:'q-submit', 
            message:'Do you wish to submit?', 
            trigger:'submit'
          },
          {
            id:'submit', 
            options:[
            {value:'y', label:'Yes', trigger:'end-message'},
            {value:'n', label:'No', trigger:'no-submit'},
            ] 
          },
          {
                  id: 'no-submit',
                  message:'Your information was not submitted.', 
                  end: true,
               },
                    {
                  id: 'end-message',
                  message:"Thank you! Your data was submitted successfully! We'll check on it!",
                  end: true,
               },

          {
            id:'no-response', 
            message:'Sorry to hear that.', 
            end:true,
          },
        ]}
        {...config}
      />
        
        );
      }

    }

export default Chatbox;