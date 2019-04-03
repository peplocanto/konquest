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
    return this.def * randomIntFromInterval(2, 7)
  }
}

function war()
{
  let shortestArray;
  let attackArray = [];
  let defenceArray = [];

  if(attackingShips.length > planets.ships.length)
  {
    shortestArray = planets.ships.length;
  }
  else {shortestArray = attackingShips.length}

  for(var i = 0; i < shortestArray; i++)
  {
    attackArray.push(attackingShips.attack())
  }

  for(var j = 0; j < shortestArray; j++)
  {
    defence.push(planet.ship.defence())
  }

  do {battle(); planet.distruction -= 0.1}
  while (attackArray.length > 0 && defenceArray.length > 0)
  
  if (attackArray.length > 0)
  {
    planet.owner = attackingPlayer.name
    planet.color = attackingPlayer.color
    planet.ship.concat(attackArray)
    alert(`${attackingPlayer.name} conquest Planet ${planet.name}`)
  }
  else {alert(`Planet ${planet.name} resist to ${attackingPlayer.name} attack`)}
}

function battle()
{
  for (var k = 0; k < shortestArray; j++)
  {
    if(attackArray[i] > defenceArray[i])
    {
      defenceArray.splice(i, 1)
    }
    else {attackArray.splice(i, 1)}
  }
}