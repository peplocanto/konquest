function isPlanet()
{
  let clk1 = {}
  let clk2 = {}
  let counter = 0;
  let distance = 0;

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
            document.querySelector("#fromprog").innerHTML = `Progress: ${planet.progress}%`;
            document.querySelector("#fromdistr").innerHTML = `Distruction: ${planet.distruction}%`;

            document.querySelector("#to").innerHTML = `To: `;
            document.querySelector("#toowner").innerHTML = `Owner: `;
            document.querySelector("#todimension").innerHTML = `Dimensions: `;
            document.querySelector("#toprog").innerHTML = `Progress: `;
            document.querySelector("#todistr").innerHTML = `Distruction: `;

            document.querySelector("#distance").innerHTML = `Distance: `

            let fromVal = document.querySelector("#from").innerHTML.split(" ")[1]            
            let playerActive = players[findWithAttr(players, "active", true)]
            let fromPlanet = planets[findWithAttr(planets, "name", fromVal)]
            if(playerActive.name === fromPlanet.owner)
            {document.querySelector("#shipsnumber").innerHTML = fromPlanet.ships.length - 1}
            
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
            document.querySelector("#toprog").innerHTML = `Progress: ${planet.progress}%`;
            document.querySelector("#todistr").innerHTML = `Distruction: ${planet.distruction}%`;

            let toVal = document.querySelector("#to").innerHTML.split(" ")[1]
            let fromVal = document.querySelector("#from").innerHTML.split(" ")[1]           
            
            if(fromVal === toVal){resetBoxes()}
                        
            distance = Math.round((Math.sqrt(Math.pow((clk1.x - clk2.x), 2) + Math.pow((clk1.y - clk2.y), 2))) / squareLength)
            document.querySelector("#distance").innerHTML = `Distance: ${distance}`
            
            counter = 0
          }
        })
    }
  })
}