let count = 0
let countEl = document.getElementById("count-el")
function increment(){
  count = count + 1
  countEl.innerText = count
}  
function save() {
    preCount = document.getElementById("pre-count")
    preCount.innerText = "Previous counts  " + count
}
function reset() {
      count = 0
      countEl.innerText = "0"
}

// let name = "Usman"
// let greeting = "Hi, my name is "

// let myGreeting = greeting + name

// console.log(myGreeting)
// let name = "Linda!"
// let greeting = "Hi there, "
// let greet = greeting + name
// function myGreeting() {
//     console.log(greet)
// }
// myGreeting()


// let myPoints = 3
// function add3Points(){
//   myPoints = myPoints + 3
// }

// function remove1Point(){
//     myPoints = myPoints - 1
// }
// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()

// console.log(myPoints)








