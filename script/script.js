// heart function section 

const heartButtons = document.getElementsByClassName("heart-btn");
for( let buttons of heartButtons){
   buttons.addEventListener("click",function(){
    const heartCount= document.getElementById("heart-count");
    const totalHeartCount = Number(heartCount.innerText)+1;
    heartCount.innerText=Number(totalHeartCount);
   })
}

// call section function 

const callButtons = document.getElementsByClassName("call-btn");
const coinDisplay = document.getElementById("coin-display");
let coins = Number(coinDisplay.innerText);
console.log(coins)
for(let callButton of callButtons){
    callButton.addEventListener("click",function(){
      if(coins<20){
        alert("Not enough coins! You need at least 20 coins to make a call.");
        return;
      }
       coins -=20;
       coinDisplay.innerText= coins;
       const serviceName = callButton.parentNode.parentNode.children[1].children[0].innerText;
       const serviceNumber = callButton.parentNode.parentNode.children[2].children[0].innerText;
       
       alert(`Calling ${serviceName} at number: ${serviceNumber}`);
    
    // call history 
    
    const historyContainer= document.getElementById("history-container");
     const data = document.createElement("div");
     data.innerHTML=`
     <div class="flex justify-between items-center ml-1 mr-1 bg-gray-100 mt-3 p-2 rounded-lg">
                <div>
            <h2 class="font-semibold ">${serviceName}</h2>
            <span>${serviceNumber}</span>
           </div>
           <div>
            <span>${new Date().toLocaleTimeString()}</span>
           </div>
            </div>
     `
    historyContainer.appendChild(data);
    })
}
// clear button
const historyContainer=document.getElementById("history-container");
document.getElementById("clear-btn").addEventListener("click",function(){
    historyContainer.innerHTML=``;
    console.log("clicked");
})

// copy button section 
const copyButtons = document.getElementsByClassName("copy-btn");

for( let copyButton of copyButtons){
    copyButton.addEventListener("click",function(){
         const serviceNumber = copyButton.parentNode.parentNode.children[2].children[0].innerText;
        navigator.clipboard.writeText(serviceNumber);
        alert("Successfully copied to clipboard")
       const copyCount = document.getElementById("copy-count");
       const totalCopyCount = Number(copyCount.innerText)+1;
       copyCount.innerText= Number(totalCopyCount);
    })
}





