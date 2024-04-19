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
  var loginBtn = document.querySelector("#loginBTN")

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

          setTimeout(loginBTNnormal, 3000)

          setTimeout(() => {
            $(".lock-card").slideUp(300);
            $(".form").slideDown(300);

            let vertionReq = "corrent"
            let vertion = "old"
            let vertionRef = firebase.database().ref('shopless/admin/vertion');


            // Read the data once
            vertionRef.once('value', function (snapshot) {

              snapshot.forEach(function (childSnapshot) {
                var vertionKey = childSnapshot.key;
                var vertionValue = childSnapshot.val();

                if (vertionKey == "code") {
                  $("#verText").html("Updated "+ vertionValue)
                  if (vertionValue != localStorage.getItem("vertion")) {
                    $(".uprateCard").slideDown(300)
                    $(".form").slideUp(300);
                    localStorage.setItem("vertion", vertionValue)
                    alert(vertionValue)
                  } else{
                    $(".form").slideDown(300)
                    $(".uprateCard").slideUp(300);
                  }
                }

                $("#closeDetails").click(function(){
                  localStorage.setItem("vertion", vertionValue)
                  $(".form").slideDown(300)
                    $(".uprateCard").slideUp(300);
                })

                console.log('Key:', vertionKey, 'Value:', vertionValue);

              });
            });


          }, 2500);
        } else{
          loginBtn.classList.remove("btn_loading")
          //loginBtn.innerHTML = `<img class="doneGif" src="./done.gif" alt="">`
          //loginBtn.style.border = "solid 1px #41B06E"
          loginBtn.style.background = "#222831"
          loginBTNnormal()
          //setTimeout(loginBTNnormal, 3000)
          // $("#loginBTN").click(function(){
          //   if (condition) {
              
          //   }
          // })


          // loginBtn.classList.remove("btn_loading")
          // loginBtn.innerHTML = `<img class="doneGif" src="./done.gif" alt="">`
          // loginBtn.style.border = "solid 1px #41B06E"
          // loginBtn.style.background = "#222831"

          // setTimeout(loginBTNnormal, 3000)

          

            let vertionReq = "corrent"
            let vertion = "old"
            let vertionRef = firebase.database().ref('shopless/admin/vertion');


            // Read the data once
            vertionRef.once('value', function (snapshot) {

              snapshot.forEach(function (childSnapshot) {
                var vertionKey = childSnapshot.key;
                var vertionValue = childSnapshot.val();

                if (vertionKey == "code") {
                  $("#verText").html("Updated "+ vertionValue)
                  if (vertionValue != localStorage.getItem("vertion")) {
                    $(".uprateCard").slideDown(300)
                    $(".form").slideUp(300);
                    //localStorage.setItem("vertion", vertionValue)
                  } else{
                    $(".lock-card").slideDown(300)
                    $(".uprateCard").slideUp(300);
                  }
                }

                $("#closeDetails").click(function(){
                  localStorage.setItem("vertion", vertionValue)
                  $(".lock-card").slideDown(300)
                    $(".uprateCard").slideUp(300);
                })

                console.log('Key:', vertionKey, 'Value:', vertionValue);

              });
            });


          


          
        }
      }
      
      if (key == "password") {
         dbPWD = value
        //alert(key)
      }
      if (key == "username") {
         dbUname = value
        console.log("uname=========: "+ dbUname)
        //alert(value)
      }
    });
  });
  let Uname = document.querySelector("#Uname")
  let Pwd = document.querySelector("#Pwd")

  let adminName= localStorage.getItem("admin_name")

  if (adminName!=null) {
    $("#adminName").hide(100)
  }
  
  $("#loginBTN").click(function () {
    if (Uname.value != "") {
      if (Pwd.value != "") {
        // alert(dbUname)
        if (Uname.value == dbUname) {
          //alert("uname done")
          if (Pwd.value == dbPWD) {
            if (adminName==null) {
              if (document.querySelector("#adminName").value.length>3) {
                //alert(document.querySelector("#adminName").value)
                localStorage.setItem("admin_name", document.querySelector("#adminName").value)
                $(".lock-card").slideUp(300);
                $(".form").slideDown(300);
              }
            } else{
              $(".lock-card").slideUp(300);
                $(".form").slideDown(300);
            }
            // alert("all")
          } else{
            Pwd.classList.add("inputError")
            setTimeout(() => {
              Pwd.classList.remove("inputError")
            }, 1000);
          }
        } else {
          Uname.classList.add("inputError")
          setTimeout(() => {
            Uname.classList.remove("inputError")
          }, 1000);
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

  function loginBTNnormal() {
    loginBtn.innerHTML = `LOGIN`
    loginBtn.style.background = btn_normal_bg
    loginBtn.style.color = "#EEEEEE"
    loginBtn.style.border = "none"

  }
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













  


// Get the operating system
const os = navigator.platform;

// Get the browser's user agent
const userAgent = navigator.userAgent;

// Get the browser's language
const language = navigator.language;

// Log the device information
console.log(`Operating System: ${os}`);
console.log(`User Agent: ${userAgent}`);
console.log(`Browser Language: ${language}`);






// firebase.initializeApp(firebaseConfig);

// Get a reference to the Firebase Realtime Database
var db = firebase.database();

// Reference to the users' status path in your database
var usersStatusDatabaseRef = db.ref('/shopless/admin/status');

// Check if admin_name is stored in localStorage and set the userStatusDatabaseRef accordingly
if(localStorage.getItem("admin_name") != null){
  let id = localStorage.getItem("admin_name");
  var userStatusDatabaseRef = usersStatusDatabaseRef.child(id);
} else {
  // Reference to the current user's status using a placeholder 'os' variable
  // Make sure to define 'os' or replace it with the actual user ID or another identifier
  var userStatusDatabaseRef = usersStatusDatabaseRef.child('os_placeholder');
}

// Function to format the timestamp into a human-readable date and time
function formatTimestamp(timestamp) {
  var date = new Date(timestamp);
  var formattedDate = date.toLocaleDateString('en-IN') + ' ' + date.toLocaleTimeString('en-IN');
  return formattedDate;
}

// Reference to the /.info/connected path in Firebase Realtime Database
var isOnlineForDatabase = db.ref('.info/connected');
isOnlineForDatabase.on('value', function(snapshot) {
  // If we're not currently connected, don't do anything
  $(".status").html("Online|")
  if (snapshot.val() == false) {
    return;
  };

  
  // If we are currently connected, then use the 'onDisconnect()' method
  userStatusDatabaseRef.onDisconnect().update({
    status: 'offline',
    last_changed: firebase.database.ServerValue.TIMESTAMP
  }).then(function() {
    
    // Get the server timestamp and convert it to a human-readable format
    db.ref('.info/serverTimeOffset').once('value').then(function(offsetSnapshot) {
      var serverTime = Date.now() + offsetSnapshot.val();
      var formattedTime = formatTimestamp(serverTime);

      // Set our user's online status to 'online' with the formatted timestamp
      userStatusDatabaseRef.update({
        status: 'online',
        last_changed: formattedTime
      });
    });
  });
});

// Listen for changes in the user's status and log the status change with the formatted timestamp
userStatusDatabaseRef.on('value', function(snapshot) {
  if(snapshot.val() != null){
    console.log('User status changed to: ' + snapshot.val().status);
    console.log('Time: ' + snapshot.val().last_changed);
    
  }
});


$(".side_menu").slideUp(0)

$(".menu_btn").click(function(){
  $(".side_menu").slideDown(200)
})
$(".close_nav").click(function(){
  $(".side_menu").slideUp(200)
})



// Function to call when connected to the internet
function onInternetConnected() {
  console.log("Internet connection is now available.");
  // Perform actions when internet is connected
}

// Function to call when disconnected from the internet
function onInternetDisconnected() {
  $(".status").html("Offline")
  // Perform actions when internet is disconnected
}

// Add event listeners for the online and offline events
window.addEventListener('online', onInternetConnected);
window.addEventListener('offline', onInternetDisconnected);

// Initial check for internet connection
if(navigator.onLine) {
  onInternetConnected();
} else {
  onInternetDisconnected();
}





var themeData = localStorage.getItem("theme")
if (themeData!=null) {
  document.querySelector("#theme_selector").value=themeData
  if (themeData=="Light") {
    document.querySelector(".logo").src="./logo_light.png"
  }else{
    if (themeData=="Darck") {
      document.querySelector(".logo").src="./logo.png"
    }
  }
  
  document.body.classList.add(themeData)
}

$("#theme_selector").change(function(){
  if (this.value=="Light") {
   document.body.classList.add(this.value)
   document.body.classList.remove("Dark")
   localStorage.setItem("theme", "Light")
   document.querySelector(".logo").src="./logo_light.png"
  } else{
    if (this.value=="Dark") {
      document.body.classList.add(this.value)
      document.body.classList.remove("Light")
      localStorage.setItem("theme", "Dark")
   document.querySelector(".logo").src="./logo.png"

     }
  }
})



})





navigator.getBattery().then(function(battery) {
  function updateBatteryStatus() {
    console.log("Battery charge level: " + (battery.level * 100) + "%");
    console.log("Battery charging: " + (battery.charging ? "Yes" : "No"));
    console.log("Battery charging time: " + (battery.chargingTime / 60) + " minutes");
    console.log("Battery discharging time: " + (battery.dischargingTime / 60) + " minutes");
bl=battery.level * 100
    if (bl<20) {
      alert("Your battery too low: "+ bl+"%")
    }let bc = battery.charging ? "Yes" : "No"
    if (bc=="Yes") {
     if (bl>90) {
      alert("Battery Aproximatly done: "+bl+"%") 
     }
    }
  }

  // Update the battery status initially
  updateBatteryStatus();

  // Set up event listeners to update the status whenever it changes
  battery.addEventListener('chargingchange', function() {
    updateBatteryStatus();
  });
  battery.addEventListener('levelchange', function() {
    updateBatteryStatus();
  });
  battery.addEventListener('chargingtimechange', function() {
    updateBatteryStatus();
  });
  battery.addEventListener('dischargingtimechange', function() {
    updateBatteryStatus();
  });




});
