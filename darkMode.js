      const lightModeBtn = document.getElementById("lightModeBtn");
      const darkModeBtn = document.getElementById("darkModeBtn");
      const htmlElement = document.documentElement;

      function toggleTheme(btn) {
        const currentTheme = htmlElement.getAttribute("data-bs-theme");
        const newTheme = btn.id === "lightModeBtn" ? "light" : "dark";

        if (currentTheme !== newTheme) {
          htmlElement.setAttribute("data-bs-theme", newTheme);
        }

        lightModeBtn.classList.remove("active");
        darkModeBtn.classList.remove("active");
        btn.classList.add("active");
      }

      lightModeBtn.addEventListener("click", function () {
        toggleTheme(this);
      });

      darkModeBtn.addEventListener("click", function () {
        toggleTheme(this);
      });