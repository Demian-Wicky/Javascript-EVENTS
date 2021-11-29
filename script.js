// Fonctionnalité 1 :
////////////////////////////////////////////////////////////////
let footer = document.getElementsByTagName("footer")[0];
let clickCounter = 0;

function onFooterClick() {
    clickCounter++;
    console.log("click numéro " + clickCounter);
}
footer.addEventListener("click", onFooterClick);

// Fonctionnalité 2 :
////////////////////////////////////////////////////////////////
let navbarHeader = document.getElementById("navbarHeader");
let burgerButton = document.querySelector("button.navbar-toggler");

function onBurgerClick() {
    navbarHeader.classList.toggle("collapse");
}
burgerButton.addEventListener("click", onBurgerClick);

// Fonctionnalité 3 :
////////////////////////////////////////////////////////////////
let firstCard = document.getElementsByClassName("card")[0];
let firstEdit = firstCard.getElementsByClassName("btn-outline-secondary")[0];

function onCardEdit() {
    firstCard.style.color = "red";
}
firstEdit.addEventListener("click", onCardEdit);

// Fonctionnalité 4 :
////////////////////////////////////////////////////////////////
let secondCard = document.getElementsByClassName("card")[1];
let secondEdit = secondCard.getElementsByClassName("btn-outline-secondary")[0];
function onCard2Edit() {
    if (secondCard.style.color === "green") {
        secondCard.style.color = "";
    } else secondCard.style.color = "green";
}
secondEdit.addEventListener("click", onCard2Edit);

// Fonctionnalité 5 :
////////////////////////////////////////////////////////////////

let navBar = document.getElementsByClassName("navbar")[0];
let styleSheet = document.styleSheets[0]

function cdngo() {
    if (styleSheet.disabled === true) {
        styleSheet.disabled = false;
    }
    else
    styleSheet.disabled = true;
};

navBar.addEventListener("dblclick", cdngo);

// Fonctionnalité 6 :
////////////////////////////////////////////////////////////////

// Fonctionnalité 7 :
////////////////////////////////////////////////////////////////

// Fonctionnalité 8 :
////////////////////////////////////////////////////////////////

// Fonctionnalité 9 :
////////////////////////////////////////////////////////////////
