const Port = require("../src/port")
describe("Port", () => {
  it("can be instantiated", () => {
    expect(Port).toBeInstanceOf(Object);
  });
});
describe('if the port has a name', () => {
 it('port name', () => {
  const port = new Port("Girne");
  expect(port.hasOwnProperty("name")).toBe(true);
 })
});
