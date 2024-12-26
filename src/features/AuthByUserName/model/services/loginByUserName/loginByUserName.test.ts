import { loginByUserName } from './loginByUserName'
import axios from 'axios'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('loginByUserName.test', () => {
    test('success login', async () => {
        const userData = { username: 'username', id: '1' }
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }))

        const thunk = new TestAsyncThunk(loginByUserName)
        const result = await thunk.callThunk({ username: 'username', password: 'password' })

        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(result.payload).toBe(userData)
    })

    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))

        const thunk = new TestAsyncThunk(loginByUserName)
        const result = await thunk.callThunk({ username: 'username', password: 'password' })

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('error')
    })
})
