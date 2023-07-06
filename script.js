document.addEventListener("keypress", function(event) {
    var target = event.target;
    if (event.keyCode === 13 && target.classList.contains("keyboard-clickable")) {
      target.click();
    }
  });