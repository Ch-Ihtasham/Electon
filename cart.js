function add() {
    var cartItemContainer = document.getElementById('cartItem');
    var newItem = document.createElement('div');
    newItem.innerHTML = `
    <div class="items" >
    <div class="product">
        <div><img src="./Assets/speaker1.png" alt=""></div>
        <div>
            <div class="name">Speaker</div>
            <div class="color">
                <span>Color:</span>
                <span>Black</span>
            </div>
        </div>
    </div>
    <div class="price">$1100</div>
    <div class="inc">
        <span>-</span>
        <span>1</span>
        <span>+</span>
    </div>
    <div class="price">
        $1100
    </div>
    <div>
        <img src="./Assets/close-circle.png" alt="" srcset="" class="cross">
    </div>

</div>
    `;
    cartItemContainer.appendChild(newItem);

}
function increment1() {

    let num1 = document.getElementById("one");
    let currentNum = parseInt(num1.innerText);
    let result = currentNum + 1;
    num1.innerText = result;

    let num2 = document.getElementById("pkr");
    let currentNum2 = parseInt(num2.innerText);
    let product = currentNum2 * result;

    let num3 = document.getElementById("bill");
    num3.innerText = String(product);

}
function decrement1() {
    let num1 = document.getElementById("one")
    let currentNum = parseInt(num1.innerText);
    if (currentNum > 0) {
        var result = currentNum - 1;
        num1.innerText = result;
    }
    let num2 = document.getElementById("pkr");
    let currentNum2 = parseInt(num2.innerText);
    let product = currentNum2 * result;

    let num3 = document.getElementById("bill");
    num3.innerText = String(product);

}   
let check=document.getElementById("btn")
check.addEventListener('click',()=>{
    alert("Order Placed")
})