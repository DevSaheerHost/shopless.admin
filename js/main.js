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

// HTML input element


// JavaScript to handle file selection
// document.getElementById('fileInput').addEventListener('change', function (event) {
//     var file = event.target.files[0]; // Get the selected file
//     if (file) {
//         var reader = new FileReader(); // Create a FileReader
//         reader.onload = function (e) {
//             var contents = e.target.result; // The file's text content is in e.target.result
//             //console.log(contents);

//         };
//         reader.readAsText(file); // Read the file as text
//     }
// });

const uploadBtn = document.querySelector("#upload")
uploadBtn.addEventListener("click", () => {
    upload()
})
function upload(){
    uploadBtn.innerHTML=`<img src="./loading.gif" alt="">`
    uploadBtn.classList.add("btn_loading")

    const path = document.querySelector("#path")
    let postRef = firebase.database().ref('shopless/' + path.value);
    const imgUrl = document.querySelector("#imgURL")
    const name = document.querySelector("#name")
    const price = document.querySelector("#price")
    const description = document.querySelector("#description")
    const quantity = document.querySelector("#qty")
    const brand = document.querySelector("#brand")
    const href = document.querySelector("#href")
    let wordToCheck = "ads/"
    let filepath = path.value
    if (filepath.includes(wordToCheck)) {
//console.log(contents)


var update1 = {};
update1['ads1'] = imgUrl.value;
var update2 = {};
update2['ads2'] = imgUrl.value;
var update3 = {};
update3['ads3'] = imgUrl.value;


let userInput = prompt("Please enter add number", "1");

if (userInput != null) {
  //console.log("Hello " + userInput + "! How are you today?");
  if(userInput==1){
    postRef.update(update1).then(() => {
        console.log('Update successful!');

        uploadBtn.classList.remove("btn_loading")
                uploadBtn.innerHTML=`<img class="doneGif" src="./done.gif" alt="">`
                uploadBtn.style.border="solid 1px #41B06E"
                uploadBtn.style.background="#222831"
                setTimeout(success, 3000)

                
      }).catch((error) => {
        console.error('Update failed: ' + error.message);

        uploadBtn.style.border="solid 1px red"
            uploadBtn.innerHTML=`
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
            `
            setTimeout(success, 3000)
      });
      
  } else {
    if (userInput==2) {
        postRef.update(update2).then(() => {
            console.log('Update successful!');

            uploadBtn.classList.remove("btn_loading")
                uploadBtn.innerHTML=`<img class="doneGif" src="./done.gif" alt="">`
                uploadBtn.style.border="solid 1px #41B06E"
                uploadBtn.style.background="#222831"
                setTimeout(success, 3000)


          }).catch((error) => {
            console.error('Update failed: ' + error.message);

            uploadBtn.style.border="solid 1px red"
            uploadBtn.innerHTML=`
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
            `
            setTimeout(success, 3000)
          });
    } else {
        if (userInput == 3) {
            postRef.update(update3).then(() => {
                console.log('Update successful!');

                uploadBtn.classList.remove("btn_loading")
                uploadBtn.innerHTML=`<img class="doneGif" src="./done.gif" alt="">`
                uploadBtn.style.border="solid 1px #41B06E"
                uploadBtn.style.background="#222831"
                setTimeout(success, 3000)


              }).catch((error) => {
                alert('Update failed: ' + error.message);

                uploadBtn.style.border="solid 1px red"
            uploadBtn.innerHTML=`
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
            `
            setTimeout(success, 3000)
              });
        }
    }
  } 
} else {

    uploadBtn.style.border="solid 1px red"
            uploadBtn.innerHTML=`
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
            `
            setTimeout(success, 3000)
  // alert("Aborted By Admin.");
}

        
       
        //alert("this is adds " + path.value)

    } else {
        postRef.push({
            'product_name': name.value,
            'product_image': imgUrl.value,
            'product_price': price.value,
            'product_description': description.value,
            'quantity': quantity.value,
            'brand': brand.value,
            'href': href.value,
        })
            .then(res => {
                // console.log(res.getKey()) // this will return you ID
                // setTimeout(clearTitle, 50)
                // setTimeout(clearSubTitle, 100)
                // setTimeout(clearImage, 200)
                // setTimeout(clearColor, 300)
                // setTimeout(clearUrl, 400)

                
                uploadBtn.classList.remove("btn_loading")
                uploadBtn.innerHTML=`<img class="doneGif" src="./done.gif" alt="">`
                uploadBtn.style.border="solid 1px #41B06E"
                uploadBtn.style.background="#222831"
                setTimeout(success, 3000)

            })
            .catch(error => console.log(error));
            document.querySelector(".error").innerHTML= error

            uploadBtn.style.border="solid 1px red"
            uploadBtn.innerHTML=`
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
            `
            setTimeout(success, 3000)

            

    }



}


//-------

function success(){
    uploadBtn.innerHTML=`Upload`
    uploadBtn.style.background= "#76ABAE"
    uploadBtn.style.color= "#EEEEEE"
    uploadBtn.style.border= "none"
    
}