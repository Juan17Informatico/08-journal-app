import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import iconsImport from "./iconsImport";


import { AuthLayout } from "../layout/index";

import { useForm } from "../../hooks";
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth";

const formData = {
    email: "",
    password: "",
}
const {Google, Alert, Button, Grid, Link, TextField, Typography} = iconsImport;

export const LoginPage = () => {
    const dispatch = useDispatch();
    const { status, errorMessage } = useSelector((state) => state.auth);
    const { email, password, onInputChange } = useForm(formData);

    const isAuthenticating = useMemo(() => status === "checking", [status]);

    const onSubimit = (event) => {
        event.preventDefault();

        // ! No es esta la acción a despachar
        dispatch(startLoginWithEmailPassword({ email, password }));
    };

    const onGoogleSignIn = () => {
        console.log("On google sign in");
        dispatch(startGoogleSignIn());
    };

    return (
        <AuthLayout title="Login">
            {/* <h1>hola mundo: {import.meta.env.VITE_HOLA}</h1> */}
            <form 
                aria-label="submit-form"
                className="animate__animated animate__fadeIn animate__faster"
                onSubmit={onSubimit}
            >
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth
                            name="password"
                            inputProps={{
                                'data-testid': 'password'
                            }}
                            value={password}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid 
                      container
                      display={!!errorMessage ? '' : 'none'}
                      sx={{mt: 1}}
                    >
                        <Grid item xs={12} 
                          
                        >
                            <Alert severity="error">{errorMessage}</Alert>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 2, marginTop: 1 }}>
                        <Grid item xs={12} sm={6}>
                            <Button
                                disabled={isAuthenticating}
                                type="submit"
                                variant="contained"
                                fullWidth
                            >
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                disabled={isAuthenticating}
                                onClick={onGoogleSignIn}
                                variant="contained"
                                fullWidth
                                aria-label="google-btn"
                            >
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Link component={RouterLink} color="inherit" to="/auth/register">
                            Crear Una Cuenta
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
