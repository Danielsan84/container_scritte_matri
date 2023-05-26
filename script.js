document.addEventListener("DOMContentLoaded", function() {
    var blackButton = document.getElementById("black-theme");
    var greenButton = document.getElementById("green-theme");
    var ocraButton = document.getElementById("ocra-theme");
    var blueButton = document.getElementById("blue-theme");
    
    blackButton.addEventListener("click", function() {
      setTheme("black");
    });
    
    greenButton.addEventListener("click", function() {
      setTheme("green");
    });
    
    ocraButton.addEventListener("click", function() {
      setTheme("ocra");
    });
    
    blueButton.addEventListener("click", function() {
      setTheme("blue");
    });
  
    // Controlla se il tema è già stato impostato in precedenza
    var theme = localStorage.getItem("theme");
    if (theme) {
      setTheme(theme);
    }
  });
  
  /* Definisci la funzione setTheme per cambiare il tema del sito */
  function setTheme(themeName) {
    var body = document.querySelector("body");
    body.className = "";
    body.classList.add(themeName + "-theme");
  
    // Salva il tema selezionato dall'utente nel localStorage
    localStorage.setItem("theme", themeName);
  }