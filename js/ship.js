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