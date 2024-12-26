import { type StateSchema } from 'app/providers/StoreProvider'

export const getLoginPassword = (state: StateSchema): string => ((state?.loginForm?.password) != null) ? state?.loginForm?.password : ''
