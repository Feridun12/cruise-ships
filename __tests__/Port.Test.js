const Port = require("../src/port")
describe("Port", () => {
  it("can be instantiated", () => {
    expect(Port).toBeInstanceOf(Object);
  });
});
describe('if the port has a name', () => {
 xit('port name', () => {
  const port = new Port("Girne");
  expect(Port).toContain(port.name);
 })
});
