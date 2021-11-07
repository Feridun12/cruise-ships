class Ship {
  constructor(liman) {
    this.currentPort = liman;
    //this.binenInsan = bineninsan;
    //this.gemidekiInsan = mevcutyolcu;
  }
  setSail(denizde) {
    return this.currentPort = denizde;
  }; 
  dock (port) {
  return this.currentPort = port;
  };
};
const ship = new Ship("Dover");

module.exports = Ship
