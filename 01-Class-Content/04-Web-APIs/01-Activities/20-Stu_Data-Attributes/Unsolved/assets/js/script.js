var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  if (element.matches(".box")) {
    // grab element by class
    var state = element.getAttribute("data-state");

    if (state === 'hidden') {
      element.textContent = element.dataset.number;
      // dataset looks for the value after the dash in "data-". In this case, "number". 
      element.getAttribute("data-state", "visible");
  


    } else {
      element.textContent = "";

      element.setAttribute("data-state", "hidden");
    }
  }

  // TODO: Complete function
});
