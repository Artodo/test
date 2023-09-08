"use strict"


// modal
const rules = document.querySelector(".rules");
const processingRules = document.querySelector("#processingRules");

processingRules.addEventListener("click", function () {
  rules.classList.toggle("active")
})


//mASK
$(document).ready(function () {
  $("#phone").inputmask({ "mask": "+7 (999) 999-99-99" });
});


////
const submitForm = document.querySelector("#submitBtn");
const nameData = document.querySelector("#name");
const phone = document.querySelector("#phone");
const call = document.querySelector("#call");
const message = document.querySelector("#message");
const agree = document.querySelector("#agree");

const agreed = agree.checked;
const callBack = call.checked;
const writeMessage = message.checked;

submitForm.addEventListener("click", function () {
if (!nameData.value) {
  nameData.classList.add("error");
  return
} else if (!phone.value) {
  phone.classList.add("error");
  return
} else {
  if (( callBack || writeMessage ) && agreed) {
    if (callBack) {
      console.log("звони");
    } else {
      console.log("пиши в телегу")
    }
    console.log(nameData.value, phone.value);
  }
  else {
    console.log("Нифига");
  }
}
})

////////////////////
