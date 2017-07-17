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

module.exports = StopIfError;
