let main = document.querySelector("#main");
let crs = document.querySelector(".curser");

main.addEventListener("mousemove", function (dets) {
  crs.style.left = dets.x + "px";
  crs.style.top = dets.y + "px";
});
