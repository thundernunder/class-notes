function keydownAction(event) {
  // value of key press
  var keyPress = event.key;
// value of key code
  var keyCode = event.keyCode;

  // update content in DOM 
  document.querySelector('#key').textContent = keyPress;

  document.querySelector('#code').textContent = keyCode;

  document.querySelector('status').textContent = "KEYDOWN event";

}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);

