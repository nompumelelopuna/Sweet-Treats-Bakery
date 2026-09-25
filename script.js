// Welcome Message

window.addEventListener("load", () => {
  alert("Welcome to Sweet Treats Bakery!");
});

// Active Navigation Link

const links = document.querySelectorAll("nav a");

links.forEach(link => {
  if(link.href === window.location.href){
    link.style.backgroundColor = "white";
    link.style.color = "#d2691e";
  }
});

// Contact / Enquiry Form Validation

const form = document.querySelector("form");

if(form){

  form.addEventListener("submit", function(event){

    const inputs = document.querySelectorAll("input, textarea");

    let valid = true;

    inputs.forEach(input => {

      if(input.value.trim() === ""){
        valid = false;
      }

    });

    if(!valid){

      event.preventDefault();

      alert("Please complete all fields.");

    } else {

      alert("Form Submitted Successfully!");

    }

  });

}