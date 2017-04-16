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
    define(['ApiClient', 'model/InlineResponse2005', 'model/InlineResponse2006', 'model/InlineResponseDefault'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse2005'), require('../model/InlineResponse2006'), require('../model/InlineResponseDefault'));
  } else {
    // Browser globals (root is window)
    if (!root.algorithmhub) {
      root.algorithmhub = {};
    }
    root.algorithmhub.DataApi = factory(root.algorithmhub.ApiClient, root.algorithmhub.InlineResponse2005, root.algorithmhub.InlineResponse2006, root.algorithmhub.InlineResponseDefault);
  }
}(this, function(ApiClient, InlineResponse2005, InlineResponse2006, InlineResponseDefault) {
  'use strict';

  /**
   * Data service.
   * @module api/DataApi
   * @version 0.3.0
   */

  /**
   * Constructs a new DataApi. 
   * @alias module:api/DataApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteData operation.
     * @callback module:api/DataApi~deleteDataCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the data object
     * Deletes the data object
     * @param {String} did The data id
     * @param {module:api/DataApi~deleteDataCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteData = function(did, callback) {
      var postBody = null;

      // verify the required parameter 'did' is set
      if (did === undefined || did === null) {
        throw new Error("Missing the required parameter 'did' when calling deleteData");
      }


      var pathParams = {
        'did': did
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
        '/data/{did}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the downloadData operation.
     * @callback module:api/DataApi~downloadDataCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the data object
     * Get the data object as a file
     * @param {String} did The data id
     * @param {module:api/DataApi~downloadDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.downloadData = function(did, callback) {
      var postBody = null;

      // verify the required parameter 'did' is set
      if (did === undefined || did === null) {
        throw new Error("Missing the required parameter 'did' when calling downloadData");
      }


      var pathParams = {
        'did': did
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
      var returnType = File;

      return this.apiClient.callApi(
        '/data/{did}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getData operation.
     * @callback module:api/DataApi~getDataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2005} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get information on the data
     * Get information on the data object
     * @param {String} did The workspace base type.
     * @param {module:api/DataApi~getDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2005}
     */
    this.getData = function(did, callback) {
      var postBody = null;

      // verify the required parameter 'did' is set
      if (did === undefined || did === null) {
        throw new Error("Missing the required parameter 'did' when calling getData");
      }


      var pathParams = {
        'did': did
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
      var returnType = InlineResponse2005;

      return this.apiClient.callApi(
        '/data/{did}/info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listData operation.
     * @callback module:api/DataApi~listDataCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse2005>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return a list of data
     * Return a list data objects owned by user
     * @param {module:api/DataApi~listDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse2005>}
     */
    this.listData = function(callback) {
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
      var returnType = [InlineResponse2005];

      return this.apiClient.callApi(
        '/data', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadData operation.
     * @callback module:api/DataApi~uploadDataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2006} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload data
     * Upload a data file and get data id
     * @param {File} file The file to upload.
     * @param {module:api/DataApi~uploadDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2006}
     */
    this.uploadData = function(file, callback) {
      var postBody = null;

      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling uploadData");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'file': file
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = [];
      var returnType = InlineResponse2006;

      return this.apiClient.callApi(
        '/data', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));