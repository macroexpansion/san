// source: proto/order.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.order.Order', null, global);
goog.exportSymbol('proto.order.OrderSide', null, global);
goog.exportSymbol('proto.order.OrderType', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.order.Order = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.order.Order, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.order.Order.displayName = 'proto.order.Order';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.order.Order.prototype.toObject = function(opt_includeInstance) {
  return proto.order.Order.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.order.Order} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.order.Order.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    allowance: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    pair: jspb.Message.getFieldWithDefault(msg, 4, ""),
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    amount: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    side: jspb.Message.getFieldWithDefault(msg, 7, 0),
    type: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.order.Order}
 */
proto.order.Order.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.order.Order;
  return proto.order.Order.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.order.Order} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.order.Order}
 */
proto.order.Order.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOrderId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAllowance(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPair(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAmount(value);
      break;
    case 7:
      var value = /** @type {!proto.order.OrderSide} */ (reader.readEnum());
      msg.setSide(value);
      break;
    case 8:
      var value = /** @type {!proto.order.OrderType} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.order.Order.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.order.Order.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.order.Order} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.order.Order.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getAllowance();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getPair();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getSide();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * optional uint32 order_id = 1;
 * @return {number}
 */
proto.order.Order.prototype.getOrderId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.order.Order} returns this
 */
proto.order.Order.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 user_id = 2;
 * @return {number}
 */
proto.order.Order.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.order.Order} returns this
 */
proto.order.Order.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional double allowance = 3;
 * @return {number}
 */
proto.order.Order.prototype.getAllowance = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.order.Order} returns this
 */
proto.order.Order.prototype.setAllowance = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional string pair = 4;
 * @return {string}
 */
proto.order.Order.prototype.getPair = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.order.Order} returns this
 */
proto.order.Order.prototype.setPair = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional double price = 5;
 * @return {number}
 */
proto.order.Order.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.order.Order} returns this
 */
proto.order.Order.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double amount = 6;
 * @return {number}
 */
proto.order.Order.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.order.Order} returns this
 */
proto.order.Order.prototype.setAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional OrderSide side = 7;
 * @return {!proto.order.OrderSide}
 */
proto.order.Order.prototype.getSide = function() {
  return /** @type {!proto.order.OrderSide} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.order.OrderSide} value
 * @return {!proto.order.Order} returns this
 */
proto.order.Order.prototype.setSide = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional OrderType type = 8;
 * @return {!proto.order.OrderType}
 */
proto.order.Order.prototype.getType = function() {
  return /** @type {!proto.order.OrderType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.order.OrderType} value
 * @return {!proto.order.Order} returns this
 */
proto.order.Order.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * @enum {number}
 */
proto.order.OrderSide = {
  ASK: 0,
  BID: 1
};

/**
 * @enum {number}
 */
proto.order.OrderType = {
  LIMIT: 0,
  MARKET: 1,
  STOP_LIMIT: 2,
  OCO: 3
};

goog.object.extend(exports, proto.order);