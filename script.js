window.onload = function() {
    let body = document.getElementById("body") || document.body;
    body.style.backgroundColor = "lightblue";

    let inputField = document.getElementById("inputField");
    if (!inputField) {
        console.error('Element with id "inputField" not found.');
        return;
    }

    // Focus event
    inputField.addEventListener("focus", function() {
        inputField.style.backgroundColor = "lightyellow";
    });

    // Blur event 
    inputField.addEventListener("blur", function() {
        inputField.style.backgroundColor = "";
    });

    // Input event 
    inputField.addEventListener("input", function() {
        console.log("Current input value: " + inputField.value);
    });

    // Keydown event
    inputField.addEventListener("keydown", function(event) {
        console.log("Key down: " + event.key);
    });
}

// Make toggleAccordion global
function toggleAccordion(button) {
    let content = button.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

let images = ["Images/Image 1.jpg", "Images/Image 2.jpg", "Images/Image 3.jpg"];
let currentIndex = 0;

function showImage() {
    document.getElementById("carouselImage").src = images[currentIndex];
}
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}

function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
}

setInterval(nextImage, 3000); // Change image every 3 seconds
document.getElementById ("myForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    //clear previous errors
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    if (name === "") {
        document.getElementById("nameError").style.color = "red";
        document.getElementById("nameError").innerText = "Name is required.";
        isValid = false;
    }
    else if (name.length < 3) { 
         document.getElementById("nameError").style.color = "red";
        document.getElementById("nameError").innerText = "Name must be at least 3 characters.";
        isValid = false;
    }
    
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 

    if (email === "" || !email.includes("@")) {
         document.getElementById("emailError").style.color = "red";
        document.getElementById("emailError").innerText = "Valid email is required.";
        isValid = false;
    }
    else if (!email.match(emailPattern)) {
         document.getElementById("emailError").style.color = "red";
        document.getElementById("emailError").innerText = "Email format is invalid.";
        isValid = false;
    }

    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // Minimum six characters, at least one letter and one number
    if (password === "") {
         document.getElementById("passwordError").style.color = "red";
        document.getElementById("passwordError").innerText = "Password is required.";
        isValid = false;
    }
    else if (!password.match(passwordPattern)) {
         document.getElementById("passwordError").style.color = "red";
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters, including one letter and one number.";
        isValid = false;
    }

    // check if all validation passed
    if (isValid) {
        // submit the form
       
        alert("Form submitted successfully!");
        document.getElementById("myForm").reset(); // Reset form fields
    }

};
