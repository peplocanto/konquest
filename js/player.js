class Player
{
  constructor()
  {
    this.name = ""
    this.color = `rgba(${randomIntFromInterval(30, 200)},
     ${randomIntFromInterval(30, 200)}, ${randomIntFromInterval(30, 200)}, 0.5)`;
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
    planets[i].color = newPlayer.color;
    planets[i].owner = newPlayer.name;
    players.push(newPlayer)
    document.querySelector(`#p${i + 1}`).style.backgroundColor = newPlayer.color;
  }
}