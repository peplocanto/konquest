function isPlanettest()
{
  let clk1 = {}
  let clk2 = {}
  let counter = 0;

  canvas.addEventListener("click",  (e) => {
    if (counter === 0)
    {
      clk1 = getCursorPosition(canvas, e);
      planets.forEach(planet => 
        {
          if ((clk1.x >= planet.position.x * squareLength && clk1.x <= planet.position.x * squareLength + squareLength) &&
          (clk1.y >= planet.position.y * squareLength && clk1.y <= planet.position.y * squareLength + squareLength))
          {
            document.querySelector("#from").innerHTML = `From: ${planet.name}`;
            document.querySelector("#fromowner").innerHTML = `Owner: ${planet.owner}`;
            document.querySelector("#fromdimension").innerHTML = `Dimensions: ${planet.dimension}`;
            document.querySelector("#fromprog").innerHTML = `Progress: ${planet.progress}`;
            document.querySelector("#fromdistr").innerHTML = `Distruction: ${planet.distruction}`;
            counter++ 
          }
        })
    }
  
    else if (counter === 1)
    {
      clk2 = getCursorPosition(canvas, e);
      planets.forEach(planet => 
        {
          if ((clk2.x >= planet.position.x * squareLength && clk2.x <= planet.position.x * squareLength + squareLength) &&
          (clk2.y >= planet.position.y * squareLength && clk2.y <= planet.position.y * squareLength + squareLength))
          {
            document.querySelector("#to").innerHTML = `To: ${planet.name}`;
            document.querySelector("#toowner").innerHTML = `Owner: ${planet.owner}`;
            document.querySelector("#todimension").innerHTML = `Dimensions: ${planet.dimension}`;
            document.querySelector("#toprog").innerHTML = `Progress: ${planet.progress}`;
            document.querySelector("#todistr").innerHTML = `Distruction: ${planet.distruction}`;
            counter = 0
          }
        })
    }
  })
}