class Player
{
  constructor()
  {
    this.name = ""
    this.color = "";
    this.active = false;
    this.ownedPlanets = 1;
  }
}

let players = [];

function createPlayers()
{
  let numberOfPlayers = parseInt(document.querySelector("#player").value)

  for(var i = 0; i < numberOfPlayers; i++)
  {
    const newPlayer = new Player;
    newPlayer.name = `${i + 1}player`
    newPlayer.color = colors[i]
    planets[i].color = newPlayer.color;
    planets[i].owner = newPlayer.name;
    players.push(newPlayer)
    document.querySelector(`#p${i + 1}`).style.backgroundColor = newPlayer.color;
  }
}

let colors = ["rgba(255, 0, 0, 0.3)", "rgba(0, 255, 0, 0.3)", "rgba(0, 0, 255, 0.3)", "rgba(255, 140, 0, 0.3)"]