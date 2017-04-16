/**
 * AlgorithmHub
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.algorithmhub);
  }
}(this, function(expect, algorithmhub) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new algorithmhub.InlineResponse2007Files();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse2007Files', function() {
    it('should create an instance of InlineResponse2007Files', function() {
      // uncomment below and update the code to test InlineResponse2007Files
      //var instane = new algorithmhub.InlineResponse2007Files();
      //expect(instance).to.be.a(algorithmhub.InlineResponse2007Files);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new algorithmhub.InlineResponse2007Files();
      //expect(instance).to.be();
    });

    it('should have the property path (base name: "path")', function() {
      // uncomment below and update the code to test the property path
      //var instane = new algorithmhub.InlineResponse2007Files();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instane = new algorithmhub.InlineResponse2007Files();
      //expect(instance).to.be();
    });

    it('should have the property time (base name: "time")', function() {
      // uncomment below and update the code to test the property time
      //var instane = new algorithmhub.InlineResponse2007Files();
      //expect(instance).to.be();
    });

    it('should have the property isdir (base name: "isdir")', function() {
      // uncomment below and update the code to test the property isdir
      //var instane = new algorithmhub.InlineResponse2007Files();
      //expect(instance).to.be();
    });

  });

}));
