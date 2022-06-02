//Business Logic

//UI Logic
$(document).ready(function() {
  $("formOne").submit(function (event) {
    event.preventDefault();
    const personNameInput = $("input#personName").val();

    $(".personName").text(personNameInput);
  });
});







