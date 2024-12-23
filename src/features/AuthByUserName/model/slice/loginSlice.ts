import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type LoginSchema } from '../types/loginSchema'
import { loginByUserName } from '../services/loginByUserName/loginByUserName'

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
        setUserName: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUserName.pending, (state, action) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(loginByUserName.fulfilled, (state, action) => {
                state.isLoading = false
            })
            .addCase(loginByUserName.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice
