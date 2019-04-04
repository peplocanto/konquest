var canvas = document.querySelector("#board")
var aside = document.querySelector("#aside")
var start = document.querySelector("#start-page")

/** @type {CanvasRenderingContext2D} */
var ctx = canvas.getContext('2d')

window.onload = function()
{
  document.querySelector("#start").onclick = function()
  {
    document.querySelector("#start-page").style.display = "none";
    document.querySelector("#container").style.display = "flex";
    game()
    setup(canvas, aside, start);
  }
}
