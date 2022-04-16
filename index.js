class Result {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  disance(p1, p2) {
    return Math.sqrt(((p2.x - p1.x) ** 2) + ((p2.y - p1.y) ** 2));
  }
}
const result = new Result();
console.log(result.disance(new Result(5, 7), new Result(11, 24)));
