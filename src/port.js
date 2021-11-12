const ship = require(".//Ship");
class Port {
  constructor(name) {
    this.name = name;
    this.ships = [];
    //this.ship = port.ship[0];
  }
  addShip(ship) {
     this.ships.push(ship);
    //this.currentShips = ships[0];
  }
  removeShip(ship) {
  this.ships.pop(ship);
  }
}

module.exports = Port;
