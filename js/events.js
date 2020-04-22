function getIt() {
  $('p').on("click", () => alert('Hey!'));
}

function frameIt() {
  $('p').on("click", () => alert('Hey!'));
}

function getIt() {
  $('p').on("click", () => alert('Hey!'));
}

function pressIt() {
  $('p').on("click", () => alert('Hey!'));
}

function submitIt() {
  $("form").on("submit", () => alert('your form is going to be submitted now'));
}

$(document).ready(function(){

getIt()
frameIt()
pressIt()
submitIt()

});
