window.onload = (function() {


  document.getElementById("form").addEventListener("submit", function(e) {
    let thing = document.getElementById("thing").value;
    //alert(thing);

    document.getElementById("thing").value = "";

    let ul = document.getElementById("thingsList");
    let li = document.createElement("li");
    
    li.innerText = thing;

    ul.append(li);
    e.preventDefault();
 
  });

});
