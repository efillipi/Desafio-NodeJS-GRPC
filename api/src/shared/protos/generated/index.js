/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Pharmacy = (function() {

    /**
     * Properties of a Pharmacy.
     * @exports IPharmacy
     * @interface IPharmacy
     * @property {number|null} [id] Pharmacy id
     * @property {number|null} [idSede] Pharmacy idSede
     * @property {string|null} [logo] Pharmacy logo
     * @property {string|null} [nome] Pharmacy nome
     * @property {string|null} [cnpj] Pharmacy cnpj
     * @property {string|null} [endereco] Pharmacy endereco
     * @property {string|null} [horarioFuncionamento] Pharmacy horarioFuncionamento
     * @property {string|null} [responsavel] Pharmacy responsavel
     * @property {string|null} [telefone] Pharmacy telefone
     * @property {IPharmacy|null} [sede] Pharmacy sede
     * @property {Array.<IPharmacy>|null} [filiais] Pharmacy filiais
     */

    /**
     * Constructs a new Pharmacy.
     * @exports Pharmacy
     * @classdesc Represents a Pharmacy.
     * @implements IPharmacy
     * @constructor
     * @param {IPharmacy=} [properties] Properties to set
     */
    function Pharmacy(properties) {
        this.filiais = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Pharmacy id.
     * @member {number} id
     * @memberof Pharmacy
     * @instance
     */
    Pharmacy.prototype.id = 0;

    /**
     * Pharmacy idSede.
     * @member {number} idSede
     * @memberof Pharmacy
     * @instance
     */
    Pharmacy.prototype.idSede = 0;

    /**
     * Pharmacy logo.
     * @member {string} logo
     * @memberof Pharmacy
     * @instance
     */
    Pharmacy.prototype.logo = "";

    /**
     * Pharmacy nome.
     * @member {string} nome
     * @memberof Pharmacy
     * @instance
     */
    Pharmacy.prototype.nome = "";

    /**
     * Pharmacy cnpj.
     * @member {string} cnpj
     * @memberof Pharmacy
     * @instance
     */
    Pharmacy.prototype.cnpj = "";

    /**
     * Pharmacy endereco.
     * @member {string} endereco
     * @memberof Pharmacy
     * @instance
     */
    Pharmacy.prototype.endereco = "";

    /**
     * Pharmacy horarioFuncionamento.
     * @member {string} horarioFuncionamento
     * @memberof Pharmacy
     * @instance
     */
    Pharmacy.prototype.horarioFuncionamento = "";

    /**
     * Pharmacy responsavel.
     * @member {string} responsavel
     * @memberof Pharmacy
     * @instance
     */
    Pharmacy.prototype.responsavel = "";

    /**
     * Pharmacy telefone.
     * @member {string} telefone
     * @memberof Pharmacy
     * @instance
     */
    Pharmacy.prototype.telefone = "";

    /**
     * Pharmacy sede.
     * @member {IPharmacy|null|undefined} sede
     * @memberof Pharmacy
     * @instance
     */
    Pharmacy.prototype.sede = null;

    /**
     * Pharmacy filiais.
     * @member {Array.<IPharmacy>} filiais
     * @memberof Pharmacy
     * @instance
     */
    Pharmacy.prototype.filiais = $util.emptyArray;

    /**
     * Creates a new Pharmacy instance using the specified properties.
     * @function create
     * @memberof Pharmacy
     * @static
     * @param {IPharmacy=} [properties] Properties to set
     * @returns {Pharmacy} Pharmacy instance
     */
    Pharmacy.create = function create(properties) {
        return new Pharmacy(properties);
    };

    /**
     * Encodes the specified Pharmacy message. Does not implicitly {@link Pharmacy.verify|verify} messages.
     * @function encode
     * @memberof Pharmacy
     * @static
     * @param {IPharmacy} message Pharmacy message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Pharmacy.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 1 =*/9).double(message.id);
        if (message.idSede != null && Object.hasOwnProperty.call(message, "idSede"))
            writer.uint32(/* id 2, wireType 1 =*/17).double(message.idSede);
        if (message.logo != null && Object.hasOwnProperty.call(message, "logo"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.logo);
        if (message.nome != null && Object.hasOwnProperty.call(message, "nome"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.nome);
        if (message.cnpj != null && Object.hasOwnProperty.call(message, "cnpj"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.cnpj);
        if (message.endereco != null && Object.hasOwnProperty.call(message, "endereco"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.endereco);
        if (message.horarioFuncionamento != null && Object.hasOwnProperty.call(message, "horarioFuncionamento"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.horarioFuncionamento);
        if (message.responsavel != null && Object.hasOwnProperty.call(message, "responsavel"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.responsavel);
        if (message.telefone != null && Object.hasOwnProperty.call(message, "telefone"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.telefone);
        if (message.sede != null && Object.hasOwnProperty.call(message, "sede"))
            $root.Pharmacy.encode(message.sede, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.filiais != null && message.filiais.length)
            for (var i = 0; i < message.filiais.length; ++i)
                $root.Pharmacy.encode(message.filiais[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Pharmacy message, length delimited. Does not implicitly {@link Pharmacy.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Pharmacy
     * @static
     * @param {IPharmacy} message Pharmacy message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Pharmacy.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Pharmacy message from the specified reader or buffer.
     * @function decode
     * @memberof Pharmacy
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Pharmacy} Pharmacy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Pharmacy.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Pharmacy();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.double();
                break;
            case 2:
                message.idSede = reader.double();
                break;
            case 3:
                message.logo = reader.string();
                break;
            case 4:
                message.nome = reader.string();
                break;
            case 5:
                message.cnpj = reader.string();
                break;
            case 6:
                message.endereco = reader.string();
                break;
            case 7:
                message.horarioFuncionamento = reader.string();
                break;
            case 8:
                message.responsavel = reader.string();
                break;
            case 9:
                message.telefone = reader.string();
                break;
            case 10:
                message.sede = $root.Pharmacy.decode(reader, reader.uint32());
                break;
            case 11:
                if (!(message.filiais && message.filiais.length))
                    message.filiais = [];
                message.filiais.push($root.Pharmacy.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Pharmacy message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Pharmacy
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Pharmacy} Pharmacy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Pharmacy.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Pharmacy message.
     * @function verify
     * @memberof Pharmacy
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Pharmacy.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id !== "number")
                return "id: number expected";
        if (message.idSede != null && message.hasOwnProperty("idSede"))
            if (typeof message.idSede !== "number")
                return "idSede: number expected";
        if (message.logo != null && message.hasOwnProperty("logo"))
            if (!$util.isString(message.logo))
                return "logo: string expected";
        if (message.nome != null && message.hasOwnProperty("nome"))
            if (!$util.isString(message.nome))
                return "nome: string expected";
        if (message.cnpj != null && message.hasOwnProperty("cnpj"))
            if (!$util.isString(message.cnpj))
                return "cnpj: string expected";
        if (message.endereco != null && message.hasOwnProperty("endereco"))
            if (!$util.isString(message.endereco))
                return "endereco: string expected";
        if (message.horarioFuncionamento != null && message.hasOwnProperty("horarioFuncionamento"))
            if (!$util.isString(message.horarioFuncionamento))
                return "horarioFuncionamento: string expected";
        if (message.responsavel != null && message.hasOwnProperty("responsavel"))
            if (!$util.isString(message.responsavel))
                return "responsavel: string expected";
        if (message.telefone != null && message.hasOwnProperty("telefone"))
            if (!$util.isString(message.telefone))
                return "telefone: string expected";
        if (message.sede != null && message.hasOwnProperty("sede")) {
            var error = $root.Pharmacy.verify(message.sede);
            if (error)
                return "sede." + error;
        }
        if (message.filiais != null && message.hasOwnProperty("filiais")) {
            if (!Array.isArray(message.filiais))
                return "filiais: array expected";
            for (var i = 0; i < message.filiais.length; ++i) {
                var error = $root.Pharmacy.verify(message.filiais[i]);
                if (error)
                    return "filiais." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Pharmacy message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Pharmacy
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Pharmacy} Pharmacy
     */
    Pharmacy.fromObject = function fromObject(object) {
        if (object instanceof $root.Pharmacy)
            return object;
        var message = new $root.Pharmacy();
        if (object.id != null)
            message.id = Number(object.id);
        if (object.idSede != null)
            message.idSede = Number(object.idSede);
        if (object.logo != null)
            message.logo = String(object.logo);
        if (object.nome != null)
            message.nome = String(object.nome);
        if (object.cnpj != null)
            message.cnpj = String(object.cnpj);
        if (object.endereco != null)
            message.endereco = String(object.endereco);
        if (object.horarioFuncionamento != null)
            message.horarioFuncionamento = String(object.horarioFuncionamento);
        if (object.responsavel != null)
            message.responsavel = String(object.responsavel);
        if (object.telefone != null)
            message.telefone = String(object.telefone);
        if (object.sede != null) {
            if (typeof object.sede !== "object")
                throw TypeError(".Pharmacy.sede: object expected");
            message.sede = $root.Pharmacy.fromObject(object.sede);
        }
        if (object.filiais) {
            if (!Array.isArray(object.filiais))
                throw TypeError(".Pharmacy.filiais: array expected");
            message.filiais = [];
            for (var i = 0; i < object.filiais.length; ++i) {
                if (typeof object.filiais[i] !== "object")
                    throw TypeError(".Pharmacy.filiais: object expected");
                message.filiais[i] = $root.Pharmacy.fromObject(object.filiais[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Pharmacy message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Pharmacy
     * @static
     * @param {Pharmacy} message Pharmacy
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Pharmacy.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.filiais = [];
        if (options.defaults) {
            object.id = 0;
            object.idSede = 0;
            object.logo = "";
            object.nome = "";
            object.cnpj = "";
            object.endereco = "";
            object.horarioFuncionamento = "";
            object.responsavel = "";
            object.telefone = "";
            object.sede = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = options.json && !isFinite(message.id) ? String(message.id) : message.id;
        if (message.idSede != null && message.hasOwnProperty("idSede"))
            object.idSede = options.json && !isFinite(message.idSede) ? String(message.idSede) : message.idSede;
        if (message.logo != null && message.hasOwnProperty("logo"))
            object.logo = message.logo;
        if (message.nome != null && message.hasOwnProperty("nome"))
            object.nome = message.nome;
        if (message.cnpj != null && message.hasOwnProperty("cnpj"))
            object.cnpj = message.cnpj;
        if (message.endereco != null && message.hasOwnProperty("endereco"))
            object.endereco = message.endereco;
        if (message.horarioFuncionamento != null && message.hasOwnProperty("horarioFuncionamento"))
            object.horarioFuncionamento = message.horarioFuncionamento;
        if (message.responsavel != null && message.hasOwnProperty("responsavel"))
            object.responsavel = message.responsavel;
        if (message.telefone != null && message.hasOwnProperty("telefone"))
            object.telefone = message.telefone;
        if (message.sede != null && message.hasOwnProperty("sede"))
            object.sede = $root.Pharmacy.toObject(message.sede, options);
        if (message.filiais && message.filiais.length) {
            object.filiais = [];
            for (var j = 0; j < message.filiais.length; ++j)
                object.filiais[j] = $root.Pharmacy.toObject(message.filiais[j], options);
        }
        return object;
    };

    /**
     * Converts this Pharmacy to JSON.
     * @function toJSON
     * @memberof Pharmacy
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Pharmacy.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Pharmacy;
})();

$root.ByIdPharmacyRequest = (function() {

    /**
     * Properties of a ByIdPharmacyRequest.
     * @exports IByIdPharmacyRequest
     * @interface IByIdPharmacyRequest
     * @property {number|null} [id] ByIdPharmacyRequest id
     */

    /**
     * Constructs a new ByIdPharmacyRequest.
     * @exports ByIdPharmacyRequest
     * @classdesc Represents a ByIdPharmacyRequest.
     * @implements IByIdPharmacyRequest
     * @constructor
     * @param {IByIdPharmacyRequest=} [properties] Properties to set
     */
    function ByIdPharmacyRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ByIdPharmacyRequest id.
     * @member {number} id
     * @memberof ByIdPharmacyRequest
     * @instance
     */
    ByIdPharmacyRequest.prototype.id = 0;

    /**
     * Creates a new ByIdPharmacyRequest instance using the specified properties.
     * @function create
     * @memberof ByIdPharmacyRequest
     * @static
     * @param {IByIdPharmacyRequest=} [properties] Properties to set
     * @returns {ByIdPharmacyRequest} ByIdPharmacyRequest instance
     */
    ByIdPharmacyRequest.create = function create(properties) {
        return new ByIdPharmacyRequest(properties);
    };

    /**
     * Encodes the specified ByIdPharmacyRequest message. Does not implicitly {@link ByIdPharmacyRequest.verify|verify} messages.
     * @function encode
     * @memberof ByIdPharmacyRequest
     * @static
     * @param {IByIdPharmacyRequest} message ByIdPharmacyRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ByIdPharmacyRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 1 =*/9).double(message.id);
        return writer;
    };

    /**
     * Encodes the specified ByIdPharmacyRequest message, length delimited. Does not implicitly {@link ByIdPharmacyRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ByIdPharmacyRequest
     * @static
     * @param {IByIdPharmacyRequest} message ByIdPharmacyRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ByIdPharmacyRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ByIdPharmacyRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ByIdPharmacyRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ByIdPharmacyRequest} ByIdPharmacyRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ByIdPharmacyRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ByIdPharmacyRequest();
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
     * Decodes a ByIdPharmacyRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ByIdPharmacyRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ByIdPharmacyRequest} ByIdPharmacyRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ByIdPharmacyRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ByIdPharmacyRequest message.
     * @function verify
     * @memberof ByIdPharmacyRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ByIdPharmacyRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id !== "number")
                return "id: number expected";
        return null;
    };

    /**
     * Creates a ByIdPharmacyRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ByIdPharmacyRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ByIdPharmacyRequest} ByIdPharmacyRequest
     */
    ByIdPharmacyRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ByIdPharmacyRequest)
            return object;
        var message = new $root.ByIdPharmacyRequest();
        if (object.id != null)
            message.id = Number(object.id);
        return message;
    };

    /**
     * Creates a plain object from a ByIdPharmacyRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ByIdPharmacyRequest
     * @static
     * @param {ByIdPharmacyRequest} message ByIdPharmacyRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ByIdPharmacyRequest.toObject = function toObject(message, options) {
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
     * Converts this ByIdPharmacyRequest to JSON.
     * @function toJSON
     * @memberof ByIdPharmacyRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ByIdPharmacyRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ByIdPharmacyRequest;
})();

$root.PharmacyEmpty = (function() {

    /**
     * Properties of a PharmacyEmpty.
     * @exports IPharmacyEmpty
     * @interface IPharmacyEmpty
     */

    /**
     * Constructs a new PharmacyEmpty.
     * @exports PharmacyEmpty
     * @classdesc Represents a PharmacyEmpty.
     * @implements IPharmacyEmpty
     * @constructor
     * @param {IPharmacyEmpty=} [properties] Properties to set
     */
    function PharmacyEmpty(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new PharmacyEmpty instance using the specified properties.
     * @function create
     * @memberof PharmacyEmpty
     * @static
     * @param {IPharmacyEmpty=} [properties] Properties to set
     * @returns {PharmacyEmpty} PharmacyEmpty instance
     */
    PharmacyEmpty.create = function create(properties) {
        return new PharmacyEmpty(properties);
    };

    /**
     * Encodes the specified PharmacyEmpty message. Does not implicitly {@link PharmacyEmpty.verify|verify} messages.
     * @function encode
     * @memberof PharmacyEmpty
     * @static
     * @param {IPharmacyEmpty} message PharmacyEmpty message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PharmacyEmpty.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified PharmacyEmpty message, length delimited. Does not implicitly {@link PharmacyEmpty.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PharmacyEmpty
     * @static
     * @param {IPharmacyEmpty} message PharmacyEmpty message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PharmacyEmpty.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PharmacyEmpty message from the specified reader or buffer.
     * @function decode
     * @memberof PharmacyEmpty
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PharmacyEmpty} PharmacyEmpty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PharmacyEmpty.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PharmacyEmpty();
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
     * Decodes a PharmacyEmpty message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PharmacyEmpty
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PharmacyEmpty} PharmacyEmpty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PharmacyEmpty.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PharmacyEmpty message.
     * @function verify
     * @memberof PharmacyEmpty
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PharmacyEmpty.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a PharmacyEmpty message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PharmacyEmpty
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PharmacyEmpty} PharmacyEmpty
     */
    PharmacyEmpty.fromObject = function fromObject(object) {
        if (object instanceof $root.PharmacyEmpty)
            return object;
        return new $root.PharmacyEmpty();
    };

    /**
     * Creates a plain object from a PharmacyEmpty message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PharmacyEmpty
     * @static
     * @param {PharmacyEmpty} message PharmacyEmpty
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PharmacyEmpty.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this PharmacyEmpty to JSON.
     * @function toJSON
     * @memberof PharmacyEmpty
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PharmacyEmpty.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PharmacyEmpty;
})();

$root.ListPharmaciesResponse = (function() {

    /**
     * Properties of a ListPharmaciesResponse.
     * @exports IListPharmaciesResponse
     * @interface IListPharmaciesResponse
     * @property {Array.<IPharmacy>|null} [pharmacies] ListPharmaciesResponse pharmacies
     */

    /**
     * Constructs a new ListPharmaciesResponse.
     * @exports ListPharmaciesResponse
     * @classdesc Represents a ListPharmaciesResponse.
     * @implements IListPharmaciesResponse
     * @constructor
     * @param {IListPharmaciesResponse=} [properties] Properties to set
     */
    function ListPharmaciesResponse(properties) {
        this.pharmacies = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ListPharmaciesResponse pharmacies.
     * @member {Array.<IPharmacy>} pharmacies
     * @memberof ListPharmaciesResponse
     * @instance
     */
    ListPharmaciesResponse.prototype.pharmacies = $util.emptyArray;

    /**
     * Creates a new ListPharmaciesResponse instance using the specified properties.
     * @function create
     * @memberof ListPharmaciesResponse
     * @static
     * @param {IListPharmaciesResponse=} [properties] Properties to set
     * @returns {ListPharmaciesResponse} ListPharmaciesResponse instance
     */
    ListPharmaciesResponse.create = function create(properties) {
        return new ListPharmaciesResponse(properties);
    };

    /**
     * Encodes the specified ListPharmaciesResponse message. Does not implicitly {@link ListPharmaciesResponse.verify|verify} messages.
     * @function encode
     * @memberof ListPharmaciesResponse
     * @static
     * @param {IListPharmaciesResponse} message ListPharmaciesResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ListPharmaciesResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.pharmacies != null && message.pharmacies.length)
            for (var i = 0; i < message.pharmacies.length; ++i)
                $root.Pharmacy.encode(message.pharmacies[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ListPharmaciesResponse message, length delimited. Does not implicitly {@link ListPharmaciesResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ListPharmaciesResponse
     * @static
     * @param {IListPharmaciesResponse} message ListPharmaciesResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ListPharmaciesResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ListPharmaciesResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ListPharmaciesResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ListPharmaciesResponse} ListPharmaciesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ListPharmaciesResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ListPharmaciesResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.pharmacies && message.pharmacies.length))
                    message.pharmacies = [];
                message.pharmacies.push($root.Pharmacy.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ListPharmaciesResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ListPharmaciesResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ListPharmaciesResponse} ListPharmaciesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ListPharmaciesResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ListPharmaciesResponse message.
     * @function verify
     * @memberof ListPharmaciesResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ListPharmaciesResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.pharmacies != null && message.hasOwnProperty("pharmacies")) {
            if (!Array.isArray(message.pharmacies))
                return "pharmacies: array expected";
            for (var i = 0; i < message.pharmacies.length; ++i) {
                var error = $root.Pharmacy.verify(message.pharmacies[i]);
                if (error)
                    return "pharmacies." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ListPharmaciesResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ListPharmaciesResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ListPharmaciesResponse} ListPharmaciesResponse
     */
    ListPharmaciesResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ListPharmaciesResponse)
            return object;
        var message = new $root.ListPharmaciesResponse();
        if (object.pharmacies) {
            if (!Array.isArray(object.pharmacies))
                throw TypeError(".ListPharmaciesResponse.pharmacies: array expected");
            message.pharmacies = [];
            for (var i = 0; i < object.pharmacies.length; ++i) {
                if (typeof object.pharmacies[i] !== "object")
                    throw TypeError(".ListPharmaciesResponse.pharmacies: object expected");
                message.pharmacies[i] = $root.Pharmacy.fromObject(object.pharmacies[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a ListPharmaciesResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ListPharmaciesResponse
     * @static
     * @param {ListPharmaciesResponse} message ListPharmaciesResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ListPharmaciesResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.pharmacies = [];
        if (message.pharmacies && message.pharmacies.length) {
            object.pharmacies = [];
            for (var j = 0; j < message.pharmacies.length; ++j)
                object.pharmacies[j] = $root.Pharmacy.toObject(message.pharmacies[j], options);
        }
        return object;
    };

    /**
     * Converts this ListPharmaciesResponse to JSON.
     * @function toJSON
     * @memberof ListPharmaciesResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ListPharmaciesResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ListPharmaciesResponse;
})();

$root.PharmacyService = (function() {

    /**
     * Constructs a new PharmacyService service.
     * @exports PharmacyService
     * @classdesc Represents a PharmacyService
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function PharmacyService(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (PharmacyService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = PharmacyService;

    /**
     * Creates new PharmacyService service using the specified rpc implementation.
     * @function create
     * @memberof PharmacyService
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {PharmacyService} RPC service. Useful where requests and/or responses are streamed.
     */
    PharmacyService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link PharmacyService#registerPharmacy}.
     * @memberof PharmacyService
     * @typedef RegisterPharmacyCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {Pharmacy} [response] Pharmacy
     */

    /**
     * Calls RegisterPharmacy.
     * @function registerPharmacy
     * @memberof PharmacyService
     * @instance
     * @param {IPharmacy} request Pharmacy message or plain object
     * @param {PharmacyService.RegisterPharmacyCallback} callback Node-style callback called with the error, if any, and Pharmacy
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(PharmacyService.prototype.registerPharmacy = function registerPharmacy(request, callback) {
        return this.rpcCall(registerPharmacy, $root.Pharmacy, $root.Pharmacy, request, callback);
    }, "name", { value: "RegisterPharmacy" });

    /**
     * Calls RegisterPharmacy.
     * @function registerPharmacy
     * @memberof PharmacyService
     * @instance
     * @param {IPharmacy} request Pharmacy message or plain object
     * @returns {Promise<Pharmacy>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link PharmacyService#listPharmacies}.
     * @memberof PharmacyService
     * @typedef ListPharmaciesCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {ListPharmaciesResponse} [response] ListPharmaciesResponse
     */

    /**
     * Calls ListPharmacies.
     * @function listPharmacies
     * @memberof PharmacyService
     * @instance
     * @param {IPharmacyEmpty} request PharmacyEmpty message or plain object
     * @param {PharmacyService.ListPharmaciesCallback} callback Node-style callback called with the error, if any, and ListPharmaciesResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(PharmacyService.prototype.listPharmacies = function listPharmacies(request, callback) {
        return this.rpcCall(listPharmacies, $root.PharmacyEmpty, $root.ListPharmaciesResponse, request, callback);
    }, "name", { value: "ListPharmacies" });

    /**
     * Calls ListPharmacies.
     * @function listPharmacies
     * @memberof PharmacyService
     * @instance
     * @param {IPharmacyEmpty} request PharmacyEmpty message or plain object
     * @returns {Promise<ListPharmaciesResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link PharmacyService#getPharmacyById}.
     * @memberof PharmacyService
     * @typedef GetPharmacyByIdCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {Pharmacy} [response] Pharmacy
     */

    /**
     * Calls GetPharmacyById.
     * @function getPharmacyById
     * @memberof PharmacyService
     * @instance
     * @param {IByIdPharmacyRequest} request ByIdPharmacyRequest message or plain object
     * @param {PharmacyService.GetPharmacyByIdCallback} callback Node-style callback called with the error, if any, and Pharmacy
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(PharmacyService.prototype.getPharmacyById = function getPharmacyById(request, callback) {
        return this.rpcCall(getPharmacyById, $root.ByIdPharmacyRequest, $root.Pharmacy, request, callback);
    }, "name", { value: "GetPharmacyById" });

    /**
     * Calls GetPharmacyById.
     * @function getPharmacyById
     * @memberof PharmacyService
     * @instance
     * @param {IByIdPharmacyRequest} request ByIdPharmacyRequest message or plain object
     * @returns {Promise<Pharmacy>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link PharmacyService#upatePharmacyById}.
     * @memberof PharmacyService
     * @typedef UpatePharmacyByIdCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {Pharmacy} [response] Pharmacy
     */

    /**
     * Calls UpatePharmacyById.
     * @function upatePharmacyById
     * @memberof PharmacyService
     * @instance
     * @param {IPharmacy} request Pharmacy message or plain object
     * @param {PharmacyService.UpatePharmacyByIdCallback} callback Node-style callback called with the error, if any, and Pharmacy
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(PharmacyService.prototype.upatePharmacyById = function upatePharmacyById(request, callback) {
        return this.rpcCall(upatePharmacyById, $root.Pharmacy, $root.Pharmacy, request, callback);
    }, "name", { value: "UpatePharmacyById" });

    /**
     * Calls UpatePharmacyById.
     * @function upatePharmacyById
     * @memberof PharmacyService
     * @instance
     * @param {IPharmacy} request Pharmacy message or plain object
     * @returns {Promise<Pharmacy>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link PharmacyService#deletePharmacyById}.
     * @memberof PharmacyService
     * @typedef DeletePharmacyByIdCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {PharmacyEmpty} [response] PharmacyEmpty
     */

    /**
     * Calls DeletePharmacyById.
     * @function deletePharmacyById
     * @memberof PharmacyService
     * @instance
     * @param {IByIdPharmacyRequest} request ByIdPharmacyRequest message or plain object
     * @param {PharmacyService.DeletePharmacyByIdCallback} callback Node-style callback called with the error, if any, and PharmacyEmpty
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(PharmacyService.prototype.deletePharmacyById = function deletePharmacyById(request, callback) {
        return this.rpcCall(deletePharmacyById, $root.ByIdPharmacyRequest, $root.PharmacyEmpty, request, callback);
    }, "name", { value: "DeletePharmacyById" });

    /**
     * Calls DeletePharmacyById.
     * @function deletePharmacyById
     * @memberof PharmacyService
     * @instance
     * @param {IByIdPharmacyRequest} request ByIdPharmacyRequest message or plain object
     * @returns {Promise<PharmacyEmpty>} Promise
     * @variation 2
     */

    return PharmacyService;
})();

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
