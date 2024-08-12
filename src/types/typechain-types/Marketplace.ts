/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface MarketplaceInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "USDc"
      | "buyProduct"
      | "confirmDelivery"
      | "listProduct"
      | "productCount"
      | "products"
      | "stakingBalance"
      | "withdrawalTokens"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ProductBought"
      | "ProductConfirmed"
      | "ProductListed"
  ): EventFragment;

  encodeFunctionData(functionFragment: "USDc", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "buyProduct",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "confirmDelivery",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "listProduct",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "productCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "products",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakingBalance",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawalTokens",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "USDc", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyProduct", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "confirmDelivery",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "listProduct",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "productCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "products", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakingBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawalTokens",
    data: BytesLike
  ): Result;
}

export namespace ProductBoughtEvent {
  export type InputTuple = [productId: BigNumberish, buyer: AddressLike];
  export type OutputTuple = [productId: bigint, buyer: string];
  export interface OutputObject {
    productId: bigint;
    buyer: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProductConfirmedEvent {
  export type InputTuple = [productId: BigNumberish, buyer: AddressLike];
  export type OutputTuple = [productId: bigint, buyer: string];
  export interface OutputObject {
    productId: bigint;
    buyer: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProductListedEvent {
  export type InputTuple = [
    productId: BigNumberish,
    productName: string,
    productPrice: BigNumberish,
    seller: AddressLike
  ];
  export type OutputTuple = [
    productId: bigint,
    productName: string,
    productPrice: bigint,
    seller: string
  ];
  export interface OutputObject {
    productId: bigint;
    productName: string;
    productPrice: bigint;
    seller: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Marketplace extends BaseContract {
  connect(runner?: ContractRunner | null): Marketplace;
  waitForDeployment(): Promise<this>;

  interface: MarketplaceInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  USDc: TypedContractMethod<[], [string], "view">;

  buyProduct: TypedContractMethod<
    [productId: BigNumberish, $USDc: BigNumberish],
    [void],
    "nonpayable"
  >;

  confirmDelivery: TypedContractMethod<
    [_productId: BigNumberish],
    [void],
    "nonpayable"
  >;

  listProduct: TypedContractMethod<
    [_name: string, _price: BigNumberish],
    [void],
    "nonpayable"
  >;

  productCount: TypedContractMethod<[], [bigint], "view">;

  products: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, bigint, string, boolean, string, boolean] & {
        id: bigint;
        name: string;
        price: bigint;
        seller: string;
        sold: boolean;
        buyer: string;
        confirmed: boolean;
      }
    ],
    "view"
  >;

  stakingBalance: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  withdrawalTokens: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "USDc"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "buyProduct"
  ): TypedContractMethod<
    [productId: BigNumberish, $USDc: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "confirmDelivery"
  ): TypedContractMethod<[_productId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "listProduct"
  ): TypedContractMethod<
    [_name: string, _price: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "productCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "products"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, bigint, string, boolean, string, boolean] & {
        id: bigint;
        name: string;
        price: bigint;
        seller: string;
        sold: boolean;
        buyer: string;
        confirmed: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "stakingBalance"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "withdrawalTokens"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "ProductBought"
  ): TypedContractEvent<
    ProductBoughtEvent.InputTuple,
    ProductBoughtEvent.OutputTuple,
    ProductBoughtEvent.OutputObject
  >;
  getEvent(
    key: "ProductConfirmed"
  ): TypedContractEvent<
    ProductConfirmedEvent.InputTuple,
    ProductConfirmedEvent.OutputTuple,
    ProductConfirmedEvent.OutputObject
  >;
  getEvent(
    key: "ProductListed"
  ): TypedContractEvent<
    ProductListedEvent.InputTuple,
    ProductListedEvent.OutputTuple,
    ProductListedEvent.OutputObject
  >;

  filters: {
    "ProductBought(uint256,address)": TypedContractEvent<
      ProductBoughtEvent.InputTuple,
      ProductBoughtEvent.OutputTuple,
      ProductBoughtEvent.OutputObject
    >;
    ProductBought: TypedContractEvent<
      ProductBoughtEvent.InputTuple,
      ProductBoughtEvent.OutputTuple,
      ProductBoughtEvent.OutputObject
    >;

    "ProductConfirmed(uint256,address)": TypedContractEvent<
      ProductConfirmedEvent.InputTuple,
      ProductConfirmedEvent.OutputTuple,
      ProductConfirmedEvent.OutputObject
    >;
    ProductConfirmed: TypedContractEvent<
      ProductConfirmedEvent.InputTuple,
      ProductConfirmedEvent.OutputTuple,
      ProductConfirmedEvent.OutputObject
    >;

    "ProductListed(uint256,string,uint256,address)": TypedContractEvent<
      ProductListedEvent.InputTuple,
      ProductListedEvent.OutputTuple,
      ProductListedEvent.OutputObject
    >;
    ProductListed: TypedContractEvent<
      ProductListedEvent.InputTuple,
      ProductListedEvent.OutputTuple,
      ProductListedEvent.OutputObject
    >;
  };
}