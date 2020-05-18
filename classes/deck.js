export default class Deck {
  constructor() {
    this.next = 0;
    this.cards = [
      "As",
      "Ah",
      "Ad",
      "Ac",
      "Ks",
      "Kh",
      "Kd",
      "Kc",
      "Qs",
      "Qh",
      "Qd",
      "Qc",
      "Js",
      "Jh",
      "Jd",
      "Jc",
      "Ts",
      "Th",
      "Td",
      "Tc",
      "9s",
      "9h",
      "9d",
      "9c",
      "8s",
      "8h",
      "8d",
      "8c",
      "7s",
      "7h",
      "7d",
      "7c",
      "6s",
      "6h",
      "6d",
      "6c",
      "5s",
      "5h",
      "5d",
      "5c",
      "4s",
      "4h",
      "4d",
      "4c",
      "3s",
      "3h",
      "3d",
      "3c",
      "2s",
      "2h",
      "2d",
      "2c"
    ];
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  shuffle() {
    for (var i = 0; i < 52; i++) {
      j = this.getRandomInt(i);
      var temp;
      // swap cards i and j
      this.cards[i] = temp;
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }

  deal(players) {}
}
