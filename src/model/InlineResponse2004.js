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
    root.algorithmhub.InlineResponse2004 = factory(root.algorithmhub.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse2004 model module.
   * @module model/InlineResponse2004
   * @version 0.2.1
   */

  /**
   * Constructs a new <code>InlineResponse2004</code>.
   * @alias module:model/InlineResponse2004
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>InlineResponse2004</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2004} obj Optional instance to populate.
   * @return {module:model/InlineResponse2004} The populated <code>InlineResponse2004</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('sid')) {
        obj['sid'] = ApiClient.convertToType(data['sid'], 'String');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('runCount')) {
        obj['runCount'] = ApiClient.convertToType(data['runCount'], 'Number');
      }
      if (data.hasOwnProperty('isPublic')) {
        obj['isPublic'] = ApiClient.convertToType(data['isPublic'], 'Boolean');
      }
      if (data.hasOwnProperty('timeCreated')) {
        obj['timeCreated'] = ApiClient.convertToType(data['timeCreated'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} sid
   */
  exports.prototype['sid'] = undefined;
  /**
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * @member {Number} runCount
   */
  exports.prototype['runCount'] = undefined;
  /**
   * @member {Boolean} isPublic
   */
  exports.prototype['isPublic'] = undefined;
  /**
   * @member {Date} timeCreated
   */
  exports.prototype['timeCreated'] = undefined;



  return exports;
}));


