// function add() {
//     var cartItemContainer = document.getElementById('cartItem');
//     var newItem = document.createElement('div');
//     newItem.innerHTML = `
//     <div class="items" >
//     <div class="product">
//         <div><img src="./Assets/speaker1.png" alt=""></div>
//         <div>
//             <div class="name">Speaker</div>
//             <div class="color">
//                 <span>Color:</span>
//                 <span>Black</span>
//             </div>
//         </div>
//     </div>
//     <div class="price">$1100</div>
//     <div class="inc">
//         <span>-</span>
//         <span>1</span>
//         <span>+</span>
//     </div>
//     <div class="price">
//         $1100
//     </div>
//     <div>
//         <img src="./Assets/close-circle.png" alt="" srcset="" class="cross">
//     </div>

// </div>
//     `;
//     cartItemContainer.appendChild(newItem);

// }

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
    // console.log("Data saved:", carItem.innerHTML); 
}
async function showTask() {
    // carItem.innerHTML = localStorage.getItem('data')
    // console.log(carItem.innerHTML = localStorage.getItem('data'))
    // console.log(localStorage.getItem('data'))
    carItem.innerHTML = localStorage.getItem('data')
    events()

}
// showTask()


