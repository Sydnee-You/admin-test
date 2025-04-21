var test = document.getElementById("test");
let currentCode ="tf12";
var adminCode = document.getElementById("admin-code");
var button = document.getElementById("button1");

test.addEventListener("click", function() {
  test.innerHTML = "testing 123";
})

function adminCheck() {
  if(adminCode.value == currentCode) {
    document.getElementById("check").innerHTML ="correct";
  } else {
    document.getElementById("check").innerHTML ="incorrect";
    console.log(currentCode);
    console.log(adminCode.value);


  }
}

button.addEventListener("click", adminCheck);
