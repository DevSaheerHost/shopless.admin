
// Initialize Firebase
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

// Import the Firebase SDK




$(document).ready(function () {
  $('body').show()
  console.log('ready')
  var inputs = [
    {placehdr: 'Product name', id :'productName', type: 'name', groupId: 'nameurlG', icon:'signature'},
    
    {placehdr: 'Product IMG URL', id :'productImg', type: 'url', groupId: 'imgurlG', icon:'image'},
    
    {placehdr: 'Product Title', id :'productTitle', type: 'text', icon: 'list_alt'},
    
    {placehdr: 'After URL', id :'href', type: 'url', groupId: 'hrefurlG', icon: 'link'},

    ]
    //see-more
  var moreInputs = [
        {placehdr: 'Product Price', id :'productPrice', type: 'number', groupId: 'priceG', icon: 'currency_rupee'},
        
        {placehdr: 'Product Quantity', id :'productQty', type: 'number', groupId: 'qtyG', icon:'production_quantity_limits'},

    ]
    
    
    createInput=(input)=>{
      return `
      <div class="input-group" id='${input.groupId}'>
      <div class='input-name-wrapper'>
      <span class="material-symbols-outlined">
      ${input.icon}
      </span>
                  <label for="ProductName">${input.placehdr}</label>
                  </div>
                  <input type="${input.type}" placeholder="${input.placehdr}" id="${input.id}">
                </div>
      `
    }
    function see() {
      // Tab to edit
      inputs.forEach(input => {
        var form = document.querySelector('.form')
        form.innerHTML+=createInput(input)
      })
    }
    
    see()
    
    $('#seeMore').click(function seeMore() {
      $(this).hide()
      $('#less').show()
      moreInputs.forEach(input => {
        var form = document.querySelector('.form')
        form.innerHTML+=createInput(input)
      })
    })
    
    $('#less').click(function () {
     // $('#productPrice').css({background: 'red'})
     $(this).hide()
     $('#seeMore').show()
      const a = document.querySelector('#priceG')      
      const b = document.querySelector('#qtyG')

      a.remove()
      b.remove()
    })
    
    
    
    
    document.querySelector('#href').addEventListener("keypress", function(event) {
      
      // If the user presses the "Enter" key on the keyboard
      if (event.key === "Enter") {
        
        if(document.querySelector('#productQty')){
          
        //alert('yes')
        
      }else{
        
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("uploadButton").click();
        
      }
        // Cancel the default action, if needed
        
      }
    });
    
    
    $('#uploadButton').click(function () {
      console.log('Uploading...')
    })
    
   // setTimeout(showNotif, 1000)
    function showNotif() {
       $('.notification').css({transform: 'translateY(0px)'})
       $('.time').toggleClass('timeLoad')
       setTimeout(hideNotif, 3000)
    }
    $('.login').click(function () {
      showNotif()
      $('.lock').slideUp()
    })
    
    function hideNotif() {
       $('.notification').css({transform: 'translateY(-130px)'})
        $('.time').toggleClass('timeLoad')
    }
    
    
    
    $('.closeNotif').click(function () {
      $('.notification').css({transform: 'translateY(-130px)'})
       $('.time').toggleClass('timeLoad')
    })
    
    $('notification').toggleClass('notificationShow')
    
    
    
    $('.side-menu-btn').click(function () {
      $('aside').css({width: '100%'})
      $('.side-menu').css({width: '70%'})
    })
    
    
    $('.close-side-menu').click(function () {
      $('aside').css({width: '0%'})
      $('.side-menu').css({width: '0%'})
    })
    
    
    $('aside').click(function() {
      $('aside').css({ width: '0%' })
      $('.side-menu').css({ width: '0%' })
    })
    
    
    $('#threMenuBtn').click(function () {
      $('.thredot-menu').toggle(300)
    })
    
    $('.thredot-close').click(function () {
      $('.thredot-menu').slideUp(300);
    })
    
    
    
})

