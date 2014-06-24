// Grid Render

function Renderer(args) {
  this.canvasElement = args.canvasElement
  this.gridSpecs = args.gridSpecs
}

Renderer.prototype = {
  init: function() {
    this.setListeners()
    this.renderGrid()
  },

  renderGrid: function(cellWidth,cellHeight) {
    var canvasGrid = this.fetchElement('#lifeGrid')
    var renderContext = canvasGrid.getContext('2d')
    this.gridObj = new generateCells()
    for (var r = 0; r < 501; r += cellWidth) {
      for (var c = 0; c < 501; c += cellHeight) {
        renderContext.strokeRect(r,c,cellWidth,cellHeight)
        this.gridObj.addCell(new cell(r,c,cellWidth,cellHeight))
      }
    }
  },

  function renderShape(x,y,width,height) {
    var canvasGrid = document.getElementById('lifeGrid')
    var renderRef = canvasGrid.getContext('2d')
    renderRef.fillRect(x,y,width,height)
  },

  fetchElement: function(elementIdentifier) {
    return document.querySelector(elementIdentifier)
  }
}