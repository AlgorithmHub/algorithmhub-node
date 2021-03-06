/**
 * AlgorithmHub
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
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
    instance = new algorithmhub.InlineResponse20014();
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

  describe('InlineResponse20014', function() {
    it('should create an instance of InlineResponse20014', function() {
      // uncomment below and update the code to test InlineResponse20014
      //var instane = new algorithmhub.InlineResponse20014();
      //expect(instance).to.be.a(algorithmhub.InlineResponse20014);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new algorithmhub.InlineResponse20014();
      //expect(instance).to.be();
    });

    it('should have the property cnid (base name: "cnid")', function() {
      // uncomment below and update the code to test the property cnid
      //var instane = new algorithmhub.InlineResponse20014();
      //expect(instance).to.be();
    });

    it('should have the property cid (base name: "cid")', function() {
      // uncomment below and update the code to test the property cid
      //var instane = new algorithmhub.InlineResponse20014();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new algorithmhub.InlineResponse20014();
      //expect(instance).to.be();
    });

    it('should have the property role (base name: "role")', function() {
      // uncomment below and update the code to test the property role
      //var instane = new algorithmhub.InlineResponse20014();
      //expect(instance).to.be();
    });

    it('should have the property cpus (base name: "cpus")', function() {
      // uncomment below and update the code to test the property cpus
      //var instane = new algorithmhub.InlineResponse20014();
      //expect(instance).to.be();
    });

    it('should have the property mem (base name: "mem")', function() {
      // uncomment below and update the code to test the property mem
      //var instane = new algorithmhub.InlineResponse20014();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new algorithmhub.InlineResponse20014();
      //expect(instance).to.be();
    });

    it('should have the property timeCreated (base name: "timeCreated")', function() {
      // uncomment below and update the code to test the property timeCreated
      //var instane = new algorithmhub.InlineResponse20014();
      //expect(instance).to.be();
    });

  });

}));
