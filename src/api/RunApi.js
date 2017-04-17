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
    define(['ApiClient', 'model/InlineResponse2002', 'model/InlineResponseDefault'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse2002'), require('../model/InlineResponseDefault'));
  } else {
    // Browser globals (root is window)
    if (!root.algorithmhub) {
      root.algorithmhub = {};
    }
    root.algorithmhub.RunApi = factory(root.algorithmhub.ApiClient, root.algorithmhub.InlineResponse2002, root.algorithmhub.InlineResponseDefault);
  }
}(this, function(ApiClient, InlineResponse2002, InlineResponseDefault) {
  'use strict';

  /**
   * Run service.
   * @module api/RunApi
   * @version 0.2.3
   */

  /**
   * Constructs a new RunApi. 
   * @alias module:api/RunApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * PRIVATE
     * Add a file to the run results
     * @param {String} rid The run id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'String'} and HTTP response
     */
    this.addFileRunWithHttpInfo = function(rid) {
      var postBody = null;

      // verify the required parameter 'rid' is set
      if (rid === undefined || rid === null) {
        throw new Error("Missing the required parameter 'rid' when calling addFileRun");
      }


      var pathParams = {
        'rid': rid
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/run/{rid}/file', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * PRIVATE
     * Add a file to the run results
     * @param {String} rid The run id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */
    this.addFileRun = function(rid) {
      return this.addFileRunWithHttpInfo(rid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get info about run
     * Get info about the run
     * @param {String} rid The run id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
     */
    this.detailRunWithHttpInfo = function(rid) {
      var postBody = null;

      // verify the required parameter 'rid' is set
      if (rid === undefined || rid === null) {
        throw new Error("Missing the required parameter 'rid' when calling detailRun");
      }


      var pathParams = {
        'rid': rid
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
      var returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/run/{rid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get info about run
     * Get info about the run
     * @param {String} rid The run id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2002}
     */
    this.detailRun = function(rid) {
      return this.detailRunWithHttpInfo(rid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Input parameters
     * Input parameters
     * @param {String} rid The run id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    this.getInputWithHttpInfo = function(rid) {
      var postBody = null;

      // verify the required parameter 'rid' is set
      if (rid === undefined || rid === null) {
        throw new Error("Missing the required parameter 'rid' when calling getInput");
      }


      var pathParams = {
        'rid': rid
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/run/{rid}/input', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Input parameters
     * Input parameters
     * @param {String} rid The run id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    this.getInput = function(rid) {
      return this.getInputWithHttpInfo(rid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the output
     * Get the output
     * @param {String} rid The run id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    this.getOutputWithHttpInfo = function(rid) {
      var postBody = null;

      // verify the required parameter 'rid' is set
      if (rid === undefined || rid === null) {
        throw new Error("Missing the required parameter 'rid' when calling getOutput");
      }


      var pathParams = {
        'rid': rid
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/run/{rid}/output', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the output
     * Get the output
     * @param {String} rid The run id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    this.getOutput = function(rid) {
      return this.getOutputWithHttpInfo(rid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get figure as app
     * Get figure as app
     * @param {String} rid The run id
     * @param {String} fid The file id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
     */
    this.getOutputFigureWithHttpInfo = function(rid, fid) {
      var postBody = null;

      // verify the required parameter 'rid' is set
      if (rid === undefined || rid === null) {
        throw new Error("Missing the required parameter 'rid' when calling getOutputFigure");
      }

      // verify the required parameter 'fid' is set
      if (fid === undefined || fid === null) {
        throw new Error("Missing the required parameter 'fid' when calling getOutputFigure");
      }


      var pathParams = {
        'rid': rid,
        'fid': fid
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
        '/run/{rid}/figure/{fid}/*', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get figure as app
     * Get figure as app
     * @param {String} rid The run id
     * @param {String} fid The file id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link File}
     */
    this.getOutputFigure = function(rid, fid) {
      return this.getOutputFigureWithHttpInfo(rid, fid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a file
     * Get a file
     * @param {String} rid The run id
     * @param {String} filename The filename
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
     */
    this.getOutputFileWithHttpInfo = function(rid, filename) {
      var postBody = null;

      // verify the required parameter 'rid' is set
      if (rid === undefined || rid === null) {
        throw new Error("Missing the required parameter 'rid' when calling getOutputFile");
      }

      // verify the required parameter 'filename' is set
      if (filename === undefined || filename === null) {
        throw new Error("Missing the required parameter 'filename' when calling getOutputFile");
      }


      var pathParams = {
        'rid': rid,
        'filename': filename
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
        '/run/{rid}/file/{filename}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a file
     * Get a file
     * @param {String} rid The run id
     * @param {String} filename The filename
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link File}
     */
    this.getOutputFile = function(rid, filename) {
      return this.getOutputFileWithHttpInfo(rid, filename)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get status of the run
     * Get status of the run
     * @param {String} rid The run id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'String'} and HTTP response
     */
    this.getStatusWithHttpInfo = function(rid) {
      var postBody = null;

      // verify the required parameter 'rid' is set
      if (rid === undefined || rid === null) {
        throw new Error("Missing the required parameter 'rid' when calling getStatus");
      }


      var pathParams = {
        'rid': rid
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/run/{rid}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get status of the run
     * Get status of the run
     * @param {String} rid The run id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */
    this.getStatus = function(rid) {
      return this.getStatusWithHttpInfo(rid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get list of figures
     * Get list of figures
     * @param {String} rid The run id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'String'} and HTTP response
     */
    this.listOutputFiguresWithHttpInfo = function(rid) {
      var postBody = null;

      // verify the required parameter 'rid' is set
      if (rid === undefined || rid === null) {
        throw new Error("Missing the required parameter 'rid' when calling listOutputFigures");
      }


      var pathParams = {
        'rid': rid
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/run/{rid}/figures', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get list of figures
     * Get list of figures
     * @param {String} rid The run id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */
    this.listOutputFigures = function(rid) {
      return this.listOutputFiguresWithHttpInfo(rid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get list of output files
     * Get list of output files
     * @param {String} rid The run id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'String'} and HTTP response
     */
    this.listOutputFilesWithHttpInfo = function(rid) {
      var postBody = null;

      // verify the required parameter 'rid' is set
      if (rid === undefined || rid === null) {
        throw new Error("Missing the required parameter 'rid' when calling listOutputFiles");
      }


      var pathParams = {
        'rid': rid
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/run/{rid}/files', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get list of output files
     * Get list of output files
     * @param {String} rid The run id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */
    this.listOutputFiles = function(rid) {
      return this.listOutputFilesWithHttpInfo(rid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get list of runs
     * Get list of runs
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<Object>} and HTTP response
     */
    this.listRunsWithHttpInfo = function() {
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
      var returnType = [Object];

      return this.apiClient.callApi(
        '/run', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get list of runs
     * Get list of runs
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<Object>}
     */
    this.listRuns = function() {
      return this.listRunsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * PRIVATE
     * Post that an error occured and close the run.
     * @param {String} rid The workspace base type.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'String'} and HTTP response
     */
    this.postErrorWithHttpInfo = function(rid) {
      var postBody = null;

      // verify the required parameter 'rid' is set
      if (rid === undefined || rid === null) {
        throw new Error("Missing the required parameter 'rid' when calling postError");
      }


      var pathParams = {
        'rid': rid
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/run/{rid}/error', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * PRIVATE
     * Post that an error occured and close the run.
     * @param {String} rid The workspace base type.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */
    this.postError = function(rid) {
      return this.postErrorWithHttpInfo(rid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * PRIVATE
     * Add a figure from the run
     * @param {String} rid The workspace base type.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'String'} and HTTP response
     */
    this.postFigureWithHttpInfo = function(rid) {
      var postBody = null;

      // verify the required parameter 'rid' is set
      if (rid === undefined || rid === null) {
        throw new Error("Missing the required parameter 'rid' when calling postFigure");
      }


      var pathParams = {
        'rid': rid
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/run/{rid}/figure', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * PRIVATE
     * Add a figure from the run
     * @param {String} rid The workspace base type.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */
    this.postFigure = function(rid) {
      return this.postFigureWithHttpInfo(rid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * PRIVATE
     * Post the status of run
     * @param {String} rid The run id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'String'} and HTTP response
     */
    this.postStatusWithHttpInfo = function(rid) {
      var postBody = null;

      // verify the required parameter 'rid' is set
      if (rid === undefined || rid === null) {
        throw new Error("Missing the required parameter 'rid' when calling postStatus");
      }


      var pathParams = {
        'rid': rid
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/run/{rid}/status', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * PRIVATE
     * Post the status of run
     * @param {String} rid The run id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */
    this.postStatus = function(rid) {
      return this.postStatusWithHttpInfo(rid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * PRIVATE
     * Send output.json and close the run as successful
     * @param {String} rid The run id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.setSuccessWithHttpInfo = function(rid) {
      var postBody = null;

      // verify the required parameter 'rid' is set
      if (rid === undefined || rid === null) {
        throw new Error("Missing the required parameter 'rid' when calling setSuccess");
      }


      var pathParams = {
        'rid': rid
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
        '/run/{rid}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * PRIVATE
     * Send output.json and close the run as successful
     * @param {String} rid The run id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.setSuccess = function(rid) {
      return this.setSuccessWithHttpInfo(rid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
