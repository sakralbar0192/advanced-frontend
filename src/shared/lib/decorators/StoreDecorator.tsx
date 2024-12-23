import { type Decorator } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type DeepPartial } from 'shared/types'

const state: DeepPartial<StateSchema> = { user: { authData: { id: '123', username: 'admin' } } }

export const StoreDecorator: Decorator = (Story) => <StoreProvider initialState={state as StateSchema}><Story /></StoreProvider>
