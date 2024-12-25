import { type EnhancedStore, type ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { counterReducer as counter } from 'entities/Counter'
import { userReducer as user } from 'entities/User'
import { createReducerManager } from './reducerManager'

export function createReduxStore(initialState?: StateSchema): EnhancedStore {
    const reducer: ReducersMapObject<StateSchema> = {
        counter,
        user
    }

    const reducerManeger = createReducerManager(reducer)

    const store = configureStore({
        reducer: reducerManeger.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
    // @ts-expect-error временно отключаю, потом добавлю тип
    store.reducerManager = reducerManeger

    return store
}
