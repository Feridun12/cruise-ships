const Itinerary = require("../src/itenary");
const Port = require("../src/port");
describe('itinerary', () => {
    it("can be instantiated", () => {
        const itinerary = new Itinerary("Dover");
        expect(itinerary).toBeInstanceOf(Object);
      });
      it("instances has ports property", () => {
        const itinerary = new Itinerary([]);
        expect(itinerary.hasOwnProperty("ports")).toBe(true);
      });
      it("can have ports", () => {
      const dover = new Port ("Dover");
      const port = jest.fn();
      const calais = new Port ("Calais");
      const itinerary = new Itinerary([dover, calais]);
      expect(itinerary.ports).toEqual([dover, calais]);
      });
});