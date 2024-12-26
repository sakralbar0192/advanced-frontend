import { type StateSchema } from 'app/providers/StoreProvider'
import { type DeepPartial } from 'shared/types'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginPassword.test', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: 'username' }
        }

        expect(getLoginUsername(state as StateSchema)).toEqual('username')
    })

    test('should work without state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getLoginUsername(state as StateSchema)).toEqual('')
    })
})
