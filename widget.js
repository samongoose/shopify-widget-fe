function init() {
  var container = document.getElementById("SiteNav");
  var content = document.createElement("li");
  content.style.color = "red";
  content.innerHTML = "SpendGo Rewards <span class='rewardsValue'></span>";
  container.appendChild(content);
}

init();
