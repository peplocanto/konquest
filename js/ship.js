class Ship
{
  constructor()
  {
    this.att = 1
    this.def = 1
  }

  attack()
  {
    return this.att * randomIntFromInterval(1, 6)
  }

  defence()
  {
    return this.def * randomIntFromInterval(1, 6)
  }
}

document.querySelector("#send").onclick = function()
{
  let fromVal = document.querySelector("#from").innerHTML.split(" ")[1]
  let toVal = document.querySelector("#to").innerHTML.split(" ")[1]
  let playerIndex = findWithAttr(players, "active", true)
  let playerActive = players[playerIndex]
  let fromPlanetIndex = findWithAttr(planets, "name", fromVal)
  let fromPlanet = planets[fromPlanetIndex]
  let toPlanetIndex = findWithAttr(planets, "name", toVal)
  let toPlanet = planets[toPlanetIndex]
  let dist = parseInt(document.querySelector("#distance").innerHTML.split(" ")[1])
  let shipsNumber = parseInt(document.querySelector("#ships").value)

  if(fromVal === "" || toVal === "") {return 1}

  if(playerActive.name !== fromPlanet.owner) {alert("Not Your Planet"); resetBoxes(); return 1}

  if(shipsNumber === "") {alert("Please, insert ships number"); return 1}
  if(shipsNumber >= fromPlanet.ships.length) {alert("Not enough ships"); return 1}


  if (playerActive.name === fromPlanet.owner)
  {
    for(var i = 0; i < shipsNumber; i++)
    {
      fromPlanet.ships.pop()
    }

    turnArray[turn + dist].push(
      {
        "function": send,
        "player": playerIndex,
        "planet": toPlanetIndex,
        "shipsNumber": shipsNumber
      })

    resetBoxes();
  }
}

function send(playerIndex, planetIndex, shipsNumber)
{
  let sendShips = [];


  for (var i = 0; i < shipsNumber; i++)
  {
    sendShips.push(new Ship);
  }

  if (players[playerIndex].name === planets[planetIndex].owner)
  {
    planets[planetIndex].ships = planets[planetIndex].ships.concat(sendShips);
    alert(`${planets[planetIndex].name} of ${players[playerIndex].name} receives ${sendShips.length} backup`)
  }
  else
  {
    while(sendShips.length > 0 && planets[planetIndex].ships.length > 0)
    {
      let shortestArray = 0;

      if (sendShips.length > planets[planetIndex].ships.length)
      {shortestArray = planets[planetIndex].ships.length}
      else {shortestArray = sendShips.length}
  
      let attackArray = [];
      let defenceArray = [];
  
      for (var i = 0; i < shortestArray; i++)
      {attackArray.push(sendShips[i].attack())}
      for (var j = 0; j < shortestArray; j++)
      {defenceArray.push(planets[planetIndex].ships[j].defence())}
  
      for (var k = 0; k < shortestArray; k++)
      {
        if (attackArray[k] > defenceArray[k])
        {
          planets[planetIndex].ships.splice(0, 1)
        }
        else
        {
          sendShips.splice(0, 1)
        }
      }
      planets[planetIndex].distruction++
    }

    if (sendShips.length > 0)
    {
      players = players.map(player => 
        {
          if(player.name === planets[planetIndex].owner){
            player.ownedPlanets -= 1;
            return player
          }
          return player;
        }
        );
      players[playerIndex].ownedPlanets +=1;
      planets[planetIndex].owner = players[playerIndex].name
      planets[planetIndex].color = players[playerIndex].color
      planets[planetIndex].ships = planets[planetIndex].ships.concat(sendShips)
      alert(`${players[playerIndex].name} conquest Planet ${planets[planetIndex].name}`)
    }
    else {alert(`Planet ${planets[planetIndex].name} resist to ${players[playerIndex].name} attack`)}
  }
}
