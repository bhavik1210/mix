import React from 'react'
import ChatBot from 'react-simple-chatbot';
import {Segment} from 'semantic-ui-react';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import { ThemeProvider } from 'styled-components';
const Chatbot = () => {
    
    
const steps=[
    
    {
        id:'0',
        message:'Hello welcome to your stackOver flow website',
        trigger:'1'
    },
    {
        id:'1',
        message:'Please enter your name',
        trigger:'2'
    },
    {
        id:'2',
        user:true,
        trigger:'3'
    },
    {
        id:'3',
         message:'Hi {previousValue}, select Topic',
        trigger:'4'
    },{
       id :"4",
        options:[
            {value:'Html',label:'Html',trigger:"Html"},
            {value:'CSS',label:'CSS',trigger:"CSS"},
            {value:'JAVASCRIPT',label:'JAVASCRIPT',trigger:"JAVASCRIPT"},
            {value:'React.js',label:'React.js',trigger:"React.js"}
        ],
    },
    {
        id:"Html",
        message:'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
        trigger:5

    },{
        id:"CSS",
        message:'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).',
        trigger:5
    }
    ,{
        id:"JAVASCRIPT",
        message:'JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
        trigger:5
    },
    {
        id:"React.js",
        message:'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library',
        trigger:5
    },{
        id:"5",
        message:"Thanks Contacting us Any more Question",
        trigger:6
    },{
        id:'6', 
        options:[
          {value:'y', label:'Yes', trigger:'yes-response'},
          {value:'n', label:'No', trigger:'no-response'},
        ] 
       },
       {
        id:'yes-response', 
        message:'Great!', 
        trigger:7,
       },
       {
        id:'no-response', 
        message:'Sorry to hear that.', 
        trigger:7,
       },
       {
        id:"7",
        message:"thanks bye Take care",
        end:true
       }

];
const theme = {
    background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};


  return (
    <div className='home-container-1'>
    <LeftSidebar/>
   
    <div className="home-container-2">
        <h1> Chat with Us</h1>
        <ThemeProvider theme = {theme}>
    {/* <>
    <Segment floated="right"> */}
        <ChatBot steps={steps}/>
    {/* </Segment>

    </> */}
    
    </ThemeProvider>
    </div>
    

</div>
  )
}

export default Chatbot