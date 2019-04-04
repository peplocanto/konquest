function checkVictory(turn)
{
  let arr = [];

  if (players.length === 1)
  {
    arr = planets.filter(planet => planet.owner === players[0].name)
    if (arr.length === planets.length)
    {endGame(players[0].name)}
  }
  else
  {
    arr = players.filter(player => player.ownedPlanets > 0)

    let counter = 0;

    for (var i = turn; i < turnArray.length; i++)
    {
      if (turnArray[i].length !== 0)
      {
        counter++;
      }
    }

    if (arr.length === 1 && counter === 0)
    {
      endGame(arr[0].name)
    }
  }
}

function endGame(name)
{
  document.querySelector("#container").style.display = "none";
  document.querySelector("#gameover").style.display = "flex";
  document.querySelector("#winner").innerHTML = `Congratulation ${name}`
}