const ship = require(".//Ship");
class Port {
  constructor(name) {
    this.name = name;
    this.ships = [];
    //this.ship = port.ship[0];
  }
  addShip(ship) {
    return this.ships.push(ship);
    //this.currentShips = ships[0];
  }
  removeShip(ship) {
    //return this.ships.pop(ship);
    const index = this.ships.indexOf(ship);
    if (index > -1) {
      this.ships.splice(index, 1);
    }
  }
}

module.exports = Port;
