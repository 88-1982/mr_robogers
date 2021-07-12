// Business Logic
function numberMessage(result) {

  let result = [];
  for (let i = 0; i <= number; i++); {
      push([i].toString());
    if (i.toString().inculde("[number]")) {
      result.push("Won't you be my neighbor?");
    } else if ([i].inculdes("2")) {
      result.push("boop!");
    } else if ([i].inculdes("1")); {
      result.push("Beep!");
    }
    else {
      push[i];
    
    }
  }
}


//UI Logic
$(document).ready(function () {
  $("form.id").submit(function (event) {
    event.preventDefult();
    const number = $("input#number").val();
    const newResult = numberMessage(number);
    $(".container2").show();
    $("#output").empty();
    $("#output").append(newResult);
  });
});

