// Business Logic
function numberMessage(number) {

  let result = [];
  for (let i = 0; i <= number; i++) {
    
    if(i.toString().includes("3")) {
      result.push("Won't you be my neighbor?");
    } else if (i.toString().includes("2")) {
      result.push("boop!");
    } else if (i.toString().includes("1")) {
      result.push("Beep!");
    } else {
      result.push(i); 
    }
  }
  return result.join(", ")
}


//UI Logic
$(document).ready(function () {
  $("form#main").submit(function (event) {
    event.preventDefault();
    const number = $("#number").val();
    const newResult = numberMessage(number);
    $(".container2").show();
    $("#output").empty();
    $("#output").append(newResult);
  });
});

