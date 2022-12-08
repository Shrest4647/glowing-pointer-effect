function getRandomPointInWindow() {
  var x = Math.floor((Math.random() * window.innerWidth * 0.95) / 20) * 20;
  var y = Math.floor((Math.random() * window.innerHeight * 0.95) / 20) * 20;
  return { x: x, y: y };
}
document.querySelectorAll(".random").forEach((span) => {
  var { x, y } = getRandomPointInWindow();
  span.style.left = x + "px";
  span.style.top = y + "px";
});
const div = document.querySelector(".shadow");

document.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;
  let gradient = `radial-gradient(circle at ${x}px ${y}px, #00000033 0%, #000000e6 46%)`;
  div.style.background = gradient;
});
