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
<p id="pre"></p>
<button id="btn">Start Timer</button><br>
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
const audio = new Audio("https://dl.dropboxusercontent.com/s/1cdwpm3gca9mlo0/kick.mp3");
let time = 5;

btn.onclick = e => {
  // mark our audio element as approved by the user
  audio.play().then(() => { // pause directly
    audio.pause();
    audio.currentTime = 0;
  });
  countdown();
  btn.disabled = true;
};


function countdown() {
  pre.textContent = --time;
  if(time === 0) return onend();
  setTimeout(countdown, 1000);
}


function onend() {
  audio.play(); // now we're safe to play it
  time = 5;
  btn.disabled = false;
}</script>
  </body>
</html>`

  let enc = encodeURIComponent(ht);
  let uri = `data:text/html;charset=utf-8,${enc}`
  return uri; 
}
