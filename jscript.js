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
 $("#astro").text('');
 $('.astroimg').hide();
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

$('#calculateAge').click(function() {
var dob = $("#birthYear").val()
var dobYear = parseInt(dob.substr(0, 4));
var astroNum = parseInt(dob.slice(5,7) + dob.slice(8,10));
var futureDob = $("#futureYear").val()
var futureDobYear = parseInt(futureDob.substr(0, 4));
var futureAstroNum = parseInt(futureDob.slice(5,7) + futureDob.slice(8,10));


  
   if  (futureDobYear - dobYear < 0 ) {$('#astro').text("");$('.astroimg').hide();}
  else if (futureDobYear - dobYear <= 0 && futureAstroNum - astroNum < 0) {$('#astro').text("");$('.astroimg').hide();}
  else if (astroNum >= 321 && astroNum <= 419) {$('#astro').text("Aries");$('.astroimg').hide();$('#aries').show();}
else if (astroNum >= 420 && astroNum <= 520) {$('#astro').text("Taurus");$('.astroimg').hide();$('#taurus').show();}
else if (astroNum >= 521 && astroNum <= 620) {$('#astro').text("Gemini");$('.astroimg').hide();$('#gemini').show();}
else if (astroNum >= 621 && astroNum <= 722) {$('#astro').text("Cancer");$('.astroimg').hide();$('#cancer').show();}
else if (astroNum >= 723 && astroNum <= 822) {$('#astro').text("Leo");$('.astroimg').hide();$('#leo').show();}
else if (astroNum >= 823 && astroNum <= 922) {$('#astro').text("Virgo");$('.astroimg').hide();$('#virgo').show();}
else if (astroNum >= 923 && astroNum <= 1022) {$('#astro').text("Libra");$('.astroimg').hide();$('#libra').show();}
else if (astroNum >= 1023 && astroNum <= 1121) {$('#astro').text("Scorpio");$('.astroimg').hide();$('#scorpio').show();}
else if (astroNum >= 1122 && astroNum <= 1221) {$('#astro').text("Sagittarius");$('.astroimg').hide();$('#sagittarius').show();}
else if (astroNum >= 1222 || astroNum <= 119) {$('#astro').text("Capricorn");$('.astroimg').hide();$('#capricorn').show();}
else if  (astroNum >= 120 && astroNum <= 218) {$('#astro').text("Aquarius");$('.astroimg').hide();$('#aquarius').show();}
else if (astroNum >= 219 && astroNum <= 320) {$('#astro').text("Pisces");$('.astroimg').hide();$('#pisces').show();} 
else {$('#astro').text("");$('.astroimg').hide();}
 });
  