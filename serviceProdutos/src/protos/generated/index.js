/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Product = (function() {

    /**
     * Properties of a Product.
     * @exports IProduct
     * @interface IProduct
     * @property {number|null} [id] Product id
     * @property {string|null} [thumbnail] Product thumbnail
     * @property {string|null} [preco] Product preco
     * @property {string|null} [ingredientes] Product ingredientes
     * @property {string|null} [disponibilidade] Product disponibilidade
     * @property {string|null} [volume] Product volume
     */

    /**
     * Constructs a new Product.
     * @exports Product
     * @classdesc Represents a Product.
     * @implements IProduct
     * @constructor
     * @param {IProduct=} [properties] Properties to set
     */
    function Product(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Product id.
     * @member {number} id
     * @memberof Product
     * @instance
     */
    Product.prototype.id = 0;

    /**
     * Product thumbnail.
     * @member {string} thumbnail
     * @memberof Product
     * @instance
     */
    Product.prototype.thumbnail = "";

    /**
     * Product preco.
     * @member {string} preco
     * @memberof Product
     * @instance
     */
    Product.prototype.preco = "";

    /**
     * Product ingredientes.
     * @member {string} ingredientes
     * @memberof Product
     * @instance
     */
    Product.prototype.ingredientes = "";

    /**
     * Product disponibilidade.
     * @member {string} disponibilidade
     * @memberof Product
     * @instance
     */
    Product.prototype.disponibilidade = "";

    /**
     * Product volume.
     * @member {string} volume
     * @memberof Product
     * @instance
     */
    Product.prototype.volume = "";

    /**
     * Creates a new Product instance using the specified properties.
     * @function create
     * @memberof Product
     * @static
     * @param {IProduct=} [properties] Properties to set
     * @returns {Product} Product instance
     */
    Product.create = function create(properties) {
        return new Product(properties);
    };

    /**
     * Encodes the specified Product message. Does not implicitly {@link Product.verify|verify} messages.
     * @function encode
     * @memberof Product
     * @static
     * @param {IProduct} message Product message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Product.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 1 =*/9).double(message.id);
        if (message.thumbnail != null && Object.hasOwnProperty.call(message, "thumbnail"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.thumbnail);
        if (message.preco != null && Object.hasOwnProperty.call(message, "preco"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.preco);
        if (message.ingredientes != null && Object.hasOwnProperty.call(message, "ingredientes"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.ingredientes);
        if (message.disponibilidade != null && Object.hasOwnProperty.call(message, "disponibilidade"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.disponibilidade);
        if (message.volume != null && Object.hasOwnProperty.call(message, "volume"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.volume);
        return writer;
    };

    /**
     * Encodes the specified Product message, length delimited. Does not implicitly {@link Product.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Product
     * @static
     * @param {IProduct} message Product message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Product.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Product message from the specified reader or buffer.
     * @function decode
     * @memberof Product
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Product} Product
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Product.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Product();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.double();
                break;
            case 2:
                message.thumbnail = reader.string();
                break;
            case 3:
                message.preco = reader.string();
                break;
            case 4:
                message.ingredientes = reader.string();
                break;
            case 5:
                message.disponibilidade = reader.string();
                break;
            case 6:
                message.volume = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Product message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Product
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Product} Product
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Product.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Product message.
     * @function verify
     * @memberof Product
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Product.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id !== "number")
                return "id: number expected";
        if (message.thumbnail != null && message.hasOwnProperty("thumbnail"))
            if (!$util.isString(message.thumbnail))
                return "thumbnail: string expected";
        if (message.preco != null && message.hasOwnProperty("preco"))
            if (!$util.isString(message.preco))
                return "preco: string expected";
        if (message.ingredientes != null && message.hasOwnProperty("ingredientes"))
            if (!$util.isString(message.ingredientes))
                return "ingredientes: string expected";
        if (message.disponibilidade != null && message.hasOwnProperty("disponibilidade"))
            if (!$util.isString(message.disponibilidade))
                return "disponibilidade: string expected";
        if (message.volume != null && message.hasOwnProperty("volume"))
            if (!$util.isString(message.volume))
                return "volume: string expected";
        return null;
    };

    /**
     * Creates a Product message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Product
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Product} Product
     */
    Product.fromObject = function fromObject(object) {
        if (object instanceof $root.Product)
            return object;
        var message = new $root.Product();
        if (object.id != null)
            message.id = Number(object.id);
        if (object.thumbnail != null)
            message.thumbnail = String(object.thumbnail);
        if (object.preco != null)
            message.preco = String(object.preco);
        if (object.ingredientes != null)
            message.ingredientes = String(object.ingredientes);
        if (object.disponibilidade != null)
            message.disponibilidade = String(object.disponibilidade);
        if (object.volume != null)
            message.volume = String(object.volume);
        return message;
    };

    /**
     * Creates a plain object from a Product message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Product
     * @static
     * @param {Product} message Product
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Product.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.thumbnail = "";
            object.preco = "";
            object.ingredientes = "";
            object.disponibilidade = "";
            object.volume = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = options.json && !isFinite(message.id) ? String(message.id) : message.id;
        if (message.thumbnail != null && message.hasOwnProperty("thumbnail"))
            object.thumbnail = message.thumbnail;
        if (message.preco != null && message.hasOwnProperty("preco"))
            object.preco = message.preco;
        if (message.ingredientes != null && message.hasOwnProperty("ingredientes"))
            object.ingredientes = message.ingredientes;
        if (message.disponibilidade != null && message.hasOwnProperty("disponibilidade"))
            object.disponibilidade = message.disponibilidade;
        if (message.volume != null && message.hasOwnProperty("volume"))
            object.volume = message.volume;
        return object;
    };

    /**
     * Converts this Product to JSON.
     * @function toJSON
     * @memberof Product
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Product.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Product;
})();

$root.ByIdRequest = (function() {

    /**
     * Properties of a ByIdRequest.
     * @exports IByIdRequest
     * @interface IByIdRequest
     * @property {number|null} [id] ByIdRequest id
     */

    /**
     * Constructs a new ByIdRequest.
     * @exports ByIdRequest
     * @classdesc Represents a ByIdRequest.
     * @implements IByIdRequest
     * @constructor
     * @param {IByIdRequest=} [properties] Properties to set
     */
    function ByIdRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ByIdRequest id.
     * @member {number} id
     * @memberof ByIdRequest
     * @instance
     */
    ByIdRequest.prototype.id = 0;

    /**
     * Creates a new ByIdRequest instance using the specified properties.
     * @function create
     * @memberof ByIdRequest
     * @static
     * @param {IByIdRequest=} [properties] Properties to set
     * @returns {ByIdRequest} ByIdRequest instance
     */
    ByIdRequest.create = function create(properties) {
        return new ByIdRequest(properties);
    };

    /**
     * Encodes the specified ByIdRequest message. Does not implicitly {@link ByIdRequest.verify|verify} messages.
     * @function encode
     * @memberof ByIdRequest
     * @static
     * @param {IByIdRequest} message ByIdRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ByIdRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 1 =*/9).double(message.id);
        return writer;
    };

    /**
     * Encodes the specified ByIdRequest message, length delimited. Does not implicitly {@link ByIdRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ByIdRequest
     * @static
     * @param {IByIdRequest} message ByIdRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ByIdRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ByIdRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ByIdRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ByIdRequest} ByIdRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ByIdRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ByIdRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.double();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ByIdRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ByIdRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ByIdRequest} ByIdRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ByIdRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ByIdRequest message.
     * @function verify
     * @memberof ByIdRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ByIdRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id !== "number")
                return "id: number expected";
        return null;
    };

    /**
     * Creates a ByIdRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ByIdRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ByIdRequest} ByIdRequest
     */
    ByIdRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ByIdRequest)
            return object;
        var message = new $root.ByIdRequest();
        if (object.id != null)
            message.id = Number(object.id);
        return message;
    };

    /**
     * Creates a plain object from a ByIdRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ByIdRequest
     * @static
     * @param {ByIdRequest} message ByIdRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ByIdRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.id = 0;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = options.json && !isFinite(message.id) ? String(message.id) : message.id;
        return object;
    };

    /**
     * Converts this ByIdRequest to JSON.
     * @function toJSON
     * @memberof ByIdRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ByIdRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ByIdRequest;
})();

$root.Empty = (function() {

    /**
     * Properties of an Empty.
     * @exports IEmpty
     * @interface IEmpty
     */

    /**
     * Constructs a new Empty.
     * @exports Empty
     * @classdesc Represents an Empty.
     * @implements IEmpty
     * @constructor
     * @param {IEmpty=} [properties] Properties to set
     */
    function Empty(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new Empty instance using the specified properties.
     * @function create
     * @memberof Empty
     * @static
     * @param {IEmpty=} [properties] Properties to set
     * @returns {Empty} Empty instance
     */
    Empty.create = function create(properties) {
        return new Empty(properties);
    };

    /**
     * Encodes the specified Empty message. Does not implicitly {@link Empty.verify|verify} messages.
     * @function encode
     * @memberof Empty
     * @static
     * @param {IEmpty} message Empty message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Empty.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified Empty message, length delimited. Does not implicitly {@link Empty.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Empty
     * @static
     * @param {IEmpty} message Empty message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Empty.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Empty message from the specified reader or buffer.
     * @function decode
     * @memberof Empty
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Empty} Empty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Empty.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Empty();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Empty message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Empty
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Empty} Empty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Empty.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Empty message.
     * @function verify
     * @memberof Empty
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Empty.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an Empty message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Empty
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Empty} Empty
     */
    Empty.fromObject = function fromObject(object) {
        if (object instanceof $root.Empty)
            return object;
        return new $root.Empty();
    };

    /**
     * Creates a plain object from an Empty message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Empty
     * @static
     * @param {Empty} message Empty
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Empty.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this Empty to JSON.
     * @function toJSON
     * @memberof Empty
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Empty.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Empty;
})();

$root.ListProductsResponse = (function() {

    /**
     * Properties of a ListProductsResponse.
     * @exports IListProductsResponse
     * @interface IListProductsResponse
     * @property {Array.<IProduct>|null} [products] ListProductsResponse products
     */

    /**
     * Constructs a new ListProductsResponse.
     * @exports ListProductsResponse
     * @classdesc Represents a ListProductsResponse.
     * @implements IListProductsResponse
     * @constructor
     * @param {IListProductsResponse=} [properties] Properties to set
     */
    function ListProductsResponse(properties) {
        this.products = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ListProductsResponse products.
     * @member {Array.<IProduct>} products
     * @memberof ListProductsResponse
     * @instance
     */
    ListProductsResponse.prototype.products = $util.emptyArray;

    /**
     * Creates a new ListProductsResponse instance using the specified properties.
     * @function create
     * @memberof ListProductsResponse
     * @static
     * @param {IListProductsResponse=} [properties] Properties to set
     * @returns {ListProductsResponse} ListProductsResponse instance
     */
    ListProductsResponse.create = function create(properties) {
        return new ListProductsResponse(properties);
    };

    /**
     * Encodes the specified ListProductsResponse message. Does not implicitly {@link ListProductsResponse.verify|verify} messages.
     * @function encode
     * @memberof ListProductsResponse
     * @static
     * @param {IListProductsResponse} message ListProductsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ListProductsResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.products != null && message.products.length)
            for (var i = 0; i < message.products.length; ++i)
                $root.Product.encode(message.products[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ListProductsResponse message, length delimited. Does not implicitly {@link ListProductsResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ListProductsResponse
     * @static
     * @param {IListProductsResponse} message ListProductsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ListProductsResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ListProductsResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ListProductsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ListProductsResponse} ListProductsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ListProductsResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ListProductsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.products && message.products.length))
                    message.products = [];
                message.products.push($root.Product.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ListProductsResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ListProductsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ListProductsResponse} ListProductsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ListProductsResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ListProductsResponse message.
     * @function verify
     * @memberof ListProductsResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ListProductsResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.products != null && message.hasOwnProperty("products")) {
            if (!Array.isArray(message.products))
                return "products: array expected";
            for (var i = 0; i < message.products.length; ++i) {
                var error = $root.Product.verify(message.products[i]);
                if (error)
                    return "products." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ListProductsResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ListProductsResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ListProductsResponse} ListProductsResponse
     */
    ListProductsResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ListProductsResponse)
            return object;
        var message = new $root.ListProductsResponse();
        if (object.products) {
            if (!Array.isArray(object.products))
                throw TypeError(".ListProductsResponse.products: array expected");
            message.products = [];
            for (var i = 0; i < object.products.length; ++i) {
                if (typeof object.products[i] !== "object")
                    throw TypeError(".ListProductsResponse.products: object expected");
                message.products[i] = $root.Product.fromObject(object.products[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a ListProductsResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ListProductsResponse
     * @static
     * @param {ListProductsResponse} message ListProductsResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ListProductsResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.products = [];
        if (message.products && message.products.length) {
            object.products = [];
            for (var j = 0; j < message.products.length; ++j)
                object.products[j] = $root.Product.toObject(message.products[j], options);
        }
        return object;
    };

    /**
     * Converts this ListProductsResponse to JSON.
     * @function toJSON
     * @memberof ListProductsResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ListProductsResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ListProductsResponse;
})();

$root.ProductService = (function() {

    /**
     * Constructs a new ProductService service.
     * @exports ProductService
     * @classdesc Represents a ProductService
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function ProductService(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (ProductService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ProductService;

    /**
     * Creates new ProductService service using the specified rpc implementation.
     * @function create
     * @memberof ProductService
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {ProductService} RPC service. Useful where requests and/or responses are streamed.
     */
    ProductService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link ProductService#registerProduct}.
     * @memberof ProductService
     * @typedef RegisterProductCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {Product} [response] Product
     */

    /**
     * Calls RegisterProduct.
     * @function registerProduct
     * @memberof ProductService
     * @instance
     * @param {IProduct} request Product message or plain object
     * @param {ProductService.RegisterProductCallback} callback Node-style callback called with the error, if any, and Product
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(ProductService.prototype.registerProduct = function registerProduct(request, callback) {
        return this.rpcCall(registerProduct, $root.Product, $root.Product, request, callback);
    }, "name", { value: "RegisterProduct" });

    /**
     * Calls RegisterProduct.
     * @function registerProduct
     * @memberof ProductService
     * @instance
     * @param {IProduct} request Product message or plain object
     * @returns {Promise<Product>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link ProductService#listProducts}.
     * @memberof ProductService
     * @typedef ListProductsCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {ListProductsResponse} [response] ListProductsResponse
     */

    /**
     * Calls ListProducts.
     * @function listProducts
     * @memberof ProductService
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @param {ProductService.ListProductsCallback} callback Node-style callback called with the error, if any, and ListProductsResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(ProductService.prototype.listProducts = function listProducts(request, callback) {
        return this.rpcCall(listProducts, $root.Empty, $root.ListProductsResponse, request, callback);
    }, "name", { value: "ListProducts" });

    /**
     * Calls ListProducts.
     * @function listProducts
     * @memberof ProductService
     * @instance
     * @param {IEmpty} request Empty message or plain object
     * @returns {Promise<ListProductsResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link ProductService#getProductById}.
     * @memberof ProductService
     * @typedef GetProductByIdCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {Product} [response] Product
     */

    /**
     * Calls GetProductById.
     * @function getProductById
     * @memberof ProductService
     * @instance
     * @param {IByIdRequest} request ByIdRequest message or plain object
     * @param {ProductService.GetProductByIdCallback} callback Node-style callback called with the error, if any, and Product
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(ProductService.prototype.getProductById = function getProductById(request, callback) {
        return this.rpcCall(getProductById, $root.ByIdRequest, $root.Product, request, callback);
    }, "name", { value: "GetProductById" });

    /**
     * Calls GetProductById.
     * @function getProductById
     * @memberof ProductService
     * @instance
     * @param {IByIdRequest} request ByIdRequest message or plain object
     * @returns {Promise<Product>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link ProductService#cloneProductById}.
     * @memberof ProductService
     * @typedef CloneProductByIdCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {Product} [response] Product
     */

    /**
     * Calls CloneProductById.
     * @function cloneProductById
     * @memberof ProductService
     * @instance
     * @param {IByIdRequest} request ByIdRequest message or plain object
     * @param {ProductService.CloneProductByIdCallback} callback Node-style callback called with the error, if any, and Product
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(ProductService.prototype.cloneProductById = function cloneProductById(request, callback) {
        return this.rpcCall(cloneProductById, $root.ByIdRequest, $root.Product, request, callback);
    }, "name", { value: "CloneProductById" });

    /**
     * Calls CloneProductById.
     * @function cloneProductById
     * @memberof ProductService
     * @instance
     * @param {IByIdRequest} request ByIdRequest message or plain object
     * @returns {Promise<Product>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link ProductService#upateProductById}.
     * @memberof ProductService
     * @typedef UpateProductByIdCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {Product} [response] Product
     */

    /**
     * Calls UpateProductById.
     * @function upateProductById
     * @memberof ProductService
     * @instance
     * @param {IProduct} request Product message or plain object
     * @param {ProductService.UpateProductByIdCallback} callback Node-style callback called with the error, if any, and Product
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(ProductService.prototype.upateProductById = function upateProductById(request, callback) {
        return this.rpcCall(upateProductById, $root.Product, $root.Product, request, callback);
    }, "name", { value: "UpateProductById" });

    /**
     * Calls UpateProductById.
     * @function upateProductById
     * @memberof ProductService
     * @instance
     * @param {IProduct} request Product message or plain object
     * @returns {Promise<Product>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link ProductService#deleteProductById}.
     * @memberof ProductService
     * @typedef DeleteProductByIdCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {Empty} [response] Empty
     */

    /**
     * Calls DeleteProductById.
     * @function deleteProductById
     * @memberof ProductService
     * @instance
     * @param {IByIdRequest} request ByIdRequest message or plain object
     * @param {ProductService.DeleteProductByIdCallback} callback Node-style callback called with the error, if any, and Empty
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(ProductService.prototype.deleteProductById = function deleteProductById(request, callback) {
        return this.rpcCall(deleteProductById, $root.ByIdRequest, $root.Empty, request, callback);
    }, "name", { value: "DeleteProductById" });

    /**
     * Calls DeleteProductById.
     * @function deleteProductById
     * @memberof ProductService
     * @instance
     * @param {IByIdRequest} request ByIdRequest message or plain object
     * @returns {Promise<Empty>} Promise
     * @variation 2
     */

    return ProductService;
})();

module.exports = $root;
