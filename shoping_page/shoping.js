// let items = JSON.parse(localStorage.getItem("alibabacart"));

let getdata =async()=>{
    let res  = await fetch(`http://localhost:3000/product`)
    let data = await res.json();
    displayitems(data)
   
   
}
getdata();



function setinlocal(key, value){
    localStorage.setItem(key, JSON.stringify(value));
}


let totaprice = JSON.parse(localStorage.getItem("price"));

let total = 0;
let number =0;

function displayitems(items) {
    let location = document.querySelector("#left");
    location.innerHTML = null;

    items.forEach(({ productTitle, productImg, price, qty}, index) => {

        
       
        let qtyinput = document.createElement("input");
       qtyinput.value = 1;
        let card = document.createElement("div");

        let imagediv = document.createElement("div");
        let image = document.createElement("img");
        image.src = productImg;
        imagediv.append(image);


        let desdiv = document.createElement("div");
        let title = document.createElement("p");
        title.textContent = productTitle;

        let removebtndiv = document.createElement("div");
        removebtndiv.setAttribute("class", "removesym");
        removebtndiv.innerHTML = `<i class="fas fa-times"></i>`;

        let pricediv = document.createElement("div");
        let priceperpiece = document.createElement("p");
        priceperpiece.textContent = (price);

        let qtydiv = document.createElement("div");
        qtydiv.setAttribute("class", "qtydiv");

        


        let decP = document.createElement("p");
        decP.textContent = "-";
        let decdiv = document.createElement("div");
        decdiv.append(decP);

        decdiv.onclick = () => {
            
            if(qtyinput.value>1){
            number =qtyinput.value--;
            total -=Number(price)
            setinlocal("price", total);
            setinlocal("qty", number);
            
            document.getElementById("totalamount").textContent= "USD "+ (total-price);
            subtotal.textContent = "Subtotal : ₹ " + ((qtyinput.value * price).toFixed(2));
           
            items[index].qty = qtyinput.value;
            setinlocal("alibabacart", items)
            // localStorage.setItem("alibabacart", JSON.stringify(items));
            
        }
    }

        let incP = document.createElement("p");
        incP.textContent = "+";
        let incdiv = document.createElement("div");
        incdiv.append(incP);
        incdiv.onclick = () => {
           
           
            number =qtyinput.value++;
                total += Number(price)+Number(price)
            setinlocal("qty", number)
            
           document.getElementById("totalamount").textContent= "USD "+total;
            subtotal.textContent = "Subtotal : ₹ " + ((qtyinput.value * price));
           
           setinlocal("price", total)
            setinlocal("alibabacart", items)
         
        }
        
        
       
      
        // document.querySelector("#totalamount").textContent = "₹ " + (total())
       
        let perprice = document.createElement("p");
        perprice.textContent = `₹ ${(price)} (Per Piece)`;

        qtydiv.append(perprice, decdiv, qtyinput, incdiv);



        let subtotal = document.createElement("p");
        subtotal.textContent = "Subtotal : ₹ " + ((qtyinput.value * price).toFixed(2));

        desdiv.append(removebtndiv, title, pricediv, qtydiv, subtotal);

        card.append(imagediv, desdiv);
        location.append(card);

        removebtndiv.firstChild.onclick = () => {
            items = items.filter((ele) => {
                return ele != items[index];
            });
            localStorage.setItem("alibabacart", JSON.stringify(items));
            displayitems(items);
            total(items);
           
        }
    });
}
function submitorder(){
    window.location.href = "../payment_page/address.html"
 }
 function gettotal(){
    let data =localStorage.getItem("price");
    console.log(data)
    
 }
 gettotal()