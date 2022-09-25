const modal_add = document.querySelector(".modal-add");
const modal_basket = document.querySelector(".modal-basket");
const modal_whislist = document.querySelector(".modal-wishlist");
//const modal_product = document.querySelector(".modal-detail");

const trigger_add = document.querySelector(".trigger-add");
const trigger_basket = document.querySelector(".trigger-basket");
const trigger_whislist = document.querySelector(".trigger-wishlist");
//const trigger_detail = document.querySelector(".trigger-detail");

const closeButton_add = document.querySelector(".close-button-add");
const closeButton_basket = document.querySelector(".close-button-basket");
const closeButton_wishlist = document.querySelector(".close-button-wishlist");
// const closeButton_detail = document.querySelector(".close-button-detail");


function toggleModal() {
    modal_add.classList.toggle("show-modal");
    
}

function toggleModalBasket() {
    modal_basket.classList.toggle("show-modal");
    var e =document.querySelector("#basket-area");
    while (e.firstChild) {
        e.removeChild(e.firstChild);
    }

    let totalCost = 0;
    Basket.forEach((item) => {
        addItemsToBasket(item);    
        let tempcost = item.price
        const lencost = tempcost.length;
        let de = 0
        de = tempcost.substr(0,lencost-2);
        tempcost = parseInt(de);
        tempcost = parseInt(item.price) * parseInt(item.quantity);
        totalCost += tempcost;  
        console.log(tempcost);

    });


    
  
    if (Basket.length < 1){
        const pay = document.getElementById("pay");
        pay.classList.toggle("dsp-n");
        const div_basket = document.querySelector("#basket-area");

        const h2 = document.createElement("h2");
        h2.innerHTML = "There is no item in your basket yet!"

        div_basket.append(h2);
    }
    else {

        const div_basket = document.querySelector("#basket-area");

        const h2 = document.createElement("h4");
        h2.innerHTML = "Total Cost : " + totalCost + "€";

        div_basket.append(h2);
        
    }

}

// function toggleModalDetail(){
//     modal_product.classList.toggle("show-modal");
// }

function windowOnClick(event) {
    if (event.target === modal_add) {
        toggleModal();
    }

    else if (event.target === modal_basket) {
        toggleModalBasket();
        var e =document.querySelector("#basket-area");
        while (e.firstChild) {
            e.removeChild(e.firstChild);
        }

    }

    else if (event.target === modal_whislist) {
        toggleModalDetail();
    }

}





window.addEventListener("click", windowOnClick);


trigger_add.addEventListener("click", toggleModal);
closeButton_add.addEventListener("click", toggleModal);
const continue_shop = document.querySelector("#cont");
continue_shop.addEventListener("click", toggleModalBasket);


trigger_basket.addEventListener("click", toggleModalBasket);
closeButton_basket.addEventListener("click", toggleModalBasket);



function getmodalDetails() {

    const modal_details = document.querySelectorAll(".modal-detail");

    return modal_details;

}


function getmodalTrigger() {

    const modal_details_trigger = document.querySelectorAll(".trigger-detail");

    return modal_details_trigger;

}


function getmodalclose() {

    const close_buttons = document.querySelectorAll(".close-button-detail");

    return close_buttons;

}

function getAddCartTrigger() {
    const addCartButtons = document.querySelectorAll("#add-cart");
    return addCartButtons;
}


const modal_details = getmodalDetails();
const modal_details_trigger = getmodalTrigger();
const close_buttons = getmodalclose();
const addCartTrigger = getAddCartTrigger();




modal_details_trigger.forEach((item, index) => {
    item.addEventListener('click', function () {
        toggleModalProd(index);
    })

});




close_buttons.forEach((item, index) => {
    item.addEventListener("click", function () {
        toggleModalProd(index);
    })
});
let ind = 0;
function toggleModalProd(index) {
    modal_details[index].classList.toggle("show-modal");
    ind = index;
}

window.addEventListener("click", clickOutside);
const modal_detail = document.querySelector("modal-detail");

function clickOutside(event) {
    if (event.target === modal_details[ind])
        toggleModalProd(ind);
}


addCartTrigger.forEach((item) => {
    item.addEventListener("click", createBasketItem);
})



function createBasketItem(e) {
    const BasketItem =  {
        id:0,
        title:"BasketItem",
        picture:"picurl",
        quantity:0,
    
    }


    const maindiv = e.target.parentElement.children;
    const title = maindiv[2].innerHTML;
    const price = maindiv[4].innerHTML;
    const imgURL = maindiv[3].children[0].src;


    console.log(title);
    console.log(price);
    console.log(imgURL);

    let flag = false;
    let index = -1;


    Basket.forEach((element,ind ) => {
        // console.log("Her Bir: ",element.picture);
        if (element.picture === imgURL) {
            flag = true;
            index = ind;
        }
    });
    if (flag) {
        console.log("Buraya Girmemesi Lazım")
        Basket[index].quantity = Basket[index].quantity + 1;
        console.log("Eklemeden Sonra Listesi: ", Basket);
        flag = false;

    }
    //Eğer ürün basket listesinde yoksa 
    else {
        console.log("buraya girdi");
        console.log(BasketItem.title);
        BasketItem.title = title;
        console.log(BasketItem.title);
        BasketItem.price = price;
        BasketItem.picture = imgURL;
        BasketItem.quantity = 1;
        Basket.push(BasketItem);
        console.log("Eklemeden Sonra Listesi: ", Basket);


    }


    // BasketItem.title = title;
    // BasketItem.price = price;
    // BasketItem.picture = imgURL;
    // BasketItem.quantity = BasketItem.quantity + 1;



    // Basket.push(BasketItem);
    // console.log("Basketteki item: ", BasketItem);
    // console.log("Baskett: ", Basket);






}


function findItemınBasket(Basket, BasketItem) {
    let flag = false;
    let index = 0;
    Basket.forEach(element => {
        // console.log("Her Bir: ",element.picture);
        if (element.picture === imgURL) {
            flag = true;
            index = element;
        }
    });
    // console.log("İndex of İtem: ", index);
    if (flag) {
        Basket[index].quantity = Basket[index].quantity + 1;

    }
    else {
        BasketItem.title = title;
        BasketItem.price = price;
        BasketItem.picture = imgURL;
        BasketItem.quantity = 1;
    }
}


function addItemsToBasket( item){

    const basket_product = document.createElement("div");
    basket_product.className = "basket-product row";

    const basket_img = document.createElement("img");
    basket_img.src = item.picture;

    const exp = document.createElement("p");
    exp.innerHTML = item.title;

    
    const quant = document.createElement("div");
    quant.className = "quantity";

    
    const q = document.createElement("p");
    q.innerHTML = "Quantity :" + item.quantity;
    
    quant.append(q);

    const p = document.createElement("p");
    p.innerHTML = "Piece :"+ item.price ;
    
    quant.append(p);
    
    // const del = document.createElement("div");
    // del.className = "delete";
    // del.innerHTML = "Delete";


    basket_product.append(basket_img);
    basket_product.append(exp);
    basket_product.append(quant);
    // basket_product.append(del);


    const basket_area = document.querySelector("#basket-area");
    basket_area.append(basket_product);


}


const pay = document.querySelector("#pay");
pay.addEventListener("click", () =>{
    document.querySelector("#confirmation").classList.toggle("dsp-n");

});


function checkBasket (Basket){
    if (Basket.length === 0){

        trigger_basket.addEventListener("click"), () => {
            const pay = document.getElementById(pay);
            pay.classList.toggle("dsp-n");
            console.log(Basket);

        }

    }
}






