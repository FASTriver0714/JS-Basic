/* globals expect, _, beforeEach, sinon, setTimeout, clock  */
(function () {
  "use strict";

  const checkForNativeMethods = function (runVanillaUtilsFunction) {
    it("should not use the native version of any utils methods in its implementation", function () {
      // These spies are set up in testSupport.js
      runVanillaUtilsFunction();
      expect(Array.prototype.map.called).to.equal(false);
      expect(Array.prototype.indexOf.called).to.equal(false);
      expect(Array.prototype.forEach.called).to.equal(false);
      expect(Array.prototype.filter.called).to.equal(false);
      expect(Array.prototype.reduce.called).to.equal(false);
      expect(Array.prototype.every.called).to.equal(false);
      expect(Array.prototype.some.called).to.equal(false);
      expect(Array.prototype.flat.called).to.equal(false);
      expect(Array.prototype.includes.called).to.equal(false);
      expect(Array.prototype.find.called).to.equal(false);
    });
  };

  describe("Advanced", function () {
    describe("flatten", function () {
      checkForNativeMethods(function () {
        _.flatten([1, [2], [3, [[[4]]]]]);
      });

      it("can flatten nested arrays", function () {
        const nestedArray = [1, [2], [3, [[[4]]]]];

        expect(_.flatten(nestedArray)).to.eql([1, 2, 3, 4]);
      });
    });
  });
})();
