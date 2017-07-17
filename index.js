const StopIfError = require("./error.js");

/**
 * @return {boolean} true if we're running in production.
 */
function isRunningInProduction() {
  return process.env.NODE_ENV === "production";
}

/**
 * stopIf will throw an error if evaluated to true and running on a development 
 * or test environment. In production, stopIf will do nothing.
 * @param {boolean} problem 
 */
function stopIf(problem, message = "") {
  if (isRunningInProduction()) return;

  if (problem) {
    throw new StopIfError(message);
  }
}

module.exports = stopIf;
