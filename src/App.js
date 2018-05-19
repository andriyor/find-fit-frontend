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

    const ages = [{key: 1, value: 10, text: 'Ten-twenty'}, 
                  {key: 2, value: 20, text: 'Twenty-thirty'}, 
                  {key: 3, value: 30, text: 'Ten-twenty'}];

    const sex = [{key: 1, value: 1, text: 'male'}, {key: 2, value: 2, text: 'female'}]

    return (
      <MiniDrawer>
        <div>
            <div style={{display: 'flex', color: 'red'}}>
                <ControlledOpenSelect title='Age' items={ages}/>
                <ControlledOpenSelect title='Sex' items={sex}/>
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