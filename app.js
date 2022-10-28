const questionOne = document.querySelector('#q1')
const answerOne = document.querySelector('#a1')
const arrowOne = document.querySelector('#arrow1')

const questionTwo = document.querySelector('#q2')
const answerTwo = document.querySelector('#a2')
const arrowTwo = document.querySelector('#arrow2')

const questionThree = document.querySelector('#q3')
const answerThree = document.querySelector('#a3')
const arrowThree = document.querySelector('#arrow3')

const questionFour = document.querySelector('#q4') 
const answerFour = document.querySelector('#a4')
const arrowFour = document.querySelector('#arrow4')

const questionFive = document.querySelector('#q5')
const answerFive = document.querySelector('#a5')
const arrowFive = document.querySelector('#arrow5')

arrowOne.addEventListener('click', () =>{
  if(arrowOne.classList.contains('arrow-selected') && answerOne.classList.contains('answer-active') && questionOne.classList.contains('question-active')){
    arrowOne.classList.remove('arrow-selected')
    answerOne.classList.remove('answer-active')
    questionOne.classList.remove('question-active')
  } else {
    arrowOne.classList.add('arrow-selected')
    answerOne.classList.add('answer-active')
    questionOne.classList.add('question-active')
  }
})

arrowTwo.addEventListener('click', () =>{
  if(arrowTwo.classList.contains('arrow-selected') && answerTwo.classList.contains('answer-active') && questionTwo.classList.contains('question-active')){
    arrowTwo.classList.remove('arrow-selected')
    answerTwo.classList.remove('answer-active')
    questionTwo.classList.remove('question-active')
  } else {
    arrowTwo.classList.add('arrow-selected')
    answerTwo.classList.add('answer-active')
    questionTwo.classList.add('question-active')
  }
})

arrowThree.addEventListener('click', () =>{
  if(arrowThree.classList.contains('arrow-selected') && answerThree.classList.contains('answer-active') && questionThree.classList.contains('question-active')){
    arrowThree.classList.remove('arrow-selected')
    answerThree.classList.remove('answer-active')
    questionThree.classList.remove('question-active')
  } else {
    arrowThree.classList.add('arrow-selected')
    answerThree.classList.add('answer-active')
    questionThree.classList.add('question-active')
  }
})

arrowFour.addEventListener('click', () =>{
  if(arrowFour.classList.contains('arrow-selected') && answerFour.classList.contains('answer-active') && questionFour.classList.contains('question-active')){
    arrowFour.classList.remove('arrow-selected')
    answerFour.classList.remove('answer-active')
    questionFour.classList.remove('question-active')
  } else {
    arrowFour.classList.add('arrow-selected')
    answerFour.classList.add('answer-active')
    questionFour.classList.add('question-active')
  }
})

arrowFive.addEventListener('click', () =>{
  if(arrowFive.classList.contains('arrow-selected') && answerFive.classList.contains('answer-active') && questionFive.classList.contains('question-active')){
    arrowFive.classList.remove('arrow-selected')
    answerFive.classList.remove('answer-active')
    questionFive.classList.remove('question-active')
  } else {
    arrowFive.classList.add('arrow-selected')
    answerFive.classList.add('answer-active')
    questionFive.classList.add('question-active')
  }
})

