// Business Logic
function numberMessage(result) {

  let result = [];
  for (let i = 0; i <= number; i++); {
    array.push([i].toString());
    if ((array[i] + '').inculdes("3")) {
      result.push("Won't you be my neighbor?");
    } else if (array[i].inculdes("2")) {
      result.push("boop!");
    } else if (array[i].inculdes("1")); {
      result.push("Beep!");
    }
    else {
      result.push(array[i]);
    }
  }
}


//UI Logic
$(document).ready(function () {
  $("form.form").submit(function (event) {
    event.preventDefult();
    let number = $("input#number").val();
    newResult = numberMessage(number);
    $(".container2").show();
    $("#output").empty();
    $("#output").append(newResult);
  });
});

