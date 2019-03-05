function init() {
  var container = document.getElementById("SiteNav");
  var content = document.createElement("li");
  content.style.color = "red";
  content.innerHTML = "Hello";
  container.appendChild(content);
}

init();
