const stopIf = require("./index.js");
const StopIfError = require("./error.js");

describe("stopIf", () => {
  test("it will throw an error if true", () => {
    expect(() => stopIf(true)).toThrow(StopIfError);
  });

  test("it will not throw an error if true", () => {
    stopIf(false); // No error!
  });

  test("it will not do anything in production", () => {
    process.env.NODE_ENV = "production";
    stopIf(true); // No error!
    stopIf(false);
  });
});
