import { type StateSchema } from 'app/providers/StoreProvider'
import { type DeepPartial } from 'shared/types'
import { getLoginIsLoading } from './getLoginIsLoading'

describe('getLoginIsLoading.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { isLoading: true }
        }

        expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
    })

    test('should work without state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
    })
})
