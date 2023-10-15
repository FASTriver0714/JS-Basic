/* globals window, _ */

/*
 *
 * ✅작성되어 있지 않은 함수들의 내용을 완성해 주세요!
 *
 * ⛔️이미 작성이 완료된 함수의 내용은 수정/삭제하지 마세요.
 * ⛔️이미 작성이 완료된 함수의 내용은 반드시 이해하셔야 합니다.
 *
 */

(function () {
  ("use strict");

  window._ = {};

  /**
   *
   * "identity"
   *
   * Returns whatever value is passed as the argument. This function doesn't
   * seem very useful, but remember it - if a function needs to provide an
   * iterator when the user does not pass one in, this will be handy.
   *
   */
  _.identity = function (val) {
    return val;
  };

  /**
   *
   * "each"
   *
   * Call iterator(value, key, collection) for each element of collection.
   * Accepts both arrays and objects.
   *
   * Note: _.each does not have a return value, but rather simply runs the
   * iterator function over each item in the input collection.
   *
   */
  _.each = function (collection, iterator) {
    for (let i = 0; i < collection.length; i++){
      iterator(collection[i], i, collection);
    }
  };

  /**
   *
   * [DO NOT MODIFY] "indexOf"
   *
   * Returns the index at which value can be found in the array, or -1 if value
   * is not present in the array.
   *
   */
  _.indexOf = function (array, target) {
    // TIP: Here's an example of a function that needs to iterate, which we've
    // implemented for you. Instead of using a standard `for` loop, though,
    // it uses the iteration helper `each`, which you will need to write.
    let result = -1;

    _.each(array, function (item, index) {
      if (item === target && result === -1) {
        result = index;
      }
    });

    return result;
  };

  /**
   *
   * "map"
   *
   * Returns the results of applying an iterator to each element.
   *
   * map() is a useful primitive iteration function that works a lot
   * like each(), but in addition to running the operation on all
   * the members, it also maintains an array of results.
   *
   */
  _.map = function (collection, iterator) {
    const result = [];
    for (let i = 0; i < collection.length; i++){
      result.push(iterator(collection[i],i));
    }  
    return result;
  }


  /**
   *
   * "reduce"
   *
   * Reduces an array or object to a single value by repetitively calling
   * iterator(accumulator, item) for each item. accumulator should be
   * the return value of the previous iterator call.
   *
   * You can pass in a starting value for the accumulator as the third argument
   * to reduce. If no starting value is passed, the first element is used as
   * the accumulator, and is never passed to the iterator. In other words, in
   * the case where a starting value is not passed, the iterator is not invoked
   * until the second element, with the first element as its second argument.
   *
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
   *
   */
  _.reduce = function (collection, iterator, accumulator) {
    let i = 0
    if (accumulator == undefined) {
        accumulator = collection[0]; 
        i+=1
      }
    for (; i < collection.length; i ++){       
      accumulator = iterator(accumulator,collection[i])
    }
    return accumulator;
  };


  /**
   *
   * [DO NOT MODIFY] "contains"
   *
   * Determine if the array or object contains a given value (using `===`).
   *
   * 만약 `contains` 테스트가 실패한다면, `reduce`에 작성한 로직이 잘못 되었을 수 있습니다.
   *
   */
  _.contains = function (collection, target) {
    // TIP: Many iteration problems can be most easily expressed in
    // terms of reduce(). Here's a freebie to demonstrate!
    return _.reduce(
      collection,
      function (wasFound, item) {
        if (wasFound) {
          return true;
        }
        return item === target;
      },
      false
    );
  };

  /**
   *
   * "flatten"
   *
   * Takes a multidimensional array and converts it to a one-dimensional array.
   * The new array should contain all elements of the multidimensional array.
   *
   */
  _.flatten = function (nestedArray) {
    if (nestedArray.length == 0) {
      return [];
    }
    if (Array.isArray(nestedArray[0])) {
      return _.flatten([...nestedArray[0], ...nestedArray.slice(1)]);
    }
    return [nestedArray[0]].concat(_.flatten(nestedArray.slice(1)));
  //   // Hint: Use Array.isArray to check if something is an array
   };
})();



const nestedArray = [1, [2], [3, [[[4]]]]];
console.log(_.flatten(nestedArray));


