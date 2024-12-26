import { type DeepPartial } from 'shared/types'
import { type LoginSchema } from '../types/loginSchema'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice.test', () => {
    test('', async () => {
        const state: DeepPartial<LoginSchema> = { username: '' }
        expect(loginReducer(state as LoginSchema, loginActions.setUserName('username'))).toEqual({ username: 'username' })
    })

    test('', async () => {
        const state: DeepPartial<LoginSchema> = { password: '' }
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('password'))).toEqual({ password: 'password' })
    })
})
