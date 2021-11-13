const Ship = require('../src/Ship');
const Port = require("../src/Port");
const Itinerary = require("../src/itenary");

describe('Ship',() => {
    describe('with ports and an itinerary', () => {
        let ship;
        let dover;
        let calais;
        let itinerary;
      
        beforeEach(() => {
          dover = new Port('Dover');
          calais = new Port('Calais');
          itinerary = new Itinerary([dover, calais]);
          ship = new Ship(itinerary);
        });
    it('can be instantiated', () => {
        const port = new Port();
        expect(new Port()).toBeInstanceOf(Object);
        });
    it('instance port has name property', () => {
        const port = new Port('Dover');
        expect(port.hasOwnProperty('name')).toBe(true); 
        });
    it('can add a ship', () => {
        const port = new Port('Dover');
        const ship = {};

        port.addShip(ship);

        expect(port.ships).toContain(ship);
    })
    it('can remove a ship', () => {
        const port = new Port('Dover');
        const titanic = {};
        const queenMary = {};

        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);

        expect(port.ships).toEqual([titanic]);
    })

    })});
