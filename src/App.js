import React from 'react';
import MiniDrawer from './MiniDrawer';
import SimpleMap from './SimpleMap';
import ControlledOpenSelect from './ControlledOpenSelect';
import DateAndTimePickers from './DateAndTimePickers'
import InputAdornments from './InputAdornments'
import LoginAuthorization from './LoginAuthorization'
import EventInfo from './EventInfo'


// import RadioButtonsGroup from './RadioButtonsGroup';
// import LoginButtons from './LoginButtons';

import { connect } from 'react-redux'


class App extends React.Component {
  render() {

    // const ages = [{key: 1, value: 10, text: 'Ten-twenty'},
    //               {key: 2, value: 20, text: 'Twenty-thirty'},
    //               {key: 3, value: 30, text: 'Ten-twenty'}];

    const sex = [{key: 1, value: 1, text: 'male'}, {key: 2, value: 2, text: 'female'}]

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
                {/*<ControlledOpenSelect title='Age' items={ages}/>*/}
                <ControlledOpenSelect title='Sex' items={sex}/>
                <DateAndTimePickers label='Start'/>
                <DateAndTimePickers label='End'/>
            </div>

        <SimpleMap/>
        </div>
          <LoginAuthorization />
      </MiniDrawer>
    );
  }
}

const mapStateToProps = state => ({store: state})
export default connect(mapStateToProps)(App)