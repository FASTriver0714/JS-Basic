/* globals expect, _, beforeEach, sinon, clock  */
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

  /* jshint ignore:start */

  describe("Part II", function () {
    describe("contains", function () {
      checkForNativeMethods(function () {
        _.contains([4, 5, 6], 2);
      });

      it("should be a function", function () {
        expect(_.contains).to.be.an.instanceOf(Function);
      });

      it("should not mutate the input array", function () {
        const input = [1, 2, 3, 4, 5];
        const result = _.contains(input, 4);

        /*
         * Mutation of inputs should be avoided without good justification otherwise
         * as it can often lead to hard to find bugs and confusing code!
         * Imagine we were reading the code above, and we added the following line:
         *
         * const lastElement = input[input.length - 1];
         *
         * Without knowing that mutation occurred inside of reduceRight,
         * we would assume that `lastElement` is 5. But if inside of
         * reduceRight, we use the array method `pop`, we would permanently
         * change `input` and our assumption would not longer be true,
         * `lastElement` would be 4 instead!
         *
         * The tricky part is that we have no way of knowing about the mutation
         * just by looking at the code above. We'd have to dive into the
         * implementation of reduceRight to the exact line that uses `pop`.
         * If we write a lot of code with this assumption, it might be very hard
         * to trace back to the correct line in reduceRight.
         *
         * You can avoid an entire class of bugs by writing functions
         * that don't mutate their inputs!
         */

        expect(input).to.eql([1, 2, 3, 4, 5]);
      });

      it("should return true given an array and a value from that array", function () {
        const array = [1, 2, 3];
        const value = 1;
        expect(_.contains(array, value)).to.be.true;
      });

      it("should return false given an array and a value not in that array", function () {
        const array = [1, 2, 3];
        const value = 4;
        expect(_.contains(array, value)).to.be.false;
      });
    });
  });
})();
/* jshint ignore:end */
