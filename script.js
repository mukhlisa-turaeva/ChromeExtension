let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

function render(leads) {
    let listItems = ""
    for (i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = " "
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})


// section 5 lesson 6

// let boxEl = document.getElementById("box-el")

// boxEl.addEventListener("click", function() {
//     console.log("I want to open the box!")
// })


// section 5 lesson 9

// const playerName = "Jack"
// let credits = 45


// section 5 lesson 16, 17

// const containerEl = document.getElementById("container")
// containerEl.innerHTML = "<button>Buy!</button>"

// containerEl.addEventListener("click", function() {
//     containerEl.innerHTML += "<p>Thank you for buying!</p>"
// })


// section 5 lesson 25, 26

// const recipient = "James"
// const sender = "Jack"

// const email = `
//     Hey ${recipient}! 

//     How is it going? 

//     Cheers ${sender}`

// console.log(email)


// section 5 lesson 37

// const credits = 0

// if (credits) {
//     console.log("Lets' play!")
// } else {
//     console.log("Sorry, you have no credits :(")
// }

// truthy
// falsy

// false
// 0
// ""
// null
// undefined
// NaN

// let currentViewers = ["jane"]
// console.log(currentViewers[5])


// section 5 lesson 38

// let trueOrFalse = Boolean(-0)

// console.log(trueOrFalse)


// section 5 lesson 43, 44

// const welcomeEl = document.getElementById("welcome-el")

// function greetUser(greeting, name, emoji) {
//     welcomeEl.textContent = `${greeting}, ${name} ${emoji}`
// }

// greetUser("Hi", "Jack", "👋")


// section 5 lesson 45

// function add(num1, num2) {
//     return num1 + num2
// }

// console.log( add(3, 4) )
// console.log( add(9, 102) )


// section 5 lesson 46

//                 parameters
// function greetUser(greeting, name, emoji) {
//     welcomeEl.textContent = `${greeting}, ${name} ${emoji}`
// }

// //        arguments
// greetUser("Hi", "Jack", "👋")

// function add(num1, num2) {
//     return num1 + num2
// }

// add(3, 4)


// section 5 lesson 47

// function getFirst(arr) {
//     return arr[0]
// }

// let firstcard = getFirst([10, 7])
// console.log(firstcard)