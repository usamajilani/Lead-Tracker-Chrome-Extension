let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("list-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn") 
const  storedNames = JSON.parse(localStorage.getItem("myLeads"));


if(storedNames){

myLeads = storedNames
render(myLeads)

}

tabBtn.addEventListener("click",function(){

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
   
     }) 
     
 
})


inputBtn.addEventListener("click",function(){

myLeads.push(inputEl.value)
inputEl.value = " "

localStorage.setItem("myLeads",JSON.stringify(myLeads))
render(myLeads)

}) 

deleteBtn.addEventListener("dblclick",function(){

localStorage.clear()
myLeads = []
render(myLeads)

})


function render(leads){
    let listitems = ""

    for(i = 0; i < leads.length; i++){
    
           // listitems   += "<li><a target='_blank' href= '" + myLeads[i] +"'> " +  myLeads[i] + " " + "</a></li>"
    
           listitems   += `<li>
                                <a target='_blank' href= '${leads[i]}'>
                            
                                ${leads[i]}
                        </a>
                    </li> 
                `
            }

    ulEl.innerHTML = listitems 
    
}
