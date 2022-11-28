console.log(window.location.href);

let regex = /(\d{2})/g;

let tuerArray = window.location.href.match(regex);

let tuerNr = parseInt(tuerArray[tuerArray.length - 1]);

let titleNodes = document.getElementsByClassName("title");

for (let i = 0; i < titleNodes.length; i++) {
  console.log(titleNodes[i]);
  titleNodes[i].innerText = "Türchen Nr."+tuerNr;
}

// titleNodes.forEach((node) => {
//   node.innerText = tuerNr;
// });

console.log(titleNode);
titleNode.style.backgroundColor = "green";
titleNode.nodeValue = tuerNr;
titleNode.nodeValue;
console.log(tuerNr);
