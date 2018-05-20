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
import ControlledOpenSelect from './ControlledOpenSelect'

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

class RegistrationForm extends React.Component {
    state = {
        sex: '',
        sport: '',
        password: '',
        name: '',
        showPassword: false,
        sportsType: []
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };


    handleChangeSex = prop => {
        this.setState({ sex: prop});
    };
    handleChangeSport = prop => {
        this.setState({ sport: prop});
    };


    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    handleSubmit = () => {
        axios.post('/api/registration', {
            name: this.state.name,
            sport_typ: this.state.sport,
            number: this.state.number,
            link: this.state.link,
            sex: this.state.sex,
            age: this.state.age,
            goal: this.state.goal
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log(this.state.password, this.state.name)
    }



    getSportType = () => {axios.get('/api/sport_type').then(function (response) {
        this.setState({sportsType: response.request.response})
        console.log(response.request.response);
    })}
    render() {
        this.getSportType();
        const { classes } = this.props;
        const sex = [{key: 1, value: 1, text: 'male'}, {key: 2, value: 2, text: 'female'}]
        // const kindOfSport = [{key: 1, value: '1', text: 'football'}, {key: 2, value: 2, text: 'run'}]
        // const kindOfSport = this.getSportType();
        // const kindOfSport = [{"name":"walk"},{"name":"football"},{"name":"valeboll"},{"name":"run"},{"name":"swiming"}];
        const kindOfSport = this.state.sportsType;
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
                <TextField
                    label="Enter goal"
                    id="simple-start-adornment"
                    className={classNames(classes.margin, classes.textField)}
                    onChange={this.handleChange('goal')}
                    InputProps={{
                        startAdornment: <InputAdornment position="start" style={{width: '150px'}}>Your goal</InputAdornment>,
                    }}
                />
                <TextField
                    label="Enter age"
                    id="simple-start-adornment"
                    className={classNames(classes.margin, classes.textField)}
                    onChange={this.handleChange('age')}
                    InputProps={{
                        startAdornment: <InputAdornment position="start" style={{width: '150px'}}>Your age</InputAdornment>,
                    }}
                />
                <TextField
                    label="Enter height"
                    id="simple-start-adornment"
                    className={classNames(classes.margin, classes.textField)}
                    onChange={this.handleChange('height')}
                    InputProps={{
                        startAdornment: <InputAdornment position="start" style={{width: '150px'}}>Your height</InputAdornment>,
                    }}
                />
                <TextField
                    label="Enter weight"
                    id="simple-start-adornment"
                    className={classNames(classes.margin, classes.textField)}
                    onChange={this.handleChange('weight')}
                    InputProps={{
                        startAdornment: <InputAdornment position="start" style={{width: '150px'}}>Your weight</InputAdornment>,
                    }}
                />
                <ControlledOpenSelect title='Sex' items={sex} onSelectChange={this.handleChangeSex}/>
                <ControlledOpenSelect title='Kind Of Sport' items={this.state.sportsType} onSelectChange={this.handleChangeSport}/>
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
                        Submit
                    </Button>
                </FormControl>
            </div>
        );
    }
}

RegistrationForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegistrationForm);