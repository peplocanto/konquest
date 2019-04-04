class Planet
{
  constructor()
  {
    this.name = planetsName[randomIntFromInterval(0, planetsName.length - 1)];
    this.pic = new Image();
    this.position = {x: randomIntFromInterval(0, 9), y: randomIntFromInterval(0, 9)};
    this.dimension = randomIntFromInterval(10, 20);
    this.distruction = 0;
    this.progress = 0;
    this.planetPower = Math.round(this.dimension * ((100 - this.distruction) / 100) * ((100 + this.progress) / 100));
    this.ships = [];
    this.color = `rgba(255, 255, 255, 0.3)`
    this.owner = "free"
  }

  shipGeneration()
  {
    for(var i = 0; i < this.planetPower; i++)
    { 
      this.ships.push(new Ship());
    }
  }
}

let planetsName = ["P.Centauri", "Gliese667", "Kepler442", "Wolf1061C", "KapteynB",
 "Luyten", "Trappist1D", "LSH1140", "TauCetiE", "Ross128", "Abeir-Toril", "Acheron", "Arda",
  "Arrakis", "Caprica", "Czarnia", "Cybertron", "Eroticon6", "Fury161", "GiediPrime", "HelionPrime",
   "Klendathu", "LV-233", "Magrathea", "Nibiru", "Oddworld", "OmicronXSei8", "Proteus", "RigelIV",
    "Sakaar", "Soror", "Trantor", "UrsaMinor", "Vegeta", "Yuggoth"];

let planets = [];



function createPlanets()
{
  let numberOfPlanets = parseInt(document.querySelector("#planets").value)
  for(var i = 0; i < numberOfPlanets; i++)
  {
    const newPlanet = new Planet;
    newPlanet.pic.src = `./images/planets/planet${i + 1}.png`;
    newPlanet.shipGeneration()
    newPlanet.shipGeneration()
    planets.push(newPlanet)

    if(i > 0)
    {
      for(var j = i - 1; j >= 0; j--)
      {
        if((newPlanet.position.x === planets[j].position.x && newPlanet.position.y === planets[j].position.y)
         || newPlanet.name === planets[j].name)
          {
            planets.splice(i, 1); i--}
      }
    }
  }
}

function drawPlanet()
{
  planets.forEach(planet => {
    ctx.beginPath()
    ctx.fillStyle = `${planet.color}`
    ctx.fillRect(planet.position.x * squareLength, planet.position.y * squareLength, squareLength, squareLength)
    ctx.closePath()
    ctx.beginPath()
    ctx.drawImage(planet.pic, planet.position.x * squareLength, planet.position.y * squareLength, squareLength, squareLength)
    ctx.closePath()
  })
}

