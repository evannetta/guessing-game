class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
    this.current = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    let range = this.max - this.min;
    if (!(range & 1)) {
      this.current = range / 2 + this.min;
    } else {
      this.current = Math.trunc(range / 2) + 1 + this.min;
    }
    return this.current;
  }

  lower() {
    this.max = this.current;
  }

  greater() {
    this.min = this.current;
  }
}

module.exports = GuessingGame;
