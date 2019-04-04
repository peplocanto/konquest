function randomIntFromInterval(min, max) // min and max included
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getCursorPosition(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    const coord = {x,y}
    return coord
}

function findWithAttr(array, attr, value) 
{
  for(var i = 0; i < array.length; i += 1) 
    {
      if(array[i][attr] === value) 
        {
          return i;
        }
    }
    return -1;
}

function resetBoxes()
{
  document.querySelector("#from").innerHTML = `From: `;
  document.querySelector("#fromowner").innerHTML = `Owner: `;
  document.querySelector("#fromdimension").innerHTML = `Dimensions: `;
  document.querySelector("#fromprog").innerHTML = `Progress: `;
  document.querySelector("#fromdistr").innerHTML = `Distruction: `;
  
  document.querySelector("#to").innerHTML = `To: `;
  document.querySelector("#toowner").innerHTML = `Owner: `;
  document.querySelector("#todimension").innerHTML = `Dimensions: `;
  document.querySelector("#toprog").innerHTML = `Progress: `;
  document.querySelector("#todistr").innerHTML = `Distruction: `;

  document.querySelector("#shipsnumber").innerHTML = 0;
  document.querySelector("#ships").value = ""

  document.querySelector("#distance").innerHTML = `Distance: `
}

