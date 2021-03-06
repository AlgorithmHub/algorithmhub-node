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
    root.algorithmhub.ModelName1 = factory(root.algorithmhub.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ModelName1 model module.
   * @module model/ModelName1
   * @version 0.3.1
   */

  /**
   * Constructs a new <code>ModelName1</code>.
   * @alias module:model/ModelName1
   * @class
   * @param wsid {String} 
   * @param inputs {Object} 
   * @param f {String} 
   * @param outputs {Array.<String>} 
   */
  var exports = function(wsid, inputs, f, outputs) {
    var _this = this;

    _this['wsid'] = wsid;
    _this['inputs'] = inputs;
    _this['f'] = f;
    _this['outputs'] = outputs;

  };

  /**
   * Constructs a <code>ModelName1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelName1} obj Optional instance to populate.
   * @return {module:model/ModelName1} The populated <code>ModelName1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('wsid')) {
        obj['wsid'] = ApiClient.convertToType(data['wsid'], 'String');
      }
      if (data.hasOwnProperty('inputs')) {
        obj['inputs'] = ApiClient.convertToType(data['inputs'], Object);
      }
      if (data.hasOwnProperty('f')) {
        obj['f'] = ApiClient.convertToType(data['f'], 'String');
      }
      if (data.hasOwnProperty('outputs')) {
        obj['outputs'] = ApiClient.convertToType(data['outputs'], ['String']);
      }
      if (data.hasOwnProperty('isPublic')) {
        obj['isPublic'] = ApiClient.convertToType(data['isPublic'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} wsid
   */
  exports.prototype['wsid'] = undefined;
  /**
   * @member {Object} inputs
   */
  exports.prototype['inputs'] = undefined;
  /**
   * @member {String} f
   */
  exports.prototype['f'] = undefined;
  /**
   * @member {Array.<String>} outputs
   */
  exports.prototype['outputs'] = undefined;
  /**
   * @member {Boolean} isPublic
   */
  exports.prototype['isPublic'] = undefined;



  return exports;
}));


