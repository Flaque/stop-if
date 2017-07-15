const DEFAULT_ERROR = `Your program has encountered a "stop-if" error without a message.`;

/**
 * A stop-if error happens when the user hits a stopIf() function with
 * a parameter evaluating to "true".
 * @param {String} message 
 */
function StopIfError(message) {
  this.name = "StopIfError";
  this.message = this.message = message || DEFAULT_ERROR;
  this.stack = new Error().stack;
}
StopIfError.prototype = Object.create(Error.prototype);
StopIfError.prototype.constructor = StopIfError;

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
function stopIf(problem) {
  if (isRunningInProduction()) return;

  if (problem) {
    throw new Error();
  }
}

module.exports = stopIf;
