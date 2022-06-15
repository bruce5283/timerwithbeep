// https://www.chartjs.org/


window.function = function (time, fweight, align, fsize, width, height) {

  // data
  time = time.value ?? "";
  fweight = fweight.value ?? "600";
  align = align.value ?? "center";
  fsize = fsize.value ?? "20";
  width = width.value ?? "100";
  height = height.value ?? "100";

  let ht = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Glide Yes-Code</title>
  </head>
  <body>
   <!-- Display the countdown timer in an element -->
<p id="demo"></p>
<audio id="timeout_audio">
  <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/41203/beep.mp3"/>
  <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/41203/beep.ogg" />
</audio>
<style>

#demo {
font-weight: ${fweight};
text-align: ${align};
font-family: verdana;
font-size: ${fsize}px;
width: ${width}vw;
height: ${height}vh;
}

@media (prefers-color-scheme: dark) {

#demo {
color: #12A89E;
}
}

@media (prefers-color-scheme: light) {

#demo {
color: #12A89E;
}
}

</style>
<script>
// Set the date we're counting down to
var countDownDate = new Date("${time}").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  var demo = document.getElementById("demo");
  var timeoutAudio = document.getElementByID("timeout_audio");

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s work time";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    demo.style.color = "#ff0000";
    document.getElementById("demo").innerHTML = "NEXT MOVEMENT";
  }
}, 1000);
</script>
  </body>
</html>`

  let enc = encodeURIComponent(ht);
  let uri = `data:text/html;charset=utf-8,${enc}`
  return uri; 
}
