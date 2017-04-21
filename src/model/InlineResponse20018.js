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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.algorithmhub) {
      root.algorithmhub = {};
    }
    root.algorithmhub.InlineResponse20018 = factory(root.algorithmhub.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse20018 model module.
   * @module model/InlineResponse20018
   * @version 0.2.4
   */

  /**
   * Constructs a new <code>InlineResponse20018</code>.
   * @alias module:model/InlineResponse20018
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>InlineResponse20018</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20018} obj Optional instance to populate.
   * @return {module:model/InlineResponse20018} The populated <code>InlineResponse20018</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {Object} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));

