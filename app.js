var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var doggo = document.getElementById("doggo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value + 'doggo speed!';
  var speed = 50 / this.value;
  console.log(speed, 'seconds');
  doggo.style['animation-duration'] = `${speed}s`;
}
