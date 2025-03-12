const num = document.querySelectorAll("button").length;

for (let i = 0; i < num; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

function handleClick() {
  alert("I got clicked")
}

