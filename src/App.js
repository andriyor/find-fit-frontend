import React from 'react';
import MiniDrawer from './MiniDrawer';
import SimpleMap from './SimpleMap';


// import RadioButtonsGroup from './RadioButtonsGroup';
// import LoginButtons from './LoginButtons';

import { connect } from 'react-redux'


class App extends React.Component {
  render() {

    return (
      <MiniDrawer>
        <div>
        <SimpleMap/>
        </div>
      </MiniDrawer>
    );
  }
}

const mapStateToProps = state => ({store: state})
export default connect(mapStateToProps)(App)