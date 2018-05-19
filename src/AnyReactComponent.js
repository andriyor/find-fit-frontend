import React from 'react';
import LocationOn from '@material-ui/icons/LocationOn';

class AnyReactComponent extends React.Component {
    render() {

        const {text} = this.props
            return (
                <div>{text}<LocationOn /></div>
            );
        }
}

export default AnyReactComponent