import React from 'react';
import MiniDrawer from './MiniDrawer';
import SimpleMap from './SimpleMap';
import ControlledOpenSelect from './ControlledOpenSelect';
import DateAndTimePickers from './DateAndTimePickers'


// import RadioButtonsGroup from './RadioButtonsGroup';
// import LoginButtons from './LoginButtons';

import { connect } from 'react-redux'


class App extends React.Component {
  render() {

    return (
      <MiniDrawer>
        <div>
            <div style={{display: 'flex', color: 'red'}}>
                <ControlledOpenSelect title='Age'/>
                <ControlledOpenSelect title='Sex'/>
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