// Canvas grid implementation :: TEST CENTRE
window.onload = function() {
  var gridSpecs = { baseSequence = [], 
                                cellWidth: 10,
                                cellHeight: 10,
                                xMax: 500,
                                ymax: 500 }
  var gridArgs = { canvasElement: "#lifeGrid", gridSpecs: gridSpecs }                            
  var gridRenderer = new Renderer(gridArgs)
  var automataInstance = new Automata(gridSpecs)
  var controllerArgs = { renderer: gridRenderer, 
                                        automata: automataInstance }
  var controller = new Mutator(controllerArgs) 
}




