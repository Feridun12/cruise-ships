const Port = require("../src/port");
const Ship = require("../src/Ship");
const Itinerary = require("../src/itenary")
describe("Port", () => {
  it("can be instantiated", () => {
    expect(Port).toBeInstanceOf(Object);
  });
});
describe("port characteristics", () => {
  it("port name", () => {
    const port = new Port("Girne");
    expect(port.hasOwnProperty("name")).toBe(true);
  });
  it("the port can receive ships", () => {
    const port = new Port("Girne");
    const ship = {};
    port.addShip(ship);
    expect(port.ships).toContain(ship);
  });
  it("can remove a ship", () => {
    const port = new Port("Dover");
    const titanic = {};
    const queenMary = {};
    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip();
    
    expect(port.ships).toEqual([titanic]);
  });
  it("gets added to port on instantiation", () => {
    const dover = new Port('Dover');
    const itinerary = new Itinerary([dover]);
    const ship = new Ship(itinerary);
    expect(dover.ships).toContain(ship);
  });
});
