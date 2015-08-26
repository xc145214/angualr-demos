'use strict';

describe('myApp.demo3 filter', function() {

  beforeEach(module('myApp.demo3'));

  describe('reverseStr', function(){

    it('should reverse a string', inject(function(reverseStrFilter) {
      //spec body

      expect(reverseStrFilter("ABCD")).toEqual("DCBAfoo");
      expect(reverseStrFilter("john")).toEqual("nhojfoo");
      expect(reverseStrFilter("1234")).toEqual("4321foo");
    }));

  });
});