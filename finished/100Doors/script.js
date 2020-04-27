
function buildDoors () {
  for (var i = 0; i < 100; i++) {
    var newDoor = document.createElement('div');
    var textnode = document.createTextNode(i + 1);
    newDoor.className = 'closedDoor';
    newDoor.appendChild(textnode);
    document.getElementById("doors").appendChild(newDoor);
  }
}

buildDoors()

var clicked = false;

function reset () {
  clicked = true;
  document.getElementById("start").disabled = false;
  var doors = document.getElementsByClassName("openDoor");
  while(doors.length > 0){
    doors[0].className = 'closedDoor';
  }
}

function toggleDoor (door) {
  var doorDiv = document.getElementById("doors").childNodes[door - 1];
  if (doorDiv.className == 'openDoor') {
    doorDiv.className = 'closedDoor';
  } else {
    doorDiv.className = 'openDoor';
  }
}

function toggleDoors (pass, door) {
  clicked = false;
  document.getElementById("start").disabled = true;
  if (door % pass == 0) {
    setTimeout(function() {
      if (clicked) {
        return;
      }
      toggleDoor(door);
      door++;
      if (door == 101) {
        pass++;
        door = pass;
      }
      if (pass < 101) {
        toggleDoors(pass, door)
      } else {
        document.getElementById("start").disabled = false;
      }
    }, 100 - document.getElementById("myRange").value);
  } else {
    door++;
      if (door == 101) {
        pass++;
        door = pass;
      }
      if (pass < 101) {
        toggleDoors(pass, door)
      }
  }
}

