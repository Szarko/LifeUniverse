describe("Automata", function() {
  var universeArgs;
  var automataInstance;

  beforeEach(function() {
    universeArgs = { xMax: 20, yMax: 20 }
    automataInstance = new Automata(universeArgs)
  })
  
  it("should be able to instantiate new instance", function() {
    expect(Automata).toBeDefined()
    expect(automataInstance).toBeDefined()
  })

  it("should generate universe given x and y max limits", function() {
    automataInstance.generateUniverse()
    expect(automataInstance.universe.constructor).toEqual(Array)
    expect(automataInstance.universe.length).toEqual(20)
    expect(automataInstance.universe[0].length).toEqual(20)
    expect(automataInstance.universe[0][0].x).toEqual(0)
    expect(automataInstance.universe[0][0].y).toEqual(0)
    expect(automataInstance.universe[19][19].x).toEqual(19)
    expect(automataInstance.universe[19][19].y).toEqual(19)
  })

  it("should generate null state in new cells", function() {
    automataInstance.generateUniverse()
    expect(automataInstance.universe[0][0].state).toEqual(null)
  })
})