import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { useTranslate } from 'react-translate';

const Fallback = ({ message }) => {
    const t = useTranslate('Error');

    return (
        <>
            <Typography variant="body1">{t('an_error_occurred')}</Typography>
            <Typography variant="body1">{message}</Typography>
        </>
    );
};

Fallback.propTypes = {
    message: PropTypes.string.isRequired,
};
export default Fallback;
