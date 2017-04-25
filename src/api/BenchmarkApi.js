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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponseDefault'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponseDefault'));
  } else {
    // Browser globals (root is window)
    if (!root.algorithmhub) {
      root.algorithmhub = {};
    }
    root.algorithmhub.BenchmarkApi = factory(root.algorithmhub.ApiClient, root.algorithmhub.InlineResponseDefault);
  }
}(this, function(ApiClient, InlineResponseDefault) {
  'use strict';

  /**
   * Benchmark service.
   * @module api/BenchmarkApi
   * @version 0.2.5
   */

  /**
   * Constructs a new BenchmarkApi. 
   * @alias module:api/BenchmarkApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create Benchmark
     * Create a new Benchmark
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.createBenchmarkWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/benchmark', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create Benchmark
     * Create a new Benchmark
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.createBenchmark = function() {
      return this.createBenchmarkWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get benchmark info
     * Get benchmark info
     * @param {String} bid The benchmark id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.getInfoBenchmarkWithHttpInfo = function(bid) {
      var postBody = null;

      // verify the required parameter 'bid' is set
      if (bid === undefined || bid === null) {
        throw new Error("Missing the required parameter 'bid' when calling getInfoBenchmark");
      }


      var pathParams = {
        'bid': bid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/benchmark/{bid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get benchmark info
     * Get benchmark info
     * @param {String} bid The benchmark id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.getInfoBenchmark = function(bid) {
      return this.getInfoBenchmarkWithHttpInfo(bid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get benchmark list
     * Get a list of models associated with this benchmark
     * @param {String} bid The benchmark id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.listBenchmarkWithHttpInfo = function(bid) {
      var postBody = null;

      // verify the required parameter 'bid' is set
      if (bid === undefined || bid === null) {
        throw new Error("Missing the required parameter 'bid' when calling listBenchmark");
      }


      var pathParams = {
        'bid': bid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/benchmark/{bid}/models', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get benchmark list
     * Get a list of models associated with this benchmark
     * @param {String} bid The benchmark id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.listBenchmark = function(bid) {
      return this.listBenchmarkWithHttpInfo(bid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));