// let arr = [];
// ["one","two"].forEach(function(el){
//     let name = $("input#" + el).val();
//     arr.push(el);
//     $("." + el).text(name);
// });

let things = [];

$(document).ready(function(){

    $("form#form").submit(function(e){
      let thing = $("input#thing").val();
      let html = "<div class='added-thing'><span>" + thing + "</span></div>";

      $("div#things").append(html);
      e.preventDefault();
    });

    $(".added-thing").click(function(){
      alert("here")
    });

});