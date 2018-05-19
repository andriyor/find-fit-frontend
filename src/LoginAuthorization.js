import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';

import axios from 'axios';

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

const api = 'https://5dab894d.ngrok.io';

class LoginAuthorization extends React.Component {
    state = {
        password: '',
        name: '',
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

    handleSubmit = () => {
        axios.post('/api/login', {
            name: this.state.name,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log(this.state.password, this.state.name)
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <TextField
                    label="Enter name"
                    id="simple-start-adornment"
                    className={classNames(classes.margin, classes.textField)}
                    onChange={this.handleChange('name')}
                    InputProps={{
                        startAdornment: <InputAdornment position="start" style={{width: '150px'}}>John Smith</InputAdornment>,
                    }}
                />
                <FormControl className={classNames(classes.margin, classes.textField)}>
                    <InputLabel htmlFor="adornment-password">Password</InputLabel>
                    <Input
                        id="adornment-password"
                        type={this.state.showPassword ? 'text' : 'password'}
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Toggle password visibility"
                                    onClick={this.handleClickShowPassword}
                                    onMouseDown={this.handleMouseDownPassword}
                                >
                                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    <Button variant="raised" onClick={this.handleSubmit} className={classes.button}>
                        Default
                    </Button>
                </FormControl>
            </div>
        );
    }
}

LoginAuthorization.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginAuthorization);