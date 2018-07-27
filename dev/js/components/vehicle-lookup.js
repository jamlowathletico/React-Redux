import React from 'react';

class VehicleLookup extends React.Component {
  
    render() {
        return (
            <div>
                <h3>
                    Vehicle Lookup Child
                </h3>
                <div>
                    <input type="text" />
                    <input type="button" value="Find vehicle" onClick={this.props.findVehicle} />
                </div>
            </div>
        )
    }
}
export default VehicleLookup;