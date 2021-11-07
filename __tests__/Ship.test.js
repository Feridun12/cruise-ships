const Ship = require("../src/Ship");
const Port = require("../src/port");
describe("ship", () => {
  it("can be instantiated", () => {
    const ship = new Ship("Dover");
    expect(ship).toBeInstanceOf(Ship);
  });
  it("has a starting port", () => {
    //const ship = new Ship("Dover");
    const port = new Port("Dover");
    const ship = new Ship(port);
    expect(ship.currentPort).toBe(port);
  });
});
describe("the journey started", () => {
  it("can set sail", () => {
    //const ship = new Ship("Dover");
    const port = new Port("Dover");
    const ship = new Ship(port);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });
});
describe("the ship can dock", () => {
  const port = new Port("Dover");
  const ship = new Ship(port);
  const calais = new Port("Calais");
  ship.dock(calais);
  expect(ship.currentPort).toBe(calais);
});
