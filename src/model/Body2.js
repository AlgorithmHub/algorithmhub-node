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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.algorithmhub) {
      root.algorithmhub = {};
    }
    root.algorithmhub.Body2 = factory(root.algorithmhub.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Body2 model module.
   * @module model/Body2
   * @version 0.3.0
   */

  /**
   * Constructs a new <code>Body2</code>.
   * @alias module:model/Body2
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Body2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body2} obj Optional instance to populate.
   * @return {module:model/Body2} The populated <code>Body2</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('wstype')) {
        obj['wstype'] = ApiClient.convertToType(data['wstype'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} wstype
   */
  exports.prototype['wstype'] = undefined;



  return exports;
}));


