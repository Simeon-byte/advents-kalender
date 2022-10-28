document.addEventListener("DOMContentLoaded", async () => {
  data.length = Object.keys(data).length;

  // generate grid-items:
  // <button class="grid-item" type="button" onclick="handleClick(event)">
  //        <p class="doorLink"></p>
  // </button>
  const gridParent = document.getElementsByClassName("grid-container")[0];
  for (let i = 0; i < data.length; i++) {
    let button = document.createElement("button");
    button.classList.add("grid-item");
    button.onclick = (event) => handleClick(event);

    let p = document.createElement("p");
    p.classList.add("doorLink");
    button.appendChild(p);
    gridParent.appendChild(button);
  }

  const doors = document.getElementsByClassName("grid-item");

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

    let dateString = `2022-12-${i + 1}`;
    let enabledDate = new Date(dateString);

    let nowDate = new Date("2022-12-12"); // Date.now()
    if (nowDate >= enabledDate) {
      // date check for enabled state
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

