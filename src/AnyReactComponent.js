import React from 'react';
import LocationOn from '@material-ui/icons/LocationOn';

class AnyReactComponent extends React.Component {
    handleClick = () => {
        console.log('The link was clicked.');
      }

    render() {

        const {text} = this.props
            return (
                <div>{text}<LocationOn onClick={this.handleClick}/></div>
            );
        }
}

export default AnyReactComponent