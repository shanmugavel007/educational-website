let menubar = document.getElementById("menu");
let navbar = document.querySelector("nav ul");
let closeBtn = document.querySelector(".fa-xmark");

console.log(menubar);

menubar.addEventListener("click", () => {
  navbar.classList.add("show");
  console.log(menubar);
});

closeBtn.addEventListener("click", () => {
  navbar.classList.remove("show");
});
