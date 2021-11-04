class Ship {
  constructor(ilkliman, bineninsan, mevcutyolcu) {
    this.startingPort = ilkliman;
    this.binenInsan = bineninsan;
    this.gemidekiInsan = mevcutyolcu;
  }
}
const ship = new Ship("Maria");
module.exports = Ship;
