const bgAnimation = document.getElementById('bgAnimation');

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
}
document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("themeToggle");
    const body = document.body;
  
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      body.setAttribute("data-theme", savedTheme);
      themeToggleButton.textContent =
        savedTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
    }
  
    themeToggleButton.addEventListener("click", () => {
      const currentTheme = body.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
  
      body.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      themeToggleButton.textContent =
        newTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
    });
  });
  
