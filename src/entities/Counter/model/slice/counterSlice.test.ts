import { counterActions, counterReducer } from './counterSlice'
import { type CounterSchema } from '../types/counterSchema'

describe('conterSlice.test', () => {
    test('decremented', () => {
        const state: CounterSchema = { value: 10 }

        expect(counterReducer(state, counterActions.decremented())).toEqual({ value: 9 })
    })

    test('incremented', () => {
        const state: CounterSchema = { value: 10 }

        expect(counterReducer(state, counterActions.incremented())).toEqual({ value: 11 })
    })

    test('should work without state', () => {
        expect(counterReducer(undefined, counterActions.incremented())).toEqual({ value: 1 })
    })
})
