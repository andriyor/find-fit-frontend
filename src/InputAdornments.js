import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 3,
    },
    textField: {
        flexBasis: 200,
    },
});

const ranges = [
    {
        value: '0-20',
        label: '0 to 20',
    },
    {
        value: '21-50',
        label: '21 to 50',
    },
    {
        value: '51-100',
        label: '51 to 100',
    },
];

class InputAdornments extends React.Component {
    state = {
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <TextField
                    label="Enter name"
                    id="simple-start-adornment"
                    className={classNames(classes.margin, classes.textField)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start" style={{width: '150px'}}>John Smith</InputAdornment>,
                    }}
                />
                <TextField
                    label="Write your goal"
                    id="simple-start-adornment"
                    className={classNames(classes.margin, classes.textField)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start" style={{width: '150px'}}>
                            Lose weight</InputAdornment>,
                    }}
                />
                <TextField
                    select
                    label="Select kind of sport"
                    className={classNames(classes.margin, classes.textField)}
                    value={this.state.weightRange}
                    onChange={this.handleChange('weightRange')}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">football</InputAdornment>,
                    }}
                >
                    {ranges.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        );
    }
}

InputAdornments.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputAdornments);