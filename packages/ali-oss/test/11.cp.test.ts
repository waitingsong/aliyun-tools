import assert from 'assert/strict'
import { join, relative } from 'path'

import {
  pathPrefix,
  service,
  CI,
} from '@/root.config'
import { CpOptions } from '~/lib'


const filename = relative(process.cwd(), __filename).replace(/\\/ug, '/')

describe(filename, () => {

  describe('cp should work', () => {
    it('normal', async () => {
      const src = join(__dirname, 'tsconfig.json')
      const dir = `${pathPrefix}/test-1234/${Date.now().toString()}-tsconfig.json`
      const ret = await service.cp(src, dir)
      CI || console.log(ret)
      assert(ret.data)
      assert(typeof ret.data.elapsed === 'string')
      assert(typeof ret.data.averageSpeed === 'number')
    })

    it('param:force', async () => {
      const src = join(__dirname, 'tsconfig.json')
      const dir = `${pathPrefix}/test-1234/${Date.now().toString()}-tsconfig.json`
      await service.cp(src, dir)

      const opts: CpOptions = {
        force: true,
      }
      const ret = await service.cp(src, dir, opts)
      CI || console.log(ret)
      assert(ret.data)
      assert(typeof ret.data.elapsed === 'string')
      assert(typeof ret.data.averageSpeed === 'number')
    })
  })

})


