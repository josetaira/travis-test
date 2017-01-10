describe("TestClass", function() {
  
  it("should return 69", function() {
    expect(window.TestClass.doIt()).toBe(69);
  });
  
  it("should be loving you til we're 70", function() {
    expect(window.Testclass.doItAgain()).toBe("'Til we're 70");
  });
  
});