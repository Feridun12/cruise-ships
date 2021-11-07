const Ship = require("../src/Ship");
describe("ship", () => {
  it("can be instantiated", () => {
    const ship = new Ship("Dover");
    expect(ship).toBeInstanceOf(Ship);
  });
  it("has a starting port", () => {
    const ship = new Ship("Dover");
    expect(ship.currentPort).toBe("Dover");
  });
});
describe("the journey started", () => {
  it("can set sail", () => {
    const ship = new Ship("Dover");
    ship.setSail();
    expect(ship.setSail()).toBeFalsy();
  });
});
