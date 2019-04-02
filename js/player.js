class Player
{
  constructor()
  {
    this.name = document.querySelector("#player").value;
    this.color = `rgba(${randomIntFromInterval(30, 200)},
     ${randomIntFromInterval(30, 200)}, ${randomIntFromInterval(30, 200)}, 0.5)`;
  }

  playerAttack()
  {
    
  }
}

let players = [];

function createPlayers()
{
  let numberOfPlayers = parseInt(document.querySelector("#player").value)

  for(var i = 0; i < numberOfPlayers; i++)
  {
    const newPlayer = new Player;
    planets[i].color = newPlayer.color;
    planets[i].owner = newPlayer.name;
    document.querySelector(`#p${i + 1}`).style.backgroundColor = newPlayer.color;
  }
}