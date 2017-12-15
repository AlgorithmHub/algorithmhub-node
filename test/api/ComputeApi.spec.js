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
    instance = new algorithmhub.ComputeApi();
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

  describe('ComputeApi', function() {
    describe('createCompute', function() {
      it('should call createCompute successfully', function(done) {
        //uncomment below and update the code to test createCompute
        //instance.createCompute(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCompute', function() {
      it('should call deleteCompute successfully', function(done) {
        //uncomment below and update the code to test deleteCompute
        //instance.deleteCompute(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('detailCompute', function() {
      it('should call detailCompute successfully', function(done) {
        //uncomment below and update the code to test detailCompute
        //instance.detailCompute(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listCompute', function() {
      it('should call listCompute successfully', function(done) {
        //uncomment below and update the code to test listCompute
        //instance.listCompute(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
