import * as $protobuf from "protobufjs";
/** Properties of a Pharmacy. */
export interface IPharmacy {

    /** Pharmacy id */
    id?: (number|null);

    /** Pharmacy idSede */
    idSede?: (number|null);

    /** Pharmacy logo */
    logo?: (string|null);

    /** Pharmacy nome */
    nome?: (string|null);

    /** Pharmacy cnpj */
    cnpj?: (string|null);

    /** Pharmacy endereco */
    endereco?: (string|null);

    /** Pharmacy horarioFuncionamento */
    horarioFuncionamento?: (string|null);

    /** Pharmacy responsavel */
    responsavel?: (string|null);

    /** Pharmacy telefone */
    telefone?: (string|null);

    /** Pharmacy sede */
    sede?: (IPharmacy|null);

    /** Pharmacy filiais */
    filiais?: (IPharmacy[]|null);
}

/** Represents a Pharmacy. */
export class Pharmacy implements IPharmacy {

    /**
     * Constructs a new Pharmacy.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPharmacy);

    /** Pharmacy id. */
    public id: number;

    /** Pharmacy idSede. */
    public idSede: number;

    /** Pharmacy logo. */
    public logo: string;

    /** Pharmacy nome. */
    public nome: string;

    /** Pharmacy cnpj. */
    public cnpj: string;

    /** Pharmacy endereco. */
    public endereco: string;

    /** Pharmacy horarioFuncionamento. */
    public horarioFuncionamento: string;

    /** Pharmacy responsavel. */
    public responsavel: string;

    /** Pharmacy telefone. */
    public telefone: string;

    /** Pharmacy sede. */
    public sede?: (IPharmacy|null);

    /** Pharmacy filiais. */
    public filiais: IPharmacy[];

    /**
     * Creates a new Pharmacy instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Pharmacy instance
     */
    public static create(properties?: IPharmacy): Pharmacy;

    /**
     * Encodes the specified Pharmacy message. Does not implicitly {@link Pharmacy.verify|verify} messages.
     * @param message Pharmacy message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPharmacy, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Pharmacy message, length delimited. Does not implicitly {@link Pharmacy.verify|verify} messages.
     * @param message Pharmacy message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPharmacy, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Pharmacy message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Pharmacy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Pharmacy;

    /**
     * Decodes a Pharmacy message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Pharmacy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Pharmacy;

    /**
     * Verifies a Pharmacy message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Pharmacy message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Pharmacy
     */
    public static fromObject(object: { [k: string]: any }): Pharmacy;

    /**
     * Creates a plain object from a Pharmacy message. Also converts values to other types if specified.
     * @param message Pharmacy
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Pharmacy, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Pharmacy to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ByIdPharmacyRequest. */
export interface IByIdPharmacyRequest {

    /** ByIdPharmacyRequest id */
    id?: (number|null);
}

/** Represents a ByIdPharmacyRequest. */
export class ByIdPharmacyRequest implements IByIdPharmacyRequest {

    /**
     * Constructs a new ByIdPharmacyRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IByIdPharmacyRequest);

    /** ByIdPharmacyRequest id. */
    public id: number;

    /**
     * Creates a new ByIdPharmacyRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ByIdPharmacyRequest instance
     */
    public static create(properties?: IByIdPharmacyRequest): ByIdPharmacyRequest;

    /**
     * Encodes the specified ByIdPharmacyRequest message. Does not implicitly {@link ByIdPharmacyRequest.verify|verify} messages.
     * @param message ByIdPharmacyRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IByIdPharmacyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ByIdPharmacyRequest message, length delimited. Does not implicitly {@link ByIdPharmacyRequest.verify|verify} messages.
     * @param message ByIdPharmacyRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IByIdPharmacyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ByIdPharmacyRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ByIdPharmacyRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ByIdPharmacyRequest;

    /**
     * Decodes a ByIdPharmacyRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ByIdPharmacyRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ByIdPharmacyRequest;

    /**
     * Verifies a ByIdPharmacyRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ByIdPharmacyRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ByIdPharmacyRequest
     */
    public static fromObject(object: { [k: string]: any }): ByIdPharmacyRequest;

    /**
     * Creates a plain object from a ByIdPharmacyRequest message. Also converts values to other types if specified.
     * @param message ByIdPharmacyRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ByIdPharmacyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ByIdPharmacyRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PharmacyEmpty. */
export interface IPharmacyEmpty {
}

/** Represents a PharmacyEmpty. */
export class PharmacyEmpty implements IPharmacyEmpty {

    /**
     * Constructs a new PharmacyEmpty.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPharmacyEmpty);

    /**
     * Creates a new PharmacyEmpty instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PharmacyEmpty instance
     */
    public static create(properties?: IPharmacyEmpty): PharmacyEmpty;

    /**
     * Encodes the specified PharmacyEmpty message. Does not implicitly {@link PharmacyEmpty.verify|verify} messages.
     * @param message PharmacyEmpty message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPharmacyEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PharmacyEmpty message, length delimited. Does not implicitly {@link PharmacyEmpty.verify|verify} messages.
     * @param message PharmacyEmpty message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPharmacyEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PharmacyEmpty message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PharmacyEmpty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PharmacyEmpty;

    /**
     * Decodes a PharmacyEmpty message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PharmacyEmpty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PharmacyEmpty;

    /**
     * Verifies a PharmacyEmpty message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PharmacyEmpty message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PharmacyEmpty
     */
    public static fromObject(object: { [k: string]: any }): PharmacyEmpty;

    /**
     * Creates a plain object from a PharmacyEmpty message. Also converts values to other types if specified.
     * @param message PharmacyEmpty
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PharmacyEmpty, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PharmacyEmpty to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ListPharmaciesResponse. */
export interface IListPharmaciesResponse {

    /** ListPharmaciesResponse pharmacies */
    pharmacies?: (IPharmacy[]|null);
}

/** Represents a ListPharmaciesResponse. */
export class ListPharmaciesResponse implements IListPharmaciesResponse {

    /**
     * Constructs a new ListPharmaciesResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListPharmaciesResponse);

    /** ListPharmaciesResponse pharmacies. */
    public pharmacies: IPharmacy[];

    /**
     * Creates a new ListPharmaciesResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListPharmaciesResponse instance
     */
    public static create(properties?: IListPharmaciesResponse): ListPharmaciesResponse;

    /**
     * Encodes the specified ListPharmaciesResponse message. Does not implicitly {@link ListPharmaciesResponse.verify|verify} messages.
     * @param message ListPharmaciesResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListPharmaciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListPharmaciesResponse message, length delimited. Does not implicitly {@link ListPharmaciesResponse.verify|verify} messages.
     * @param message ListPharmaciesResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListPharmaciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListPharmaciesResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListPharmaciesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListPharmaciesResponse;

    /**
     * Decodes a ListPharmaciesResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListPharmaciesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListPharmaciesResponse;

    /**
     * Verifies a ListPharmaciesResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListPharmaciesResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListPharmaciesResponse
     */
    public static fromObject(object: { [k: string]: any }): ListPharmaciesResponse;

    /**
     * Creates a plain object from a ListPharmaciesResponse message. Also converts values to other types if specified.
     * @param message ListPharmaciesResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListPharmaciesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListPharmaciesResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a PharmacyService */
export class PharmacyService extends $protobuf.rpc.Service {

    /**
     * Constructs a new PharmacyService service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new PharmacyService service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): PharmacyService;

    /**
     * Calls RegisterPharmacy.
     * @param request Pharmacy message or plain object
     * @param callback Node-style callback called with the error, if any, and Pharmacy
     */
    public registerPharmacy(request: IPharmacy, callback: PharmacyService.RegisterPharmacyCallback): void;

    /**
     * Calls RegisterPharmacy.
     * @param request Pharmacy message or plain object
     * @returns Promise
     */
    public registerPharmacy(request: IPharmacy): Promise<Pharmacy>;

    /**
     * Calls ListPharmacies.
     * @param request PharmacyEmpty message or plain object
     * @param callback Node-style callback called with the error, if any, and ListPharmaciesResponse
     */
    public listPharmacies(request: IPharmacyEmpty, callback: PharmacyService.ListPharmaciesCallback): void;

    /**
     * Calls ListPharmacies.
     * @param request PharmacyEmpty message or plain object
     * @returns Promise
     */
    public listPharmacies(request: IPharmacyEmpty): Promise<ListPharmaciesResponse>;

    /**
     * Calls GetPharmacyById.
     * @param request ByIdPharmacyRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and Pharmacy
     */
    public getPharmacyById(request: IByIdPharmacyRequest, callback: PharmacyService.GetPharmacyByIdCallback): void;

    /**
     * Calls GetPharmacyById.
     * @param request ByIdPharmacyRequest message or plain object
     * @returns Promise
     */
    public getPharmacyById(request: IByIdPharmacyRequest): Promise<Pharmacy>;

    /**
     * Calls UpatePharmacyById.
     * @param request Pharmacy message or plain object
     * @param callback Node-style callback called with the error, if any, and Pharmacy
     */
    public upatePharmacyById(request: IPharmacy, callback: PharmacyService.UpatePharmacyByIdCallback): void;

    /**
     * Calls UpatePharmacyById.
     * @param request Pharmacy message or plain object
     * @returns Promise
     */
    public upatePharmacyById(request: IPharmacy): Promise<Pharmacy>;

    /**
     * Calls DeletePharmacyById.
     * @param request ByIdPharmacyRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and PharmacyEmpty
     */
    public deletePharmacyById(request: IByIdPharmacyRequest, callback: PharmacyService.DeletePharmacyByIdCallback): void;

    /**
     * Calls DeletePharmacyById.
     * @param request ByIdPharmacyRequest message or plain object
     * @returns Promise
     */
    public deletePharmacyById(request: IByIdPharmacyRequest): Promise<PharmacyEmpty>;
}

export namespace PharmacyService {

    /**
     * Callback as used by {@link PharmacyService#registerPharmacy}.
     * @param error Error, if any
     * @param [response] Pharmacy
     */
    type RegisterPharmacyCallback = (error: (Error|null), response?: Pharmacy) => void;

    /**
     * Callback as used by {@link PharmacyService#listPharmacies}.
     * @param error Error, if any
     * @param [response] ListPharmaciesResponse
     */
    type ListPharmaciesCallback = (error: (Error|null), response?: ListPharmaciesResponse) => void;

    /**
     * Callback as used by {@link PharmacyService#getPharmacyById}.
     * @param error Error, if any
     * @param [response] Pharmacy
     */
    type GetPharmacyByIdCallback = (error: (Error|null), response?: Pharmacy) => void;

    /**
     * Callback as used by {@link PharmacyService#upatePharmacyById}.
     * @param error Error, if any
     * @param [response] Pharmacy
     */
    type UpatePharmacyByIdCallback = (error: (Error|null), response?: Pharmacy) => void;

    /**
     * Callback as used by {@link PharmacyService#deletePharmacyById}.
     * @param error Error, if any
     * @param [response] PharmacyEmpty
     */
    type DeletePharmacyByIdCallback = (error: (Error|null), response?: PharmacyEmpty) => void;
}

/** Properties of a Product. */
export interface IProduct {

    /** Product id */
    id?: (number|null);

    /** Product thumbnail */
    thumbnail?: (string|null);

    /** Product preco */
    preco?: (string|null);

    /** Product ingredientes */
    ingredientes?: (string|null);

    /** Product disponibilidade */
    disponibilidade?: (string|null);

    /** Product volume */
    volume?: (string|null);
}

/** Represents a Product. */
export class Product implements IProduct {

    /**
     * Constructs a new Product.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProduct);

    /** Product id. */
    public id: number;

    /** Product thumbnail. */
    public thumbnail: string;

    /** Product preco. */
    public preco: string;

    /** Product ingredientes. */
    public ingredientes: string;

    /** Product disponibilidade. */
    public disponibilidade: string;

    /** Product volume. */
    public volume: string;

    /**
     * Creates a new Product instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Product instance
     */
    public static create(properties?: IProduct): Product;

    /**
     * Encodes the specified Product message. Does not implicitly {@link Product.verify|verify} messages.
     * @param message Product message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProduct, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Product message, length delimited. Does not implicitly {@link Product.verify|verify} messages.
     * @param message Product message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProduct, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Product message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Product
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Product;

    /**
     * Decodes a Product message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Product
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Product;

    /**
     * Verifies a Product message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Product message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Product
     */
    public static fromObject(object: { [k: string]: any }): Product;

    /**
     * Creates a plain object from a Product message. Also converts values to other types if specified.
     * @param message Product
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Product, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Product to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ByIdRequest. */
export interface IByIdRequest {

    /** ByIdRequest id */
    id?: (number|null);
}

/** Represents a ByIdRequest. */
export class ByIdRequest implements IByIdRequest {

    /**
     * Constructs a new ByIdRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IByIdRequest);

    /** ByIdRequest id. */
    public id: number;

    /**
     * Creates a new ByIdRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ByIdRequest instance
     */
    public static create(properties?: IByIdRequest): ByIdRequest;

    /**
     * Encodes the specified ByIdRequest message. Does not implicitly {@link ByIdRequest.verify|verify} messages.
     * @param message ByIdRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IByIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ByIdRequest message, length delimited. Does not implicitly {@link ByIdRequest.verify|verify} messages.
     * @param message ByIdRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IByIdRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ByIdRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ByIdRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ByIdRequest;

    /**
     * Decodes a ByIdRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ByIdRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ByIdRequest;

    /**
     * Verifies a ByIdRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ByIdRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ByIdRequest
     */
    public static fromObject(object: { [k: string]: any }): ByIdRequest;

    /**
     * Creates a plain object from a ByIdRequest message. Also converts values to other types if specified.
     * @param message ByIdRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ByIdRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ByIdRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an Empty. */
export interface IEmpty {
}

/** Represents an Empty. */
export class Empty implements IEmpty {

    /**
     * Constructs a new Empty.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEmpty);

    /**
     * Creates a new Empty instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Empty instance
     */
    public static create(properties?: IEmpty): Empty;

    /**
     * Encodes the specified Empty message. Does not implicitly {@link Empty.verify|verify} messages.
     * @param message Empty message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Empty message, length delimited. Does not implicitly {@link Empty.verify|verify} messages.
     * @param message Empty message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Empty message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Empty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Empty;

    /**
     * Decodes an Empty message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Empty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Empty;

    /**
     * Verifies an Empty message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Empty message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Empty
     */
    public static fromObject(object: { [k: string]: any }): Empty;

    /**
     * Creates a plain object from an Empty message. Also converts values to other types if specified.
     * @param message Empty
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Empty to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ListProductsResponse. */
export interface IListProductsResponse {

    /** ListProductsResponse products */
    products?: (IProduct[]|null);
}

/** Represents a ListProductsResponse. */
export class ListProductsResponse implements IListProductsResponse {

    /**
     * Constructs a new ListProductsResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListProductsResponse);

    /** ListProductsResponse products. */
    public products: IProduct[];

    /**
     * Creates a new ListProductsResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListProductsResponse instance
     */
    public static create(properties?: IListProductsResponse): ListProductsResponse;

    /**
     * Encodes the specified ListProductsResponse message. Does not implicitly {@link ListProductsResponse.verify|verify} messages.
     * @param message ListProductsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListProductsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListProductsResponse message, length delimited. Does not implicitly {@link ListProductsResponse.verify|verify} messages.
     * @param message ListProductsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListProductsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListProductsResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListProductsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListProductsResponse;

    /**
     * Decodes a ListProductsResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListProductsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListProductsResponse;

    /**
     * Verifies a ListProductsResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListProductsResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListProductsResponse
     */
    public static fromObject(object: { [k: string]: any }): ListProductsResponse;

    /**
     * Creates a plain object from a ListProductsResponse message. Also converts values to other types if specified.
     * @param message ListProductsResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListProductsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListProductsResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a ProductService */
export class ProductService extends $protobuf.rpc.Service {

    /**
     * Constructs a new ProductService service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new ProductService service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ProductService;

    /**
     * Calls RegisterProduct.
     * @param request Product message or plain object
     * @param callback Node-style callback called with the error, if any, and Product
     */
    public registerProduct(request: IProduct, callback: ProductService.RegisterProductCallback): void;

    /**
     * Calls RegisterProduct.
     * @param request Product message or plain object
     * @returns Promise
     */
    public registerProduct(request: IProduct): Promise<Product>;

    /**
     * Calls ListProducts.
     * @param request Empty message or plain object
     * @param callback Node-style callback called with the error, if any, and ListProductsResponse
     */
    public listProducts(request: IEmpty, callback: ProductService.ListProductsCallback): void;

    /**
     * Calls ListProducts.
     * @param request Empty message or plain object
     * @returns Promise
     */
    public listProducts(request: IEmpty): Promise<ListProductsResponse>;

    /**
     * Calls GetProductById.
     * @param request ByIdRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and Product
     */
    public getProductById(request: IByIdRequest, callback: ProductService.GetProductByIdCallback): void;

    /**
     * Calls GetProductById.
     * @param request ByIdRequest message or plain object
     * @returns Promise
     */
    public getProductById(request: IByIdRequest): Promise<Product>;

    /**
     * Calls CloneProductById.
     * @param request ByIdRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and Product
     */
    public cloneProductById(request: IByIdRequest, callback: ProductService.CloneProductByIdCallback): void;

    /**
     * Calls CloneProductById.
     * @param request ByIdRequest message or plain object
     * @returns Promise
     */
    public cloneProductById(request: IByIdRequest): Promise<Product>;

    /**
     * Calls UpateProductById.
     * @param request Product message or plain object
     * @param callback Node-style callback called with the error, if any, and Product
     */
    public upateProductById(request: IProduct, callback: ProductService.UpateProductByIdCallback): void;

    /**
     * Calls UpateProductById.
     * @param request Product message or plain object
     * @returns Promise
     */
    public upateProductById(request: IProduct): Promise<Product>;

    /**
     * Calls DeleteProductById.
     * @param request ByIdRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and Empty
     */
    public deleteProductById(request: IByIdRequest, callback: ProductService.DeleteProductByIdCallback): void;

    /**
     * Calls DeleteProductById.
     * @param request ByIdRequest message or plain object
     * @returns Promise
     */
    public deleteProductById(request: IByIdRequest): Promise<Empty>;
}

export namespace ProductService {

    /**
     * Callback as used by {@link ProductService#registerProduct}.
     * @param error Error, if any
     * @param [response] Product
     */
    type RegisterProductCallback = (error: (Error|null), response?: Product) => void;

    /**
     * Callback as used by {@link ProductService#listProducts}.
     * @param error Error, if any
     * @param [response] ListProductsResponse
     */
    type ListProductsCallback = (error: (Error|null), response?: ListProductsResponse) => void;

    /**
     * Callback as used by {@link ProductService#getProductById}.
     * @param error Error, if any
     * @param [response] Product
     */
    type GetProductByIdCallback = (error: (Error|null), response?: Product) => void;

    /**
     * Callback as used by {@link ProductService#cloneProductById}.
     * @param error Error, if any
     * @param [response] Product
     */
    type CloneProductByIdCallback = (error: (Error|null), response?: Product) => void;

    /**
     * Callback as used by {@link ProductService#upateProductById}.
     * @param error Error, if any
     * @param [response] Product
     */
    type UpateProductByIdCallback = (error: (Error|null), response?: Product) => void;

    /**
     * Callback as used by {@link ProductService#deleteProductById}.
     * @param error Error, if any
     * @param [response] Empty
     */
    type DeleteProductByIdCallback = (error: (Error|null), response?: Empty) => void;
}
