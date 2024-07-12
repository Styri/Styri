      const lightModeBtn = document.getElementById("lightModeBtn");
      const darkModeBtn = document.getElementById("darkModeBtn");
      const navDiv = document.getElementById("navDiv");
      const navbarBrand = document.querySelector(".navbar-brand");
      const navItems = document.querySelectorAll(".nav-link");
      const htmlElement = document.documentElement;

      function toggleTheme(btn) {
        const currentTheme = htmlElement.getAttribute("data-bs-theme");
        let newTheme;
      
        if (btn.id === "lightModeBtn") {
          newTheme = "light";
          navbarBrand.style.color = "#212529";
          navItems.forEach(item => item.style.color = "#212529");
          navDiv.style.backgroundColor = "#ffffff";
        } else {
          newTheme = "dark";
          navbarBrand.style.color = "#ffffff";
          navItems.forEach(item => item.style.color = "#ffffff");
          navDiv.style.backgroundColor = "#212529";
        }
      
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