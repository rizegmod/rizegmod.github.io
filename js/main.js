// Clantag :troll:

function changeTitle() {
    var titles = [
        "I",
        "In",
        "Inf",
        "Infe",
        "Infer",
        "Infern",
        "Inferno",
        "Inferno.",
        "Inferno.l",
        "Inferno.lu",
        "Inferno.lua",
        "Inferno.lua",
        "Inferno.lua",
        "Inferno.lu",
        "Inferno.l",
        "Inferno.",
        "Inferno",
        "Infern",
        "Infer",
        "Infe",
        "Inf",
        "In",
        "I",
    ]; // create an array of titles
    var index = 0;
    setInterval(function() {
        // use setInterval to call the function every 0.5 seconds
        document.title = titles[index]; // change the title of the document
        index++;
        if (index == titles.length) {
            index = 0;
        }
    }, 350);
}
window.onload = changeTitle; // call the function when the page is loaded

// Smooth scrolling to features layer

const scrollToSectionBtn = document.getElementById("scroll-to-section-btn");
const section2 = document.getElementById("section2");

function scrollToSection() {
    window.scrollTo({
        top: section2.offsetTop,
        behavior: "smooth",
    });
}

scrollToSectionBtn.addEventListener("click", scrollToSection);