import { type EnhancedStore, type ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { counterReducer as counter } from 'entities/Counter'
import { userReducer as user } from 'entities/User'

export function createReduxStore(initialState?: StateSchema): EnhancedStore {
    const reducer: ReducersMapObject<StateSchema> = {
        counter,
        user
    }

    return configureStore({
        reducer,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}
