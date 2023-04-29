function receivesAFunction(callback) {
    callback();
  }
function returnsANamedFunction() {
    function namedFunction() {
        console.log("Hello from the named function!");
    }
    return namedFunction;
  }
function returnsAnAnonymousFunction() {
    return function() {
        console.log("Hello from the anonymous function!");
    }
  }