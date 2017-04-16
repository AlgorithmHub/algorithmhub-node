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
    instance = new algorithmhub.Body2();
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

  describe('Body2', function() {
    it('should create an instance of Body2', function() {
      // uncomment below and update the code to test Body2
      //var instane = new algorithmhub.Body2();
      //expect(instance).to.be.a(algorithmhub.Body2);
    });

    it('should have the property wsid (base name: "wsid")', function() {
      // uncomment below and update the code to test the property wsid
      //var instane = new algorithmhub.Body2();
      //expect(instance).to.be();
    });

    it('should have the property inputs (base name: "inputs")', function() {
      // uncomment below and update the code to test the property inputs
      //var instane = new algorithmhub.Body2();
      //expect(instance).to.be();
    });

    it('should have the property f (base name: "f")', function() {
      // uncomment below and update the code to test the property f
      //var instane = new algorithmhub.Body2();
      //expect(instance).to.be();
    });

    it('should have the property outputs (base name: "outputs")', function() {
      // uncomment below and update the code to test the property outputs
      //var instane = new algorithmhub.Body2();
      //expect(instance).to.be();
    });

    it('should have the property isPublic (base name: "isPublic")', function() {
      // uncomment below and update the code to test the property isPublic
      //var instane = new algorithmhub.Body2();
      //expect(instance).to.be();
    });

  });

}));
