
// HAMBURGER TOGGLE 
function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
    
}


// HERO BUTTONS

const heroBtnOne = document.getElementById('js-heroBtnOne');
if (heroBtnOne) {
    heroBtnOne.onclick = () => {
        window.location.href = "form.html";
    };
}

const heroBtnTwo = document.getElementById('js-heroBtnTwo');
if (heroBtnTwo) {
    heroBtnTwo.onclick = () => {
        window.location.href = "sell.html";
    };
}

const callBtn = document.getElementById('js-callBtn');
if (callBtn) {
    callBtn.onclick = () => {
        window.location.href = "tel:+17023387769";
    };
}

// CONTACT BUTTON ON FORM, SELL, and COMMERCIAL PAGE
const contactBtn = document.getElementById('js-contactBtn');
if (contactBtn) {
    contactBtn.onclick = () => {
        window.location.href = "index.html";
    };
}



// FORM VALIDATION FUNCTIONS (these are fine)
const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLowerCase());
};


