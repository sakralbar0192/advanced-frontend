import { type ReducersMapObject } from '@reduxjs/toolkit'
import { type Decorator } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice'
import { type DeepPartial } from 'shared/types'

const state: DeepPartial<StateSchema> = { user: { authData: { id: '123', username: 'admin' } } }

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer
}
export const StoreDecorator: Decorator = (Story) => <StoreProvider initialState={state as StateSchema} asyncReducers={defaultAsyncReducers}><Story /></StoreProvider>
