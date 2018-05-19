import React from 'react';
import MiniDrawer from './MiniDrawer';
import LoginAuthorization from './LoginAuthorization';



import { connect } from 'react-redux'


class RegistrationInApp extends React.Component {
    render() {


        return (
            <MiniDrawer>
                <div style={{border: 'solid 2px grey', borderRadius: '5px', position: 'absolute', top: '20%', left: '40%', background: 'white', zIndex: '999999', maxWidth: '215px', padding: '20px 30px'}}> <LoginAuthorization /></div>
            </MiniDrawer>
        );
    }
}

const mapStateToProps = state => ({store: state})
export default connect(mapStateToProps)(RegistrationInApp)