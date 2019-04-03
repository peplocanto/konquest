let playerTurn = 1;
let turn = 1;

function setTurn()
{
  document.querySelector("#turn").innerHTML = `TURN: ${turn}`
  document.querySelector("#p1").style.borderColor = "orange"
}

function nextTurn()
{
  playerTurn++
  if(playerTurn > players.length) {turn++; playerTurn = 1;}
  document.querySelector("#turn").innerHTML = `TURN: ${turn}`;
  for(var i = 1; i < 5; i++) {document.querySelector(`#p${i}`).style.borderColor = "rgba(220, 220, 220, 0.3)";} 
  document.querySelector(`#p${playerTurn}`).style.borderColor = "orange"
}

document.querySelector("#nextturn").onclick = function () {
  console.log("hola"); nextTurn()}