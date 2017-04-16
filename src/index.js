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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Body', 'model/Body1', 'model/Body2', 'model/Body3', 'model/Body4', 'model/InlineResponse200', 'model/InlineResponse2001', 'model/InlineResponse2002', 'model/InlineResponse2003', 'model/InlineResponse2004', 'model/InlineResponse2005', 'model/InlineResponse2006', 'model/InlineResponse2007', 'model/InlineResponse2007Files', 'model/InlineResponseDefault', 'api/BenchmarkTestsApi', 'api/DataApi', 'api/ModelApi', 'api/RunApi', 'api/UnitTestsApi', 'api/WorkspaceApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Body'), require('./model/Body1'), require('./model/Body2'), require('./model/Body3'), require('./model/Body4'), require('./model/InlineResponse200'), require('./model/InlineResponse2001'), require('./model/InlineResponse2002'), require('./model/InlineResponse2003'), require('./model/InlineResponse2004'), require('./model/InlineResponse2005'), require('./model/InlineResponse2006'), require('./model/InlineResponse2007'), require('./model/InlineResponse2007Files'), require('./model/InlineResponseDefault'), require('./api/BenchmarkTestsApi'), require('./api/DataApi'), require('./api/ModelApi'), require('./api/RunApi'), require('./api/UnitTestsApi'), require('./api/WorkspaceApi'));
  }
}(function(ApiClient, Body, Body1, Body2, Body3, Body4, InlineResponse200, InlineResponse2001, InlineResponse2002, InlineResponse2003, InlineResponse2004, InlineResponse2005, InlineResponse2006, InlineResponse2007, InlineResponse2007Files, InlineResponseDefault, BenchmarkTestsApi, DataApi, ModelApi, RunApi, UnitTestsApi, WorkspaceApi) {
  'use strict';

  /**
   * JavaScript client library for AlgorithmHub..<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var algorithmhub = require('index'); // See note below*.
   * var xxxSvc = new algorithmhub.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new algorithmhub.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new algorithmhub.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new algorithmhub.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.2.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Body model constructor.
     * @property {module:model/Body}
     */
    Body: Body,
    /**
     * The Body1 model constructor.
     * @property {module:model/Body1}
     */
    Body1: Body1,
    /**
     * The Body2 model constructor.
     * @property {module:model/Body2}
     */
    Body2: Body2,
    /**
     * The Body3 model constructor.
     * @property {module:model/Body3}
     */
    Body3: Body3,
    /**
     * The Body4 model constructor.
     * @property {module:model/Body4}
     */
    Body4: Body4,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001: InlineResponse2001,
    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002: InlineResponse2002,
    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003: InlineResponse2003,
    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004: InlineResponse2004,
    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005: InlineResponse2005,
    /**
     * The InlineResponse2006 model constructor.
     * @property {module:model/InlineResponse2006}
     */
    InlineResponse2006: InlineResponse2006,
    /**
     * The InlineResponse2007 model constructor.
     * @property {module:model/InlineResponse2007}
     */
    InlineResponse2007: InlineResponse2007,
    /**
     * The InlineResponse2007Files model constructor.
     * @property {module:model/InlineResponse2007Files}
     */
    InlineResponse2007Files: InlineResponse2007Files,
    /**
     * The InlineResponseDefault model constructor.
     * @property {module:model/InlineResponseDefault}
     */
    InlineResponseDefault: InlineResponseDefault,
    /**
     * The BenchmarkTestsApi service constructor.
     * @property {module:api/BenchmarkTestsApi}
     */
    BenchmarkTestsApi: BenchmarkTestsApi,
    /**
     * The DataApi service constructor.
     * @property {module:api/DataApi}
     */
    DataApi: DataApi,
    /**
     * The ModelApi service constructor.
     * @property {module:api/ModelApi}
     */
    ModelApi: ModelApi,
    /**
     * The RunApi service constructor.
     * @property {module:api/RunApi}
     */
    RunApi: RunApi,
    /**
     * The UnitTestsApi service constructor.
     * @property {module:api/UnitTestsApi}
     */
    UnitTestsApi: UnitTestsApi,
    /**
     * The WorkspaceApi service constructor.
     * @property {module:api/WorkspaceApi}
     */
    WorkspaceApi: WorkspaceApi
  };

  return exports;
}));
