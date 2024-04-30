import { type StateSchema } from 'app/providers/StoreProvider'
import { getCounterValue } from './getCounterValue'

describe('getCounterValue.test', () => {
    test('should return counter value', () => {
        const state: StateSchema = {
            counter: { value: 10 }
        }
        expect(getCounterValue(state)).toEqual(10)
    })
})
