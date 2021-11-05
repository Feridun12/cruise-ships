class Ship {
  constructor(ilkliman, bineninsan, mevcutyolcu) {
    this.startingPort = ilkliman;
    this.binenInsan = bineninsan;
    this.gemidekiInsan = mevcutyolcu;
  }
  setSail (denizde) {
      return this.startingPort = denizde;
};
};

const ship = new Ship("Dover");
module.exports = Ship;
