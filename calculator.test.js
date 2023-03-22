const mathOperations = require("./calculator");

describe("Calculator tests", () => {
  // ตัวแปร
  // var input1 = 0;
  // var input2 = 0;
  beforeAll(() => {
    console.log("beforeAll called");
  });
  afterAll(() => {
    console.log("afterAll called");
  });
  beforeEach(() => {
    console.log("beforeEach called");
    input1 = 1;
    input2 = 2;
  });
  afterEach(() => {
    console.log("afterEach called");
  });

  test("adding 1 + 2 should return 3", () => {
    var result = mathOperations.sum(1, 2);
    expect(result).toBe(3);
    expect(result).not.toBe(8);
  });

  test("diff 5 - 1 should return 4", () => {
    // arrange and act
    var result = mathOperations.diff(5, 1);
    var string = "software testing help - a great resource for testers";
    // assert
    expect(result).toBe(4);
  });

  test("product 7 * 3  should return 21", () => {
    // arrange and act
    var result = mathOperations.product(7, 3);
    // assert
    expect(result).toBe(21);
  });
});
