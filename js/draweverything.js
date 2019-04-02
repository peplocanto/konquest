function drawEverything()
{
  frameID = requestAnimationFrame(drawEverything)
  {
    ctx.clearRect(0, 0, w, h);
    drawBoard();
    drawPlanet();
  }
}