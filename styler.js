// style div
window.onload = function() {
  window.setTimeout(fadeout, 5000); //5 seconds
  window.setTimeout(removeElement, 6500); //6.5 seconds remove element
}

function fadeout() {
  document.getElementById('myBar').style.opacity = '0';
    document.getElementById('myProgress').style.opacity = '0';

}

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
   }
   }
  }
}

function removeElement1() { // add multiple killscripts to function
  var elm = document.getElementById("myBar");
  if (elm.style.display === "none") {
    elm.style.display = "block";
  } else {
    elm.style.display = "none";
  }
}

function webTitle(newString) {
  var newTitle = document.title = newString
  return newTitle;
}

// For the thumbnail demo! :]

var count = 1
setTimeout(demo, 500)
setTimeout(demo, 700)
setTimeout(demo, 900)
setTimeout(reset, 2000)

setTimeout(demo, 2500)
setTimeout(demo, 2750)
setTimeout(demo, 3050)


var mousein = false
function demo() {
   if(mousein) return
   document.getElementById('demo' + count++)
      .classList.toggle('hover')

}

function demo2() {
   if(mousein) return
   document.getElementById('demo2')
      .classList.toggle('hover')
}

function reset() {
   count = 1
   var hovers = document.querySelectorAll('.hover')
   for(var i = 0; i < hovers.length; i++ ) {
      hovers[i].classList.remove('hover')
   }
}

document.addEventListener('mouseover', function() {
   mousein = true
   reset()
})

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("toggle").addEventListener("click", () => {
    const sidebarEl = document.getElementsByClassName("sidebar")[0];
    sidebarEl.classList.toggle("sidebar--isHidden");

    document.getElementById("toggle").innerHTML = sidebarEl.classList.contains(
      "sidebar--isHidden"
    )
      ? "Show Sidebar"
      : "Hide Sidebar";
  });
});
