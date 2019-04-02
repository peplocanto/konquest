function drawBoard()
{
  orizontalLines();
  verticalLines();
}

function orizontalLines()
  {
    for (var i = 0; i < 9; i++)
    {
      ctx.beginPath()
      ctx.save()
      ctx.strokeStyle = "rgba(220, 220, 220, 0.3)"
      ctx.lineWidth = 2;
      ctx.moveTo(squareLength + i * squareLength, 0)
      ctx.lineTo(squareLength + i * squareLength, h)
      ctx.stroke()
      ctx.restore()
      ctx.closePath()
    }
  }

function verticalLines()
{
  for (var i = 0; i < 9; i++)
    {
      ctx.beginPath()
      ctx.save()
      ctx.strokeStyle = "rgba(220, 220, 220, 0.3)"
      ctx.lineWidth = 2;
      ctx.moveTo(0, squareLength + i * squareLength)
      ctx.lineTo(w, squareLength + i * squareLength)
      ctx.stroke()
      ctx.restore()
      ctx.closePath()
    }
}