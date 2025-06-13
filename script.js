const questions=[
    {
      question:"which is largest animal in the world?",
      answers:[
        {text:"shark",correct:false },
         {text:"Bluewhale",correct:true},
         {text:"Elephant",correct:false },
         {text:"Giraffe",correct:false}
      ]  
    },
      {
      question:"which is the smallest continent in the world?",
      answers:[
        {text:"Asia",correct:false },
         {text:"Australia",correct:true},
         {text:"Africa",correct:false },
         {text:"Arctic",correct:false}
      ]  
    },
      {
      question:"which is the smallest country in the world?",
      answers:[
        {text:"Vatican City",correct:true },
         {text:"Australia",correct:false},
         {text:"Nepal",correct:false },
         {text:"Shri lanka",correct:false}
      ]  
    },
      {
      question:"which is the largest desert in the world?",
      answers:[
        {text:"Kalahari",correct:false },
         {text:"Gobi",correct:false},
         {text:"Sahara",correct:false },
         {text:"Antartica",correct:true}
      ]  
    }
];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionindex=0;
let score=0;

function startQuiz()
{
    currentQuestionindex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion()
{
    resetState();
    let currentQuestion=questions[currentQuestionindex];
    let questionNo=currentQuestionindex+1;
    questionElement.innerHTML=questionNo+"."+currentQuestion.question;

    //display the answer
    currentQuestion.answers.forEach(answer=>
    {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState()

{
    nextButton.style.display="none";
    while(answerButtons.firstChild)
    {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}
function selectAnswer(e)
{
    const selectedbtn=e.target;
    const iscorrect=selectedbtn.dataset.correct=="true";
    if(iscorrect)
    {
        selectedbtn.classList.add("correct");
        score++;
    }
    else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>
    {
        if(button.dataset.correct=="true")
        {
            button.classList.add("correct")
        }
        button.disabled="true"
    }
    );
    nextButton.style.display="block";
}

function showscore()
{
    resetState();
    if(score==4)
    {
       questionElement.innerHTML= `You scored ${score} out of ${questions.length}! 🥇😀`;
        nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
    }
    if(score==3)
    {
       questionElement.innerHTML= `You scored ${score} out of ${questions.length}!🥈😀 `;
        nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
    }
    if(score==2)
    {
       questionElement.innerHTML= `You scored ${score} out of ${questions.length}! 🥉`;
        nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
    }
    if(score==1)
    {
        questionElement.innerHTML=`You scored ${score} out of ${questions.length}! 😒`;
         nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
    }
    if(score==0)
    {
        
       questionElement.innerHTML= `You scored ${score} out of ${questions.length}! 🥲`;
        nextButton.innerHTML="Play Again";
    nextButton.style.display="block";

    }


//     questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
//     nextButton.innerHTML="Play Again";
//     nextButton.style.display="block";
}

function handleNextButton()
{
    currentQuestionindex++;
    if(currentQuestionindex <questions.length)
    {
        showQuestion();
    }
    else
    
    {
        showscore();
    }
}


nextButton.addEventListener("click",()=>
{
    if(currentQuestionindex < questions.length)

        {
            handleNextButton();
        }
        else
        {
            startQuiz();
        }
})
startQuiz();
