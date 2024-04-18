"use strict";

let errMessages = {
    success: "The form was submitted successfully",
    failure: "There was an issue when trying to submit the form, please correct your errors and try again",
    termsMsg: "You must agree to the terms and conditions before joining",
    fNameMsg: "Please enter your full name",
   addressMsg: "Please enter a valid address",
    phoneMsg: "Please enter a valid phone number",
    cityMsg: "Please enter your city",
    zipMsg: "Please enter a valid zip code",
    messageMsg: "Please leave a comment on what you would like an estimate on",
  };

  let newUser = {
    userName: "",
    userPhone: "",
    userAdd: "",
    userCity: "",
    userZip: "",
    userMessage: "",
    getUser() {
      return "<strong>User Name:</strong> " + this.userName + "<br><strong>Phone Number:</strong> " + this.userPhone + "<strong>Address:</strong> " + this.userAdd + "<strong>City:</strong> " + this.userCity + "<strong>Zip Code:</strong> " + this.userZip + "<strong>Message:</strong> " + this.userMessage;
    }
  };

  function validateForm(e){
    
    e.preventDefault();

  let uName = document.getElementById("fullName");
  let phoneNum = document.getElementById("phone");
  let address = document.getElementById("address");
  let city = document.getElementById("city");
  let zipCode = document.getElementById("zipCode");
  let commentInput = document.getElementById("message");
  let confirm = document.getElementById("confirm");
  let prefPhone = document.getElementById("prefPhone");
  let PrefEmail = document.getElementById("prefEmail");
  let pref = document.getElementById("pref");


  let nameRegex = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
  let phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
  let addressRegex = /^\s*\S+(?:\s+\S+){3}/
  let cityRegex = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;
  let zipRegex = /^\d{5}$/;

  uName.classList.remove("error");
  phoneNum.classList.remove("error");
  address.classList.remove("error");
  city.classList.remove("error");
  zipCode.classList.remove("error");
  commentInput.classList.remove("error");
  confirm.classList.add("hidden");
  pref.classList.add("hidden");


  uName.nextSibling.classList.add("hidden");
  phoneNum.nextSibling.classList.add("hidden");
  address.nextSibling.classList.add("hidden");
  city.nextSibling.classList.add("hidden");
  zipCode.nextSibling.classList.add("hidden");
  commentInput.nextSibling.classList.add("hidden");
  pref.innerHTML = "";
  confirm.innerHTML = "";

  let isValid = true;
  let contact = "";

  if(uName.value === "" || !(nameRegex.test(uName.value))){
   
    isValid = false; 
    
    uName.classList.add("error");
   
    uName.nextElementSibling.classList.remove("hidden");
    
    console.error(errMessages["fNameMsg"]);
  }else{
    
    newUser.userName = uName.value;
  }


  if(phoneNum.value === "" || !(phoneRegex.test(phoneNum.value))){
   
    isValid = false;
   
    phoneNum.classList.add("error");
   
    phoneNum.nextElementSibling.classList.remove("hidden");
   
    console.error(errMessages["phoneMsg"]);
  }else{
    
    newUser.userPhone = phoneNum.value;
  }


  if(address.value === "" || !(addressRegex.test(address.value))){
   
    isValid = false;
   
    address.classList.add("error");
   
    address.nextElementSibling.classList.remove("hidden");
   
    console.error(errMessages["addressMsg"]);
  }else{
    
    newUser.userAdd = address.value;
  }

  if(city.value === "" || !(cityRegex.test(city.value))){
   
    isValid = false;
   
    city.classList.add("error");
   
    city.nextElementSibling.classList.remove("hidden");
   
    console.error(errMessages["cityMsg"]);
  }else{
    
    newUser.userCity = city.value;
  }

  if(zipCode.value === "" || !(zipRegex.test(zipCode.value))){
   
    isValid = false;
   
    zipCode.classList.add("error");
   
    zipCode.nextElementSibling.classList.remove("hidden");
   
    console.error(errMessages["zipMsg"]);
  }else{
    
    newUser.userZip = zipCode.value;
  }





  if (commentInput.value === "" ) {
    isValid = false;

    commentInput.classList.add("error");

    commentInput.nextElementSibling.classList.remove("hidden");
   
    console.error(errMessages["messageMsg"]);

    }
    else{
        commentInput.classList.remove("error");
        newUser.userMessage = commentInput.value;
     }




  if(isValid){
    displaySubmission(); 

    uName.value = "";
    phoneNum.value = "";
    address.value = "";
    city.value = "";
    zipCode.value = "";
    commentInput.value = "";
    PrefEmail.checked = true;
    prefPhone.checked = false;

    uName.nextElementSibling.classList.add("hidden");
    phoneNum.nextElementSibling.classList.add("hidden");
    address.nextElementSibling.classList.add("hidden");
    city.nextElementSibling.classList.add("hidden");
    zipCode.nextElementSibling.classList.add("hidden");
    commentInput.nextElementSibling.classList.add("hidden");
    pref.nextElementSibling.classList.add("hidden");


    window.alert(errMessages["success"]);
  }
  }

  function displaySubmission(){
    let confirm = document.getElementById("confirm");

    confirm.classList.remove("hidden");

    confirm.innerHTML = "";

    confirm.innerHTML = "<strong class=\"large\">Your Information:</strong><br>" + newUser.getUser(); 

  }
  document.getElementById("forms").addEventListener("submit", validateForm);



  

  
  