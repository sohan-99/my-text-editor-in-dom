const sentence = document.getElementById("editor");
function formatText(type) {
  if (type == "bold") {
    sentence.classList.toggle(type);
  } else if (type == "italic") {
    sentence.classList.toggle(type);
  } else {
    sentence.classList.toggle(type);
  }
}
function textAlign(alignType) {
  sentence.style.textAlign = alignType;
  let alignButtons = document.getElementsByClassName("align");
  for (let i = 0; i < alignButtons.length; i++) {
    alignButtons[i].classList.remove("active");
  }
  sentence.classList.toggle("active");
}
function changeFontSize() {
  const fontNumber = document.getElementById("font-size");
  const value = fontNumber.value;

  sentence.style.fontSize = value + "px";
}
function transformText() {
  const transform = document.getElementById("text-transform");
  if (sentence.style.textTransform == "uppercase") {
    sentence.style.textTransform = "none";
  } else {
    sentence.style.textTransform = "uppercase";
    transform.classList.add("active");
  }
}
function pickColor() {
  const color = document.getElementById("pick-color");
  const value = color.value;
  sentence.style.color = value;
}
