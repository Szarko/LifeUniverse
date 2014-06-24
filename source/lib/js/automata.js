// Cell Automata

function Automata(args) {
  //this.cellCollection = args.baseSequence
  this.universeDimensions = { xMax: args.xMax, yMax: args.yMax }
  this.universe = []
}

Automata.prototype = {
  init: function() {
    this.generateUniverse()
  },

  generateUniverse: function() {
    // var xCellCount = this.cellDimensions.xMax / this.cellDimensions.width
    // var yCellCount = this.cellDimensions.yMax / this.cellDimensions.height
    // for (var x = 0; x < xCellCount + 1; x++) {
    //   for (var y = 0; y < yCellCount; y++) {

    //   }
    // } 
    for (var x = 0; x < this.universeDimensions.xMax; x++) {
      this.universe.push([])
      for (var y = 0; y < this.universeDimensions.yMax; y++) {
        var newCell = new Cell(x, y)
        this.universe[x].push(newCell)
      }
    }
  },
  
  initStep: function() {
    for (var i = 0; i < this.cellCollection.length; i++) {
      this.connectedCellCount(this.cellCollection[i], this.mutateCell)
    }
  },

  connectedCellCount: function(cell, callback) {
    var cellCount = 0 
    for (var i = 0; i < this.cellCollection.length; i++) {
      if (this.isConnected(cell, this.cellCollection[i])) {
        cellCount++
      }
    }
    callback
  },

  isConnected: function(originCell, checksumCell) {
    if ((originCell.x === checksumCell.x) && (originCell.y ===  checksumCell.y)) {
      return false
    }
    var xyRanges = this.rangeCalculator(originCell)
    if ((checksumCell.x >= xyRanges.xRange[0] ) && (checksumCell.x <= xyRanges.xRange[1]) && (checksumCell.y >= xyRanges.yRange[0]) && (checksumCell.y <= xyRanges.yRange[1])) {
      return true
    }
    else {
      return false
    }
  },

  // rangeCalculator: function(cell) {
  //   (cell.x === 0) ? var xMin = this.cellDimensions.xMax : var xMin = cell.x - 1
  //   (cell.x === this.cellDimensions.xMax) ? var xMax = 0 : var xMax = cell.x + 1
  //   (cell.y === 0) ? var yMin = this.cellDimensions.yMax : var yMin = cell.y - 1
  //   (cell.y === this.cellDimensions.yMax) ? var yMax = 0 : var yMax = cell.y - 1
  //   return {xRange: [xMin,xMax], yRange: [yMin,yMax]}
  // },


  edgeOverlap: function(value, axis) {
    if (axis === 'x') {
      if ((value === this.cellDimensions.xMax) || ( value === 0)){
        return true
      }
    }
  },

  addCellToCollection: function(cell) {
      this.grid << cell
    }
}



// Cell Model
function Cell(x,y) {
  this.x = x
  this.y = y
  this.state = null
}