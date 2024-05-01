const data = [
  {
    id: 13,
    x: "343px",
    y: "549px",
  },
  {
    id: 15,
    x: "381px",
    y: "398px",
  },
  {
    id: 10,
    x: "540px",
    y: "1140px",
  },
  {
    id: 9,
    x: "310px",
    y: "786px",
  },
  {
    id: 12,
    x: "412px",
    y: "540px",
  },
  {
    id: 1,
    x: "569px",
    y: "668px",
  },
  {
    id: 2,
    x: "484px",
    y: "629px",
  },
  {
    id: 3,
    x: "465px",
    y: "640px",
  },
  {
    id: 4,
    x: "510px",
    y: "721px",
  },
  {
    id: 6,
    x: "472px",
    y: "660px",
  },
  {
    id: 5,
    x: "411px",
    y: "899px",
  },
  {
    id: 7,
    x: "462px",
    y: "676px",
  },
  {
    id: 8,
    x: "467px",
    y: "702px",
  },
  {
    id: 11,
    x: "452px",
    y: "537px",
  },
  {
    id: 14,
    x: "456px",
    y: "570px",
  },
];
const array = Array.from({ length: 10 }, (_, index) => index + 1);

function createDiv(top, left) {
  const div = document.createElement("div");
  div.classList.add("maker");
  div.style.top = top;
  div.style.left = left;
  return div;
}
const divs = data.map((e) => createDiv(e.x, e.y));
const container = document.getElementById("container");
divs.forEach((div) => container.appendChild(div));

var map = document.getElementById("map");
var Arraymarker = document.querySelectorAll(".maker");
console.log(Arraymarker);
// Cập nhật vị trí của marker khi hình ảnh thay đổi kích thước
function updateMarkerPositions() {
  var mapWidth = map.offsetWidth;
  var mapHeight = map.offsetHeight;
  Arraymarker.forEach(function (marker) {
    var markerLeft = mapWidth * 0.5 - marker.offsetWidth * 0.5;
    var markerTop = mapHeight * 0.5 - marker.offsetHeight * 0.5;
    marker.style.left = markerLeft + "px";
    marker.style.top = markerTop + "px";
  });
}
window.onload = updateMarkerPositions;
window.addEventListener("resize", updateMarkerPositions);
