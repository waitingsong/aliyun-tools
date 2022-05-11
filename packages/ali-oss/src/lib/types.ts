
export type ConfigPath = string

export interface Config {
  /**
   * @default CH
   */
  language?: 'CH' | 'EN'
  endpoint: string
  accessKeyId: string
  accessKeySecret: string
  stsToken?: string
}


export interface ProcessResp {
  /**
   * 0: success, others: error
   */
  readonly exitCode: number
  readonly exitSignal: string
  readonly stdout: string
  readonly stderr: string
}

export interface ProcessRet<T extends DataBase = DataBase> {
  readonly data: T | undefined
  readonly stdout: string
  readonly stderr: string
  /**
   * 0: success, others: error
   */
  readonly exitCode: number
  readonly exitSignal: string
}

export enum DataKey {
  elapsed = 'elapsed',
  averageSpeed = 'averageSpeed',

  acl = 'ACL',
  acceptRanges = 'Accept-Ranges',
  contentLength = 'Content-Length',
  contentMd5 = 'Content-Md5',
  contentType = 'Content-Type',
  etag = 'Etag',
  lastModified = 'Last-Modified',
  owner = 'Owner',
  xOssHashCrc64ecma = 'X-Oss-Hash-Crc64ecma',
  xOssObjectType = 'X-Oss-Object-Type',
  xOssStorageClass = 'X-Oss-Storage-Class',

  // total = 'total',
  // succeed = 'succeed',
  // removed = 'removed',
}

export interface DataBase {
  /**
   * @example 0.303190
   */
  [DataKey.elapsed]: string | undefined
}

export interface DataCp extends DataBase {
  /** byte/s */
  [DataKey.averageSpeed]: number | undefined
}

export interface DataStat extends DataBase {
  [DataKey.acl]: string | undefined
  [DataKey.acceptRanges]: string | undefined
  [DataKey.contentLength]: number | undefined
  [DataKey.contentMd5]: string | undefined
  [DataKey.contentType]: string | undefined
  [DataKey.etag]: string | undefined
  [DataKey.lastModified]: string | undefined
  [DataKey.owner]: string | undefined
  [DataKey.xOssHashCrc64ecma]: string | undefined
  [DataKey.xOssObjectType]: string | undefined
  [DataKey.xOssStorageClass]: string | undefined
}

export type PickFunc = (input: string, rule: RegExp, debug: boolean) => string | number | undefined

export interface BaseOptions {
  endpoint?: string
  accessKeyId?: string
  accessKeySecret?: string
  stsToken?: string
  [k: string]: string | number | boolean | undefined
}

/**
 * @link https://help.aliyun.com/document_detail/120057.html
 */
export interface CpOptions extends BaseOptions {
  /** 递归操作。
   * 当指定该选项时，ossutil 会对 Bucket下所有符合条件的 Object 进行操作，
   * 否则只对指定的单个 Object 进行操作
   */
  recursive?: boolean
  /** 强制操作，不进行询问提示 */
  force?: boolean
  /** 只有当目标文件不存在，或源文件的最后修改时间晚于目标文件时，才会执行上传操作 */
  update?: boolean
  /** 设置分片大小，单位为字节 */
  'part-size'?: number
  'encoding-type'?: string
  /**
   * 多文件操作时的并发任务数
   * @default 3
   */
  jobs?: number
  /** 单文件操作时的并发任务数，取值范围为 1~10000 */
  parallel?: number
}


/**
 * @link https://help.aliyun.com/document_detail/120053.html
 */
export interface RmOptions extends BaseOptions {
  /**
   * 删除 Bucket 下所有符合 prefix 条件的 Object
   * 如果不指定该选项，则ossutil只删除指定Object
   */
  recursive?: boolean
  /** 仅在删除 Bucket 时使用此选项 */
  bucket?: string
  /** 指定操作的对象为 Bucket 中未完成的 Multipart 事件 */
  multipart?: boolean
  /** 包含符合指定条件的所有 Object */
  include?: string
  /** 不包含任何符合指定条件的 Object */
  exclude?: string
  /** Object 的指定版本。仅适用于已开启或暂停版本控制状态 Bucket下的 Object */
  'version-id'?: string
  /**
   * Object 的所有版本。
   * 仅适用于已开启或暂停版本控制状态 Bucket 下的 Object，
   * 且同一个删除示例中仅允许选择--version-id或--all-versions其中一个选项
   */
  'all-versions'?: boolean
  /**
   * 对 `oss://bucket_name` 之后的 prefix 进行编码，取值为url
   * 如果不指定该选项，则表示 prefix 未经过编码
   */
  'encoding-type'?: string
}
