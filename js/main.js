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

$(document).ready(function () {
var loginBtn=document.querySelector("#loginBTN")

loginBtn.innerHTML = `<img src="./loading.gif" alt="">`
    loginBtn.classList.add("btn_loading")

  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

  let lockref = firebase.database().ref('shopless/admin/');

  // Read the data once
  lockref.once('value', function (snapshot) {
    // Iterate over each child
    snapshot.forEach(function (childSnapshot) {
      var key = childSnapshot.key; // The key for the child data
      var value = childSnapshot.val(); // The value/data for the child

      // Do something with the key and value
      console.log('Key:', key, 'Value:', value);

      if (key == "lock") {
        if (value == "") {
          loginBtn.classList.remove("btn_loading")
          loginBtn.innerHTML = `<img class="doneGif" src="./done.gif" alt="">`
          loginBtn.style.border = "solid 1px #41B06E"
          loginBtn.style.background = "#222831"

          $(".lock-card").slideUp(300);
          $(".form").slideDown(300);
        }
      }
      if (key == "password") {
        var dbPWD = value
      }
      if (key == "username") {
        var dbUname = value
        //alert(dbUname)
      }
    });
  });
  let Uname = document.querySelector("#Uname")
  let Pwd = document.querySelector("#Pwd")
  $("#loginBTN").click(function (dbPWD, dbUname) {
    if (Uname.value != "") {
      if (Pwd.value != "") {
        alert("emtok")
        if (Uname.value == dbUname) {
          alert("uname done")
          if (Pwd.value == dbPWD) {
            $(".form").slideUp(300);
            $(".lock-card").slideDown(300);
            alert("done")
          }
        } else {
          alert(dbUname)
        }
      }
    }
  })


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

  var btn_normal_bg = "#526988"

  const uploadBtn = document.querySelector("#upload")
  uploadBtn.addEventListener("click", () => {
    upload()
  })
  function upload() {
    uploadBtn.innerHTML = `<img src="./loading.gif" alt="">`
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
      var update4 = {};
      update4['ads4'] = imgUrl.value;
      var update5 = {};
      update5['ads5'] = imgUrl.value;
      var update6 = {};
      update6['ads6'] = imgUrl.value;
      var update7 = {};
      update7['ads7'] = imgUrl.value;
      var update8 = {};
      update8['ads8'] = imgUrl.value;
      var update9 = {};
      update9['ads9'] = imgUrl.value;


      let userInput = prompt("Please enter add number", "1");

      if (userInput != null) {
        //console.log("Hello " + userInput + "! How are you today?");
        if (userInput == 1) {
          postRef.update(update1).then(() => {
            console.log('Update successful!');

            BTNsuccess()
            setTimeout(BTNnormal, 3000)


          }).catch((error) => {
            console.error('Update failed: ' + error.message);

            BTNerror()
            setTimeout(BTNnormal, 3000)
          });

        } else {
          if (userInput == 2) {
            postRef.update(update2).then(() => {
              console.log('Update successful!');

              BTNsuccess()
              setTimeout(BTNnormal, 3000)


            }).catch((error) => {
              console.error('Update failed: ' + error.message);

              BTNerror()
              setTimeout(BTNnormal, 3000)
            });
          } else {
            if (userInput == 3) {
              postRef.update(update3).then(() => {
                console.log('Update successful!');

                BTNsuccess()
                setTimeout(BTNnormal, 3000)


              }).catch((error) => {
                alert('Update failed: ' + error.message);

                BTNerror()
                setTimeout(BTNnormal, 3000)
              });
            } else {
              if (userInput == 4) {
                postRef.update(update4).then(() => {
                  console.log('Update successful!');

                  BTNsuccess()
              setTimeout(BTNnormal, 3000)


                }).catch((error) => {
                  alert('Update failed: ' + error.message);

                  BTNerror()
              setTimeout(BTNnormal, 3000)
                });
              } else {
                if (userInput == 5) {
                  postRef.update(update5).then(() => {
                    console.log('Update successful!');

                    BTNsuccess()
                    setTimeout(BTNnormal, 3000)


                  }).catch((error) => {
                    alert('Update failed: ' + error.message);

                    BTNerror()
              setTimeout(BTNnormal, 3000)
                  });
                } else {
                  if (userInput == 6) {
                    postRef.update(update6).then(() => {
                      console.log('Update successful!');

                      BTNsuccess()
              setTimeout(BTNnormal, 3000)


                    }).catch((error) => {
                      alert('Update failed: ' + error.message);

                      BTNerror()
              setTimeout(BTNnormal, 3000)
                    });
                  } else {
                    if (userInput == 7) {
                      postRef.update(update7).then(() => {
                        console.log('Update successful!');

                        BTNsuccess()
              setTimeout(BTNnormal, 3000)


                      }).catch((error) => {
                        alert('Update failed: ' + error.message);

                        BTNerror()
              setTimeout(BTNnormal, 3000)
                        setTimeout(BTNnormal, 3000)
                      });
                    } else {
                      if (userInput == 8) {
                        postRef.update(update8).then(() => {
                          console.log('Update successful!');

                          BTNsuccess()
              setTimeout(BTNnormal, 3000)


                        }).catch((error) => {
                          alert('Update failed: ' + error.message);

                          BTNerror()
              setTimeout(BTNnormal, 3000)
                        });
                      } else {
                        if (userInput == 9) {
                          postRef.update(update9).then(() => {
                            console.log('Update successful!');

                            BTNsuccess()
                            setTimeout(BTNnormal, 3000)


                          }).catch((error) => {
                            alert('Update failed: ' + error.message);

                            BTNerror()
                            setTimeout(BTNnormal, 3000)
                          });
                        } else {
                          BTNerror()
              setTimeout(BTNnormal, 3000)
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } else {


        BTNerror()
        setTimeout(BTNnormal, 3000)
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


          BTNsuccess()
              setTimeout(BTNnormal, 3000)

        })
        .catch(error => console.log(error));
      document.querySelector(".error").innerHTML = error

      BTNerror()
      setTimeout(BTNnormal, 3000)



    }



  }


  //-------

  function BTNnormal() {
    uploadBtn.innerHTML = `Upload`
    uploadBtn.style.background = btn_normal_bg
    uploadBtn.style.color = "#EEEEEE"
    uploadBtn.style.border = "none"

  }

  function BTNerror() {
    uploadBtn.style.border = "solid 1px red"
    uploadBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
          </svg>
                    `
    setTimeout(BTNnormal, 3000)

  }

  function BTNsuccess() {
    uploadBtn.classList.remove("btn_loading")
    uploadBtn.innerHTML = `<img class="doneGif" src="./done.gif" alt="">`
    uploadBtn.style.border = "solid 1px #41B06E"
    uploadBtn.style.background = "#222831"
  }






})