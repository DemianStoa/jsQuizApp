const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById
('answer-buttons')
const answerTemplate = document.querySelector("[data-template]")
const scoreElement = document.querySelector(".score")
const nextButton = document.getElementById('next-btn')

let shuffledQuestions, currentQuestionIndex
let answers = []
let score = 0

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click',() => {
   currentQuestionIndex = (currentQuestionIndex +1)%(questions.length) 
    setNextQestion()
    nextButton.classList.add('hide')
    document.body.classList.remove('correct')
    document.body.classList.remove('wrong')
})


function startGame() {
  
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  console.log(shuffledQuestions)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  scoreElement.innerText ="score : " + score 
  setNextQestion()
}

function setNextQestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex])
  showAnswers(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
}

function selectAnswer(question) {

}

function showAnswers(question){
    answerButtonsElement.innerHTML = ""
    answers = question.answers
    answers.forEach(answer => {
        const answerButton = answerTemplate.content.cloneNode(true).children[0]    
        answerButton.innerText = answer.text
        answerButton.addEventListener('click',() => {
            document.querySelectorAll(".btn").forEach(button =>{
                button.classList.remove('wrong')
                button.classList.remove('correct')
            })
            document.body.classList.remove('correct')
            document.body.classList.remove('wrong')
            answerButton.classList.add(answer.correct ? 'correct' : 'wrong') 
           document.body.classList.add(answer.correct ? 'correct' : 'wrong') 
            score = score + (answer.correct ? 10 : -10) 
            scoreElement.innerText ="score : " + score 
            nextButton.classList.remove('hide')
        })
        answerButtonsElement.append(answerButton)
    });
}

const questions = [

    {
        question: ' Who is the best programer in the world?',
        answers: [
            { text: 'Demian', correct: true },
            { text: 'Demian', correct: true },
            { text: 'Demian', correct: true },
            { text: 'Demian', correct: true }
        ]
    },
    {
        question: ' What is 2 + 2?',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false },
            { text: '3', correct: false },
            { text: '5', correct: false }
        ]
    },
    {
        question: ' What is 4 + 4?',
        answers: [
            { text: '8', correct: true },
            { text: '22', correct: false },
            { text: '3', correct: false },
            { text: '5', correct: false }
        ]
    }   


]