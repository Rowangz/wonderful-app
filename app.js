var input = document.getElementsByClassName("inputtask")[0];
var button = document.getElementsByClassName("addtask")[0];
var ul = document.getElementsByClassName("tasklist")[0];

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function inputLength() {
  return input.value.length;
}

button.addEventListener("click", function() {
  if (inputLength() > 0) {
    createListElement();
  }
});

input.addEventListener("keypress", function() {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
});
