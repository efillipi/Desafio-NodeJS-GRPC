import * as $protobuf from "protobufjs";
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
