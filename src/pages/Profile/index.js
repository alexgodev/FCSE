import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useQuery } from '@apollo/react-hooks';
import { GET_USER_INFO } from '../../queries';
import Button from '@material-ui/core/Button';
import useAuthUser from '../../hooks/useAuthUser';
import { LinearProgress } from '@material-ui/core';
import { useTranslate } from 'react-translate';
import Fallback from '../../components/Fallback';

const useStyles = makeStyles((theme) => ({
    title: {
        margin: theme.spacing(2, 0),
        textTransform: 'capitalize',
    },
    paper: {
        padding: theme.spacing(3, 5),
    },
    button: {
        margin: theme.spacing(5, 0, 0),
    },
}));

const Profile = () => {
    const classes = useStyles();
    const { userId, logout } = useAuthUser();
    const t = useTranslate('Profile');

    const {
        loading: queryLoading,
        error: queryError,
        data,
    } = useQuery(GET_USER_INFO, {
        variables: { id: userId },
    });

    if (queryLoading) return <LinearProgress />;

    return (
        <Paper className={classes.paper}>
            <Typography className={classes.title} variant="h3" component="h1">
                {t('profile')}
            </Typography>

            {!queryError ? (
                <>
                    <Typography component="p" className={classes.title}>
                        {t('first_name')}: {data?.user?.firstName}
                    </Typography>
                    <Typography component="p" className={classes.title}>
                        {t('last_name')}: {data?.user?.lastName}
                    </Typography>

                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={classes.button}
                        onClick={() => logout()}
                    >
                        {t('logout')}
                    </Button>
                </>
            ) : (
                <Fallback message={queryError.message} />
            )}
        </Paper>
    );
};

export default Profile;
