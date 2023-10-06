// query selector finds an element based on the element name, class name, or id
const themeChangeButton = document.querySelector("#theme-change-button");

// whenever the theme change button is clicked,
// we check what the current data-theme is and toggle it to the opposite theme
themeChangeButton.addEventListener("click", () => {
  const htmlElement = document.querySelector("html");
  const currentTheme = htmlElement.getAttribute("data-theme");

  if (currentTheme === "dark") {
    htmlElement.setAttribute("data-theme", "light");
  } else {
    htmlElement.setAttribute("data-theme", "dark");
  }
});
