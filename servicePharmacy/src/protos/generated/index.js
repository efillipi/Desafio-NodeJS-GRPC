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

module.exports = $root;
