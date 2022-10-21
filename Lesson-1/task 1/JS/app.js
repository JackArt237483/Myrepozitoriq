
 const passportInput = document.querySelector(".passport-Input");
 const passportCheck = document.querySelector(".passport-Check");
 const passportResult = document.querySelector(".passport-Result");
 
 const passportRegExp =/^[0,1]\d{13}$/;
 
 passportCheck.addEventListener("click", () => {
   if (passportRegExp.test(passportInput.value)) {
     passportResult.innerText = "Да";
     passportResult.style.color = "green";
   } else {
     passportResult.innerText = "Почти ok";
     passportResult.style.color = "red";
   }
 });