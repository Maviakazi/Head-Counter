let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalCount = document.getElementById("total")

let count = 0
let count2=0

function increment() {
    count += 1
    countEl.textContent = count
}

function decrement(){
    count = count-1
    countEl.textContent = count

}

function save() {
    if (count>0)
    {
        countStr=" +"+ count  
        count2=count+count2
        
    }

    else if (count<0)
    { 
        countStr = " "+count
        count2=count+count2
        
    }

    else if (count==0)
    {
        countStr = ""
    }
    
   else {
    
   }
      
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    totalCount.innerText="Total Head Count " + count2

}


function reset(){
    let count=0
    let countStr=0
    count2=0
    saveEl.textContent = "Previous Enteries:"    
    countEl.textContent = 0
    totalCount.textContent="Total Head Count " + 0
    
}

