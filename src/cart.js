
let check = document.getElementById("btn")
check.addEventListener('click', () => {
    alert("Order Placed")
})

let carItem = document.querySelector('#cartItem')


function events() {
    let decrement = document.querySelectorAll('.decrement')
    let increment = document.querySelectorAll('.increment')
    let count = document.querySelectorAll('.count')
    let price = document.querySelectorAll('.rs')
    let total = document.querySelectorAll('.total')
    increment.forEach((value, index) => {
        value.addEventListener('click', () => {
            let currentNumber = parseInt(count[index].innerHTML)
            currentNumber++
            count[index].innerHTML = currentNumber
            total[index].innerHTML = currentNumber * parseInt(price[index].innerHTML)
            saveData()

        })

    })
    decrement.forEach((value, index) => {
        value.addEventListener('click', () => {
            if (parseInt(count[index].innerHTML) > 0) {
                let currentNumber = parseInt(count[index].innerHTML)
                currentNumber--
                count[index].innerHTML = currentNumber
                total[index].innerHTML = currentNumber * parseInt(price[index].innerHTML)
                saveData()
            }

        })

    })
}
function saveData() {
    localStorage.setItem("data", carItem.innerHTML)
}
async function showTask() {
    carItem.innerHTML = localStorage.getItem('data')
    events()

}
events()
showTask()
let bill = document.querySelectorAll('.billing')
let total = 0;
bill.forEach((c, i) => {
    total += parseInt(c.innerText)

})
console.log(total)
let subTotal = document.getElementById('subTotal')
subTotal.innerText = total

let counterTwo = document.getElementById('counterTwo')
counterTwo.innerText = localStorage.getItem('number')

// remove product function 

const removeButtons = document.querySelectorAll('.cross');

// Loop through each remove button
removeButtons.forEach(function (button) {
    // Add a click event listener to each button
    button.addEventListener('click', function () {
        // Get the closest parent element with the class 'items'
        const itemsElement = this.closest('.items');

        // Remove the 'items' element
        if (itemsElement) {
            itemsElement.remove();
        }
        saveData()
    });
});






