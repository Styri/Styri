window.onload = function () {
  // check url query to see if the form was submitted or not
  const urlParams = new URLSearchParams(window.location.search);
  const successMessage = document.getElementById("success-message");
  // if it was submitted, show the message
  if (urlParams.get("redirect") === "true") {
    successMessage.classList.remove('translate-x-full');
    successMessage.classList.add('opacity-100');
  
    setTimeout(function () {
      successMessage.classList.add('translate-x-full');
      successMessage.classList.remove('opacity-100');
    }, 3500);
    
    window.history.replaceState({}, document.title, window.location.pathname);
  }
};