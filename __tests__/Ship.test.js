const Ship = require("../src/Ship");
describe("ship", () => {
  it("can be instantiated", () => {
    expect(Ship).toBeInstanceOf(Object);
  });
});
it("has a starting port", () => {
  const ship = new Ship("Dover");
  expect(ship.startingPort).toBe("Dover");
});
describe("the journey started", () => {
  it("can set sail", () => {
    const ship = new Ship("Dover");
    //Ship.mevcutyolcu = 0
    ship.setSail();
    expect(ship.startingPort).toBeFalsy();
  });
});
