# shopless.admin
Admin control of the site

<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-database.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-storage.js"></script>
    
    
    
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js"; import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js"; import { getDatabase, ref, child, get, onValue, onChildAdded, onChildChanged, onChildRemoved, update, push, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js";

const firebaseConfig = { apiKey: "AIzaSyCsTD5XSRNl7VG-i6Ir0F3D1X1PxWk2Rfs", authDomain: "shopify-30670.firebaseapp.com", databaseURL: "https://shopify-30670-default-rtdb.firebaseio.com", projectId: "shopify-30670", storageBucket: "shopify-30670.appspot.com", messagingSenderId: "792157900529", appId: "1:792157900529:web:32d02d2d8b3fe05d94e350", measurementId: "G-MZC38NN5BZ" };

const app = initializeApp(firebaseConfig); const db = getDatabase(app); const analytics = getAnalytics(app);

let dbUname = ""; let dbPWD = "";

const dbRef = ref(db); const lockref = ref(db, 'shopless/admin/'); const vertionRef = ref(db, 'shopless/admin/vertion');

// Replace old firebase.database().ref(...) and firebase.database.ServerValue.TIMESTAMP // with ref(db, ...) and serverTimestamp() throughout your code.

// Usage example: // const myRef = ref(db, 'some/path'); // get(myRef).then(...)

// Make sure you replace all uses of firebase.database() and firebase.getDatabase() // with the modular syntax provided above. The rest of your logic remains unchanged.

// If you need me to update the full script with these changes applied automatically, // please re-upload or re-confirm and I will regenerate the full working modular version // of the entire code including DOM manipulation and UI logic.

// This setup ensures full compatibility with Firebase Modular SDK (v9+).




lockref.once('value', function (snapshot) {
    // Iterate over each child
    snapshot.forEach(function (childSnapshot) {
      var key = childSnapshot.key; // The key for the child data
      var value = childSnapshot.val(); // The value/data for the child

      // Do something with the key and value
      console.log('Key:', key, 'Value:', value);

      if (key == "lock") {

        if (value == "") {
          cmd.innerHTML += "<label>X UnSecured</label>"
          loginBtn.classList.remove("btn_loading")
          loginBtn.innerHTML = `<img class="doneGif" src="./done.gif" alt="">`
          loginBtn.style.border = "solid 1px #41B06E"
          loginBtn.style.background = "#222831"

          setTimeout(loginBTNnormal, 3000)

          setTimeout(() => {
            $(".lock-card").slideUp(300);
            $(".form").slideDown(300);
            // $(".cmd").show(300)

            let vertionReq = "corrent"
            let vertion = "old"
            let vertionRef = firebase.database().ref('shopless/admin/vertion');


            // Read the data once
            vertionRef.once('value', function (snapshot) {

              snapshot.forEach(function (childSnapshot) {
                var vertionKey = childSnapshot.key;
                var vertionValue = childSnapshot.val();

                if (vertionKey == "code") {
                  cmd.innerHTML += "<label>> Checking for updation...</label>"
                  $("#verText").html("Updated " + vertionValue)
                  if (vertionValue != localStorage.getItem("vertion")) {
                    $(".updateCard").slideDown(300)
                    $(".form").slideUp(300);
                    // $(".cmd").hide(300)
                    localStorage.setItem("vertion", vertionValue)
                    alert(vertionValue)
                  } else {
                    $(".form").slideDown(300)
                    $(".updateCard").slideUp(300);
                    $(".cmd").show(300)
                    cmd.innerHTML += "<label>> Updated</label>"
                  }
                }

                $("#closeDetails").click(function () {
                  localStorage.setItem("vertion", vertionValue)
                  $(".form").slideDown(300)
                  // $(".cmd").show(300)
                  $(".updateCard").slideUp(300);
                  cmd.innerHTML += "<label>> Updated to " + vertionValue + "</label>"
                })

                console.log('Key:', vertionKey, 'Value:', vertionValue);

              });
            });


          }, 2500);
        } else {
          // $(".cmd").hide(300)
          cmd.innerHTML += "<label>> Secured By Admin</label>"
          loginBtn.classList.remove("btn_loading")
          //loginBtn.innerHTML = `<img class="doneGif" src="./done.gif" alt="">`
          //loginBtn.style.border = "solid 1px #41B06E"
          loginBtn.style.background = "#222831"
          loginBTNnormal()
          //$(".cmd").hide(300)
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

          cmd.innerHTML += "<label>> Checking for Updates...</label>"
          // Read the data once
          vertionRef.once('value', function (snapshot) {

            snapshot.forEach(function (childSnapshot) {
              var vertionKey = childSnapshot.key;
              var vertionValue = childSnapshot.val();

              if (vertionKey == "code") {
                $("#verText").html("Updated " + vertionValue)
                if (vertionValue != localStorage.getItem("vertion")) {
                  cmd.innerHTML += "<label>> Updated to " + vertionValue + "</label>"
                  $(".updateCard").slideDown(300)
                  $(".form").slideUp(300);
                  //localStorage.setItem("vertion", vertionValue)
                } else {
                  $(".lock-card").slideDown(300)
                  $(".updateCard").slideUp(300);
                  $(".cmd").show(300)
                  cmd.innerHTML += "<label>> Corrent version: <b style='color: green'>" + vertionValue + "</b></label>"
                }
              }

              $("#closeDetails").click(function () {
                localStorage.setItem("vertion", vertionValue)
                cmd.innerHTML += "<label>> Updated to <b style='color: green'>" + vertionValue + "</b></label>"
                $(".lock-card").slideDown(300)
                $(".updateCard").slideUp(300);
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
        console.log("uname=========: " + dbUname)
        //alert(value)
      }
    });
  });
  
  
  import { get } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js";

// Assuming lockref and vertionRef are already declared with modular syntax:
const lockref = ref(db, 'shopless/admin/');
const vertionRef = ref(db, 'shopless/admin/vertion');

get(lockref).then((snapshot) => {
  snapshot.forEach((childSnapshot) => {
    const key = childSnapshot.key;
    const value = childSnapshot.val();

    console.log('Key:', key, 'Value:', value);

    if (key === "lock") {
      if (value === "") {
        cmd.innerHTML += "<label>X UnSecured</label>";
        loginBtn.classList.remove("btn_loading");
        loginBtn.innerHTML = `<img class="doneGif" src="./done.gif" alt="">`;
        loginBtn.style.border = "solid 1px #41B06E";
        loginBtn.style.background = "#222831";

        setTimeout(loginBTNnormal, 3000);

        setTimeout(() => {
          $(".lock-card").slideUp(300);
          $(".form").slideDown(300);

          cmd.innerHTML += "<label>> Checking for updation...</label>";

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
                  cmd.innerHTML += "<label>> Updated to " + vertionValue + "</label>";
                });
              }

              console.log('Key:', vertionKey, 'Value:', vertionValue);
            });
          });
        }, 2500);

      } else {
        cmd.innerHTML += "<label>> Secured By Admin</label>";
        loginBtn.classList.remove("btn_loading");
        loginBtn.style.background = "#222831";
        loginBTNnormal();

        cmd.innerHTML += "<label>> Checking for Updates...</label>";

        get(vertionRef).then((snapshot) => {
          snapshot.forEach((childSnapshot) => {
            const vertionKey = childSnapshot.key;
            const vertionValue = childSnapshot.val();

            if (vertionKey === "code") {
              $("#verText").html("Updated " + vertionValue);

              if (vertionValue !== localStorage.getItem("vertion")) {
                cmd.innerHTML += "<label>> Updated to " + vertionValue + "</label>";
                $(".updateCard").slideDown(300);
                $(".form").slideUp(300);
              } else {
                $(".lock-card").slideDown(300);
                $(".updateCard").slideUp(300);
                $(".cmd").show(300);
                cmd.innerHTML += `<label>> Current version: <b style='color: green'>${vertionValue}</b></label>`;
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






import {
  ref,
  onValue,
  onDisconnect,
  update,
  get,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js";

// .info/connected reference
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