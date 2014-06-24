// Mutator

function Mutator(args) {
  this.renderer = args.renderer
  this.automata = args.automata
}

Mutator.prototype = {
  init: function() {
    this.automata.init()   
    this.renderCollection()
    this.renderer.init()
    
  },

  renderCollection: function() {


  }

}