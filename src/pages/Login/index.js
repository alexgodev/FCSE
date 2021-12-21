import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import useForm from '../../hooks/useForm';
import { LOGIN_USER } from '../../queries';
import { isApolloError, useMutation } from '@apollo/client';
import Alert from '@material-ui/lab/Alert';
import { LinearProgress } from '@material-ui/core';
import useAuthUser from '../../hooks/useAuthUser';
import { useTranslate } from 'react-translate';

const useStyles = makeStyles((theme) => ({
    GridContainer: {
        justifyContent: 'center',
    },
    Title: {
        margin: theme.spacing(2, 0),
        textTransform: 'capitalize',
    },
    Paper: {
        padding: theme.spacing(3, 2),
    },
    ButtonSubmit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login = () => {
    const classes = useStyles();
    const { setAuthUser } = useAuthUser();
    const t = useTranslate('Login');

    const [values, handleChange, handleSubmit] = useForm(() => loginUser(), {
        email: '',
        password: '',
    });

    const [loginUser, { called, loading, error }] = useMutation(LOGIN_USER, {
        variables: values,
        onCompleted(data) {
            if (data?.login?.jwt && data?.login?.user?.id) {
                setAuthUser(data.login.jwt, data.login.user.id);
            }
        },
    });

    const getLoginErrors = (error) => {
        const errors = [];
        if (error && isApolloError(error)) {
            for (const gqlError of error.graphQLErrors) {
                if (Array.isArray(gqlError?.extensions?.exception?.data?.message)) {
                    for (const fieldError of gqlError.extensions?.exception?.data?.message) {
                        errors.push(fieldError?.messages[0]?.message);
                    }
                }
            }
        }
        return errors.length > 0 ? errors : [error.message];
    };

    return (
        <Paper className={classes.Paper}>
            <Grid container className={classes.GridContainer}>
                <Grid item>
                    <Typography className={classes.Title} variant="h3" component="h1">
                        {t('login')}
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            name="email"
                            label="Email Address"
                            type="email"
                            value={values.email}
                            onChange={handleChange}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.ButtonSubmit}
                        >
                            {t('sign_in')}
                        </Button>
                    </form>
                    {called && loading && <LinearProgress />}
                    {error &&
                        getLoginErrors(error).map((loginError, i) => (
                            <Alert key={i} severity="error">
                                {loginError}
                            </Alert>
                        ))}
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Login;
