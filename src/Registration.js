import React from 'react';
import MiniDrawer from './MiniDrawer';
import RegistrationForm from './RegistrationForm';



import { connect } from 'react-redux'


class Registration extends React.Component {
    render() {


        return (
            <MiniDrawer>

                <div style={{borderTop: 'solid 1px grey', borderBottom: 'solid 1px grey', position: 'absolute', top: '20%', left: '40%', background: 'white', zIndex: '999999', maxWidth: '215px', padding: '20px 30px'}}> <span style={{textAlign: 'center'}}>Hello, please enter data</span><RegistrationForm /></div>
            </MiniDrawer>
        );
    }
}

const mapStateToProps = state => ({store: state})
export default connect(mapStateToProps)(Registration)