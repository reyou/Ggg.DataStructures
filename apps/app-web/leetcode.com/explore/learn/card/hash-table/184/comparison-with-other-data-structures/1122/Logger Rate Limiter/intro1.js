var Logger = function() {
  this.hash = {};
};
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
  if (this.hash[message] === undefined) {
    this.hash[message] = timestamp;
    return true;
  } else {
    if (this.hash[message] - timestamp > 10) {
      this.hash[message] = timestamp;
      return true;
    }
    return false;
  }
};
