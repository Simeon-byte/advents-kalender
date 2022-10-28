document.addEventListener("DOMContentLoaded", async () => {
  const doors = document.getElementsByClassName("grid-item");
  data.length = Object.keys(data).length;

  let prev = [];
  for (let i = 0; i < data.length; i++) {
    let doorIndex = Math.floor(Math.random() * doors.length);

    while (prev.includes(doorIndex)) {
      doorIndex = Math.floor(Math.random() * doors.length);
    }
    let door = doors[doorIndex];
    prev.push(doorIndex);

    door.children[0].textContent = i + 1;
    door.style.backgroundColor = data[i].color;
    door.dataset.num = i + 1;

    if (false) { // date check for enabled state
      // date passed -> button enabled
   } else {
      door.disabled = true;
   }
  }
});

const handleClick = (event) => {
  console.log(data[event.target.dataset.num]); // reference to data object
  if (true) {
    // date check etc.
    window.location.href = "./doors/door" + event.target.dataset.num + ".html";
  }
};

function randomHSL() {
  return "hsla(" + ~~(360 * Math.random()) + "," + "100%," + "80%,1)";
}
