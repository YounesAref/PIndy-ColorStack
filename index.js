let isDarkMode = false;
const apperenceDiv = document.getElementById("apperenceButton");


function switchApperence() {
    isDarkMode = !isDarkMode
    const items = document.getElementsByClassName("events-items");

    if (isDarkMode) {

        document.body.style.color = "white";
        document.documentElement.style.background = "#0f1324";
        document.body.style.background = "#0f1324";
        document.getElementById("apperence-img").src = "img/icons8-sun-100.png";

        for (let i = 0; i < items.length; i++) {
            items[i].style.background = "#0f1324";
        }
    } else {

        document.body.style.color = "";
        document.body.style.background = "";
        document.documentElement.style.background = "white";
        document.getElementById("apperence-img").src = "img/icons8-moon-90.png";

        for (let i = 0; i < items.length; i++) {
            items[i].style.background = "white";
        }
    }
}

function apperenceImgHover() {
    if (isDarkMode) {
        document.getElementById("apperence-img").src = "img/green-sun-100.png";
    } else {
        document.getElementById("apperence-img").src = "img/green-moon-90.png";
    }
}

apperenceDiv.addEventListener("click", switchApperence);
apperenceDiv.addEventListener("mouseenter", apperenceImgHover);
apperenceDiv.addEventListener("mouseleave", () =>
    document.getElementById("apperence-img").src = isDarkMode
    ? "img/icons8-sun-100.png"
    : "img/icons8-moon-90.png"
);



//--------------Form------------------------------



function addParticpantsEvent1(event) {
    event.preventDefault(); 
    
    let submitForm = false;
    const userList = document.getElementById("event1-list");
    const newRsvp = document.createElement("li");
    const nameInput = document.getElementById("event1-name");
    const emailInput = document.getElementById("event1-email");
    const email = emailInput.value;
    const name = nameInput.value;

    newRsvp.textContent = name + " has RSVP'd for this event";

    if (email.includes('@') && !email.length < 2) {
        submitForm = true;
        emailInput.style.background = ""; // reset background
    } else {
        submitForm = false
        emailInput.style.background = "#ffcccc"; // highlight invalid email
    }

    if (name.length <  2) {
        submitForm = false
        nameInput.style.background = "#ffcccc";
    } else {
        nameInput.style.background = "";
    }

    if (submitForm) {
        userList.appendChild(newRsvp);
        showModal();
    }
}


function addParticpantsEvent2(event) {
    event.preventDefault(); 
    
    let submitForm = false;
    const userList = document.getElementById("event2-list");
    const newRsvp = document.createElement("li");
    const nameInput = document.getElementById("event2-name");
    const emailInput = document.getElementById("event2-email");
    const email = emailInput.value;
    const name = nameInput.value;

    newRsvp.textContent = name + " has RSVP'd for this event";

    if (email.includes('@') && !email.length < 2) {
        submitForm = true;
        emailInput.style.background = ""; // reset background
    } else {
        submitForm = false
        emailInput.style.background = "#ffcccc"; // highlight invalid email
    }

    if (name.length <  2) {
        submitForm = false
        nameInput.style.background = "#ffcccc";
    } else {
        nameInput.style.background = "";
    }

    if (submitForm) {
        userList.appendChild(newRsvp);
        showModal();
    }
}


function showModal() {
    const modal = document.getElementById("success-modal");
    const modalImg = document.getElementById("modal-image");

    modal.style.display = "flex";

    let rotateFactor = -10;

  const animateImage = () => {
    rotateFactor = rotateFactor === -10 ? 10 : -10;
    modalImg.style.transform = `rotate(${rotateFactor}deg)`; 
  };


  const intervalId = setInterval(animateImage, 500);
  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId); 
  }, 5000);
};

function addParticpantsEvent3(event) {
  event.preventDefault(); 
    
    let submitForm = false;
    const userList = document.getElementById("event3-list");
    const newRsvp = document.createElement("li");
    const nameInput = document.getElementById("event3-name");
    const emailInput = document.getElementById("event3-email");
    const email = emailInput.value;
    const name = nameInput.value;

    newRsvp.textContent = name + " has RSVP'd for this event";

    if (email.includes('@') && !email.length < 2) {
        submitForm = true;
        emailInput.style.background = ""; // reset background
    } else {
        submitForm = false
        emailInput.style.background = "#ffcccc"; // highlight invalid email
    }

    if (name.length <  2) {
        submitForm = false
        nameInput.style.background = "#ffcccc";
    } else {
        nameInput.style.background = "";
    }

    if (submitForm) {
        userList.appendChild(newRsvp);
        showModal();
    }
}

const event1Submit = document.getElementById("event1-submit");
const event2Submit = document.getElementById("event2-submit");
const event3Submit = document.getElementById("event3-submit");