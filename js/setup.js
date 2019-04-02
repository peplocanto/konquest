let w, h, w2, h2, squareLength;

function setup(canvas, aside) {
    function setCanvasDimensions() {
        canvas.setAttribute("height", window.innerHeight * 0.98)
        canvas.setAttribute("width", window.innerHeight * 0.98)
    }
    function setAsideDimensions() {
      aside.setAttribute("height", window.innerHeight)
      aside.setAttribute("width", (window.innerWidth - window.innerHeight))
    }

    window.onresize = function () {
        w = window.innerHeight * 0.98
        h = window.innerHeight * 0.98
        w2 = w / 2
        h2 = h / 2
        squareLength = w / 10

        setCanvasDimensions()
        setAsideDimensions()
        drawEverything()
    }

    w = window.innerHeight * 0.98
    h = window.innerHeight * 0.98
    w2 = w / 2
    h2 = h / 2
    squareLength = w / 10

    setCanvasDimensions()
    setAsideDimensions()
    drawEverything()
}