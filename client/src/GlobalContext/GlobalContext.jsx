import React, { createConext, useReducer } from "react";

const initialState = {
    IsLoggIn: false,
};

const Reducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};




export const GlobalContext = createConext(initialState);

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    const IsLoggedIn = (data) => {
        dispatch({
            type: "ISLOGGED_IN",
            payload: data,
        });
    };

    <GlobalContext.Provider 
    value={{ IsLoggedIn, LoginStatus: state.IsLoggIn }} >
         
    </GlobalContext.Provider>
}