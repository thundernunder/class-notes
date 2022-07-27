// Access toggle switch HTML element
var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector(".container");

// Set default mode to dark
var mode = "dark";

// Listen for a click event on toggle switch
themeSwitcher.addEventListener("click", function() {
    if (mode === 'dark') {
        mode = 'light';
        container.setAttribute("class", "light");
    } else {
        mode = 'dark';
        container.setAttribute("class", "dark");
    }
})

// when a click happends

