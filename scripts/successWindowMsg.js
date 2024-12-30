        window.onload = function () {
        // check url query to see if the form was submitted or not
        const urlParams = new URLSearchParams(window.location.search);
        // if it was, then show success message
        if (urlParams.get("redirect") === "true") {
          const successMessage = document.getElementById("success-message");
          successMessage.classList.remove('translate-x-full', 'opacity-0');
          successMessage.classList.add('translate-x-0', 'opacity-100');

          setTimeout(function () {
            successMessage.classList.add('translate-x-full', 'opacity-0');
            successMessage.classList.remove('translate-x-0', 'opacity-100');
          }, 3500);
        }
      };