import React from 'react';
import MiniDrawer from './MiniDrawer';
import SimpleMap from './SimpleMap';
import ControlledOpenSelect from './ControlledOpenSelect';
import DateAndTimePickers from './DateAndTimePickers'
import InputAdornments from './InputAdornments'
import EventInfo from './EventInfo'


import { connect } from 'react-redux'
import axios from "axios/index";


class App extends React.Component {
    state ={
        sportsType: []
    }
    getSportType = () => {axios.get('/api/sport_type').then(function (response) {
        this.setState({sportsType: response.request.response});
        console.log(response.request.response);
    })}
  render() {
       this.getSportType()
    return (
      <MiniDrawer>
        <div>

            <div style={{position: 'absolute', marginTop: '100px', right: "30px", float: 'right', zIndex: '99999', background: "white"}}>
                <EventInfo/>
            </div>
            <div style={{position: 'absolute', marginTop: '100px', marginLeft: '30px', background: 'white', zIndex: '999999', maxWidth: '215px', padding: '20px 30px'}}>
                <div style={{fontSize: '20pt'}}>Create your event</div>
                <InputAdornments/>
                <DateAndTimePickers style={{marginLeft: '20px'}}/>
            </div>
            <div style={{display: 'flex'}}>
                <ControlledOpenSelect title='Kind of sport' items={this.state.sportsType}/>
                <DateAndTimePickers label='Start'/>
                <DateAndTimePickers label='End'/>
            </div>

        <SimpleMap/>
        </div>


      </MiniDrawer>
    );
  }
}

const mapStateToProps = state => ({store: state})
export default connect(mapStateToProps)(App)