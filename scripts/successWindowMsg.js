        window.onload = function () {
        // check url query to see if the form was submitted or not
        const urlParams = new URLSearchParams(window.location.search);
        // if it was, then show success message
        if (urlParams.get("redirect") === "true") {
          const successMessage = document.getElementById("success-message");
          successMessage.classList.remove("hidden");
          setTimeout(function () {
            successMessage.classList.add("hidden");
          }, 3500);
        }
      };