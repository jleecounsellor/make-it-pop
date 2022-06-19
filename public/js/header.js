//TOP NAVIGATION
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";

  } else {
    x.className = "topnav";
  }
}

//SSLIDESHOW NAVIGATION
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// FORM
const nameF = document.querySelector("#name");
const emailF = document.querySelector("#email");
const form = document.querySelector("#form");

var nameFormat = /^[a-zA-Z\s, ]+$/;

//returns true if the input is empty, false if not
const isEmpty = value => value === "" ? true : false;

//form validation
const isEmailValid = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

//check validations
const checkName = () => {
  const name = nameF.value.trim();

  if (isEmpty(name)) {
    showError(nameF, "Name field cannot be empty");
    nameF.setAttribute("placeholder", '');
  } else if (!name.match(nameFormat)) {
    showError(nameF, "Please enter a Name");
  } else {
    showSuccess(nameF);
  }
  return name;
};

const checkEmail = () => {
  const email = emailF.value.trim();

  if (isEmpty(email)) {
    showError(emailF, "Email field cannot be empty");
    emailF.setAttribute('placeholder', '');
  } else if (!isEmailValid(email)) {
    showError(emailF, "Must enter an Email")
    emailF.setAttribute('placeholder', 'email@example.com');
  } else {
    showSuccess(emailF);
  }
};

const showError = (input, message) => {
  const form = input.parentElement;
  const error = form.querySelector("label");
  const image = form.querySelector("img");

  //add "error" class and css that goes along with it
  input.classList.add("error");
  image.classList.remove("errorIcon");
  input.classList.remove("success");

  //show the error message
  error.textContent = message;
}

const showSuccess = (input) => {
  const form = input.parentElement;
  const success = form.querySelector("label");
  const image = form.querySelector("img");

  //add "error" class and css that goes along with it
  input.classList.add("success");
  image.classList.add("errorIcon");
  input.classList.remove("error");

  //Show the error message in the "small" selector
  success.textContent = "";
}

//prevent form from submitting when there's an error
form.addEventListener("submit", function(e) {
  e.preventDefault();

  checkEmail(),
  checkName(),

  nameF.addEventListener("blur", function(){
    checkName();
  });

  emailF.addEventListener("blur", function(){
    checkEmail();
  });
});
