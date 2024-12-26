import { type StateSchema } from 'app/providers/StoreProvider'
import { type DeepPartial } from 'shared/types'
import { getLoginError } from './getLoginError'

describe('getLoginError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { error: 'error' }
        }

        expect(getLoginError(state as StateSchema)).toEqual('error')
    })

    test('should work without state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getLoginError(state as StateSchema)).toEqual('')
    })
})
