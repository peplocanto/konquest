let playerTurn = 0;
let turn = 1;

function setTurn()
{
  document.querySelector("#turn").innerHTML = `TURN: ${turn}`
  document.querySelector("#p1").style.borderColor = "orange"
  players[playerTurn].active = true;
}

function nextPlayerTurn()
{
  if(playerTurn < players.length - 1) {playerTurn++}
  else {nextTurn(); playerTurn = 0;}
  players.forEach(player => player.active = false)
  players[playerTurn].active = true;
  document.querySelector("#turn").innerHTML = `TURN: ${turn}`;
  for(var i = 1; i < 5; i++) {document.querySelector(`#p${i}`).style.borderColor = "rgba(220, 220, 220, 0.3)";} 
  document.querySelector(`#p${playerTurn + 1}`).style.borderColor = "orange"
  resetBoxes()
}

function nextTurn()
{
  turn++
  if (turnArray[turn].length != 0)
  {
    for(var i = 0; i < turnArray[turn].length; i++)
    {
      turnArray[turn][i].function(turnArray[turn][i].player, turnArray[turn][i].planet, turnArray[turn][i].shipsNumber)
    }
  }
  planets.forEach(planet => 
    {
      if (planet.owner.includes("player"))
      {planet.shipGeneration()}
    })
  if (turn % 5 === 0)
  {
    planets.map(planet => {planet.progress++})
  }
  if (turn % 15 === 0)
  {
    createTurnArray(15)
  }
  checkVictory(turn)
}

let turnArray = [];

function createTurnArray(num)
{
  for(var i = 0; i < num; i++)
  {
    turnArray.push([]);
  }
}

document.querySelector("#nextturn").onclick = function () {nextPlayerTurn()}