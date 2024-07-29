import { render, screen } from "@testing-library/react";
import { LoginPage } from "../../../src/auth/pages";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../../../src/store/auth";
import { MemoryRouter } from "react-router-dom";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
});

describe('Pruebas en <LoginPage />', () => {

    test('debe de mostrar el componente correctamente', () => {

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        expect( screen.getAllByText('Login').length ).toBeGreaterThan(1);

    }); 

});