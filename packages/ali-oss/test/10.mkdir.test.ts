import assert from 'assert/strict'
import { relative } from 'path'

import {
  cloudUrlPrefix,
  service,
  CI,
} from '@/root.config'


const filename = relative(process.cwd(), __filename).replace(/\\/ug, '/')

describe(filename, () => {

  describe('mkdir should work', () => {
    it('normal', async () => {
      const dir = `${cloudUrlPrefix}/${Math.random().toString()}`
      const ret = await service.mkdir(dir)
      CI || console.log(ret)
      assert(ret.exitCode === 0)
      assert(ret.data)
      assert(typeof ret.data.elapsed === 'string')

      await service.rm(dir)
    })
  })

})


