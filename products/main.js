const firebaseConfig = {
    apiKey: "AIzaSyCsTD5XSRNl7VG-i6Ir0F3D1X1PxWk2Rfs",
    authDomain: "shopify-30670.firebaseapp.com",
    databaseURL: "https://shopify-30670-default-rtdb.firebaseio.com",
    projectId: "shopify-30670",
    storageBucket: "shopify-30670.appspot.com",
    messagingSenderId: "792157900529",
    appId: "1:792157900529:web:32d02d2d8b3fe05d94e350",
    measurementId: "G-MZC38NN5BZ"
};


firebase.initializeApp(firebaseConfig);
var database = firebase.database();



database.ref("shopless/products/").on("child_added", (snapshot) => {
    //console.log('-----getting data Started--------')
    const data = snapshot.val();
   // console.log('create function')
    // create(data.title, data.image, data.subtitle, data.pageurl);
    //console.log('-------getting Stopped------')
    
    // var name = data.product_name;
    // var img = data.product_image;
    // var price = data.product_price;
    // var quantity = data.quantity;
    
        
    console.log(data)

    
    // const img = document.querySelector("#img")
    // const name = document.querySelector("#name")
    // const price = document.querySelector("#price")
    // const description = document.querySelector("#description")
    // img.src=data.product_image
    // name.textContent= data.product_name
    // price.textContent= data.product_price
   // description.textContent= data.product_description

    document.body.innerHTML+=`
    <img src="${data.product_image}" alt="">
    <h1 id="name">${data.product_name}</h1>
    <h3 id="price">${data.product_price}</h3>
    <label id="description" for="">${data.product_description}</label>
    `
    
  });