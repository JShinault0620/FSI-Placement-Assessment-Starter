// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Jonathan Shinault" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')

// creating an array of all the plus buttons
let plusArray = [
    document.querySelector('#add-gb'),
    document.querySelector('#add-cc'),
    document.querySelector('#add-sugar')
]

// creating an array of all the minus buttons
let minusArray = [
    document.querySelector('#minus-gb'),
    document.querySelector('#minus-cc'),
    document.querySelector('#minus-sugar')
]

//creating an array of all the cookie totals
let cookieArray = [
    document.querySelector('#qty-gb'),
    document.querySelector('#qty-cc'),
    document.querySelector('#qty-sugar'),
    document.querySelector('#qty-total')
]

// creating a function to update the cookie totals in the html
function updateTotals(){
    cookieArray[0].innerText = gb
    cookieArray[1].innerText = cc
    cookieArray[2].innerText = sugar
    cookieArray[3].innerText = gb + cc + sugar
}

// creating a for loop that adds event listeners to the plus buttons
for(let i = 0; i < 3; i ++){
    plusArray[i].addEventListener('click', function(e){
        switch(e.target.id){
            case "add-gb":
                gb ++
                updateTotals()
                break;
            case "add-cc":
                cc ++
                updateTotals()
                break;
            case "add-sugar":
                sugar ++
                updateTotals()
                break;
        }
    })
}

// creating a for loop that adds event listeners to the minus buttons
for(let i = 0; i < 3; i ++){
    minusArray[i].addEventListener('click', function(e){
        switch(e.target.id){
            case "minus-gb":
                if(gb > 0){
                    gb --
                    updateTotals()
                }
                break;
            case "minus-cc":
                if(cc > 0){
                    cc --
                    updateTotals()
                }
                break;
            case "minus-sugar":
                if(sugar > 0){
                    sugar --
                    updateTotals()
                }
                break;
        }
    })
}

// Code to update name display
credit.textContent = `Created by ${yourName}`