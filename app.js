mainContainer=document.querySelector(".container-mid")
inputField=document.querySelectorAll("input")
inputSection=document.querySelector(".inputs")
buttonSection=document.querySelector(".button-sec")
goButton=document.querySelector("button")
resultSec=document.querySelector(".input__result")
resultText=document.querySelector("#result-text")
header=document.querySelector(".heading")
inputStockPriceBought=document.querySelector(".stock-price-bought")
inputStockCount=document.querySelector(".stock-number")
inputStockPriceNow=document.querySelector(".stock-price-now")


let themeChangeValue="profit"
let moveForward="true"

function profitOrLossCal(totalPriceBNow,totalPriceBought){
   let priceDiff=totalPriceBNow-totalPriceBought
   let percentage=((totalPriceBNow/totalPriceBought)*100)
   if(percentage>100){
     return `You earned ${(percentage-100).toFixed(2)}% profit which amounts to be Rs.${priceDiff}`
   }
   else if(percentage<100){
     themeChangeValue="loss"
     return `You met with ${(100-percentage).toFixed(2)}% loss which amounts to be Rs.${-1*priceDiff}`
   }
   else if(percentage===100){
     themeChangeValue=""
     return `No Profit No Loss`
}
}

function calculateProfitOrLoss(priceBought,stockCount,priceNow){
   let totalPriceBought=priceBought*stockCount
   let totalPriceBNow=priceNow*stockCount
   return profitOrLossCal(totalPriceBNow,totalPriceBought)
}

function themeChange(profitOrLoss){
  let sameClassAdd=[resultSec,buttonSection,inputSection]
  
  if(profitOrLoss==="profit" || profitOrLoss==="loss")
  {
    inputField.forEach((input)=>{
      input.classList.add("style-input-profit-loss")
    })
    sameClassAdd.forEach((eachElement)=>{
      eachElement.classList.add("style-inputs-button-sec-result-profit-loss")
    })
    header.classList.add("style-header-profit-loss")
    resultSec.classList.add("display-block")
    
    if(profitOrLoss==="profit"){
      mainContainer.classList.add("background-profit-container-mid-profit")
    }
    else{
      mainContainer.classList.add("background-profit-container-mid-loss")
    }
  }
  else{
  resultSec.classList.add("display-block")
  }
}

function profitOrLossAnalysis(){
    resultText.innerHTML=calculateProfitOrLoss(
    inputStockPriceBought.value,
    inputStockCount.value,
    inputStockPriceNow.value
  )
}

function inputValidation(){
  inputField.forEach((input)=>{
    if(input.value===""||parseInt(input.value)===0||parseInt(input.value)<0){
      moveForward=false
      console.log(moveForward)
    }
  })
}

function ifMoveForwardTrue(){
  if(moveForward){
  profitOrLossAnalysis()
  themeChange(themeChangeValue)
  }
  else{
    resultText.innerHTML="Please Check The Inputs"
    resultText.style.color="red"
    resultSec.classList.add("display-block")
  }
}

goButton.addEventListener('click',()=>{
  inputValidation()
  ifMoveForwardTrue()
})
