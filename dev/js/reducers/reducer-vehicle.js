import { FETCH_VEHICLE} from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_VEHICLE:{
            console.log(action.payload.data);            
        }        
    }

    return state;
}