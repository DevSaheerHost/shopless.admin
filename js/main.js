import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js"; import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js"; import { getDatabase, ref, child, get, onValue, onChildAdded, onChildChanged, onChildRemoved, update, push, serverTimestamp, onDisconnect, remove } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js";


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

var cmd = document.querySelector(".cmdText")
cmd.innerHTML += "<label>> Initializing...</label>"
let normArrow = ">"
$(".cmd").show()
$(document).ready(function () {

  cmd.innerHTML += "<label>> Resolving paths...</label>"
  var loginBtn = document.querySelector("#loginBTN")

  loginBtn.innerHTML = `<img src="./loading.gif" alt="">`
  loginBtn.classList.add("btn_loading")

  const app = initializeApp(firebaseConfig); const db = getDatabase(app); const analytics = getAnalytics(app);

let dbUname = ""; let dbPWD = "";

const dbRef = ref(db); const lockref = ref(db, 'shopless/admin/'); const vertionRef = ref(db, 'shopless/admin/vertion');

  //let lockref = firebase.database().ref('shopless/admin/');
  cmd.innerHTML += "<label>> Initializing security parameters...</label>"
  cmd.innerHTML += "<label>> Fetching authentication state...</label>"



const qs=selector=>document.querySelector(selector)

qs('#editData').onclick=()=>{
  qs('div.card.form').classList.add('hidden')
  qs('.listPage').classList.remove('hidden')
  qs('.side_menu').classList.remove('open')
  cmd.innerHTML += `> Data edit page open`;
}

qs('#addData').onclick=()=>closeAndOpenDataUploadPage();

const closeAndOpenDataUploadPage=()=>{
  qs('div.card.form').classList.remove('hidden')
  qs('.listPage').classList.add('hidden')
  qs('.side_menu').classList.remove('open')
  cmd.innerHTML += `> Data Entry page open<br>`;
}


  // Read the data once
  get(lockref).then((snapshot) => {
  snapshot.forEach((childSnapshot) => {
    const key = childSnapshot.key;
    const value = childSnapshot.val();

    console.log('Key:', key, 'Value:', value);

    if (key === "lock") {
      if (value === "") {
        cmd.innerHTML += "<label>X Warning: Security Disabled</label>";
        loginBtn.classList.remove("btn_loading");
        loginBtn.innerHTML = `<img class="doneGif" src="./done.gif" alt="">`;
        loginBtn.style.border = "solid 1px #41B06E";
        loginBtn.style.background = "#222831";
        
        setTimeout(loginBTNnormal, 3000);

        setTimeout(() => {
          $(".lock-card").slideUp(300);
          $(".form").slideDown(300);

          cmd.innerHTML += "<label>> Verifying update status...</label>";

          get(vertionRef).then((snapshot) => {
            snapshot.forEach((childSnapshot) => {
              const vertionKey = childSnapshot.key;
              const vertionValue = childSnapshot.val();

              if (vertionKey === "code") {
                $("#verText").html("Updated " + vertionValue);

                if (vertionValue !== localStorage.getItem("vertion")) {
                  $(".updateCard").slideDown(300);
                  $(".form").slideUp(300);
                  localStorage.setItem("vertion", vertionValue);
                  alert(vertionValue);
                } else {
                  $(".form").slideDown(300);
                  $(".updateCard").slideUp(300);
                  $(".cmd").show(300);
                  cmd.innerHTML += "<label>> Updated</label>";
                }

                $("#closeDetails").click(() => {
                  localStorage.setItem("vertion", vertionValue);
                  $(".form").slideDown(300);
                  $(".updateCard").slideUp(300);
                  cmd.innerHTML += "<label>> All set! You're on version " + vertionValue + "</label>";
                });
              }

              console.log('Key:', vertionKey, 'Value:', vertionValue);
            });
          });
        }, 2500);

      } else {
        cmd.innerHTML += "<label>> Protected by Admin Controls</label>";
        loginBtn.classList.remove("btn_loading");
        loginBtn.style.background = "#222831";
        loginBTNnormal();
        
        localStorage.getItem("admin_name")?document.querySelector('#Uname').value = 'Shopless.in':''

        cmd.innerHTML += "<label>> Verifying update availability...</label>";

        get(vertionRef).then((snapshot) => {
          snapshot.forEach((childSnapshot) => {
            const vertionKey = childSnapshot.key;
            const vertionValue = childSnapshot.val();

            if (vertionKey === "code") {
              $("#verText").html("Updated " + vertionValue);

              if (vertionValue !== localStorage.getItem("vertion")) {
                cmd.innerHTML += "<label>> Great! Version  " + vertionValue + " is live</label>";
                $(".updateCard").slideDown(300);
                $(".form").slideUp(300);
              } else {
                $(".lock-card").slideDown(300);
                $(".updateCard").slideUp(300);
                $(".cmd").show(300);
                cmd.innerHTML += `<label>> Version <b style='color: green'>${vertionValue} (corrent)</b></label>`;
              }

              $("#closeDetails").click(() => {
                localStorage.setItem("vertion", vertionValue);
                cmd.innerHTML += `<label>> Updated to <b style='color: green'>${vertionValue}</b></label>`;
                $(".lock-card").slideDown(300);
                $(".updateCard").slideUp(300);
              });
            }

            console.log('Key:', vertionKey, 'Value:', vertionValue);
          });
        });
      }
    }

    if (key === "password") {
      dbPWD = value;
    }

    if (key === "username") {
      dbUname = value;
      console.log("uname=========: " + dbUname);
    }
  });
}).catch((error) => {
  console.error("Failed to get lockref:", error);
});


  let Uname = document.querySelector("#Uname")
  let Pwd = document.querySelector("#Pwd")

  let adminName = localStorage.getItem("admin_name")

  if (adminName != null) {
    cmd.innerHTML += "<label>> Authorized Admin<b style='color: green;'> " + adminName + "</b></label>"
    $("#adminName").hide(100)
    
  }

  $("#loginBTN").click(function () {
    cmd.innerHTML += "<label>> Hang on, checking what you entered...</label>"
    if (Uname.value) {
      if (Pwd.value) {
        // alert(dbUname)
        if (Uname.value == dbUname) {
          cmd.innerHTML += "<label style='color: green;>> Username confirmed</label>"
          //alert("uname done")
          if (Pwd.value == dbPWD) {
            cmd.innerHTML += "<label style='color: green;>> Password accepted</label>"
            if (adminName == null) {
              cmd.innerHTML += "<label style='color: yellow;>> New user profile detected</label>"
              if (document.querySelector("#adminName").value.length > 3) {
                //alert(document.querySelector("#adminName").value)
                localStorage.setItem("admin_name", document.querySelector("#adminName").value)
                $(".lock-card").slideUp(300);
                $(".form").slideDown(300);
                $(".cmd").show(300)
                cmd.innerHTML += "<label style='color: green;>> [INFO] New user registered by <b style='color: yellow;'>" + document.querySelector("#adminName").value + "</b></label>"
              }
            } else {
              $(".lock-card").slideUp(300);
              $(".form").slideDown(300);
              $(".cmd").show(300)
              cmd.innerHTML += "<label >> Welcome " + adminName + "</label>"
            }
            // alert("all")
          } else {
            cmd.innerHTML += "<label style='color: red;'>> Invalid password : " + Pwd.value + "</label>"
            Pwd.classList.add("inputError")
            setTimeout(() => {
              Pwd.classList.remove("inputError")
            }, 1000);
          }
        } else {
          cmd.innerHTML += "<label style='color: red;'>> This username does not exist : " + Uname.value + " </label>"
          Uname.classList.add("inputError")
          setTimeout(() => {
            Uname.classList.remove("inputError")
          }, 1000);
        }
      } else {
        cmd.innerHTML += "<label style='color: red;'>> Password is required </label>"
      }
    } else {
      cmd.innerHTML += "<p style='color: red;'>> Username is required </p>"
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
    cmd.innerHTML += "<label>> Trying to upload somthing</label>"
    upload()
  })
  function upload() {
    uploadBtn.innerHTML = `<img src="./loading.gif" alt="">`
    uploadBtn.classList.add("btn_loading")

    const path = document.querySelector("#path")
    let postRef = ref(db, path.value);
    const imgUrl = document.querySelector("#imgURL")
    const name = document.querySelector("#name")
    const price = document.querySelector("#price")
    const description = document.querySelector("#description")
    const quantity = document.querySelector("#qty")
    const brand = document.querySelector("#brand")
    const href = document.querySelector("#href")
    let wordToCheck = "ads/"
    let filepath = path.value
    if (filepath.includes('shopless')) {}else{
      alert('Keep it simple - no shopless/ needed here OR check the path you entered')
      cmd.innerHTML+='> [INFO] Prefix shopless/ ignored during upload <br>'
      BTNerror()
      setTimeout(BTNnormal, 3000)
      return;
    }
    if (filepath.includes(wordToCheck)) {
      cmd.innerHTML += "<label>> Uploading ads to <b style='color: green'>" + filepath + "</b></label>"
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


      let userInput = prompt("Please enter ads number number", "1");

      if (userInput != null) {
        //console.log("Hello " + userInput + "! How are you today?");
        if (userInput == 1) {
          postRef.update(update1).then(() => {
            console.log('Update successful!');
cmd.innerHTML += '<label>> Update successful!</label>'

            BTNsuccess()
            setTimeout(BTNnormal, 3000)


          }).catch((error) => {
            console.error('Update failed: ' + error.message);
            cmd.innerHTML += `<label style='color: red'>>1th ads Update Failed ${error}</label>`
            BTNerror()
            setTimeout(BTNnormal, 3000)
          });

        } else {
          if (userInput == 2) {
            postRef.update(update2).then(() => {
              console.log('Update successful!');
              cmd.innerHTML += "<label style='color: red'>>2th ads Update Successfull!</label>"

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
                          cmd.innerHTML += "<label style='color: red'>> Limit reached: You can post up to 9 ads </label>"
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

        cmd.innerHTML += "<label style='color: red'>> Execution halted (admin override)</label>"
        BTNerror()
        setTimeout(BTNnormal, 3000)
        // alert("Aborted By Admin.");
      }



      //alert("this is adds " + path.value)

    } else {
      

// Construct the path safely
const productPath = `${path.value}`;
const postRef = ref(db, productPath);

// Show what is being uploaded
cmd.innerHTML += `
  <div>
    <label>> Products are on their way!</label><br>
    > Product name : <p style='color: blue'>${name.value}</p><br>
    > Product Image : <p style='color: blue'>${imgUrl.value}</p><br>
    > Product Price : <p style='color: blue;'>${price.value}</p><br>
    > Product Description : <p style='color: blue'>${description.value}</p><br>
    > Product Quantity : <p style='color: blue'>${quantity.value}</p><br>
    > Product Brand : <p style='color: blue'>${brand.value}</p><br>
    > Product Page : <p style='color: blue'>${href.value}</p>
  </div>
`;

// Push product data to Firebase
push(postRef, {
  product_name: name.value,
  product_image: imgUrl.value,
  product_price: price.value,
  product_description: description.value,
  quantity: quantity.value,
  brand: brand.value,
  href: href.value,
})
.then((res) => {
  const key = res.key;
  const path = res._path?.toString?.() || "[unknown]";
  cmd.innerHTML += `<label>> Product successfully Uploaded! <br> > Location <p style='color: green'>${path}</p></label>`;
  cmd.innerHTML += `> Uploaded Key : ${key}`;

  BTNsuccess();
  setTimeout(BTNnormal, 3000);
})
.catch((error) => {
  console.error("Upload failed:", error);
  cmd.innerHTML += `> Uploaded failed : ${error}`;
  BTNerror();
  setTimeout(BTNnormal, 3000);
});

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

  cmd.innerHTML += `<p style="display: block;">> OS : ${os}</p>`
  cmd.innerHTML += `<p>> User Agent : <span style="color:green;"> ${userAgent}</sapn></p>`
  cmd.innerHTML += `<p>> Browser Language : <span style="color:green;">${language}</span></p>`





  // firebase.initializeApp(firebaseConfig);

  // Get a reference to the Firebase Realtime Database
  // var db = firebase.database();

  // Reference to the users' status path in your database
  let userStatusDatabaseRef;

const baseStatusPath = '/shopless/admin/status/';

if (localStorage.getItem("admin_name") != null) {
  const id = localStorage.getItem("admin_name");
  userStatusDatabaseRef = ref(db, baseStatusPath + id);
} else {
  userStatusDatabaseRef = ref(db, baseStatusPath + os);
}
  // Function to format the timestamp into a human-readable date and time
  function formatTimestamp(timestamp) {
    var date = new Date(timestamp);
    var formattedDate = date.toLocaleDateString('en-IN') + ' ' + date.toLocaleTimeString('en-IN');
    return formattedDate;
  }

  // Reference to the /.info/connected path in Firebase Realtime Database
  const isOnlineForDatabase = ref(db, ".info/connected");

onValue(isOnlineForDatabase, (snapshot) => {
  $(".status").html("Online|");
  cmd.innerHTML += `<p>> Status <span style="color: green;">Online</span></p>`;

  if (snapshot.val() === false) return;

  onDisconnect(userStatusDatabaseRef).update({
    status: "offline",
    last_changed: serverTimestamp()
  }).then(() => {
    const offsetRef = ref(db, ".info/serverTimeOffset");
    get(offsetRef).then((offsetSnapshot) => {
      const serverTime = Date.now() + offsetSnapshot.val();
      const formattedTime = formatTimestamp(serverTime);

      update(userStatusDatabaseRef, {
        status: "online",
        last_changed: formattedTime
      }).then(() => {
        cmd.innerHTML += `<label>> User status : <b><span style="color: green;">online</span></b></label>`;
      });
    });
  });
});
  // Listen for changes in the user's status and log the status change with the formatted timestamp
  
onValue(userStatusDatabaseRef, (snapshot) => {
  const data = snapshot.val();
  if (data !== null) {
    console.log('User status changed to: ' + data.status);
    console.log('Time: ' + data.last_changed);
    cmd.innerHTML += `<p>> User status changed to: <span style="color: green;">${data.status}</span></p>`;
  }
});

//  $(".side_menu").slideUp(0)

  $(".menu_btn").click(function () {
    document.querySelector(".side_menu").classList.add('open')
  })
  $(".close_nav").click(function () {
    document.querySelector(".side_menu").classList.remove('open')
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
  if (navigator.onLine) {
    onInternetConnected();
  } else {
    onInternetDisconnected();
  }





  var themeData = localStorage.getItem("theme")
  if (themeData != null) {
    cmd.innerHTML += `<p>> User Theme : <span style="color: blue;">${themeData}</span></p>`
    document.querySelector("#theme_selector").value = themeData
    if (themeData == "Light") {
      document.querySelector(".logo").src = "./logo_light.png"
      cmd.innerHTML += `<p>> User Theme : <span style="color: blue;">Light</span></p>`
    } else {
      if (themeData == "Darck") {
        cmd.innerHTML += `<p>> User Theme : <span style="color: blue;">Darck</span></p>`
        document.querySelector(".logo").src = "./logo.png"
      }
    }

    document.body.classList.add(themeData)
  }

  $("#theme_selector").change(function () {
    cmd.innerHTML += `<p>> User Theme changed to : <span style="color: blue;">${this.value}</span></p>`
    if (this.value == "Light") {
      document.body.classList.add(this.value)
      document.body.classList.remove("Dark")
      localStorage.setItem("theme", "Light")
      document.querySelector(".logo").src = "./logo_light.png"
    } else {
      if (this.value == "Dark") {
        document.body.classList.add(this.value)
        document.body.classList.remove("Light")
        localStorage.setItem("theme", "Dark")
        document.querySelector(".logo").src = "./logo.png"

      }
    }
  })










function renderDeals(items) {
  cmd.innerHTML += `> Rendering Edit Data...<br>`;
  
  qs("#editList").innerHTML = items
    .map((item) => {
      
      return `
        <div class="item" data-id="${item.id}">
          <img src="${item.product_image}" alt="IMG" />
          <div>
            <input type="text" name="name" value="${item.product_name}" placeholder="Product name" />
            <input type="text" name="description" value="${item.product_description}" placeholder="Product description" />
            <input type="text" name="price" value="${item.product_price}" placeholder="Product price" />
            <input type="text" id="imgurl" name="imageUrl" value="${item.product_image}" placeholder="Product image" />

            <button class="update hidden">Update</button>
            <span class="delete">DELETE</span>
          </div>
        </div>
      `;
    })
    .join("");

  // Show "Update" button when any input changes
  document.querySelectorAll(".item input").forEach((input) => {
    input.addEventListener("input", (e) => {
      const itemDiv = e.target.closest(".item");
      const updateBtn = itemDiv.querySelector(".update");
      updateBtn.classList.remove("hidden");

      // Live preview image on imgurl input
      if (e.target.name === "imageUrl") {
        const img = itemDiv.querySelector("img");
        img.src = e.target.value;
      }
    });
  });

  // Handle "Update" button click
  document.querySelectorAll(".item .update").forEach((button) => {
    button.addEventListener("click", async (e) => {
      const itemDiv = e.target.closest(".item");
      const id = itemDiv.getAttribute("data-id");

      const name = itemDiv.querySelector('input[name="name"]').value;
      const description = itemDiv.querySelector('input[name="description"]').value;
      const price = itemDiv.querySelector('input[name="price"]').value;
      const imageUrl = itemDiv.querySelector('input[name="imageUrl"]').value;

      const updateData = {
        product_name: name,
        product_description: description,
        product_price: price,
        product_image: imageUrl,
      };

      const db = getDatabase();
      const itemRef = ref(db, `shopless/home/fresh_deals/${id}`);

      try {
        await update(itemRef, updateData);
        button.classList.add("hidden");
        cmd.innerHTML+=`> Updated successfully to ${itemRef}<br>`
      } catch (error) {
        console.error("Update failed", error);
        alert("Update failed. Check the command line for error details.");
        cmd.innerHTML += `> [ERROR] Update operation failed ${error}<br>`;
      }
    });
  });

  // Handle "Delete" button click
  document.querySelectorAll(".delete").forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const itemDiv = e.target.closest(".item");
      const id = itemDiv.getAttribute("data-id");

      if (confirm("Are you sure you want to delete this item?")) {
        try {
          const db = getDatabase();
          const itemRef = ref(db, `shopless/home/fresh_deals/${id}`);
          await remove(itemRef);
          itemDiv.remove();
        } catch (error) {
          console.error("Delete failed", error);
          alert("Failed to delete. Check the command line for error details.");
          cmd.innerHTML+=`[FAILURE] Deletion process interrupted ${error} <br> ${error.message} <br>`
        }
      }
    });
  });
}


//const dbRef = ref(db);
get(child(dbRef, document.querySelector('#pathSelector').value))
  .then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      const items = Object.entries(data).map(([id, value]) => ({
        id,
        ...value,
      }));
      renderDeals(items);
    } else {

      console.log("No data available");
      cmd.innerHTML+=`> Looks like there's nothing here yet <br>`
    }
  })


document.querySelector('#pathSelector').onchange=()=>{
  cmd.innerHTML+=`> Path changed ${$('#pathSelector').value} <br>`
  get(child(dbRef, document.querySelector('#pathSelector').value))
  .then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      const items = Object.entries(data).map(([id, value]) => ({
        id,
        ...value,
      }));
      renderDeals(items);
    } else {
      
      console.log("No data available");
      cmd.innerHTML+=`> Looks like there's nothing here yet <br>`
      document.querySelector("#editList").innerHTML = `<h4>Looks like there's nothing here yet </h4>
      <button class='addDataTwo'>Upload Data</button>
      `
      document.querySelector('.addDataTwo').onclick=()=>closeAndOpenDataUploadPage();
    }
  })

}

}) // Document redy fumg end





navigator.getBattery().then(function (battery) {
  function updateBatteryStatus() {
    console.log("Battery charge level: " + (battery.level * 100) + "%");
    cmd.innerHTML += `<p>> Battery charge level : <span style="color: blue;">${battery.level * 100}%</span></p>`
    // cmd.innerHTML +="<p>> Battery charging: <span style='color: blue;'>" + (battery.charging ? "Yes" : "No");
    // cmd.innerHTML +="<p>> Battery charging time: <span style='color: blue;'>" + (battery.chargingTime / 60) + " minutes"
    // cmd.innerHTML +="<p>> Battery discharging time: <span style='color: blue;'>" + (battery.dischargingTime / 60) + " minutes"
    let bl = battery.level * 100
    if (bl < 20) {
      alert("Your battery too low: " + bl + "%")
    } let bc = battery.charging ? "Yes" : "No"
    if (bc == "Yes") {
      if (bl > 90) {
        alert("Battery Aproximatly done: " + bl + "%")
      }
    }
  }

  // Update the battery status initially
  updateBatteryStatus();

  // Set up event listeners to update the status whenever it changes
  battery.addEventListener('chargingchange', function () {
    updateBatteryStatus();
  });
  battery.addEventListener('levelchange', function () {
    updateBatteryStatus();
  });
  battery.addEventListener('chargingtimechange', function () {
    updateBatteryStatus();
  });
  battery.addEventListener('dischargingtimechange', function () {
    updateBatteryStatus();
  });




});





// for test purpose 

 $('.updateCard').remove() // keep it
// document.body.onclick=()=>
// {$('.lock-card').remove()
// }


const allPaths = JSON.parse(localStorage.getItem('paths')) || [];
const selector = document.getElementById('pathSelector');

// Add each path as a new <option>, skipping duplicates
allPaths.forEach(path => {
  // Check if this path already exists in the <select>
  if (![...selector.options].some(option => option.value === path)) {
    const opt = document.createElement('option');
    opt.value = path;
    opt.textContent = path;
    selector.appendChild(opt);
  }
});




// Load saved paths into the <select> on startup
function populatePathSelector() {
  const $ = s => document.querySelector(s);
  const selector = document.getElementById('pathSelector')
  try {
    const paths = JSON.parse(localStorage.getItem('paths')) || [];
    paths.forEach(path => {
      if (![...selector.options].some(option => option.value === path)) {
        const opt = document.createElement('option');
        opt.value = path;
        opt.textContent = path;
        selector.appendChild(opt);
      }
    });
  } catch (e) {
    console.error("Failed to load paths:", e);
  }
}

// Add a single path to the <select>
function addPathToSelector(path) {
  if (![...selector.options].some(option => option.value === path)) {
    const opt = document.createElement('option');
    opt.value = path;
    opt.textContent = path;
    selector.appendChild(opt);
    selector.value=path
  }
}

// On page load
populatePathSelector();
const $$ = s=> document.querySelector(s)
$$('#openCreatePath').onclick = () => {
  $$('.path_creation_page').classList.remove('hidden');

  const createBtn = $$('.path_creation_page button');
  const inputField = $$('.path_creation_page input');
inputField.focus()
  if (!createBtn.dataset.listenerAdded) {
    createBtn.onclick = () => {
      try {
        const path = inputField.value.trim();
        if (!path) return alert("Please enter a valid path");

        const stored = JSON.parse(localStorage.getItem('paths')) || [];

if (path.includes('shopless')) {
  

        if (!stored.includes(path)) {
          stored.push(path);
          localStorage.setItem('paths', JSON.stringify(stored));

          addPathToSelector(path);

          //alert("Path created: " + path);
          cmd.innerHTML += '> [INFO] Path added - ' + path + `<br>`;
          document.querySelector('.path_creation_page').classList.add('hidden');
        } else {
          alert("You've already set this path");
          cmd.innerHTML += 'Operation failed: existing path detected <br>';
        }
}else{
  alert('Start your path with shopless/ to continue')
  cmd.innerHTML+='> [RULE] Path must follow format: shopless/... <br>'
}

        inputField.value = '';
      } catch (e) {
        console.error("Storage error:", e);
      }
    };

    createBtn.dataset.listenerAdded = 'true';
  }
};

document.querySelector('.close_creation_page').onclick=()=>{
  document.querySelector('.path_creation_page').classList.add('hidden');
}

