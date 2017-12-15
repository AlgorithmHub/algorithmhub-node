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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Body4', 'model/InlineResponse20015'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body4'), require('../model/InlineResponse20015'));
  } else {
    // Browser globals (root is window)
    if (!root.algorithmhub) {
      root.algorithmhub = {};
    }
    root.algorithmhub.ClusterApi = factory(root.algorithmhub.ApiClient, root.algorithmhub.Body4, root.algorithmhub.InlineResponse20015);
  }
}(this, function(ApiClient, Body4, InlineResponse20015) {
  'use strict';

  /**
   * Cluster service.
   * @module api/ClusterApi
   * @version 0.3.0
   */

  /**
   * Constructs a new ClusterApi. 
   * @alias module:api/ClusterApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Creates new cluster
     * Creates a new cluster
     * @param {module:model/Body4} body The cluster parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20015} and HTTP response
     */
    this.createClusterWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createCluster");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = InlineResponse20015;

      return this.apiClient.callApi(
        '/cluster', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Creates new cluster
     * Creates a new cluster
     * @param {module:model/Body4} body The cluster parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20015}
     */
    this.createCluster = function(body) {
      return this.createClusterWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an existing cluster
     * Delete an existing cluster
     * @param {String} cid The cluster id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20015} and HTTP response
     */
    this.deleteClusterWithHttpInfo = function(cid) {
      var postBody = null;

      // verify the required parameter 'cid' is set
      if (cid === undefined || cid === null) {
        throw new Error("Missing the required parameter 'cid' when calling deleteCluster");
      }


      var pathParams = {
        'cid': cid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = InlineResponse20015;

      return this.apiClient.callApi(
        '/cluster/{cid}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an existing cluster
     * Delete an existing cluster
     * @param {String} cid The cluster id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20015}
     */
    this.deleteCluster = function(cid) {
      return this.deleteClusterWithHttpInfo(cid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets cluster metadata
     * Gets cluster metadata
     * @param {String} cid The cluster id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse20015} and HTTP response
     */
    this.detailClusterWithHttpInfo = function(cid) {
      var postBody = null;

      // verify the required parameter 'cid' is set
      if (cid === undefined || cid === null) {
        throw new Error("Missing the required parameter 'cid' when calling detailCluster");
      }


      var pathParams = {
        'cid': cid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = InlineResponse20015;

      return this.apiClient.callApi(
        '/cluster/{cid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Gets cluster metadata
     * Gets cluster metadata
     * @param {String} cid The cluster id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20015}
     */
    this.detailCluster = function(cid) {
      return this.detailClusterWithHttpInfo(cid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns list of cluster resources
     * Returns a list of cluster resources
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/InlineResponse20015>} and HTTP response
     */
    this.listClustersWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = [InlineResponse20015];

      return this.apiClient.callApi(
        '/cluster', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns list of cluster resources
     * Returns a list of cluster resources
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/InlineResponse20015>}
     */
    this.listClusters = function() {
      return this.listClustersWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
