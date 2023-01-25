
let data  = JSON.parse(localStorage.getItem("alibabacart")) || [];
// console.log(data);
// 

let display  = (data)=>{
    let cont = document.getElementById("place-order");
    // cont.innerHTML = null;
    data.forEach((ele)=>{
        let sum =0;
        for(var index =0; index<data.length; index++)
        {
            sum += Number(data[index].price)
        }
        let price_box = document.getElementById("cart_total")
        price_box.textContent= "USD "+sum
        let ship = document.getElementById("items_total");
        ship.textContent = "USD "+ "200"
        let order = document.getElementById("order_T");
        order.textContent = "USD "+ Number(sum + 200);
        let trans = document.getElementById("tr");
        trans.textContent = "USD "+ "20";
        let paumet = document.getElementById("pay");
        paumet.textContent = "USD "+ Number(sum + 200 + 20);


    })
}
display(data);
let buttopn =  document.getElementById("place-btn");
buttopn.addEventListener("click", myFunction)
    function myFunction() {
        let OTP = 1234;
        let person = prompt("Please Enter OTP", "example: 536728");
        if (person != null && person==OTP) {
         window.location.href = "../suc_payment.html"
        }else{
            alert("wrong otp!");
        }
    }

    function showpay(){
        let itemstotal = document.getElementById("cart_total");
        let curr = localStorage.getItem("total-price");
        if(curr!=0){
        itemstotal.innerText= "INR " + curr ;
       let shipping = document.getElementById("items_total");
       shipping.innerText = "INR 2000" ;
       let total = Number(curr)+2000 ;
       let ordert = document.getElementById("order_T");

       ordert.innerText= "INR " + total;
       let tr = document.getElementById("tr");
       tr.innerText = "INR 250"
       let pay = document.getElementById("pay");
       let paytotal = total + 250 ;
       pay.innerText= "INR "+ paytotal ;
        }else{
           
            let shipping = document.getElementById("items_total");
            shipping.innerText = "0" ;
           
            let ordert = document.getElementById("order_T");
            ordert.innerText= "0";

            let tr = document.getElementById("tr");
            tr.innerText = "0"
            let pay = document.getElementById("pay");
            let paytotal = "0";
            pay.innerText= paytotal ;
        }

    }
    showpay();
   