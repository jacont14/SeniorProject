"use strict";

let errMessages = {
    success: "The form was submitted successfully",
    failure: "There was an issue when trying to submit the form, please correct your errors and try again",
    termsMsg: "You must agree to the terms and conditions before joining",
    fNameMsg: "Please enter your full name",
   addressMsg: "Please enter a valid address",
    phoneMsg: "Please enter a valid phone number",
    emailMsg: "Please enter a valid email",
    messageMsg: "Please leave a comment on what you would like an estimate on",
  };

  let newUser = {
    userName: "",
    userPhone: "",
    userEmail: "",
    userAdd: "",
    userMessage: "",
    getUser() {
      return "<strong>User Name:</strong> " + this.userName + "<br><strong>Phone Number:</strong> " + this.userPhone + "<br><strong>Email:</strong> " + this.userEmail + "<strong>Address:</strong> " + this.userAdd}
  };

  function validateForm(e){
    
    e.preventDefault();

  let uName = document.getElementById("fullName");
  let phoneNum = document.getElementById("phone");
  let address = document.getElementById("address");
  let email = document.getElementById("email");
  let commentInput = document.getElementById("message");
  let confirm = document.getElementById("confirm");
  let prefPhone = document.getElementById("prefPhone");
  let PrefEmail = document.getElementById("prefEmail");
  let pref = document.getElementById("pref");


  let nameRegex = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
  let phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
  let addressRegex = /^\s*\S+(?:\s+\S+){3}/
  let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,3})$/

  uName.classList.remove("error");
  phoneNum.classList.remove("error");
  address.classList.remove("error");
  email.classList.remove("error");
  commentInput.classList.remove("error");
  confirm.classList.add("hidden");
  pref.classList.add("hidden");


  uName.nextSibling.classList.add("hidden");
  phoneNum.nextSibling.classList.add("hidden");
  email.nextSibling.classList.add("hidden");
  address.nextSibling.classList.add("hidden");
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

  if(email.value === "" || !(emailRegex.test(email.value))){
   
    isValid = false;
   
    email.classList.add("error");
   
    email.nextElementSibling.classList.remove("hidden");
   
    console.error(errMessages["emailMsg"]);
  }else{
    
    newUser.userEmail = email.value;
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
    commentInput.value = "";
    PrefEmail.checked = true;
    prefPhone.checked = false;

    uName.nextElementSibling.classList.add("hidden");
    phoneNum.nextElementSibling.classList.add("hidden");
    address.nextElementSibling.classList.add("hidden");
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



  

  
  