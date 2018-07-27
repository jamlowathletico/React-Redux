import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import VehicleLookup from '../components/vehicle-lookup';
import VehicleLookupContainer from '../containers/vehicle-lookup-container';
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>User List</h2>
        <UserList />
        <hr />
        <h2>User Details</h2>
        <UserDetails />
        <VehicleLookupContainer/>
    </div>
);

export default App;
