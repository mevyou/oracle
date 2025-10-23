
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model ContractUser
 * 
 */
export type ContractUser = $Result.DefaultSelection<Prisma.$ContractUserPayload>
/**
 * Model GameResult
 * 
 */
export type GameResult = $Result.DefaultSelection<Prisma.$GameResultPayload>
/**
 * Model FootballMatch
 * 
 */
export type FootballMatch = $Result.DefaultSelection<Prisma.$FootballMatchPayload>
/**
 * Model Bet
 * 
 */
export type Bet = $Result.DefaultSelection<Prisma.$BetPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LoginProvider: {
  WALLET: 'WALLET',
  GOOGLE: 'GOOGLE',
  FACEBOOK: 'FACEBOOK',
  TWITTER: 'TWITTER',
  DISCORD: 'DISCORD',
  EMAIL: 'EMAIL'
};

export type LoginProvider = (typeof LoginProvider)[keyof typeof LoginProvider]


export const GameStatus: {
  COMPLETED: 'COMPLETED',
  PENDING: 'PENDING',
  CANCELLED: 'CANCELLED'
};

export type GameStatus = (typeof GameStatus)[keyof typeof GameStatus]


export const GameOutcome: {
  WIN: 'WIN',
  LOSE: 'LOSE',
  DRAW: 'DRAW'
};

export type GameOutcome = (typeof GameOutcome)[keyof typeof GameOutcome]

}

export type LoginProvider = $Enums.LoginProvider

export const LoginProvider: typeof $Enums.LoginProvider

export type GameStatus = $Enums.GameStatus

export const GameStatus: typeof $Enums.GameStatus

export type GameOutcome = $Enums.GameOutcome

export const GameOutcome: typeof $Enums.GameOutcome

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserProfiles
 * const userProfiles = await prisma.userProfile.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more UserProfiles
   * const userProfiles = await prisma.userProfile.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contractUser`: Exposes CRUD operations for the **ContractUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContractUsers
    * const contractUsers = await prisma.contractUser.findMany()
    * ```
    */
  get contractUser(): Prisma.ContractUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameResult`: Exposes CRUD operations for the **GameResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameResults
    * const gameResults = await prisma.gameResult.findMany()
    * ```
    */
  get gameResult(): Prisma.GameResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.footballMatch`: Exposes CRUD operations for the **FootballMatch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FootballMatches
    * const footballMatches = await prisma.footballMatch.findMany()
    * ```
    */
  get footballMatch(): Prisma.FootballMatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bet`: Exposes CRUD operations for the **Bet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bets
    * const bets = await prisma.bet.findMany()
    * ```
    */
  get bet(): Prisma.BetDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.1
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    UserProfile: 'UserProfile',
    ContractUser: 'ContractUser',
    GameResult: 'GameResult',
    FootballMatch: 'FootballMatch',
    Bet: 'Bet'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "userProfile" | "contractUser" | "gameResult" | "footballMatch" | "bet"
      txIsolationLevel: never
    }
    model: {
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserProfileFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserProfileAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      ContractUser: {
        payload: Prisma.$ContractUserPayload<ExtArgs>
        fields: Prisma.ContractUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractUserPayload>
          }
          findFirst: {
            args: Prisma.ContractUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractUserPayload>
          }
          findMany: {
            args: Prisma.ContractUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractUserPayload>[]
          }
          create: {
            args: Prisma.ContractUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractUserPayload>
          }
          createMany: {
            args: Prisma.ContractUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContractUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractUserPayload>
          }
          update: {
            args: Prisma.ContractUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractUserPayload>
          }
          deleteMany: {
            args: Prisma.ContractUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContractUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractUserPayload>
          }
          aggregate: {
            args: Prisma.ContractUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContractUser>
          }
          groupBy: {
            args: Prisma.ContractUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractUserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ContractUserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ContractUserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ContractUserCountArgs<ExtArgs>
            result: $Utils.Optional<ContractUserCountAggregateOutputType> | number
          }
        }
      }
      GameResult: {
        payload: Prisma.$GameResultPayload<ExtArgs>
        fields: Prisma.GameResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameResultPayload>
          }
          findFirst: {
            args: Prisma.GameResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameResultPayload>
          }
          findMany: {
            args: Prisma.GameResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameResultPayload>[]
          }
          create: {
            args: Prisma.GameResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameResultPayload>
          }
          createMany: {
            args: Prisma.GameResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GameResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameResultPayload>
          }
          update: {
            args: Prisma.GameResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameResultPayload>
          }
          deleteMany: {
            args: Prisma.GameResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GameResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameResultPayload>
          }
          aggregate: {
            args: Prisma.GameResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameResult>
          }
          groupBy: {
            args: Prisma.GameResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameResultGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.GameResultFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.GameResultAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.GameResultCountArgs<ExtArgs>
            result: $Utils.Optional<GameResultCountAggregateOutputType> | number
          }
        }
      }
      FootballMatch: {
        payload: Prisma.$FootballMatchPayload<ExtArgs>
        fields: Prisma.FootballMatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FootballMatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FootballMatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FootballMatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FootballMatchPayload>
          }
          findFirst: {
            args: Prisma.FootballMatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FootballMatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FootballMatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FootballMatchPayload>
          }
          findMany: {
            args: Prisma.FootballMatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FootballMatchPayload>[]
          }
          create: {
            args: Prisma.FootballMatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FootballMatchPayload>
          }
          createMany: {
            args: Prisma.FootballMatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FootballMatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FootballMatchPayload>
          }
          update: {
            args: Prisma.FootballMatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FootballMatchPayload>
          }
          deleteMany: {
            args: Prisma.FootballMatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FootballMatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FootballMatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FootballMatchPayload>
          }
          aggregate: {
            args: Prisma.FootballMatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFootballMatch>
          }
          groupBy: {
            args: Prisma.FootballMatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<FootballMatchGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FootballMatchFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.FootballMatchAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.FootballMatchCountArgs<ExtArgs>
            result: $Utils.Optional<FootballMatchCountAggregateOutputType> | number
          }
        }
      }
      Bet: {
        payload: Prisma.$BetPayload<ExtArgs>
        fields: Prisma.BetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          findFirst: {
            args: Prisma.BetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          findMany: {
            args: Prisma.BetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>[]
          }
          create: {
            args: Prisma.BetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          createMany: {
            args: Prisma.BetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          update: {
            args: Prisma.BetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          deleteMany: {
            args: Prisma.BetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          aggregate: {
            args: Prisma.BetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBet>
          }
          groupBy: {
            args: Prisma.BetGroupByArgs<ExtArgs>
            result: $Utils.Optional<BetGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.BetFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.BetAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.BetCountArgs<ExtArgs>
            result: $Utils.Optional<BetCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    userProfile?: UserProfileOmit
    contractUser?: ContractUserOmit
    gameResult?: GameResultOmit
    footballMatch?: FootballMatchOmit
    bet?: BetOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: string | null
    user: string | null
    name: string | null
    username: string | null
    description: string | null
    image: string | null
    provider: $Enums.LoginProvider | null
    providerId: string | null
    email: string | null
    walletAddress: string | null
    createdAt: Date | null
    timestamp: Date | null
    lastUpdated: Date | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: string | null
    user: string | null
    name: string | null
    username: string | null
    description: string | null
    image: string | null
    provider: $Enums.LoginProvider | null
    providerId: string | null
    email: string | null
    walletAddress: string | null
    createdAt: Date | null
    timestamp: Date | null
    lastUpdated: Date | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    user: number
    name: number
    username: number
    description: number
    image: number
    provider: number
    providerId: number
    email: number
    walletAddress: number
    createdAt: number
    timestamp: number
    lastUpdated: number
    metadata: number
    _all: number
  }


  export type UserProfileMinAggregateInputType = {
    id?: true
    user?: true
    name?: true
    username?: true
    description?: true
    image?: true
    provider?: true
    providerId?: true
    email?: true
    walletAddress?: true
    createdAt?: true
    timestamp?: true
    lastUpdated?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    user?: true
    name?: true
    username?: true
    description?: true
    image?: true
    provider?: true
    providerId?: true
    email?: true
    walletAddress?: true
    createdAt?: true
    timestamp?: true
    lastUpdated?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    user?: true
    name?: true
    username?: true
    description?: true
    image?: true
    provider?: true
    providerId?: true
    email?: true
    walletAddress?: true
    createdAt?: true
    timestamp?: true
    lastUpdated?: true
    metadata?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: string
    user: string
    name: string
    username: string
    description: string | null
    image: string | null
    provider: $Enums.LoginProvider
    providerId: string | null
    email: string | null
    walletAddress: string | null
    createdAt: Date
    timestamp: Date
    lastUpdated: Date
    metadata: JsonValue | null
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user?: boolean
    name?: boolean
    username?: boolean
    description?: boolean
    image?: boolean
    provider?: boolean
    providerId?: boolean
    email?: boolean
    walletAddress?: boolean
    createdAt?: boolean
    timestamp?: boolean
    lastUpdated?: boolean
    metadata?: boolean
  }, ExtArgs["result"]["userProfile"]>



  export type UserProfileSelectScalar = {
    id?: boolean
    user?: boolean
    name?: boolean
    username?: boolean
    description?: boolean
    image?: boolean
    provider?: boolean
    providerId?: boolean
    email?: boolean
    walletAddress?: boolean
    createdAt?: boolean
    timestamp?: boolean
    lastUpdated?: boolean
    metadata?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user" | "name" | "username" | "description" | "image" | "provider" | "providerId" | "email" | "walletAddress" | "createdAt" | "timestamp" | "lastUpdated" | "metadata", ExtArgs["result"]["userProfile"]>

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user: string
      name: string
      username: string
      description: string | null
      image: string | null
      provider: $Enums.LoginProvider
      providerId: string | null
      email: string | null
      walletAddress: string | null
      createdAt: Date
      timestamp: Date
      lastUpdated: Date
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * @param {UserProfileFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userProfile = await prisma.userProfile.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserProfileFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserProfile.
     * @param {UserProfileAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userProfile = await prisma.userProfile.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserProfileAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'String'>
    readonly user: FieldRef<"UserProfile", 'String'>
    readonly name: FieldRef<"UserProfile", 'String'>
    readonly username: FieldRef<"UserProfile", 'String'>
    readonly description: FieldRef<"UserProfile", 'String'>
    readonly image: FieldRef<"UserProfile", 'String'>
    readonly provider: FieldRef<"UserProfile", 'LoginProvider'>
    readonly providerId: FieldRef<"UserProfile", 'String'>
    readonly email: FieldRef<"UserProfile", 'String'>
    readonly walletAddress: FieldRef<"UserProfile", 'String'>
    readonly createdAt: FieldRef<"UserProfile", 'DateTime'>
    readonly timestamp: FieldRef<"UserProfile", 'DateTime'>
    readonly lastUpdated: FieldRef<"UserProfile", 'DateTime'>
    readonly metadata: FieldRef<"UserProfile", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile findRaw
   */
  export type UserProfileFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserProfile aggregateRaw
   */
  export type UserProfileAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
  }


  /**
   * Model ContractUser
   */

  export type AggregateContractUser = {
    _count: ContractUserCountAggregateOutputType | null
    _min: ContractUserMinAggregateOutputType | null
    _max: ContractUserMaxAggregateOutputType | null
  }

  export type ContractUserMinAggregateOutputType = {
    id: string | null
    walletAddress: string | null
    syncedToBackend: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContractUserMaxAggregateOutputType = {
    id: string | null
    walletAddress: string | null
    syncedToBackend: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContractUserCountAggregateOutputType = {
    id: number
    walletAddress: number
    contractData: number
    syncedToBackend: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContractUserMinAggregateInputType = {
    id?: true
    walletAddress?: true
    syncedToBackend?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContractUserMaxAggregateInputType = {
    id?: true
    walletAddress?: true
    syncedToBackend?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContractUserCountAggregateInputType = {
    id?: true
    walletAddress?: true
    contractData?: true
    syncedToBackend?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContractUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContractUser to aggregate.
     */
    where?: ContractUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractUsers to fetch.
     */
    orderBy?: ContractUserOrderByWithRelationInput | ContractUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContractUsers
    **/
    _count?: true | ContractUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractUserMaxAggregateInputType
  }

  export type GetContractUserAggregateType<T extends ContractUserAggregateArgs> = {
        [P in keyof T & keyof AggregateContractUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContractUser[P]>
      : GetScalarType<T[P], AggregateContractUser[P]>
  }




  export type ContractUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractUserWhereInput
    orderBy?: ContractUserOrderByWithAggregationInput | ContractUserOrderByWithAggregationInput[]
    by: ContractUserScalarFieldEnum[] | ContractUserScalarFieldEnum
    having?: ContractUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractUserCountAggregateInputType | true
    _min?: ContractUserMinAggregateInputType
    _max?: ContractUserMaxAggregateInputType
  }

  export type ContractUserGroupByOutputType = {
    id: string
    walletAddress: string
    contractData: JsonValue
    syncedToBackend: boolean
    createdAt: Date
    updatedAt: Date
    _count: ContractUserCountAggregateOutputType | null
    _min: ContractUserMinAggregateOutputType | null
    _max: ContractUserMaxAggregateOutputType | null
  }

  type GetContractUserGroupByPayload<T extends ContractUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractUserGroupByOutputType[P]>
            : GetScalarType<T[P], ContractUserGroupByOutputType[P]>
        }
      >
    >


  export type ContractUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletAddress?: boolean
    contractData?: boolean
    syncedToBackend?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contractUser"]>



  export type ContractUserSelectScalar = {
    id?: boolean
    walletAddress?: boolean
    contractData?: boolean
    syncedToBackend?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContractUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "walletAddress" | "contractData" | "syncedToBackend" | "createdAt" | "updatedAt", ExtArgs["result"]["contractUser"]>

  export type $ContractUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContractUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      walletAddress: string
      contractData: Prisma.JsonValue
      syncedToBackend: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contractUser"]>
    composites: {}
  }

  type ContractUserGetPayload<S extends boolean | null | undefined | ContractUserDefaultArgs> = $Result.GetResult<Prisma.$ContractUserPayload, S>

  type ContractUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContractUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContractUserCountAggregateInputType | true
    }

  export interface ContractUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContractUser'], meta: { name: 'ContractUser' } }
    /**
     * Find zero or one ContractUser that matches the filter.
     * @param {ContractUserFindUniqueArgs} args - Arguments to find a ContractUser
     * @example
     * // Get one ContractUser
     * const contractUser = await prisma.contractUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractUserFindUniqueArgs>(args: SelectSubset<T, ContractUserFindUniqueArgs<ExtArgs>>): Prisma__ContractUserClient<$Result.GetResult<Prisma.$ContractUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContractUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContractUserFindUniqueOrThrowArgs} args - Arguments to find a ContractUser
     * @example
     * // Get one ContractUser
     * const contractUser = await prisma.contractUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractUserFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractUserClient<$Result.GetResult<Prisma.$ContractUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContractUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractUserFindFirstArgs} args - Arguments to find a ContractUser
     * @example
     * // Get one ContractUser
     * const contractUser = await prisma.contractUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractUserFindFirstArgs>(args?: SelectSubset<T, ContractUserFindFirstArgs<ExtArgs>>): Prisma__ContractUserClient<$Result.GetResult<Prisma.$ContractUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContractUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractUserFindFirstOrThrowArgs} args - Arguments to find a ContractUser
     * @example
     * // Get one ContractUser
     * const contractUser = await prisma.contractUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractUserFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractUserClient<$Result.GetResult<Prisma.$ContractUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContractUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContractUsers
     * const contractUsers = await prisma.contractUser.findMany()
     * 
     * // Get first 10 ContractUsers
     * const contractUsers = await prisma.contractUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractUserWithIdOnly = await prisma.contractUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContractUserFindManyArgs>(args?: SelectSubset<T, ContractUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContractUser.
     * @param {ContractUserCreateArgs} args - Arguments to create a ContractUser.
     * @example
     * // Create one ContractUser
     * const ContractUser = await prisma.contractUser.create({
     *   data: {
     *     // ... data to create a ContractUser
     *   }
     * })
     * 
     */
    create<T extends ContractUserCreateArgs>(args: SelectSubset<T, ContractUserCreateArgs<ExtArgs>>): Prisma__ContractUserClient<$Result.GetResult<Prisma.$ContractUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContractUsers.
     * @param {ContractUserCreateManyArgs} args - Arguments to create many ContractUsers.
     * @example
     * // Create many ContractUsers
     * const contractUser = await prisma.contractUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractUserCreateManyArgs>(args?: SelectSubset<T, ContractUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ContractUser.
     * @param {ContractUserDeleteArgs} args - Arguments to delete one ContractUser.
     * @example
     * // Delete one ContractUser
     * const ContractUser = await prisma.contractUser.delete({
     *   where: {
     *     // ... filter to delete one ContractUser
     *   }
     * })
     * 
     */
    delete<T extends ContractUserDeleteArgs>(args: SelectSubset<T, ContractUserDeleteArgs<ExtArgs>>): Prisma__ContractUserClient<$Result.GetResult<Prisma.$ContractUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContractUser.
     * @param {ContractUserUpdateArgs} args - Arguments to update one ContractUser.
     * @example
     * // Update one ContractUser
     * const contractUser = await prisma.contractUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractUserUpdateArgs>(args: SelectSubset<T, ContractUserUpdateArgs<ExtArgs>>): Prisma__ContractUserClient<$Result.GetResult<Prisma.$ContractUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContractUsers.
     * @param {ContractUserDeleteManyArgs} args - Arguments to filter ContractUsers to delete.
     * @example
     * // Delete a few ContractUsers
     * const { count } = await prisma.contractUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractUserDeleteManyArgs>(args?: SelectSubset<T, ContractUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContractUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContractUsers
     * const contractUser = await prisma.contractUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractUserUpdateManyArgs>(args: SelectSubset<T, ContractUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContractUser.
     * @param {ContractUserUpsertArgs} args - Arguments to update or create a ContractUser.
     * @example
     * // Update or create a ContractUser
     * const contractUser = await prisma.contractUser.upsert({
     *   create: {
     *     // ... data to create a ContractUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContractUser we want to update
     *   }
     * })
     */
    upsert<T extends ContractUserUpsertArgs>(args: SelectSubset<T, ContractUserUpsertArgs<ExtArgs>>): Prisma__ContractUserClient<$Result.GetResult<Prisma.$ContractUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContractUsers that matches the filter.
     * @param {ContractUserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const contractUser = await prisma.contractUser.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ContractUserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ContractUser.
     * @param {ContractUserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const contractUser = await prisma.contractUser.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ContractUserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ContractUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractUserCountArgs} args - Arguments to filter ContractUsers to count.
     * @example
     * // Count the number of ContractUsers
     * const count = await prisma.contractUser.count({
     *   where: {
     *     // ... the filter for the ContractUsers we want to count
     *   }
     * })
    **/
    count<T extends ContractUserCountArgs>(
      args?: Subset<T, ContractUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContractUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContractUserAggregateArgs>(args: Subset<T, ContractUserAggregateArgs>): Prisma.PrismaPromise<GetContractUserAggregateType<T>>

    /**
     * Group by ContractUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContractUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractUserGroupByArgs['orderBy'] }
        : { orderBy?: ContractUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContractUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContractUser model
   */
  readonly fields: ContractUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContractUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContractUser model
   */
  interface ContractUserFieldRefs {
    readonly id: FieldRef<"ContractUser", 'String'>
    readonly walletAddress: FieldRef<"ContractUser", 'String'>
    readonly contractData: FieldRef<"ContractUser", 'Json'>
    readonly syncedToBackend: FieldRef<"ContractUser", 'Boolean'>
    readonly createdAt: FieldRef<"ContractUser", 'DateTime'>
    readonly updatedAt: FieldRef<"ContractUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContractUser findUnique
   */
  export type ContractUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractUser
     */
    select?: ContractUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractUser
     */
    omit?: ContractUserOmit<ExtArgs> | null
    /**
     * Filter, which ContractUser to fetch.
     */
    where: ContractUserWhereUniqueInput
  }

  /**
   * ContractUser findUniqueOrThrow
   */
  export type ContractUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractUser
     */
    select?: ContractUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractUser
     */
    omit?: ContractUserOmit<ExtArgs> | null
    /**
     * Filter, which ContractUser to fetch.
     */
    where: ContractUserWhereUniqueInput
  }

  /**
   * ContractUser findFirst
   */
  export type ContractUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractUser
     */
    select?: ContractUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractUser
     */
    omit?: ContractUserOmit<ExtArgs> | null
    /**
     * Filter, which ContractUser to fetch.
     */
    where?: ContractUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractUsers to fetch.
     */
    orderBy?: ContractUserOrderByWithRelationInput | ContractUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContractUsers.
     */
    cursor?: ContractUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContractUsers.
     */
    distinct?: ContractUserScalarFieldEnum | ContractUserScalarFieldEnum[]
  }

  /**
   * ContractUser findFirstOrThrow
   */
  export type ContractUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractUser
     */
    select?: ContractUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractUser
     */
    omit?: ContractUserOmit<ExtArgs> | null
    /**
     * Filter, which ContractUser to fetch.
     */
    where?: ContractUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractUsers to fetch.
     */
    orderBy?: ContractUserOrderByWithRelationInput | ContractUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContractUsers.
     */
    cursor?: ContractUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContractUsers.
     */
    distinct?: ContractUserScalarFieldEnum | ContractUserScalarFieldEnum[]
  }

  /**
   * ContractUser findMany
   */
  export type ContractUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractUser
     */
    select?: ContractUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractUser
     */
    omit?: ContractUserOmit<ExtArgs> | null
    /**
     * Filter, which ContractUsers to fetch.
     */
    where?: ContractUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractUsers to fetch.
     */
    orderBy?: ContractUserOrderByWithRelationInput | ContractUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContractUsers.
     */
    cursor?: ContractUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractUsers.
     */
    skip?: number
    distinct?: ContractUserScalarFieldEnum | ContractUserScalarFieldEnum[]
  }

  /**
   * ContractUser create
   */
  export type ContractUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractUser
     */
    select?: ContractUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractUser
     */
    omit?: ContractUserOmit<ExtArgs> | null
    /**
     * The data needed to create a ContractUser.
     */
    data: XOR<ContractUserCreateInput, ContractUserUncheckedCreateInput>
  }

  /**
   * ContractUser createMany
   */
  export type ContractUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContractUsers.
     */
    data: ContractUserCreateManyInput | ContractUserCreateManyInput[]
  }

  /**
   * ContractUser update
   */
  export type ContractUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractUser
     */
    select?: ContractUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractUser
     */
    omit?: ContractUserOmit<ExtArgs> | null
    /**
     * The data needed to update a ContractUser.
     */
    data: XOR<ContractUserUpdateInput, ContractUserUncheckedUpdateInput>
    /**
     * Choose, which ContractUser to update.
     */
    where: ContractUserWhereUniqueInput
  }

  /**
   * ContractUser updateMany
   */
  export type ContractUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContractUsers.
     */
    data: XOR<ContractUserUpdateManyMutationInput, ContractUserUncheckedUpdateManyInput>
    /**
     * Filter which ContractUsers to update
     */
    where?: ContractUserWhereInput
    /**
     * Limit how many ContractUsers to update.
     */
    limit?: number
  }

  /**
   * ContractUser upsert
   */
  export type ContractUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractUser
     */
    select?: ContractUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractUser
     */
    omit?: ContractUserOmit<ExtArgs> | null
    /**
     * The filter to search for the ContractUser to update in case it exists.
     */
    where: ContractUserWhereUniqueInput
    /**
     * In case the ContractUser found by the `where` argument doesn't exist, create a new ContractUser with this data.
     */
    create: XOR<ContractUserCreateInput, ContractUserUncheckedCreateInput>
    /**
     * In case the ContractUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractUserUpdateInput, ContractUserUncheckedUpdateInput>
  }

  /**
   * ContractUser delete
   */
  export type ContractUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractUser
     */
    select?: ContractUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractUser
     */
    omit?: ContractUserOmit<ExtArgs> | null
    /**
     * Filter which ContractUser to delete.
     */
    where: ContractUserWhereUniqueInput
  }

  /**
   * ContractUser deleteMany
   */
  export type ContractUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContractUsers to delete
     */
    where?: ContractUserWhereInput
    /**
     * Limit how many ContractUsers to delete.
     */
    limit?: number
  }

  /**
   * ContractUser findRaw
   */
  export type ContractUserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ContractUser aggregateRaw
   */
  export type ContractUserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ContractUser without action
   */
  export type ContractUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractUser
     */
    select?: ContractUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContractUser
     */
    omit?: ContractUserOmit<ExtArgs> | null
  }


  /**
   * Model GameResult
   */

  export type AggregateGameResult = {
    _count: GameResultCountAggregateOutputType | null
    _min: GameResultMinAggregateOutputType | null
    _max: GameResultMaxAggregateOutputType | null
  }

  export type GameResultMinAggregateOutputType = {
    id: string | null
    gameId: string | null
    status: $Enums.GameStatus | null
    outcome: $Enums.GameOutcome | null
    winner: string | null
    loser: string | null
    provider: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameResultMaxAggregateOutputType = {
    id: string | null
    gameId: string | null
    status: $Enums.GameStatus | null
    outcome: $Enums.GameOutcome | null
    winner: string | null
    loser: string | null
    provider: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameResultCountAggregateOutputType = {
    id: number
    gameId: number
    status: number
    outcome: number
    winner: number
    loser: number
    score: number
    provider: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GameResultMinAggregateInputType = {
    id?: true
    gameId?: true
    status?: true
    outcome?: true
    winner?: true
    loser?: true
    provider?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameResultMaxAggregateInputType = {
    id?: true
    gameId?: true
    status?: true
    outcome?: true
    winner?: true
    loser?: true
    provider?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameResultCountAggregateInputType = {
    id?: true
    gameId?: true
    status?: true
    outcome?: true
    winner?: true
    loser?: true
    score?: true
    provider?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GameResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameResult to aggregate.
     */
    where?: GameResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameResults to fetch.
     */
    orderBy?: GameResultOrderByWithRelationInput | GameResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameResults
    **/
    _count?: true | GameResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameResultMaxAggregateInputType
  }

  export type GetGameResultAggregateType<T extends GameResultAggregateArgs> = {
        [P in keyof T & keyof AggregateGameResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameResult[P]>
      : GetScalarType<T[P], AggregateGameResult[P]>
  }




  export type GameResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameResultWhereInput
    orderBy?: GameResultOrderByWithAggregationInput | GameResultOrderByWithAggregationInput[]
    by: GameResultScalarFieldEnum[] | GameResultScalarFieldEnum
    having?: GameResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameResultCountAggregateInputType | true
    _min?: GameResultMinAggregateInputType
    _max?: GameResultMaxAggregateInputType
  }

  export type GameResultGroupByOutputType = {
    id: string
    gameId: string
    status: $Enums.GameStatus
    outcome: $Enums.GameOutcome
    winner: string | null
    loser: string | null
    score: JsonValue | null
    provider: string
    createdAt: Date
    updatedAt: Date
    _count: GameResultCountAggregateOutputType | null
    _min: GameResultMinAggregateOutputType | null
    _max: GameResultMaxAggregateOutputType | null
  }

  type GetGameResultGroupByPayload<T extends GameResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameResultGroupByOutputType[P]>
            : GetScalarType<T[P], GameResultGroupByOutputType[P]>
        }
      >
    >


  export type GameResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    status?: boolean
    outcome?: boolean
    winner?: boolean
    loser?: boolean
    score?: boolean
    provider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gameResult"]>



  export type GameResultSelectScalar = {
    id?: boolean
    gameId?: boolean
    status?: boolean
    outcome?: boolean
    winner?: boolean
    loser?: boolean
    score?: boolean
    provider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GameResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameId" | "status" | "outcome" | "winner" | "loser" | "score" | "provider" | "createdAt" | "updatedAt", ExtArgs["result"]["gameResult"]>

  export type $GameResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameResult"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameId: string
      status: $Enums.GameStatus
      outcome: $Enums.GameOutcome
      winner: string | null
      loser: string | null
      score: Prisma.JsonValue | null
      provider: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gameResult"]>
    composites: {}
  }

  type GameResultGetPayload<S extends boolean | null | undefined | GameResultDefaultArgs> = $Result.GetResult<Prisma.$GameResultPayload, S>

  type GameResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameResultCountAggregateInputType | true
    }

  export interface GameResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameResult'], meta: { name: 'GameResult' } }
    /**
     * Find zero or one GameResult that matches the filter.
     * @param {GameResultFindUniqueArgs} args - Arguments to find a GameResult
     * @example
     * // Get one GameResult
     * const gameResult = await prisma.gameResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameResultFindUniqueArgs>(args: SelectSubset<T, GameResultFindUniqueArgs<ExtArgs>>): Prisma__GameResultClient<$Result.GetResult<Prisma.$GameResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameResultFindUniqueOrThrowArgs} args - Arguments to find a GameResult
     * @example
     * // Get one GameResult
     * const gameResult = await prisma.gameResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameResultFindUniqueOrThrowArgs>(args: SelectSubset<T, GameResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameResultClient<$Result.GetResult<Prisma.$GameResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameResultFindFirstArgs} args - Arguments to find a GameResult
     * @example
     * // Get one GameResult
     * const gameResult = await prisma.gameResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameResultFindFirstArgs>(args?: SelectSubset<T, GameResultFindFirstArgs<ExtArgs>>): Prisma__GameResultClient<$Result.GetResult<Prisma.$GameResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameResultFindFirstOrThrowArgs} args - Arguments to find a GameResult
     * @example
     * // Get one GameResult
     * const gameResult = await prisma.gameResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameResultFindFirstOrThrowArgs>(args?: SelectSubset<T, GameResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameResultClient<$Result.GetResult<Prisma.$GameResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameResults
     * const gameResults = await prisma.gameResult.findMany()
     * 
     * // Get first 10 GameResults
     * const gameResults = await prisma.gameResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameResultWithIdOnly = await prisma.gameResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameResultFindManyArgs>(args?: SelectSubset<T, GameResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameResult.
     * @param {GameResultCreateArgs} args - Arguments to create a GameResult.
     * @example
     * // Create one GameResult
     * const GameResult = await prisma.gameResult.create({
     *   data: {
     *     // ... data to create a GameResult
     *   }
     * })
     * 
     */
    create<T extends GameResultCreateArgs>(args: SelectSubset<T, GameResultCreateArgs<ExtArgs>>): Prisma__GameResultClient<$Result.GetResult<Prisma.$GameResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameResults.
     * @param {GameResultCreateManyArgs} args - Arguments to create many GameResults.
     * @example
     * // Create many GameResults
     * const gameResult = await prisma.gameResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameResultCreateManyArgs>(args?: SelectSubset<T, GameResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GameResult.
     * @param {GameResultDeleteArgs} args - Arguments to delete one GameResult.
     * @example
     * // Delete one GameResult
     * const GameResult = await prisma.gameResult.delete({
     *   where: {
     *     // ... filter to delete one GameResult
     *   }
     * })
     * 
     */
    delete<T extends GameResultDeleteArgs>(args: SelectSubset<T, GameResultDeleteArgs<ExtArgs>>): Prisma__GameResultClient<$Result.GetResult<Prisma.$GameResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameResult.
     * @param {GameResultUpdateArgs} args - Arguments to update one GameResult.
     * @example
     * // Update one GameResult
     * const gameResult = await prisma.gameResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameResultUpdateArgs>(args: SelectSubset<T, GameResultUpdateArgs<ExtArgs>>): Prisma__GameResultClient<$Result.GetResult<Prisma.$GameResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameResults.
     * @param {GameResultDeleteManyArgs} args - Arguments to filter GameResults to delete.
     * @example
     * // Delete a few GameResults
     * const { count } = await prisma.gameResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameResultDeleteManyArgs>(args?: SelectSubset<T, GameResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameResults
     * const gameResult = await prisma.gameResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameResultUpdateManyArgs>(args: SelectSubset<T, GameResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GameResult.
     * @param {GameResultUpsertArgs} args - Arguments to update or create a GameResult.
     * @example
     * // Update or create a GameResult
     * const gameResult = await prisma.gameResult.upsert({
     *   create: {
     *     // ... data to create a GameResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameResult we want to update
     *   }
     * })
     */
    upsert<T extends GameResultUpsertArgs>(args: SelectSubset<T, GameResultUpsertArgs<ExtArgs>>): Prisma__GameResultClient<$Result.GetResult<Prisma.$GameResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameResults that matches the filter.
     * @param {GameResultFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const gameResult = await prisma.gameResult.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: GameResultFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a GameResult.
     * @param {GameResultAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const gameResult = await prisma.gameResult.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: GameResultAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of GameResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameResultCountArgs} args - Arguments to filter GameResults to count.
     * @example
     * // Count the number of GameResults
     * const count = await prisma.gameResult.count({
     *   where: {
     *     // ... the filter for the GameResults we want to count
     *   }
     * })
    **/
    count<T extends GameResultCountArgs>(
      args?: Subset<T, GameResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameResultAggregateArgs>(args: Subset<T, GameResultAggregateArgs>): Prisma.PrismaPromise<GetGameResultAggregateType<T>>

    /**
     * Group by GameResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameResultGroupByArgs['orderBy'] }
        : { orderBy?: GameResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameResult model
   */
  readonly fields: GameResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameResult model
   */
  interface GameResultFieldRefs {
    readonly id: FieldRef<"GameResult", 'String'>
    readonly gameId: FieldRef<"GameResult", 'String'>
    readonly status: FieldRef<"GameResult", 'GameStatus'>
    readonly outcome: FieldRef<"GameResult", 'GameOutcome'>
    readonly winner: FieldRef<"GameResult", 'String'>
    readonly loser: FieldRef<"GameResult", 'String'>
    readonly score: FieldRef<"GameResult", 'Json'>
    readonly provider: FieldRef<"GameResult", 'String'>
    readonly createdAt: FieldRef<"GameResult", 'DateTime'>
    readonly updatedAt: FieldRef<"GameResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GameResult findUnique
   */
  export type GameResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameResult
     */
    select?: GameResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameResult
     */
    omit?: GameResultOmit<ExtArgs> | null
    /**
     * Filter, which GameResult to fetch.
     */
    where: GameResultWhereUniqueInput
  }

  /**
   * GameResult findUniqueOrThrow
   */
  export type GameResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameResult
     */
    select?: GameResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameResult
     */
    omit?: GameResultOmit<ExtArgs> | null
    /**
     * Filter, which GameResult to fetch.
     */
    where: GameResultWhereUniqueInput
  }

  /**
   * GameResult findFirst
   */
  export type GameResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameResult
     */
    select?: GameResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameResult
     */
    omit?: GameResultOmit<ExtArgs> | null
    /**
     * Filter, which GameResult to fetch.
     */
    where?: GameResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameResults to fetch.
     */
    orderBy?: GameResultOrderByWithRelationInput | GameResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameResults.
     */
    cursor?: GameResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameResults.
     */
    distinct?: GameResultScalarFieldEnum | GameResultScalarFieldEnum[]
  }

  /**
   * GameResult findFirstOrThrow
   */
  export type GameResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameResult
     */
    select?: GameResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameResult
     */
    omit?: GameResultOmit<ExtArgs> | null
    /**
     * Filter, which GameResult to fetch.
     */
    where?: GameResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameResults to fetch.
     */
    orderBy?: GameResultOrderByWithRelationInput | GameResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameResults.
     */
    cursor?: GameResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameResults.
     */
    distinct?: GameResultScalarFieldEnum | GameResultScalarFieldEnum[]
  }

  /**
   * GameResult findMany
   */
  export type GameResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameResult
     */
    select?: GameResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameResult
     */
    omit?: GameResultOmit<ExtArgs> | null
    /**
     * Filter, which GameResults to fetch.
     */
    where?: GameResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameResults to fetch.
     */
    orderBy?: GameResultOrderByWithRelationInput | GameResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameResults.
     */
    cursor?: GameResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameResults.
     */
    skip?: number
    distinct?: GameResultScalarFieldEnum | GameResultScalarFieldEnum[]
  }

  /**
   * GameResult create
   */
  export type GameResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameResult
     */
    select?: GameResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameResult
     */
    omit?: GameResultOmit<ExtArgs> | null
    /**
     * The data needed to create a GameResult.
     */
    data: XOR<GameResultCreateInput, GameResultUncheckedCreateInput>
  }

  /**
   * GameResult createMany
   */
  export type GameResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameResults.
     */
    data: GameResultCreateManyInput | GameResultCreateManyInput[]
  }

  /**
   * GameResult update
   */
  export type GameResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameResult
     */
    select?: GameResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameResult
     */
    omit?: GameResultOmit<ExtArgs> | null
    /**
     * The data needed to update a GameResult.
     */
    data: XOR<GameResultUpdateInput, GameResultUncheckedUpdateInput>
    /**
     * Choose, which GameResult to update.
     */
    where: GameResultWhereUniqueInput
  }

  /**
   * GameResult updateMany
   */
  export type GameResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameResults.
     */
    data: XOR<GameResultUpdateManyMutationInput, GameResultUncheckedUpdateManyInput>
    /**
     * Filter which GameResults to update
     */
    where?: GameResultWhereInput
    /**
     * Limit how many GameResults to update.
     */
    limit?: number
  }

  /**
   * GameResult upsert
   */
  export type GameResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameResult
     */
    select?: GameResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameResult
     */
    omit?: GameResultOmit<ExtArgs> | null
    /**
     * The filter to search for the GameResult to update in case it exists.
     */
    where: GameResultWhereUniqueInput
    /**
     * In case the GameResult found by the `where` argument doesn't exist, create a new GameResult with this data.
     */
    create: XOR<GameResultCreateInput, GameResultUncheckedCreateInput>
    /**
     * In case the GameResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameResultUpdateInput, GameResultUncheckedUpdateInput>
  }

  /**
   * GameResult delete
   */
  export type GameResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameResult
     */
    select?: GameResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameResult
     */
    omit?: GameResultOmit<ExtArgs> | null
    /**
     * Filter which GameResult to delete.
     */
    where: GameResultWhereUniqueInput
  }

  /**
   * GameResult deleteMany
   */
  export type GameResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameResults to delete
     */
    where?: GameResultWhereInput
    /**
     * Limit how many GameResults to delete.
     */
    limit?: number
  }

  /**
   * GameResult findRaw
   */
  export type GameResultFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * GameResult aggregateRaw
   */
  export type GameResultAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * GameResult without action
   */
  export type GameResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameResult
     */
    select?: GameResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameResult
     */
    omit?: GameResultOmit<ExtArgs> | null
  }


  /**
   * Model FootballMatch
   */

  export type AggregateFootballMatch = {
    _count: FootballMatchCountAggregateOutputType | null
    _avg: FootballMatchAvgAggregateOutputType | null
    _sum: FootballMatchSumAggregateOutputType | null
    _min: FootballMatchMinAggregateOutputType | null
    _max: FootballMatchMaxAggregateOutputType | null
  }

  export type FootballMatchAvgAggregateOutputType = {
    fixtureId: number | null
    homeTeamId: number | null
    awayTeamId: number | null
    homeScore: number | null
    awayScore: number | null
    leagueId: number | null
    season: number | null
  }

  export type FootballMatchSumAggregateOutputType = {
    fixtureId: number | null
    homeTeamId: number | null
    awayTeamId: number | null
    homeScore: number | null
    awayScore: number | null
    leagueId: number | null
    season: number | null
  }

  export type FootballMatchMinAggregateOutputType = {
    id: string | null
    fixtureId: number | null
    homeTeam: string | null
    awayTeam: string | null
    homeTeamId: number | null
    awayTeamId: number | null
    homeScore: number | null
    awayScore: number | null
    status: string | null
    matchDate: Date | null
    league: string | null
    leagueId: number | null
    season: number | null
    venue: string | null
    lastUpdated: Date | null
    createdAt: Date | null
  }

  export type FootballMatchMaxAggregateOutputType = {
    id: string | null
    fixtureId: number | null
    homeTeam: string | null
    awayTeam: string | null
    homeTeamId: number | null
    awayTeamId: number | null
    homeScore: number | null
    awayScore: number | null
    status: string | null
    matchDate: Date | null
    league: string | null
    leagueId: number | null
    season: number | null
    venue: string | null
    lastUpdated: Date | null
    createdAt: Date | null
  }

  export type FootballMatchCountAggregateOutputType = {
    id: number
    fixtureId: number
    homeTeam: number
    awayTeam: number
    homeTeamId: number
    awayTeamId: number
    homeScore: number
    awayScore: number
    status: number
    matchDate: number
    league: number
    leagueId: number
    season: number
    venue: number
    lastUpdated: number
    createdAt: number
    metadata: number
    _all: number
  }


  export type FootballMatchAvgAggregateInputType = {
    fixtureId?: true
    homeTeamId?: true
    awayTeamId?: true
    homeScore?: true
    awayScore?: true
    leagueId?: true
    season?: true
  }

  export type FootballMatchSumAggregateInputType = {
    fixtureId?: true
    homeTeamId?: true
    awayTeamId?: true
    homeScore?: true
    awayScore?: true
    leagueId?: true
    season?: true
  }

  export type FootballMatchMinAggregateInputType = {
    id?: true
    fixtureId?: true
    homeTeam?: true
    awayTeam?: true
    homeTeamId?: true
    awayTeamId?: true
    homeScore?: true
    awayScore?: true
    status?: true
    matchDate?: true
    league?: true
    leagueId?: true
    season?: true
    venue?: true
    lastUpdated?: true
    createdAt?: true
  }

  export type FootballMatchMaxAggregateInputType = {
    id?: true
    fixtureId?: true
    homeTeam?: true
    awayTeam?: true
    homeTeamId?: true
    awayTeamId?: true
    homeScore?: true
    awayScore?: true
    status?: true
    matchDate?: true
    league?: true
    leagueId?: true
    season?: true
    venue?: true
    lastUpdated?: true
    createdAt?: true
  }

  export type FootballMatchCountAggregateInputType = {
    id?: true
    fixtureId?: true
    homeTeam?: true
    awayTeam?: true
    homeTeamId?: true
    awayTeamId?: true
    homeScore?: true
    awayScore?: true
    status?: true
    matchDate?: true
    league?: true
    leagueId?: true
    season?: true
    venue?: true
    lastUpdated?: true
    createdAt?: true
    metadata?: true
    _all?: true
  }

  export type FootballMatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FootballMatch to aggregate.
     */
    where?: FootballMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FootballMatches to fetch.
     */
    orderBy?: FootballMatchOrderByWithRelationInput | FootballMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FootballMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FootballMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FootballMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FootballMatches
    **/
    _count?: true | FootballMatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FootballMatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FootballMatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FootballMatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FootballMatchMaxAggregateInputType
  }

  export type GetFootballMatchAggregateType<T extends FootballMatchAggregateArgs> = {
        [P in keyof T & keyof AggregateFootballMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFootballMatch[P]>
      : GetScalarType<T[P], AggregateFootballMatch[P]>
  }




  export type FootballMatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FootballMatchWhereInput
    orderBy?: FootballMatchOrderByWithAggregationInput | FootballMatchOrderByWithAggregationInput[]
    by: FootballMatchScalarFieldEnum[] | FootballMatchScalarFieldEnum
    having?: FootballMatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FootballMatchCountAggregateInputType | true
    _avg?: FootballMatchAvgAggregateInputType
    _sum?: FootballMatchSumAggregateInputType
    _min?: FootballMatchMinAggregateInputType
    _max?: FootballMatchMaxAggregateInputType
  }

  export type FootballMatchGroupByOutputType = {
    id: string
    fixtureId: number
    homeTeam: string
    awayTeam: string
    homeTeamId: number
    awayTeamId: number
    homeScore: number | null
    awayScore: number | null
    status: string
    matchDate: Date
    league: string
    leagueId: number
    season: number
    venue: string | null
    lastUpdated: Date
    createdAt: Date
    metadata: JsonValue | null
    _count: FootballMatchCountAggregateOutputType | null
    _avg: FootballMatchAvgAggregateOutputType | null
    _sum: FootballMatchSumAggregateOutputType | null
    _min: FootballMatchMinAggregateOutputType | null
    _max: FootballMatchMaxAggregateOutputType | null
  }

  type GetFootballMatchGroupByPayload<T extends FootballMatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FootballMatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FootballMatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FootballMatchGroupByOutputType[P]>
            : GetScalarType<T[P], FootballMatchGroupByOutputType[P]>
        }
      >
    >


  export type FootballMatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fixtureId?: boolean
    homeTeam?: boolean
    awayTeam?: boolean
    homeTeamId?: boolean
    awayTeamId?: boolean
    homeScore?: boolean
    awayScore?: boolean
    status?: boolean
    matchDate?: boolean
    league?: boolean
    leagueId?: boolean
    season?: boolean
    venue?: boolean
    lastUpdated?: boolean
    createdAt?: boolean
    metadata?: boolean
  }, ExtArgs["result"]["footballMatch"]>



  export type FootballMatchSelectScalar = {
    id?: boolean
    fixtureId?: boolean
    homeTeam?: boolean
    awayTeam?: boolean
    homeTeamId?: boolean
    awayTeamId?: boolean
    homeScore?: boolean
    awayScore?: boolean
    status?: boolean
    matchDate?: boolean
    league?: boolean
    leagueId?: boolean
    season?: boolean
    venue?: boolean
    lastUpdated?: boolean
    createdAt?: boolean
    metadata?: boolean
  }

  export type FootballMatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fixtureId" | "homeTeam" | "awayTeam" | "homeTeamId" | "awayTeamId" | "homeScore" | "awayScore" | "status" | "matchDate" | "league" | "leagueId" | "season" | "venue" | "lastUpdated" | "createdAt" | "metadata", ExtArgs["result"]["footballMatch"]>

  export type $FootballMatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FootballMatch"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fixtureId: number
      homeTeam: string
      awayTeam: string
      homeTeamId: number
      awayTeamId: number
      homeScore: number | null
      awayScore: number | null
      status: string
      matchDate: Date
      league: string
      leagueId: number
      season: number
      venue: string | null
      lastUpdated: Date
      createdAt: Date
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["footballMatch"]>
    composites: {}
  }

  type FootballMatchGetPayload<S extends boolean | null | undefined | FootballMatchDefaultArgs> = $Result.GetResult<Prisma.$FootballMatchPayload, S>

  type FootballMatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FootballMatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FootballMatchCountAggregateInputType | true
    }

  export interface FootballMatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FootballMatch'], meta: { name: 'FootballMatch' } }
    /**
     * Find zero or one FootballMatch that matches the filter.
     * @param {FootballMatchFindUniqueArgs} args - Arguments to find a FootballMatch
     * @example
     * // Get one FootballMatch
     * const footballMatch = await prisma.footballMatch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FootballMatchFindUniqueArgs>(args: SelectSubset<T, FootballMatchFindUniqueArgs<ExtArgs>>): Prisma__FootballMatchClient<$Result.GetResult<Prisma.$FootballMatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FootballMatch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FootballMatchFindUniqueOrThrowArgs} args - Arguments to find a FootballMatch
     * @example
     * // Get one FootballMatch
     * const footballMatch = await prisma.footballMatch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FootballMatchFindUniqueOrThrowArgs>(args: SelectSubset<T, FootballMatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FootballMatchClient<$Result.GetResult<Prisma.$FootballMatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FootballMatch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FootballMatchFindFirstArgs} args - Arguments to find a FootballMatch
     * @example
     * // Get one FootballMatch
     * const footballMatch = await prisma.footballMatch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FootballMatchFindFirstArgs>(args?: SelectSubset<T, FootballMatchFindFirstArgs<ExtArgs>>): Prisma__FootballMatchClient<$Result.GetResult<Prisma.$FootballMatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FootballMatch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FootballMatchFindFirstOrThrowArgs} args - Arguments to find a FootballMatch
     * @example
     * // Get one FootballMatch
     * const footballMatch = await prisma.footballMatch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FootballMatchFindFirstOrThrowArgs>(args?: SelectSubset<T, FootballMatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__FootballMatchClient<$Result.GetResult<Prisma.$FootballMatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FootballMatches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FootballMatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FootballMatches
     * const footballMatches = await prisma.footballMatch.findMany()
     * 
     * // Get first 10 FootballMatches
     * const footballMatches = await prisma.footballMatch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const footballMatchWithIdOnly = await prisma.footballMatch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FootballMatchFindManyArgs>(args?: SelectSubset<T, FootballMatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FootballMatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FootballMatch.
     * @param {FootballMatchCreateArgs} args - Arguments to create a FootballMatch.
     * @example
     * // Create one FootballMatch
     * const FootballMatch = await prisma.footballMatch.create({
     *   data: {
     *     // ... data to create a FootballMatch
     *   }
     * })
     * 
     */
    create<T extends FootballMatchCreateArgs>(args: SelectSubset<T, FootballMatchCreateArgs<ExtArgs>>): Prisma__FootballMatchClient<$Result.GetResult<Prisma.$FootballMatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FootballMatches.
     * @param {FootballMatchCreateManyArgs} args - Arguments to create many FootballMatches.
     * @example
     * // Create many FootballMatches
     * const footballMatch = await prisma.footballMatch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FootballMatchCreateManyArgs>(args?: SelectSubset<T, FootballMatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FootballMatch.
     * @param {FootballMatchDeleteArgs} args - Arguments to delete one FootballMatch.
     * @example
     * // Delete one FootballMatch
     * const FootballMatch = await prisma.footballMatch.delete({
     *   where: {
     *     // ... filter to delete one FootballMatch
     *   }
     * })
     * 
     */
    delete<T extends FootballMatchDeleteArgs>(args: SelectSubset<T, FootballMatchDeleteArgs<ExtArgs>>): Prisma__FootballMatchClient<$Result.GetResult<Prisma.$FootballMatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FootballMatch.
     * @param {FootballMatchUpdateArgs} args - Arguments to update one FootballMatch.
     * @example
     * // Update one FootballMatch
     * const footballMatch = await prisma.footballMatch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FootballMatchUpdateArgs>(args: SelectSubset<T, FootballMatchUpdateArgs<ExtArgs>>): Prisma__FootballMatchClient<$Result.GetResult<Prisma.$FootballMatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FootballMatches.
     * @param {FootballMatchDeleteManyArgs} args - Arguments to filter FootballMatches to delete.
     * @example
     * // Delete a few FootballMatches
     * const { count } = await prisma.footballMatch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FootballMatchDeleteManyArgs>(args?: SelectSubset<T, FootballMatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FootballMatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FootballMatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FootballMatches
     * const footballMatch = await prisma.footballMatch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FootballMatchUpdateManyArgs>(args: SelectSubset<T, FootballMatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FootballMatch.
     * @param {FootballMatchUpsertArgs} args - Arguments to update or create a FootballMatch.
     * @example
     * // Update or create a FootballMatch
     * const footballMatch = await prisma.footballMatch.upsert({
     *   create: {
     *     // ... data to create a FootballMatch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FootballMatch we want to update
     *   }
     * })
     */
    upsert<T extends FootballMatchUpsertArgs>(args: SelectSubset<T, FootballMatchUpsertArgs<ExtArgs>>): Prisma__FootballMatchClient<$Result.GetResult<Prisma.$FootballMatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FootballMatches that matches the filter.
     * @param {FootballMatchFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const footballMatch = await prisma.footballMatch.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: FootballMatchFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a FootballMatch.
     * @param {FootballMatchAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const footballMatch = await prisma.footballMatch.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: FootballMatchAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of FootballMatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FootballMatchCountArgs} args - Arguments to filter FootballMatches to count.
     * @example
     * // Count the number of FootballMatches
     * const count = await prisma.footballMatch.count({
     *   where: {
     *     // ... the filter for the FootballMatches we want to count
     *   }
     * })
    **/
    count<T extends FootballMatchCountArgs>(
      args?: Subset<T, FootballMatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FootballMatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FootballMatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FootballMatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FootballMatchAggregateArgs>(args: Subset<T, FootballMatchAggregateArgs>): Prisma.PrismaPromise<GetFootballMatchAggregateType<T>>

    /**
     * Group by FootballMatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FootballMatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FootballMatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FootballMatchGroupByArgs['orderBy'] }
        : { orderBy?: FootballMatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FootballMatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFootballMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FootballMatch model
   */
  readonly fields: FootballMatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FootballMatch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FootballMatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FootballMatch model
   */
  interface FootballMatchFieldRefs {
    readonly id: FieldRef<"FootballMatch", 'String'>
    readonly fixtureId: FieldRef<"FootballMatch", 'Int'>
    readonly homeTeam: FieldRef<"FootballMatch", 'String'>
    readonly awayTeam: FieldRef<"FootballMatch", 'String'>
    readonly homeTeamId: FieldRef<"FootballMatch", 'Int'>
    readonly awayTeamId: FieldRef<"FootballMatch", 'Int'>
    readonly homeScore: FieldRef<"FootballMatch", 'Int'>
    readonly awayScore: FieldRef<"FootballMatch", 'Int'>
    readonly status: FieldRef<"FootballMatch", 'String'>
    readonly matchDate: FieldRef<"FootballMatch", 'DateTime'>
    readonly league: FieldRef<"FootballMatch", 'String'>
    readonly leagueId: FieldRef<"FootballMatch", 'Int'>
    readonly season: FieldRef<"FootballMatch", 'Int'>
    readonly venue: FieldRef<"FootballMatch", 'String'>
    readonly lastUpdated: FieldRef<"FootballMatch", 'DateTime'>
    readonly createdAt: FieldRef<"FootballMatch", 'DateTime'>
    readonly metadata: FieldRef<"FootballMatch", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * FootballMatch findUnique
   */
  export type FootballMatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FootballMatch
     */
    select?: FootballMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FootballMatch
     */
    omit?: FootballMatchOmit<ExtArgs> | null
    /**
     * Filter, which FootballMatch to fetch.
     */
    where: FootballMatchWhereUniqueInput
  }

  /**
   * FootballMatch findUniqueOrThrow
   */
  export type FootballMatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FootballMatch
     */
    select?: FootballMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FootballMatch
     */
    omit?: FootballMatchOmit<ExtArgs> | null
    /**
     * Filter, which FootballMatch to fetch.
     */
    where: FootballMatchWhereUniqueInput
  }

  /**
   * FootballMatch findFirst
   */
  export type FootballMatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FootballMatch
     */
    select?: FootballMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FootballMatch
     */
    omit?: FootballMatchOmit<ExtArgs> | null
    /**
     * Filter, which FootballMatch to fetch.
     */
    where?: FootballMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FootballMatches to fetch.
     */
    orderBy?: FootballMatchOrderByWithRelationInput | FootballMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FootballMatches.
     */
    cursor?: FootballMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FootballMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FootballMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FootballMatches.
     */
    distinct?: FootballMatchScalarFieldEnum | FootballMatchScalarFieldEnum[]
  }

  /**
   * FootballMatch findFirstOrThrow
   */
  export type FootballMatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FootballMatch
     */
    select?: FootballMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FootballMatch
     */
    omit?: FootballMatchOmit<ExtArgs> | null
    /**
     * Filter, which FootballMatch to fetch.
     */
    where?: FootballMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FootballMatches to fetch.
     */
    orderBy?: FootballMatchOrderByWithRelationInput | FootballMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FootballMatches.
     */
    cursor?: FootballMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FootballMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FootballMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FootballMatches.
     */
    distinct?: FootballMatchScalarFieldEnum | FootballMatchScalarFieldEnum[]
  }

  /**
   * FootballMatch findMany
   */
  export type FootballMatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FootballMatch
     */
    select?: FootballMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FootballMatch
     */
    omit?: FootballMatchOmit<ExtArgs> | null
    /**
     * Filter, which FootballMatches to fetch.
     */
    where?: FootballMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FootballMatches to fetch.
     */
    orderBy?: FootballMatchOrderByWithRelationInput | FootballMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FootballMatches.
     */
    cursor?: FootballMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FootballMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FootballMatches.
     */
    skip?: number
    distinct?: FootballMatchScalarFieldEnum | FootballMatchScalarFieldEnum[]
  }

  /**
   * FootballMatch create
   */
  export type FootballMatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FootballMatch
     */
    select?: FootballMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FootballMatch
     */
    omit?: FootballMatchOmit<ExtArgs> | null
    /**
     * The data needed to create a FootballMatch.
     */
    data: XOR<FootballMatchCreateInput, FootballMatchUncheckedCreateInput>
  }

  /**
   * FootballMatch createMany
   */
  export type FootballMatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FootballMatches.
     */
    data: FootballMatchCreateManyInput | FootballMatchCreateManyInput[]
  }

  /**
   * FootballMatch update
   */
  export type FootballMatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FootballMatch
     */
    select?: FootballMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FootballMatch
     */
    omit?: FootballMatchOmit<ExtArgs> | null
    /**
     * The data needed to update a FootballMatch.
     */
    data: XOR<FootballMatchUpdateInput, FootballMatchUncheckedUpdateInput>
    /**
     * Choose, which FootballMatch to update.
     */
    where: FootballMatchWhereUniqueInput
  }

  /**
   * FootballMatch updateMany
   */
  export type FootballMatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FootballMatches.
     */
    data: XOR<FootballMatchUpdateManyMutationInput, FootballMatchUncheckedUpdateManyInput>
    /**
     * Filter which FootballMatches to update
     */
    where?: FootballMatchWhereInput
    /**
     * Limit how many FootballMatches to update.
     */
    limit?: number
  }

  /**
   * FootballMatch upsert
   */
  export type FootballMatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FootballMatch
     */
    select?: FootballMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FootballMatch
     */
    omit?: FootballMatchOmit<ExtArgs> | null
    /**
     * The filter to search for the FootballMatch to update in case it exists.
     */
    where: FootballMatchWhereUniqueInput
    /**
     * In case the FootballMatch found by the `where` argument doesn't exist, create a new FootballMatch with this data.
     */
    create: XOR<FootballMatchCreateInput, FootballMatchUncheckedCreateInput>
    /**
     * In case the FootballMatch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FootballMatchUpdateInput, FootballMatchUncheckedUpdateInput>
  }

  /**
   * FootballMatch delete
   */
  export type FootballMatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FootballMatch
     */
    select?: FootballMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FootballMatch
     */
    omit?: FootballMatchOmit<ExtArgs> | null
    /**
     * Filter which FootballMatch to delete.
     */
    where: FootballMatchWhereUniqueInput
  }

  /**
   * FootballMatch deleteMany
   */
  export type FootballMatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FootballMatches to delete
     */
    where?: FootballMatchWhereInput
    /**
     * Limit how many FootballMatches to delete.
     */
    limit?: number
  }

  /**
   * FootballMatch findRaw
   */
  export type FootballMatchFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * FootballMatch aggregateRaw
   */
  export type FootballMatchAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * FootballMatch without action
   */
  export type FootballMatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FootballMatch
     */
    select?: FootballMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FootballMatch
     */
    omit?: FootballMatchOmit<ExtArgs> | null
  }


  /**
   * Model Bet
   */

  export type AggregateBet = {
    _count: BetCountAggregateOutputType | null
    _avg: BetAvgAggregateOutputType | null
    _sum: BetSumAggregateOutputType | null
    _min: BetMinAggregateOutputType | null
    _max: BetMaxAggregateOutputType | null
  }

  export type BetAvgAggregateOutputType = {
    fixtureId: number | null
    amount: number | null
    odds: number | null
    potentialWin: number | null
  }

  export type BetSumAggregateOutputType = {
    fixtureId: number | null
    amount: number | null
    odds: number | null
    potentialWin: number | null
  }

  export type BetMinAggregateOutputType = {
    id: string | null
    userId: string | null
    fixtureId: number | null
    prediction: string | null
    betType: string | null
    amount: number | null
    odds: number | null
    potentialWin: number | null
    status: string | null
    settledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BetMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    fixtureId: number | null
    prediction: string | null
    betType: string | null
    amount: number | null
    odds: number | null
    potentialWin: number | null
    status: string | null
    settledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BetCountAggregateOutputType = {
    id: number
    userId: number
    fixtureId: number
    prediction: number
    betType: number
    amount: number
    odds: number
    potentialWin: number
    status: number
    settledAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BetAvgAggregateInputType = {
    fixtureId?: true
    amount?: true
    odds?: true
    potentialWin?: true
  }

  export type BetSumAggregateInputType = {
    fixtureId?: true
    amount?: true
    odds?: true
    potentialWin?: true
  }

  export type BetMinAggregateInputType = {
    id?: true
    userId?: true
    fixtureId?: true
    prediction?: true
    betType?: true
    amount?: true
    odds?: true
    potentialWin?: true
    status?: true
    settledAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BetMaxAggregateInputType = {
    id?: true
    userId?: true
    fixtureId?: true
    prediction?: true
    betType?: true
    amount?: true
    odds?: true
    potentialWin?: true
    status?: true
    settledAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BetCountAggregateInputType = {
    id?: true
    userId?: true
    fixtureId?: true
    prediction?: true
    betType?: true
    amount?: true
    odds?: true
    potentialWin?: true
    status?: true
    settledAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bet to aggregate.
     */
    where?: BetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bets to fetch.
     */
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bets
    **/
    _count?: true | BetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BetMaxAggregateInputType
  }

  export type GetBetAggregateType<T extends BetAggregateArgs> = {
        [P in keyof T & keyof AggregateBet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBet[P]>
      : GetScalarType<T[P], AggregateBet[P]>
  }




  export type BetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BetWhereInput
    orderBy?: BetOrderByWithAggregationInput | BetOrderByWithAggregationInput[]
    by: BetScalarFieldEnum[] | BetScalarFieldEnum
    having?: BetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BetCountAggregateInputType | true
    _avg?: BetAvgAggregateInputType
    _sum?: BetSumAggregateInputType
    _min?: BetMinAggregateInputType
    _max?: BetMaxAggregateInputType
  }

  export type BetGroupByOutputType = {
    id: string
    userId: string
    fixtureId: number
    prediction: string
    betType: string
    amount: number
    odds: number
    potentialWin: number
    status: string
    settledAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: BetCountAggregateOutputType | null
    _avg: BetAvgAggregateOutputType | null
    _sum: BetSumAggregateOutputType | null
    _min: BetMinAggregateOutputType | null
    _max: BetMaxAggregateOutputType | null
  }

  type GetBetGroupByPayload<T extends BetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BetGroupByOutputType[P]>
            : GetScalarType<T[P], BetGroupByOutputType[P]>
        }
      >
    >


  export type BetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fixtureId?: boolean
    prediction?: boolean
    betType?: boolean
    amount?: boolean
    odds?: boolean
    potentialWin?: boolean
    status?: boolean
    settledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bet"]>



  export type BetSelectScalar = {
    id?: boolean
    userId?: boolean
    fixtureId?: boolean
    prediction?: boolean
    betType?: boolean
    amount?: boolean
    odds?: boolean
    potentialWin?: boolean
    status?: boolean
    settledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "fixtureId" | "prediction" | "betType" | "amount" | "odds" | "potentialWin" | "status" | "settledAt" | "createdAt" | "updatedAt", ExtArgs["result"]["bet"]>

  export type $BetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bet"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      fixtureId: number
      prediction: string
      betType: string
      amount: number
      odds: number
      potentialWin: number
      status: string
      settledAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bet"]>
    composites: {}
  }

  type BetGetPayload<S extends boolean | null | undefined | BetDefaultArgs> = $Result.GetResult<Prisma.$BetPayload, S>

  type BetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BetCountAggregateInputType | true
    }

  export interface BetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bet'], meta: { name: 'Bet' } }
    /**
     * Find zero or one Bet that matches the filter.
     * @param {BetFindUniqueArgs} args - Arguments to find a Bet
     * @example
     * // Get one Bet
     * const bet = await prisma.bet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BetFindUniqueArgs>(args: SelectSubset<T, BetFindUniqueArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BetFindUniqueOrThrowArgs} args - Arguments to find a Bet
     * @example
     * // Get one Bet
     * const bet = await prisma.bet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BetFindUniqueOrThrowArgs>(args: SelectSubset<T, BetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetFindFirstArgs} args - Arguments to find a Bet
     * @example
     * // Get one Bet
     * const bet = await prisma.bet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BetFindFirstArgs>(args?: SelectSubset<T, BetFindFirstArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetFindFirstOrThrowArgs} args - Arguments to find a Bet
     * @example
     * // Get one Bet
     * const bet = await prisma.bet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BetFindFirstOrThrowArgs>(args?: SelectSubset<T, BetFindFirstOrThrowArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bets
     * const bets = await prisma.bet.findMany()
     * 
     * // Get first 10 Bets
     * const bets = await prisma.bet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const betWithIdOnly = await prisma.bet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BetFindManyArgs>(args?: SelectSubset<T, BetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bet.
     * @param {BetCreateArgs} args - Arguments to create a Bet.
     * @example
     * // Create one Bet
     * const Bet = await prisma.bet.create({
     *   data: {
     *     // ... data to create a Bet
     *   }
     * })
     * 
     */
    create<T extends BetCreateArgs>(args: SelectSubset<T, BetCreateArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bets.
     * @param {BetCreateManyArgs} args - Arguments to create many Bets.
     * @example
     * // Create many Bets
     * const bet = await prisma.bet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BetCreateManyArgs>(args?: SelectSubset<T, BetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bet.
     * @param {BetDeleteArgs} args - Arguments to delete one Bet.
     * @example
     * // Delete one Bet
     * const Bet = await prisma.bet.delete({
     *   where: {
     *     // ... filter to delete one Bet
     *   }
     * })
     * 
     */
    delete<T extends BetDeleteArgs>(args: SelectSubset<T, BetDeleteArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bet.
     * @param {BetUpdateArgs} args - Arguments to update one Bet.
     * @example
     * // Update one Bet
     * const bet = await prisma.bet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BetUpdateArgs>(args: SelectSubset<T, BetUpdateArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bets.
     * @param {BetDeleteManyArgs} args - Arguments to filter Bets to delete.
     * @example
     * // Delete a few Bets
     * const { count } = await prisma.bet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BetDeleteManyArgs>(args?: SelectSubset<T, BetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bets
     * const bet = await prisma.bet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BetUpdateManyArgs>(args: SelectSubset<T, BetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bet.
     * @param {BetUpsertArgs} args - Arguments to update or create a Bet.
     * @example
     * // Update or create a Bet
     * const bet = await prisma.bet.upsert({
     *   create: {
     *     // ... data to create a Bet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bet we want to update
     *   }
     * })
     */
    upsert<T extends BetUpsertArgs>(args: SelectSubset<T, BetUpsertArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bets that matches the filter.
     * @param {BetFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const bet = await prisma.bet.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: BetFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Bet.
     * @param {BetAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const bet = await prisma.bet.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: BetAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Bets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetCountArgs} args - Arguments to filter Bets to count.
     * @example
     * // Count the number of Bets
     * const count = await prisma.bet.count({
     *   where: {
     *     // ... the filter for the Bets we want to count
     *   }
     * })
    **/
    count<T extends BetCountArgs>(
      args?: Subset<T, BetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BetAggregateArgs>(args: Subset<T, BetAggregateArgs>): Prisma.PrismaPromise<GetBetAggregateType<T>>

    /**
     * Group by Bet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BetGroupByArgs['orderBy'] }
        : { orderBy?: BetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bet model
   */
  readonly fields: BetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bet model
   */
  interface BetFieldRefs {
    readonly id: FieldRef<"Bet", 'String'>
    readonly userId: FieldRef<"Bet", 'String'>
    readonly fixtureId: FieldRef<"Bet", 'Int'>
    readonly prediction: FieldRef<"Bet", 'String'>
    readonly betType: FieldRef<"Bet", 'String'>
    readonly amount: FieldRef<"Bet", 'Float'>
    readonly odds: FieldRef<"Bet", 'Float'>
    readonly potentialWin: FieldRef<"Bet", 'Float'>
    readonly status: FieldRef<"Bet", 'String'>
    readonly settledAt: FieldRef<"Bet", 'DateTime'>
    readonly createdAt: FieldRef<"Bet", 'DateTime'>
    readonly updatedAt: FieldRef<"Bet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bet findUnique
   */
  export type BetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Filter, which Bet to fetch.
     */
    where: BetWhereUniqueInput
  }

  /**
   * Bet findUniqueOrThrow
   */
  export type BetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Filter, which Bet to fetch.
     */
    where: BetWhereUniqueInput
  }

  /**
   * Bet findFirst
   */
  export type BetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Filter, which Bet to fetch.
     */
    where?: BetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bets to fetch.
     */
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bets.
     */
    cursor?: BetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bets.
     */
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * Bet findFirstOrThrow
   */
  export type BetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Filter, which Bet to fetch.
     */
    where?: BetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bets to fetch.
     */
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bets.
     */
    cursor?: BetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bets.
     */
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * Bet findMany
   */
  export type BetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Filter, which Bets to fetch.
     */
    where?: BetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bets to fetch.
     */
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bets.
     */
    cursor?: BetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bets.
     */
    skip?: number
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * Bet create
   */
  export type BetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * The data needed to create a Bet.
     */
    data: XOR<BetCreateInput, BetUncheckedCreateInput>
  }

  /**
   * Bet createMany
   */
  export type BetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bets.
     */
    data: BetCreateManyInput | BetCreateManyInput[]
  }

  /**
   * Bet update
   */
  export type BetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * The data needed to update a Bet.
     */
    data: XOR<BetUpdateInput, BetUncheckedUpdateInput>
    /**
     * Choose, which Bet to update.
     */
    where: BetWhereUniqueInput
  }

  /**
   * Bet updateMany
   */
  export type BetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bets.
     */
    data: XOR<BetUpdateManyMutationInput, BetUncheckedUpdateManyInput>
    /**
     * Filter which Bets to update
     */
    where?: BetWhereInput
    /**
     * Limit how many Bets to update.
     */
    limit?: number
  }

  /**
   * Bet upsert
   */
  export type BetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * The filter to search for the Bet to update in case it exists.
     */
    where: BetWhereUniqueInput
    /**
     * In case the Bet found by the `where` argument doesn't exist, create a new Bet with this data.
     */
    create: XOR<BetCreateInput, BetUncheckedCreateInput>
    /**
     * In case the Bet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BetUpdateInput, BetUncheckedUpdateInput>
  }

  /**
   * Bet delete
   */
  export type BetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Filter which Bet to delete.
     */
    where: BetWhereUniqueInput
  }

  /**
   * Bet deleteMany
   */
  export type BetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bets to delete
     */
    where?: BetWhereInput
    /**
     * Limit how many Bets to delete.
     */
    limit?: number
  }

  /**
   * Bet findRaw
   */
  export type BetFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Bet aggregateRaw
   */
  export type BetAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Bet without action
   */
  export type BetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserProfileScalarFieldEnum: {
    id: 'id',
    user: 'user',
    name: 'name',
    username: 'username',
    description: 'description',
    image: 'image',
    provider: 'provider',
    providerId: 'providerId',
    email: 'email',
    walletAddress: 'walletAddress',
    createdAt: 'createdAt',
    timestamp: 'timestamp',
    lastUpdated: 'lastUpdated',
    metadata: 'metadata'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const ContractUserScalarFieldEnum: {
    id: 'id',
    walletAddress: 'walletAddress',
    contractData: 'contractData',
    syncedToBackend: 'syncedToBackend',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContractUserScalarFieldEnum = (typeof ContractUserScalarFieldEnum)[keyof typeof ContractUserScalarFieldEnum]


  export const GameResultScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    status: 'status',
    outcome: 'outcome',
    winner: 'winner',
    loser: 'loser',
    score: 'score',
    provider: 'provider',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GameResultScalarFieldEnum = (typeof GameResultScalarFieldEnum)[keyof typeof GameResultScalarFieldEnum]


  export const FootballMatchScalarFieldEnum: {
    id: 'id',
    fixtureId: 'fixtureId',
    homeTeam: 'homeTeam',
    awayTeam: 'awayTeam',
    homeTeamId: 'homeTeamId',
    awayTeamId: 'awayTeamId',
    homeScore: 'homeScore',
    awayScore: 'awayScore',
    status: 'status',
    matchDate: 'matchDate',
    league: 'league',
    leagueId: 'leagueId',
    season: 'season',
    venue: 'venue',
    lastUpdated: 'lastUpdated',
    createdAt: 'createdAt',
    metadata: 'metadata'
  };

  export type FootballMatchScalarFieldEnum = (typeof FootballMatchScalarFieldEnum)[keyof typeof FootballMatchScalarFieldEnum]


  export const BetScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fixtureId: 'fixtureId',
    prediction: 'prediction',
    betType: 'betType',
    amount: 'amount',
    odds: 'odds',
    potentialWin: 'potentialWin',
    status: 'status',
    settledAt: 'settledAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BetScalarFieldEnum = (typeof BetScalarFieldEnum)[keyof typeof BetScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'LoginProvider'
   */
  export type EnumLoginProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LoginProvider'>
    


  /**
   * Reference to a field of type 'LoginProvider[]'
   */
  export type ListEnumLoginProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LoginProvider[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'GameStatus'
   */
  export type EnumGameStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameStatus'>
    


  /**
   * Reference to a field of type 'GameStatus[]'
   */
  export type ListEnumGameStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameStatus[]'>
    


  /**
   * Reference to a field of type 'GameOutcome'
   */
  export type EnumGameOutcomeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameOutcome'>
    


  /**
   * Reference to a field of type 'GameOutcome[]'
   */
  export type ListEnumGameOutcomeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameOutcome[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: StringFilter<"UserProfile"> | string
    user?: StringFilter<"UserProfile"> | string
    name?: StringFilter<"UserProfile"> | string
    username?: StringFilter<"UserProfile"> | string
    description?: StringNullableFilter<"UserProfile"> | string | null
    image?: StringNullableFilter<"UserProfile"> | string | null
    provider?: EnumLoginProviderFilter<"UserProfile"> | $Enums.LoginProvider
    providerId?: StringNullableFilter<"UserProfile"> | string | null
    email?: StringNullableFilter<"UserProfile"> | string | null
    walletAddress?: StringNullableFilter<"UserProfile"> | string | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    timestamp?: DateTimeFilter<"UserProfile"> | Date | string
    lastUpdated?: DateTimeFilter<"UserProfile"> | Date | string
    metadata?: JsonNullableFilter<"UserProfile">
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    user?: SortOrder
    name?: SortOrder
    username?: SortOrder
    description?: SortOrder
    image?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    email?: SortOrder
    walletAddress?: SortOrder
    createdAt?: SortOrder
    timestamp?: SortOrder
    lastUpdated?: SortOrder
    metadata?: SortOrder
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user?: string
    username?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    name?: StringFilter<"UserProfile"> | string
    description?: StringNullableFilter<"UserProfile"> | string | null
    image?: StringNullableFilter<"UserProfile"> | string | null
    provider?: EnumLoginProviderFilter<"UserProfile"> | $Enums.LoginProvider
    providerId?: StringNullableFilter<"UserProfile"> | string | null
    email?: StringNullableFilter<"UserProfile"> | string | null
    walletAddress?: StringNullableFilter<"UserProfile"> | string | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    timestamp?: DateTimeFilter<"UserProfile"> | Date | string
    lastUpdated?: DateTimeFilter<"UserProfile"> | Date | string
    metadata?: JsonNullableFilter<"UserProfile">
  }, "id" | "user" | "username">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    user?: SortOrder
    name?: SortOrder
    username?: SortOrder
    description?: SortOrder
    image?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    email?: SortOrder
    walletAddress?: SortOrder
    createdAt?: SortOrder
    timestamp?: SortOrder
    lastUpdated?: SortOrder
    metadata?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProfile"> | string
    user?: StringWithAggregatesFilter<"UserProfile"> | string
    name?: StringWithAggregatesFilter<"UserProfile"> | string
    username?: StringWithAggregatesFilter<"UserProfile"> | string
    description?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    image?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    provider?: EnumLoginProviderWithAggregatesFilter<"UserProfile"> | $Enums.LoginProvider
    providerId?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    email?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    walletAddress?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    timestamp?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    lastUpdated?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"UserProfile">
  }

  export type ContractUserWhereInput = {
    AND?: ContractUserWhereInput | ContractUserWhereInput[]
    OR?: ContractUserWhereInput[]
    NOT?: ContractUserWhereInput | ContractUserWhereInput[]
    id?: StringFilter<"ContractUser"> | string
    walletAddress?: StringFilter<"ContractUser"> | string
    contractData?: JsonFilter<"ContractUser">
    syncedToBackend?: BoolFilter<"ContractUser"> | boolean
    createdAt?: DateTimeFilter<"ContractUser"> | Date | string
    updatedAt?: DateTimeFilter<"ContractUser"> | Date | string
  }

  export type ContractUserOrderByWithRelationInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    contractData?: SortOrder
    syncedToBackend?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    walletAddress?: string
    AND?: ContractUserWhereInput | ContractUserWhereInput[]
    OR?: ContractUserWhereInput[]
    NOT?: ContractUserWhereInput | ContractUserWhereInput[]
    contractData?: JsonFilter<"ContractUser">
    syncedToBackend?: BoolFilter<"ContractUser"> | boolean
    createdAt?: DateTimeFilter<"ContractUser"> | Date | string
    updatedAt?: DateTimeFilter<"ContractUser"> | Date | string
  }, "id" | "walletAddress">

  export type ContractUserOrderByWithAggregationInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    contractData?: SortOrder
    syncedToBackend?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContractUserCountOrderByAggregateInput
    _max?: ContractUserMaxOrderByAggregateInput
    _min?: ContractUserMinOrderByAggregateInput
  }

  export type ContractUserScalarWhereWithAggregatesInput = {
    AND?: ContractUserScalarWhereWithAggregatesInput | ContractUserScalarWhereWithAggregatesInput[]
    OR?: ContractUserScalarWhereWithAggregatesInput[]
    NOT?: ContractUserScalarWhereWithAggregatesInput | ContractUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContractUser"> | string
    walletAddress?: StringWithAggregatesFilter<"ContractUser"> | string
    contractData?: JsonWithAggregatesFilter<"ContractUser">
    syncedToBackend?: BoolWithAggregatesFilter<"ContractUser"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ContractUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContractUser"> | Date | string
  }

  export type GameResultWhereInput = {
    AND?: GameResultWhereInput | GameResultWhereInput[]
    OR?: GameResultWhereInput[]
    NOT?: GameResultWhereInput | GameResultWhereInput[]
    id?: StringFilter<"GameResult"> | string
    gameId?: StringFilter<"GameResult"> | string
    status?: EnumGameStatusFilter<"GameResult"> | $Enums.GameStatus
    outcome?: EnumGameOutcomeFilter<"GameResult"> | $Enums.GameOutcome
    winner?: StringNullableFilter<"GameResult"> | string | null
    loser?: StringNullableFilter<"GameResult"> | string | null
    score?: JsonNullableFilter<"GameResult">
    provider?: StringFilter<"GameResult"> | string
    createdAt?: DateTimeFilter<"GameResult"> | Date | string
    updatedAt?: DateTimeFilter<"GameResult"> | Date | string
  }

  export type GameResultOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    status?: SortOrder
    outcome?: SortOrder
    winner?: SortOrder
    loser?: SortOrder
    score?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    gameId?: string
    AND?: GameResultWhereInput | GameResultWhereInput[]
    OR?: GameResultWhereInput[]
    NOT?: GameResultWhereInput | GameResultWhereInput[]
    status?: EnumGameStatusFilter<"GameResult"> | $Enums.GameStatus
    outcome?: EnumGameOutcomeFilter<"GameResult"> | $Enums.GameOutcome
    winner?: StringNullableFilter<"GameResult"> | string | null
    loser?: StringNullableFilter<"GameResult"> | string | null
    score?: JsonNullableFilter<"GameResult">
    provider?: StringFilter<"GameResult"> | string
    createdAt?: DateTimeFilter<"GameResult"> | Date | string
    updatedAt?: DateTimeFilter<"GameResult"> | Date | string
  }, "id" | "gameId">

  export type GameResultOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    status?: SortOrder
    outcome?: SortOrder
    winner?: SortOrder
    loser?: SortOrder
    score?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GameResultCountOrderByAggregateInput
    _max?: GameResultMaxOrderByAggregateInput
    _min?: GameResultMinOrderByAggregateInput
  }

  export type GameResultScalarWhereWithAggregatesInput = {
    AND?: GameResultScalarWhereWithAggregatesInput | GameResultScalarWhereWithAggregatesInput[]
    OR?: GameResultScalarWhereWithAggregatesInput[]
    NOT?: GameResultScalarWhereWithAggregatesInput | GameResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GameResult"> | string
    gameId?: StringWithAggregatesFilter<"GameResult"> | string
    status?: EnumGameStatusWithAggregatesFilter<"GameResult"> | $Enums.GameStatus
    outcome?: EnumGameOutcomeWithAggregatesFilter<"GameResult"> | $Enums.GameOutcome
    winner?: StringNullableWithAggregatesFilter<"GameResult"> | string | null
    loser?: StringNullableWithAggregatesFilter<"GameResult"> | string | null
    score?: JsonNullableWithAggregatesFilter<"GameResult">
    provider?: StringWithAggregatesFilter<"GameResult"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GameResult"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GameResult"> | Date | string
  }

  export type FootballMatchWhereInput = {
    AND?: FootballMatchWhereInput | FootballMatchWhereInput[]
    OR?: FootballMatchWhereInput[]
    NOT?: FootballMatchWhereInput | FootballMatchWhereInput[]
    id?: StringFilter<"FootballMatch"> | string
    fixtureId?: IntFilter<"FootballMatch"> | number
    homeTeam?: StringFilter<"FootballMatch"> | string
    awayTeam?: StringFilter<"FootballMatch"> | string
    homeTeamId?: IntFilter<"FootballMatch"> | number
    awayTeamId?: IntFilter<"FootballMatch"> | number
    homeScore?: IntNullableFilter<"FootballMatch"> | number | null
    awayScore?: IntNullableFilter<"FootballMatch"> | number | null
    status?: StringFilter<"FootballMatch"> | string
    matchDate?: DateTimeFilter<"FootballMatch"> | Date | string
    league?: StringFilter<"FootballMatch"> | string
    leagueId?: IntFilter<"FootballMatch"> | number
    season?: IntFilter<"FootballMatch"> | number
    venue?: StringNullableFilter<"FootballMatch"> | string | null
    lastUpdated?: DateTimeFilter<"FootballMatch"> | Date | string
    createdAt?: DateTimeFilter<"FootballMatch"> | Date | string
    metadata?: JsonNullableFilter<"FootballMatch">
  }

  export type FootballMatchOrderByWithRelationInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    status?: SortOrder
    matchDate?: SortOrder
    league?: SortOrder
    leagueId?: SortOrder
    season?: SortOrder
    venue?: SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
    metadata?: SortOrder
  }

  export type FootballMatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fixtureId?: number
    AND?: FootballMatchWhereInput | FootballMatchWhereInput[]
    OR?: FootballMatchWhereInput[]
    NOT?: FootballMatchWhereInput | FootballMatchWhereInput[]
    homeTeam?: StringFilter<"FootballMatch"> | string
    awayTeam?: StringFilter<"FootballMatch"> | string
    homeTeamId?: IntFilter<"FootballMatch"> | number
    awayTeamId?: IntFilter<"FootballMatch"> | number
    homeScore?: IntNullableFilter<"FootballMatch"> | number | null
    awayScore?: IntNullableFilter<"FootballMatch"> | number | null
    status?: StringFilter<"FootballMatch"> | string
    matchDate?: DateTimeFilter<"FootballMatch"> | Date | string
    league?: StringFilter<"FootballMatch"> | string
    leagueId?: IntFilter<"FootballMatch"> | number
    season?: IntFilter<"FootballMatch"> | number
    venue?: StringNullableFilter<"FootballMatch"> | string | null
    lastUpdated?: DateTimeFilter<"FootballMatch"> | Date | string
    createdAt?: DateTimeFilter<"FootballMatch"> | Date | string
    metadata?: JsonNullableFilter<"FootballMatch">
  }, "id" | "fixtureId">

  export type FootballMatchOrderByWithAggregationInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    status?: SortOrder
    matchDate?: SortOrder
    league?: SortOrder
    leagueId?: SortOrder
    season?: SortOrder
    venue?: SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
    metadata?: SortOrder
    _count?: FootballMatchCountOrderByAggregateInput
    _avg?: FootballMatchAvgOrderByAggregateInput
    _max?: FootballMatchMaxOrderByAggregateInput
    _min?: FootballMatchMinOrderByAggregateInput
    _sum?: FootballMatchSumOrderByAggregateInput
  }

  export type FootballMatchScalarWhereWithAggregatesInput = {
    AND?: FootballMatchScalarWhereWithAggregatesInput | FootballMatchScalarWhereWithAggregatesInput[]
    OR?: FootballMatchScalarWhereWithAggregatesInput[]
    NOT?: FootballMatchScalarWhereWithAggregatesInput | FootballMatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FootballMatch"> | string
    fixtureId?: IntWithAggregatesFilter<"FootballMatch"> | number
    homeTeam?: StringWithAggregatesFilter<"FootballMatch"> | string
    awayTeam?: StringWithAggregatesFilter<"FootballMatch"> | string
    homeTeamId?: IntWithAggregatesFilter<"FootballMatch"> | number
    awayTeamId?: IntWithAggregatesFilter<"FootballMatch"> | number
    homeScore?: IntNullableWithAggregatesFilter<"FootballMatch"> | number | null
    awayScore?: IntNullableWithAggregatesFilter<"FootballMatch"> | number | null
    status?: StringWithAggregatesFilter<"FootballMatch"> | string
    matchDate?: DateTimeWithAggregatesFilter<"FootballMatch"> | Date | string
    league?: StringWithAggregatesFilter<"FootballMatch"> | string
    leagueId?: IntWithAggregatesFilter<"FootballMatch"> | number
    season?: IntWithAggregatesFilter<"FootballMatch"> | number
    venue?: StringNullableWithAggregatesFilter<"FootballMatch"> | string | null
    lastUpdated?: DateTimeWithAggregatesFilter<"FootballMatch"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"FootballMatch"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"FootballMatch">
  }

  export type BetWhereInput = {
    AND?: BetWhereInput | BetWhereInput[]
    OR?: BetWhereInput[]
    NOT?: BetWhereInput | BetWhereInput[]
    id?: StringFilter<"Bet"> | string
    userId?: StringFilter<"Bet"> | string
    fixtureId?: IntFilter<"Bet"> | number
    prediction?: StringFilter<"Bet"> | string
    betType?: StringFilter<"Bet"> | string
    amount?: FloatFilter<"Bet"> | number
    odds?: FloatFilter<"Bet"> | number
    potentialWin?: FloatFilter<"Bet"> | number
    status?: StringFilter<"Bet"> | string
    settledAt?: DateTimeNullableFilter<"Bet"> | Date | string | null
    createdAt?: DateTimeFilter<"Bet"> | Date | string
    updatedAt?: DateTimeFilter<"Bet"> | Date | string
  }

  export type BetOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fixtureId?: SortOrder
    prediction?: SortOrder
    betType?: SortOrder
    amount?: SortOrder
    odds?: SortOrder
    potentialWin?: SortOrder
    status?: SortOrder
    settledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BetWhereInput | BetWhereInput[]
    OR?: BetWhereInput[]
    NOT?: BetWhereInput | BetWhereInput[]
    userId?: StringFilter<"Bet"> | string
    fixtureId?: IntFilter<"Bet"> | number
    prediction?: StringFilter<"Bet"> | string
    betType?: StringFilter<"Bet"> | string
    amount?: FloatFilter<"Bet"> | number
    odds?: FloatFilter<"Bet"> | number
    potentialWin?: FloatFilter<"Bet"> | number
    status?: StringFilter<"Bet"> | string
    settledAt?: DateTimeNullableFilter<"Bet"> | Date | string | null
    createdAt?: DateTimeFilter<"Bet"> | Date | string
    updatedAt?: DateTimeFilter<"Bet"> | Date | string
  }, "id">

  export type BetOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fixtureId?: SortOrder
    prediction?: SortOrder
    betType?: SortOrder
    amount?: SortOrder
    odds?: SortOrder
    potentialWin?: SortOrder
    status?: SortOrder
    settledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BetCountOrderByAggregateInput
    _avg?: BetAvgOrderByAggregateInput
    _max?: BetMaxOrderByAggregateInput
    _min?: BetMinOrderByAggregateInput
    _sum?: BetSumOrderByAggregateInput
  }

  export type BetScalarWhereWithAggregatesInput = {
    AND?: BetScalarWhereWithAggregatesInput | BetScalarWhereWithAggregatesInput[]
    OR?: BetScalarWhereWithAggregatesInput[]
    NOT?: BetScalarWhereWithAggregatesInput | BetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bet"> | string
    userId?: StringWithAggregatesFilter<"Bet"> | string
    fixtureId?: IntWithAggregatesFilter<"Bet"> | number
    prediction?: StringWithAggregatesFilter<"Bet"> | string
    betType?: StringWithAggregatesFilter<"Bet"> | string
    amount?: FloatWithAggregatesFilter<"Bet"> | number
    odds?: FloatWithAggregatesFilter<"Bet"> | number
    potentialWin?: FloatWithAggregatesFilter<"Bet"> | number
    status?: StringWithAggregatesFilter<"Bet"> | string
    settledAt?: DateTimeNullableWithAggregatesFilter<"Bet"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Bet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bet"> | Date | string
  }

  export type UserProfileCreateInput = {
    id?: string
    user: string
    name: string
    username: string
    description?: string | null
    image?: string | null
    provider?: $Enums.LoginProvider
    providerId?: string | null
    email?: string | null
    walletAddress?: string | null
    createdAt?: Date | string
    timestamp?: Date | string
    lastUpdated?: Date | string
    metadata?: InputJsonValue | null
  }

  export type UserProfileUncheckedCreateInput = {
    id?: string
    user: string
    name: string
    username: string
    description?: string | null
    image?: string | null
    provider?: $Enums.LoginProvider
    providerId?: string | null
    email?: string | null
    walletAddress?: string | null
    createdAt?: Date | string
    timestamp?: Date | string
    lastUpdated?: Date | string
    metadata?: InputJsonValue | null
  }

  export type UserProfileUpdateInput = {
    user?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumLoginProviderFieldUpdateOperationsInput | $Enums.LoginProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: InputJsonValue | InputJsonValue | null
  }

  export type UserProfileUncheckedUpdateInput = {
    user?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumLoginProviderFieldUpdateOperationsInput | $Enums.LoginProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: InputJsonValue | InputJsonValue | null
  }

  export type UserProfileCreateManyInput = {
    id?: string
    user: string
    name: string
    username: string
    description?: string | null
    image?: string | null
    provider?: $Enums.LoginProvider
    providerId?: string | null
    email?: string | null
    walletAddress?: string | null
    createdAt?: Date | string
    timestamp?: Date | string
    lastUpdated?: Date | string
    metadata?: InputJsonValue | null
  }

  export type UserProfileUpdateManyMutationInput = {
    user?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumLoginProviderFieldUpdateOperationsInput | $Enums.LoginProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: InputJsonValue | InputJsonValue | null
  }

  export type UserProfileUncheckedUpdateManyInput = {
    user?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumLoginProviderFieldUpdateOperationsInput | $Enums.LoginProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: InputJsonValue | InputJsonValue | null
  }

  export type ContractUserCreateInput = {
    id?: string
    walletAddress: string
    contractData: InputJsonValue
    syncedToBackend?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractUserUncheckedCreateInput = {
    id?: string
    walletAddress: string
    contractData: InputJsonValue
    syncedToBackend?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractUserUpdateInput = {
    walletAddress?: StringFieldUpdateOperationsInput | string
    contractData?: InputJsonValue | InputJsonValue
    syncedToBackend?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUserUncheckedUpdateInput = {
    walletAddress?: StringFieldUpdateOperationsInput | string
    contractData?: InputJsonValue | InputJsonValue
    syncedToBackend?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUserCreateManyInput = {
    id?: string
    walletAddress: string
    contractData: InputJsonValue
    syncedToBackend?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractUserUpdateManyMutationInput = {
    walletAddress?: StringFieldUpdateOperationsInput | string
    contractData?: InputJsonValue | InputJsonValue
    syncedToBackend?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUserUncheckedUpdateManyInput = {
    walletAddress?: StringFieldUpdateOperationsInput | string
    contractData?: InputJsonValue | InputJsonValue
    syncedToBackend?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameResultCreateInput = {
    id?: string
    gameId: string
    status: $Enums.GameStatus
    outcome: $Enums.GameOutcome
    winner?: string | null
    loser?: string | null
    score?: InputJsonValue | null
    provider: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameResultUncheckedCreateInput = {
    id?: string
    gameId: string
    status: $Enums.GameStatus
    outcome: $Enums.GameOutcome
    winner?: string | null
    loser?: string | null
    score?: InputJsonValue | null
    provider: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameResultUpdateInput = {
    gameId?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    outcome?: EnumGameOutcomeFieldUpdateOperationsInput | $Enums.GameOutcome
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    loser?: NullableStringFieldUpdateOperationsInput | string | null
    score?: InputJsonValue | InputJsonValue | null
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameResultUncheckedUpdateInput = {
    gameId?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    outcome?: EnumGameOutcomeFieldUpdateOperationsInput | $Enums.GameOutcome
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    loser?: NullableStringFieldUpdateOperationsInput | string | null
    score?: InputJsonValue | InputJsonValue | null
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameResultCreateManyInput = {
    id?: string
    gameId: string
    status: $Enums.GameStatus
    outcome: $Enums.GameOutcome
    winner?: string | null
    loser?: string | null
    score?: InputJsonValue | null
    provider: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameResultUpdateManyMutationInput = {
    gameId?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    outcome?: EnumGameOutcomeFieldUpdateOperationsInput | $Enums.GameOutcome
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    loser?: NullableStringFieldUpdateOperationsInput | string | null
    score?: InputJsonValue | InputJsonValue | null
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameResultUncheckedUpdateManyInput = {
    gameId?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    outcome?: EnumGameOutcomeFieldUpdateOperationsInput | $Enums.GameOutcome
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    loser?: NullableStringFieldUpdateOperationsInput | string | null
    score?: InputJsonValue | InputJsonValue | null
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FootballMatchCreateInput = {
    id?: string
    fixtureId: number
    homeTeam: string
    awayTeam: string
    homeTeamId: number
    awayTeamId: number
    homeScore?: number | null
    awayScore?: number | null
    status: string
    matchDate: Date | string
    league: string
    leagueId: number
    season: number
    venue?: string | null
    lastUpdated?: Date | string
    createdAt?: Date | string
    metadata?: InputJsonValue | null
  }

  export type FootballMatchUncheckedCreateInput = {
    id?: string
    fixtureId: number
    homeTeam: string
    awayTeam: string
    homeTeamId: number
    awayTeamId: number
    homeScore?: number | null
    awayScore?: number | null
    status: string
    matchDate: Date | string
    league: string
    leagueId: number
    season: number
    venue?: string | null
    lastUpdated?: Date | string
    createdAt?: Date | string
    metadata?: InputJsonValue | null
  }

  export type FootballMatchUpdateInput = {
    fixtureId?: IntFieldUpdateOperationsInput | number
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    homeTeamId?: IntFieldUpdateOperationsInput | number
    awayTeamId?: IntFieldUpdateOperationsInput | number
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    matchDate?: DateTimeFieldUpdateOperationsInput | Date | string
    league?: StringFieldUpdateOperationsInput | string
    leagueId?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: InputJsonValue | InputJsonValue | null
  }

  export type FootballMatchUncheckedUpdateInput = {
    fixtureId?: IntFieldUpdateOperationsInput | number
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    homeTeamId?: IntFieldUpdateOperationsInput | number
    awayTeamId?: IntFieldUpdateOperationsInput | number
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    matchDate?: DateTimeFieldUpdateOperationsInput | Date | string
    league?: StringFieldUpdateOperationsInput | string
    leagueId?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: InputJsonValue | InputJsonValue | null
  }

  export type FootballMatchCreateManyInput = {
    id?: string
    fixtureId: number
    homeTeam: string
    awayTeam: string
    homeTeamId: number
    awayTeamId: number
    homeScore?: number | null
    awayScore?: number | null
    status: string
    matchDate: Date | string
    league: string
    leagueId: number
    season: number
    venue?: string | null
    lastUpdated?: Date | string
    createdAt?: Date | string
    metadata?: InputJsonValue | null
  }

  export type FootballMatchUpdateManyMutationInput = {
    fixtureId?: IntFieldUpdateOperationsInput | number
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    homeTeamId?: IntFieldUpdateOperationsInput | number
    awayTeamId?: IntFieldUpdateOperationsInput | number
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    matchDate?: DateTimeFieldUpdateOperationsInput | Date | string
    league?: StringFieldUpdateOperationsInput | string
    leagueId?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: InputJsonValue | InputJsonValue | null
  }

  export type FootballMatchUncheckedUpdateManyInput = {
    fixtureId?: IntFieldUpdateOperationsInput | number
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    homeTeamId?: IntFieldUpdateOperationsInput | number
    awayTeamId?: IntFieldUpdateOperationsInput | number
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    matchDate?: DateTimeFieldUpdateOperationsInput | Date | string
    league?: StringFieldUpdateOperationsInput | string
    leagueId?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: InputJsonValue | InputJsonValue | null
  }

  export type BetCreateInput = {
    id?: string
    userId: string
    fixtureId: number
    prediction: string
    betType: string
    amount: number
    odds: number
    potentialWin: number
    status: string
    settledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BetUncheckedCreateInput = {
    id?: string
    userId: string
    fixtureId: number
    prediction: string
    betType: string
    amount: number
    odds: number
    potentialWin: number
    status: string
    settledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BetUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fixtureId?: IntFieldUpdateOperationsInput | number
    prediction?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    odds?: FloatFieldUpdateOperationsInput | number
    potentialWin?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fixtureId?: IntFieldUpdateOperationsInput | number
    prediction?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    odds?: FloatFieldUpdateOperationsInput | number
    potentialWin?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetCreateManyInput = {
    id?: string
    userId: string
    fixtureId: number
    prediction: string
    betType: string
    amount: number
    odds: number
    potentialWin: number
    status: string
    settledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BetUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fixtureId?: IntFieldUpdateOperationsInput | number
    prediction?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    odds?: FloatFieldUpdateOperationsInput | number
    potentialWin?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fixtureId?: IntFieldUpdateOperationsInput | number
    prediction?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    odds?: FloatFieldUpdateOperationsInput | number
    potentialWin?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type EnumLoginProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.LoginProvider | EnumLoginProviderFieldRefInput<$PrismaModel>
    in?: $Enums.LoginProvider[] | ListEnumLoginProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.LoginProvider[] | ListEnumLoginProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumLoginProviderFilter<$PrismaModel> | $Enums.LoginProvider
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    name?: SortOrder
    username?: SortOrder
    description?: SortOrder
    image?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    email?: SortOrder
    walletAddress?: SortOrder
    createdAt?: SortOrder
    timestamp?: SortOrder
    lastUpdated?: SortOrder
    metadata?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    name?: SortOrder
    username?: SortOrder
    description?: SortOrder
    image?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    email?: SortOrder
    walletAddress?: SortOrder
    createdAt?: SortOrder
    timestamp?: SortOrder
    lastUpdated?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    name?: SortOrder
    username?: SortOrder
    description?: SortOrder
    image?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    email?: SortOrder
    walletAddress?: SortOrder
    createdAt?: SortOrder
    timestamp?: SortOrder
    lastUpdated?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumLoginProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LoginProvider | EnumLoginProviderFieldRefInput<$PrismaModel>
    in?: $Enums.LoginProvider[] | ListEnumLoginProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.LoginProvider[] | ListEnumLoginProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumLoginProviderWithAggregatesFilter<$PrismaModel> | $Enums.LoginProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLoginProviderFilter<$PrismaModel>
    _max?: NestedEnumLoginProviderFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
    isSet?: boolean
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ContractUserCountOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    contractData?: SortOrder
    syncedToBackend?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractUserMaxOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    syncedToBackend?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractUserMinOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    syncedToBackend?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumGameStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusFilter<$PrismaModel> | $Enums.GameStatus
  }

  export type EnumGameOutcomeFilter<$PrismaModel = never> = {
    equals?: $Enums.GameOutcome | EnumGameOutcomeFieldRefInput<$PrismaModel>
    in?: $Enums.GameOutcome[] | ListEnumGameOutcomeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameOutcome[] | ListEnumGameOutcomeFieldRefInput<$PrismaModel>
    not?: NestedEnumGameOutcomeFilter<$PrismaModel> | $Enums.GameOutcome
  }

  export type GameResultCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    status?: SortOrder
    outcome?: SortOrder
    winner?: SortOrder
    loser?: SortOrder
    score?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameResultMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    status?: SortOrder
    outcome?: SortOrder
    winner?: SortOrder
    loser?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameResultMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    status?: SortOrder
    outcome?: SortOrder
    winner?: SortOrder
    loser?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumGameStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusWithAggregatesFilter<$PrismaModel> | $Enums.GameStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameStatusFilter<$PrismaModel>
    _max?: NestedEnumGameStatusFilter<$PrismaModel>
  }

  export type EnumGameOutcomeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameOutcome | EnumGameOutcomeFieldRefInput<$PrismaModel>
    in?: $Enums.GameOutcome[] | ListEnumGameOutcomeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameOutcome[] | ListEnumGameOutcomeFieldRefInput<$PrismaModel>
    not?: NestedEnumGameOutcomeWithAggregatesFilter<$PrismaModel> | $Enums.GameOutcome
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameOutcomeFilter<$PrismaModel>
    _max?: NestedEnumGameOutcomeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type FootballMatchCountOrderByAggregateInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    status?: SortOrder
    matchDate?: SortOrder
    league?: SortOrder
    leagueId?: SortOrder
    season?: SortOrder
    venue?: SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
    metadata?: SortOrder
  }

  export type FootballMatchAvgOrderByAggregateInput = {
    fixtureId?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    leagueId?: SortOrder
    season?: SortOrder
  }

  export type FootballMatchMaxOrderByAggregateInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    status?: SortOrder
    matchDate?: SortOrder
    league?: SortOrder
    leagueId?: SortOrder
    season?: SortOrder
    venue?: SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
  }

  export type FootballMatchMinOrderByAggregateInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    status?: SortOrder
    matchDate?: SortOrder
    league?: SortOrder
    leagueId?: SortOrder
    season?: SortOrder
    venue?: SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
  }

  export type FootballMatchSumOrderByAggregateInput = {
    fixtureId?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    leagueId?: SortOrder
    season?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type BetCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fixtureId?: SortOrder
    prediction?: SortOrder
    betType?: SortOrder
    amount?: SortOrder
    odds?: SortOrder
    potentialWin?: SortOrder
    status?: SortOrder
    settledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BetAvgOrderByAggregateInput = {
    fixtureId?: SortOrder
    amount?: SortOrder
    odds?: SortOrder
    potentialWin?: SortOrder
  }

  export type BetMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fixtureId?: SortOrder
    prediction?: SortOrder
    betType?: SortOrder
    amount?: SortOrder
    odds?: SortOrder
    potentialWin?: SortOrder
    status?: SortOrder
    settledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BetMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fixtureId?: SortOrder
    prediction?: SortOrder
    betType?: SortOrder
    amount?: SortOrder
    odds?: SortOrder
    potentialWin?: SortOrder
    status?: SortOrder
    settledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BetSumOrderByAggregateInput = {
    fixtureId?: SortOrder
    amount?: SortOrder
    odds?: SortOrder
    potentialWin?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type EnumLoginProviderFieldUpdateOperationsInput = {
    set?: $Enums.LoginProvider
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumGameStatusFieldUpdateOperationsInput = {
    set?: $Enums.GameStatus
  }

  export type EnumGameOutcomeFieldUpdateOperationsInput = {
    set?: $Enums.GameOutcome
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedEnumLoginProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.LoginProvider | EnumLoginProviderFieldRefInput<$PrismaModel>
    in?: $Enums.LoginProvider[] | ListEnumLoginProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.LoginProvider[] | ListEnumLoginProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumLoginProviderFilter<$PrismaModel> | $Enums.LoginProvider
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedEnumLoginProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LoginProvider | EnumLoginProviderFieldRefInput<$PrismaModel>
    in?: $Enums.LoginProvider[] | ListEnumLoginProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.LoginProvider[] | ListEnumLoginProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumLoginProviderWithAggregatesFilter<$PrismaModel> | $Enums.LoginProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLoginProviderFilter<$PrismaModel>
    _max?: NestedEnumLoginProviderFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumGameStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusFilter<$PrismaModel> | $Enums.GameStatus
  }

  export type NestedEnumGameOutcomeFilter<$PrismaModel = never> = {
    equals?: $Enums.GameOutcome | EnumGameOutcomeFieldRefInput<$PrismaModel>
    in?: $Enums.GameOutcome[] | ListEnumGameOutcomeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameOutcome[] | ListEnumGameOutcomeFieldRefInput<$PrismaModel>
    not?: NestedEnumGameOutcomeFilter<$PrismaModel> | $Enums.GameOutcome
  }

  export type NestedEnumGameStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusWithAggregatesFilter<$PrismaModel> | $Enums.GameStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameStatusFilter<$PrismaModel>
    _max?: NestedEnumGameStatusFilter<$PrismaModel>
  }

  export type NestedEnumGameOutcomeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameOutcome | EnumGameOutcomeFieldRefInput<$PrismaModel>
    in?: $Enums.GameOutcome[] | ListEnumGameOutcomeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameOutcome[] | ListEnumGameOutcomeFieldRefInput<$PrismaModel>
    not?: NestedEnumGameOutcomeWithAggregatesFilter<$PrismaModel> | $Enums.GameOutcome
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameOutcomeFilter<$PrismaModel>
    _max?: NestedEnumGameOutcomeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}