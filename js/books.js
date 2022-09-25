const abook = {
    id: 0,
    title: "",
    price: 0,
    info: "",
    picture: "",
}


let Books = [
    // {
    //     id: 1,
    //     title: "Book1",
    //     price: 45,
    //     info: "About in this booook......",
    //     picture: "someurl",
    //     basket: false,
    //     quantity: 0,

    // },
    // {
    //     id: 2,
    //     title: "Book2",
    //     price: 55,
    //     info: "About in this booook......",
    //     picture: "someurl",
    //     basket: false,
    //     quantity: 0,



    // },
    // {
    //     id: 3,
    //     title: "Book3",
    //     price: 50,
    //     info: "About in this booook......",
    //     picture: "someurl",
    //     basket: false,
    //     quantity: 0,



    // },
    // {
    //     id: 4,
    //     title: "Book4",
    //     price: 75,
    //     info: "About in this booook......",
    //     picture: "someurl",
    //     basket: false,
    //     quantity: 0,


    // }
];



const Basket = [
       
];



function addProduct(abook) {

    const div = document.createElement('div');
    div.className = "product card  col-centered";

    const productTitle = document.createElement("h4");
    productTitle.className = "p-5 m-5 productTitle";
    productTitle.innerHTML = abook.title;

    const productImg = document.createElement("img");
    productImg.className = "prodImg trigger-detail";
    productImg.src = abook.picture;

    const productPrice = document.createElement("p");
    productPrice.className = "prodPrice";
    productPrice.innerHTML = abook.price + " €";

    // const addCart = document.createElement('div');
    // addCart.className = "add-cart row-centered btn btn-success ";
    // addCart.innerHTML = "Add to Cart";


    const modal = document.createElement('div');
    modal.className = "modal modal-detail";

    const modal_content = document.createElement("div");
    modal_content.className = "modal-content-center prodDetail";

    modal.append(modal_content);


    const c_button = document.createElement('span');
    c_button.className = "close-button close-button-detail";
    c_button.innerHTML = "×";
    modal_content.append(c_button);

    

    const h1 = document.createElement('h1');
    h1.innerHTML = "Details/"+abook.title;
    modal_content.append(h1);

    
    const p = document.createElement('p');
    p.className = "row row-centered heading";
    p.innerHTML = abook.title;
    modal_content.append(p);





    const inner_row = document.createElement("div");
    inner_row.className ="row row-centered";

    modal_content.append(inner_row);

    const detimg = document.createElement("img");
    detimg.className = "detImg";
    detimg.src = abook.picture;
    detimg.style.border = "2px solid black" ;
    detimg.style.borderRadius = "0.5rem";
    detimg.style.width = "20rem";
    detimg.style.height = "20rem";

    inner_row.append(detimg);


    const text = document.createElement("p");
    text.innerHTML = abook.info;
    inner_row.append(text);


    const p1 = document.createElement('p');
    p1.className ="prodPrice row row-centered";
    p1.innerHTML = abook.price + " €";

    modal_content.append(p1);

    

    const price = document.createElement("div");
    price.className ="row row-centered mtb-5 border  btn-light";
    price.innerHTML = "Add to Cart";
    price.setAttribute("id", "add-cart");
    modal_content.append(price);


    div.append(productTitle);
    div.append(productImg);
    div.append(productPrice);
    // div.append(addCart);
    div.append(modal);

    const list = document.querySelector(".products-area");
    list.append(div);

}

setprods();


// function addProduct(){

// }


const form = document.getElementById('addform');
const title = document.querySelector("#form-title");
const price = document.querySelector("#price");
const info = document.querySelector("#info");
let pic = "";
const productImage = document.querySelector("#productImage").addEventListener("change", function(){

    const reader = new FileReader();

    reader.addEventListener("load",() => {
        pic = reader.result;
    });

    reader.readAsDataURL(this.files[0]);

} );






eventListeners();
function eventListeners(){
    form.addEventListener('submit', additem);

}


function additem(e){
    const book = {
        id: 0,
        title: title.value,
        price: price.value,
        picture: pic,
        info: info.value,
        basket: false,
        quantity: 0,


    }


    const last_len = window.localStorage.length;
    
    book.id = last_len +1 ;
    window.localStorage.setItem( book.id,JSON.stringify(book));
    
    // addProduct( window.localStorage.getItem(4));
    
    
    Books.push( JSON.parse(window.localStorage.getItem(book.id)));
    addProduct(book);
    

   // Books.push(book);

    
}


function setprods(){
     
    for (let i = 0; i < localStorage.length; i++){
        // addProduct(JSON.parse(localStorage.getItem(localStorage.key(i))));
        Books.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }

    Books.sort((a, b) => {
        return a.id - b.id;
    });

    Books.forEach((book) => {
        addProduct(book);
        });
        


}


function ordered(){
    window.alert("Your Order Has Been Approved.");
}

