(function() {
  
  "use strict";
  
  var TestClass = {};
  
  TestClass.doIt = function() {
    return 69;
  };
  
  TestClass.doItAgain = function() {
    return "'Til we're 17";
  };
  
  window.TestClass = TestClass;
  
})();