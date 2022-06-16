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
<input type="button" value="start countdown" id="start" />
<input type="button" value="stop countdown" id="stop" />
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
var audio = new Audio("https://dl.dropboxusercontent.com/s/1cdwpm3gca9mlo0/kick.mp3);

function countdown_trigger() {
  // Get today's date and time
  var now = new Date().getTime();
  var countdown_number = countDownDate - now;
    if (countdown_number > 0) {
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var demo = document.getElementById("demo");
        // Display the result in the element with id="demo"
        document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s work time";
        if (countdown_number > 0) {
            countdown = setTimeout(countdown_trigger, 1000);
        }

        if (countdown_number === 0) {
            demo.style.color = "#ff0000";
            document.getElementById("demo").innerHTML = "NEXT MOVEMENT";
            audio.play()
        }
    }
}

function countdown_clear() {
    clearTimeout(countdown);
}

function countdown_init() {
    countdown_number = countDownDate;
    countdown_trigger();
}

document.getElementById('start').onclick = countdown_init;
document.getElementById('stop').onclick = countdown_clear;
</script>
  </body>
</html>`

  let enc = encodeURIComponent(ht);
  let uri = `data:text/html;charset=utf-8,${enc}`
  return uri; 
}
