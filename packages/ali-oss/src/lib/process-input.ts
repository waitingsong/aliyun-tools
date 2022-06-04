import { processInput as cp } from './method/cp.js'
import { processInput as link } from './method/link.js'
import { processInput as mkdir } from './method/mkdir.js'
import { processInput as probUp } from './method/prob.js'
import { processInput as rm } from './method/rm.js'
import { processInput as rmrf } from './method/rmrf.js'
import { processInput as sign } from './method/sign.js'
import { processInput as stat } from './method/stat.js'
import {
  processInputLocal2Cloud as syncLocal2Cloud,
  processInputLocal as syncLocal,
} from './method/sync.js'
import { processInput as upload } from './method/upload.js'
import { FnKey, ProcessInputFn } from './types.js'


export const processInputFnMap = new Map<FnKey, ProcessInputFn>([
  [FnKey.cp, cp],
  [FnKey.link, link],
  [FnKey.mkdir, mkdir],
  [FnKey.probeUpload, probUp],
  [FnKey.rm, rm],
  [FnKey.rmrf, rmrf],
  [FnKey.sign, sign],
  [FnKey.stat, stat],
  [FnKey.syncLocal2Cloud, syncLocal2Cloud],
  [FnKey.syncLocal, syncLocal],
  [FnKey.upload, upload],
])

