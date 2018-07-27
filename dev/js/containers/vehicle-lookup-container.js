import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../actions/index'
import VehicleLookup from '../components/vehicle-lookup';


class VehicleLookupContainer extends Component {
    findVehicle(){
        console.log("find vehicle parent");
    }
    render() {
        return (
            <div>
                <h2>Vehicle Lookup Container</h2>
                <VehicleLookup findVehicle={this.findVehicle} />
            </div>
        )
    }
}
export default VehicleLookupContainer;