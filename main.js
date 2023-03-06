// selection
const formElm = document.querySelector('form')
const inputElm  = document.querySelector('#luck-Input')
const winScoreElm = document.querySelector('.lucky-number span')
const winnerPlayerElm =document.querySelector('.winner')
const p1BtnElm = document.querySelector('.p1Btn')
const p2BtnElm = document.querySelector('.p2Btn')
const p1ScoreElm = document.querySelector('.p1')
const p2ScoreElm = document.querySelector('.p2')
const resetButton = document.querySelector('#reset')

let p1Score 
let p2Score 
let p1Turn 
let p2Turn 
let winScore 
let isGameOver 
function setIntialValue(){
     p1Score = 0
     p2Score = 0
     p1Turn = true
     p2Turn = false
     winScore = 5
     isGameOver = false
}
setIntialValue()

// handling validation of input
function validationCheck(inputValue){
    const check = false
    //check if the input is empty
    if(!inputValue){
        alert('Please fill the input')
        check = true
    }
    // check if the input is a valid number or not
    if(Number(inputValue)!== Number(inputValue)){
        alert('Please Enter a valid Number')
        check = true
    }
    return check
}
 // handling reset Input
function resetInput(){
    // reset input
    inputElm.value = ''

}

function setInitialDomValue(){
    winScoreElm.textContent = winScore
    p1ScoreElm.textContent = p1Score
    p2ScoreElm.textContent = p2Score
    if(!p1Turn){
        p1BtnElm.setAttribute('disabled','disabled')
    }
    if(!p2Turn){
        p2BtnElm.setAttribute('disabled','disabled')
    }

}
setInitialDomValue()

// handling submit part

formElm.addEventListener('submit',(evt)=>{
    // prevent the reload
    evt.preventDefault()
    // get the input value
    const inputValue = Number(inputElm.value)
    // validation check
    const check = validationCheck(inputValue)
    if(check)
    return
    // reset The input
    resetInput()
    // set data on memory
    winScore = inputValue
    // set the winning score
    winScoreElm.textContent = inputValue
    console.log(inputValue)
})

// Handling players 

p1BtnElm.addEventListener('click',(evt)=>{
    if(p1Turn&&!isGameOver){
        p1Score++
    p1ScoreElm.textContent = p1Score
    }


    
    p1Turn = false
    p1BtnElm.setAttribute('disabled','disabled')
    p2Turn = true
    p2BtnElm.removeAttribute('disabled')
    // checking winner
    if(p1Score==winScore){
        isGameOver = true
        winnerPlayerElm.textContent = 'Player 1 is the winner'
        p1BtnElm.setAttribute('disabled','disabled')
        p2BtnElm.setAttribute('disabled','disabled')
    }
})

p2BtnElm.addEventListener('click',(evt)=>{
    if(p2Turn&&!isGameOver){
        p2Score++
    p2ScoreElm.textContent = p2Score

    }
    p2Turn = false
    p2BtnElm.setAttribute('disabled','disabled')
    p1Turn = true
    p1BtnElm.removeAttribute('disabled')
    // checking winner
    if(p2Score==winScore){
        isGameOver = true
        winnerPlayerElm.textContent = 'Player 2 is the winner'
        p1BtnElm.setAttribute('disabled','disabled')
        p2BtnElm.setAttribute('disabled','disabled')
    }
    
   
})

resetButton.addEventListener('click',()=>{
    setIntialValue()
    setInitialDomValue()

}
)
