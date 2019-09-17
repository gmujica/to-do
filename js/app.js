function newElement() {
	var li = document.createElement("li");
	var inputValue = document.getElementById("Input").value;
	var t = document.createTextNode(inputValue);
	var checkBox = document.createElement("input");
	var completedTasksHolder = document.getElementById("completed-tasks");

	checkBox.type = "checkbox";
	checkBox.style.width = '10%';
	li.appendChild(checkBox);
	li.appendChild(t);
	if (inputValue === '') {
	  alert("Debe escribir una tarea!");
	} else {
	  document.getElementById("List").appendChild(li);
	}
	document.getElementById("Input").value = "";
  
	var span = document.createElement("SPAN");
	var deleteButton = document.createElement("button");
	
	span.className = "close";
	span.appendChild(deleteButton);
	li.style.display = "flex";
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


