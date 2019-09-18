function newElement() {
	var li = document.createElement("li");
	var inputValue = document.getElementById("Input").value;
	var t = document.createElement("div");
	t.textContent = inputValue;
	t.className = "input-value";
	var checkBox = document.createElement("input");
	var completedTasksHolder = document.getElementById("completed-tasks");

	var moveButton = document.createElement("button");
	moveButton.className = "moveButton";
	li.appendChild(moveButton);

	checkBox.type = "checkbox";
	
	li.appendChild(checkBox);
	li.appendChild(t);
	if (inputValue === '') {
	  alert("Debe escribir una tarea!");
	} else {
	  document.getElementById("List").appendChild(li);
	}
	document.getElementById("Input").value = "";
  
	var span = document.createElement("span");
	var deleteButton = document.createElement("button");

	deleteButton.className = "deleteButton";

	span.className = "close";
	span.appendChild(deleteButton);

	//li.style.display = "flex";
	li.className  = "element";

	li.appendChild(span);
  
	for (i = 0; i < close.length; i++) {
	  close[i].onclick = function() {
		var div = this.parentElement;
		div.style.display = "none";
	  }
	}

	checkBox.addEventListener('change', (event) => {
		if (event.target.checked) {
			completedTasksHolder.appendChild(li);
		}
	})

}

	var close = document.getElementsByClassName("close");
	var i;
	for (i = 0; i < close.length; i++) {
	  [i].onclick = function() {
		   var div = this.parentElement;
		div.style.display = "none";
	 	}
	}

	var taskCompleted = function(){
		var listItem = this.parentNode;
		completedTasksHolder.appendChild(listItem);
		
	}



	$( function() {
		$( "#List" ).sortable();
		$( "#List" ).disableSelection();
	});


