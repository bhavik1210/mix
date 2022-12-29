import React from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import './HomeMainbar.css'
import QuestionList from './QuestionList'


const HomeMainbar = () => {

  const location = useLocation()

  const user = 1;
  const navigate =useNavigate()

  const questionsList=useSelector(state => state.questionsReducer)
  console.log(questionsList)


  // var questionsList =[{
  //   id: '1',
  //   // votes:2,
  //   upVotes: 3,
  //   downVotes:2,
  //   noOfAnswers:2,
  //   questionTitle:"What is a function?",
  //   questionBody:"It meant to be",
  //   questionTags:["Java","javascript","html","python","python","React" ],
  //   userPosted:"mano",
  //   userId:1,
  //   askedOn: "jan1",
  //   answer:[{
  //     answerBody:"Answer",
  //     userAnswered:'Bhavik',
  //     answeredOn:"june19",
  //     userId:2,
  //   }]


  // },
  // {
  //   id: 2,
  //   // votes:2,
  //   upVotes: 2,
  //   downVotes:2,
  //   noOfAnswers:0,
  //   questionTitle:"What is a function?",
  //   questionBody:"It meant to be",
  //   questionTags:["Java","javascript","html","python","python","React","la","css"],
  //   userPosted:"mano",
  //   userId:2,
  //   askedOn: "jan1",
  //   answer:[{
  //     answerBody:"Answer",
  //     userAnswered:'Bhavik',
  //     answeredOn:"june19",
  //     userId:2,
  //   }]

  // },
  // {
  //   id: 3,
  //   // votes:5,
  //   upVotes: 6,
  //   downVotes:2,
  //   noOfAnswers:1,
  //   questionTitle:"What is a function?",
  //   questionBody:"It meant to be",
  //   questionTags:["Java","javascript","html","python","React","la","css","javascript"],
  //   userPosted:"mano",
  //   userId:3,
  //   askedOn: "jan1",
  //   answer:[{
  //     answerBody:"Answer",
  //     userAnswered:'Bhavik',
  //     answeredOn:"june9",
  //     userId:1,
  //   }]


  // }]

 

  

  const checkAuth =()=>{
    if(user === null){
      alert("login or aignup to ask a question")
      navigate('/Auth')
    }
  else{
    navigate('/AskQuestion')
  }
  }



  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1>  : <h1>All Questions</h1>
        }
        <button  onClick={checkAuth} className='ask-btn'>Ask Question</button>


      </div>
      {/* <div>
        {
          questionsList.data === null?
          <h1>Loading...</h1> :
          <>
          <p>{ questionsList.data.length} questions</p>
         <QuestionList questionsList={questionsList.data} />

          </>
        }

      </div> */}


    </div>
  )
}

export default HomeMainbar