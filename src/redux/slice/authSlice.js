import { createSlice } from "@reduxjs/toolkit"
import { clearLocalStorage, saveToLocalStorage } from "../../config/localstorage.js"
import Service from "../../config/service"

const initialState = {
    isLoading: false,
    auth: null,
    isLoggedIn: false,
    isError: null,
}

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authStart: (state) => {
            state.isLoading = true
        },
        authSuccess: (state, action) => {
            state.isLoading = false
            state.auth = action.payload?.user
            state.isLoggedIn = true
            if (action.payload?.token) {
                saveToLocalStorage("token", action.payload.token)
            }
        },
        authFailure: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },
        authLogout: (state, action) => {
            state.isLoading = false
            state.isLoggedIn = false
            state.auth = null
            clearLocalStorage()
        },
    },
})

export const {
    authStart,
    authSuccess,
    authFailure,
    authLogout,
} = AuthSlice.actions
export default AuthSlice.reducer

export const getAuthFunction = () => async dispatch => {
    await dispatch(authStart())
    try {
        const { data } = await Service.getAuth()
        await dispatch(authSuccess({user: data.user}))
    } catch (error) {
        console.log(error)
    }
}