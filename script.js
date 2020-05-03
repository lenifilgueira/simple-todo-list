var enterButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.querySelectorAll ("li");



function inputLength() {
	return input.value.length;
}

for(i=0; i<items.length; i++) {
	var deleteButton = document.createElement("button");
	deleteButton.innerHTML = "Delete";
	deleteButton.onclick = removeParent;

	items[i].appendChild(deleteButton);
}

function createListElement() {
	var deleteButton = document.createElement("button");
	deleteButton.innerHTML = "Delete";
	deleteButton.onclick = removeParent;


	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(deleteButton);
	ul.appendChild(li);
	input.value = "";
	
}

// Removing List Element
function removeParent(evt) {
	evt.target.removeEventListener("click", removeParent, false);
	evt.target.parentNode.remove();
}

// Strike-through items that are done
function done(clicked) {
	clicked.target.classList.toggle("done");
}

// Adding Elements
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", done);

