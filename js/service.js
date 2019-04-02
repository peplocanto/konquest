function ()
{
  let attackingArray = [];
  attackingShips.forEach(ship => {attackingArray.push(attack())});

  let defendingArray = [];
  planetsName.ships.forEach(ship => defendingArray.push(defence()));

  att()

  attackingArray = attackingArray.filter(el => {return el != null;})
  defendingArray = defendingArray.filter(el => {return el != null;})
  
  if(attackingArray.length > 0 && defendingArray.length > 0) {att()}
  else
  {
    if(attackingArray.length > 0) {//change planet owner}
    else {//no change}
  }

}

function att()
{
  let x;

  if (defendingArray.length > attackingArray.length) {x = attackingArray.length}
  else {x = defendingArray.length}

  for (var i = 0; i < x; i++)
  {
    if(attackingArray[i] > defendingArray[i]) {delete defendingArray[i]}
    else {delete attackingArray[i]}
  }
}