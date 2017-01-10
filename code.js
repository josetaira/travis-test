(function() {
  
  "use strict";
  
  var TestClass = {};
  
  TestClass.doIt = function() {
    return 69;
  };
  
  window.TestClass = TestClass;
  
})();