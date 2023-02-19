
let data  = JSON.parse(localStorage.getItem("alibabacart")) || [];
// console.log(data);
// 

let display  = (data)=>{
    let cont = document.getElementById("place-order");
    // cont.innerHTML = null;
    data.forEach((ele)=>{
        
        let data = localStorage.getItem("price");
        let price_box = document.getElementById("cart_total")
        price_box.textContent= "USD "+data
        let ship = document.getElementById("items_total");
        ship.textContent = "USD "+ "200"
        let order = document.getElementById("order_T");
        order.textContent = "USD "+ Number(data + 200);
        let trans = document.getElementById("tr");
        trans.textContent = "USD "+ "20";
        let paumet = document.getElementById("pay");
        paumet.textContent = "USD "+ Number(data + 200 + 20);


    })
}
display(data);
let buttopn =  document.getElementById("place-btn");
buttopn.addEventListener("click", myFunction)
    function myFunction() {
        let OTP = 123456;
        let person = prompt("Please Enter OTP", "example: 536728");
        if (person != null && person==OTP) {
          
         window.alert("Your order is successfully placed")
        }else{
            console.log("Wrong OPT ! Please provide correct OTP")
        }
    }
   