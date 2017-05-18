$(document).foundation();

function passWord() {
var testV = 1;
var pass1 = prompt('Please Enter The Password',' ');
while (testV < 3) {
if (!pass1)
history.go(0);
if (pass1.toLowerCase() == "letmein") {
window.open('home.html','_self',false);
break;
}
testV+=1;
var pass1 =
prompt('The password is incorrect. Please try again.','Password');
}
if (pass1.toLowerCase()!="password" & testV ==3)
history.go(0);
return "index.html";
}
