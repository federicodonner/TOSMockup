window.onload = function () {
  let anchors = document.querySelectorAll(".navigation");

  for (let anchor of anchors) {
    anchor.addEventListener("click", function handleClick(event) {
      const target = event.currentTarget;
      [...anchors].forEach((anchor) => anchor.classList.remove("active"));
      target.classList.add("active");
    });
  }
};
