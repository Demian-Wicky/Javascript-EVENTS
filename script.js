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
let firstCarText = firstCard.getElementsByClassName("card-text")[0];

function onCardEdit() {
    firstCarText.style.color = "red";
}
firstEdit.addEventListener("click", onCardEdit);
// Fonctionnalité 4 :
////////////////////////////////////////////////////////////////

// Fonctionnalité 5 :
////////////////////////////////////////////////////////////////

// Fonctionnalité 6 :
////////////////////////////////////////////////////////////////

// Fonctionnalité 7 :
////////////////////////////////////////////////////////////////

// Fonctionnalité 8 :
////////////////////////////////////////////////////////////////

// Fonctionnalité 9 :
////////////////////////////////////////////////////////////////
