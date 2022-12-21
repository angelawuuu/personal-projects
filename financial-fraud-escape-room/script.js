function checkLogin() {
  let pwd = document.getElementById("pwd").value;
  if (pwd === "ntd4tw3dyp7$") {
    document.getElementById("pwdValidation").innerHTML = "";
    window.open("success.html", "_self");
  } else {
    document.getElementById("pwdValidation").innerHTML = "The password: '" + pwd + "' you entered is incorrect.";
  }
}

function checkPhone() {
  let phone = document.getElementById("phone").value;
  if (phone === "8554112372") {
    document.getElementById("phoneValidation").innerHTML = "";
    var modal = document.getElementById("clue1");
  
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
      modal.style.display = "block";
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  } else {
    document.getElementById("phoneValidation").innerHTML = "The phone number: '" + phone + "' you entered is incorrect.";
  }
}

function checkPwdStrength() {
  let correct = true;
  let pwd = document.getElementById("password").value;
  correct = correct && (pwd === "Instantly");
  pwd = document.getElementById("johnsmith").value;
  correct = correct && (pwd === "2 minutes");
  pwd = document.getElementById("jsmith0523").value;
  correct = correct && (pwd === "1 day");
  pwd = document.getElementById("fraud").value;
  correct = correct && (pwd === "2 hundred microseconds");
  pwd = document.getElementById("hello").value;
  correct = correct && (pwd === "Instantly");
  pwd = document.getElementById("h3110").value;
  correct = correct && (pwd === "1 millisecond");
  pwd = document.getElementById("jU9hiw%").value;
  correct = correct && (pwd === "6 minutes");
  pwd = document.getElementById("jU9hiw%Q").value;
  correct = correct && (pwd === "8 hours");
  pwd = document.getElementById("ntd4ftw3dyp7$").value;
  correct = correct && (pwd === "12 thousand years");
  
  if (!correct) {
    document.getElementById("pwdStrengthValidation").innerHTML = "At least one of your answers is incorrect.";
  } else {
    document.getElementById("pwdStrengthValidation").innerHTML = "";
    var modal = document.getElementById("clue3");
  
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
      modal.style.display = "block";
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
}
