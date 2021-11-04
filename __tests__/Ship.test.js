const Ship = require("../src/Ship");
describe("ship", () => {
  it("can be instantiated", () => {
    expect(Ship).toBeInstanceOf(Object);
  });
});
it('has a starting port', () => {
    const ship = new Ship ("Maria");
    expect(ship.startingPort).toBe("Maria");
});
