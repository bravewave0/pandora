$(document).ready(function() {
var now = new Date();
var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);
var today = now.getFullYear()+"-"+(month)+"-"+(day) ;

$('#birthYear').val(today);
$('#futureYear').val(today);
  });
  
  $("#clear").click(function() {
    var now = new Date();

var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);
var today = now.getFullYear()+"-"+(month)+"-"+(day) ;

$('#birthYear').val(today);
$('#futureYear').val(today);
$('#age').val('');    
  });
  
  



$("#calculateAge").click(function() {
  var dateOfBirth = $("#birthYear").val();
  var byear = parseInt(dateOfBirth.substr(0, 4));
  var bmonth = parseInt(dateOfBirth.substr(5, 2));
  var bdate = parseInt(dateOfBirth.substr(8, 2));
  var currentDate = $("#futureYear").val();
  var cyear = parseInt(currentDate.substr(0, 4));
  var cmonth = parseInt(currentDate.substr(5, 2));
  var cdate = parseInt(currentDate.substr(8, 2));
  var birthMonth = bmonth;
  var birthYear = byear;
  var birthDate = bdate;
  var futureMonth = cmonth;
  var futureYear = cyear;
  var futureDate = cdate;
  console.log(birthDate, birthMonth, birthYear);
  console.log(futureDate, futureMonth, futureYear);

  if (birthYear > futureYear) {
    $("#age").val("Please correct your birth year/month");
  } else if (
    birthYear == futureYear &&
    futureMonth == birthMonth &&
    bdate == cdate
  ) {
    $("#age").val("Happy Birthday !!!");
  } else if (birthYear == futureYear && futureMonth < birthMonth) {
    $("#age").val("Please correct your birth year/month");
  } else if (
    birthYear == futureYear &&
    futureMonth == birthMonth &&
    futureDate - birthDate == 1
  ) {
    $("#age").val(futureDate - birthDate + " day old");
  } else if (
    birthYear == futureYear &&
    futureMonth == birthMonth &&
    futureDate - birthDate > 1
  ) {
    $("#age").val(futureDate - birthDate + " days old");
  } else if (birthYear == futureYear && futureMonth - birthMonth == 1) {
    $("#age").val(futureMonth - birthMonth + " Month old");
  } else if (
    birthYear == futureYear &&
    futureMonth > birthMonth &&
    futureMonth - birthMonth > 1
  ) {
    $("#age").val(futureMonth - birthMonth + " Months old");
  } else if (
    birthYear < futureYear &&
    futureYear - birthYear == 1 &&
    futureMonth < birthMonth
  ) {
    $("#age").val(12 - birthMonth + futureMonth + " Months old");
  } else if (
    birthYear < futureYear &&
    futureYear - birthYear == 1 &&
    futureMonth == birthMonth
  ) {
    $("#age").val(futureYear - birthYear + " Year old");
  } else if (
    birthYear < futureYear &&
    futureYear - birthYear > 1 &&
    futureMonth == birthMonth
  ) {
    $("#age").val(futureYear - birthYear + " Years old");
  } else if (
    birthYear < futureYear &&
    futureYear - birthYear == 1 &&
    futureMonth > birthMonth &&
    futureMonth - birthMonth == 1
  ) {
    $("#age").val(
      futureYear -
      birthYear +
      " Year & " +
      (futureMonth - birthMonth) +
      " Month old"
    );
  } else if (
    birthYear < futureYear &&
    futureYear - birthYear == 1 &&
    futureMonth > birthMonth &&
    futureMonth - birthMonth > 1
  ) {
    $("#age").val(
      futureYear -
      birthYear +
      " Year & " +
      (futureMonth - birthMonth) +
      " Months old"
    );
  } else if (
    birthYear < futureYear &&
    futureYear - birthYear > 1 &&
    futureMonth > birthMonth &&
    futureMonth - birthMonth == 1
  ) {
    $("#age").val(
      futureYear -
      birthYear +
      " Years & " +
      (futureMonth - birthMonth) +
      " Month old"
    );
  } else if (
    birthYear < futureYear &&
    futureYear - birthYear > 1 &&
    futureMonth > birthMonth &&
    futureMonth - birthMonth > 1
  ) {
    $("#age").val(
      futureYear -
      birthYear +
      " Years & " +
      (futureMonth - birthMonth) +
      " Months old"
    );
  } else if (
    birthYear < futureYear &&
    futureMonth < birthMonth &&
    futureMonth - birthMonth < 0
  ) {
    $("#age").val(
      futureYear -
      birthYear -
      1 +
      " Years & " +
      (12 - birthMonth + futureMonth) +
      " Months old"
    );
  } else {
    $("#age").val("Please enter valid birth/future year to calculate Age");
  }
});


